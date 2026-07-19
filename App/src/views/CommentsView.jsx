import { useEffect, useState } from "react";
import FeedbackMessage from "../components/atoms/FeedbackMessage";
import CommentForm from "../components/organisms/CommentForm";
import CommentsList from "../components/organisms/CommentsList";
import {
  createComment,
  deleteComment,
  getComments,
  updateComment,
} from "../services/commentsService";

export default function CommentsView() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [actionError, setActionError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [removingId, setRemovingId] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    getComments({ signal: controller.signal })
      .then(setComments)
      .catch((error) => {
        if (error.name !== "AbortError") {
          setLoadError("Não foi possível carregar os comentários.");
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  function clearFeedback() {
    setActionError("");
    setSuccessMessage("");
  }

  async function addComment(text) {
    clearFeedback();
    const newComment = {
      id: crypto.randomUUID(),
      comment: text,
      user: "user-local",
    };

    try {
      const createdComment = await createComment(newComment);
      setComments((currentComments) => [...currentComments, createdComment]);
      setSuccessMessage("Comentário adicionado com sucesso.");
      return true;
    } catch {
      setActionError("Não foi possível adicionar seu comentário. Tente novamente.");
      return false;
    }
  }

  async function editComment(id, text) {
    clearFeedback();

    try {
      const updatedComment = await updateComment(id, text);
      setComments((currentComments) =>
        currentComments.map((comment) =>
          comment.id === id ? updatedComment : comment,
        ),
      );
      setSuccessMessage("Comentário atualizado com sucesso.");
      return true;
    } catch {
      setActionError("Não foi possível atualizar o comentário. Tente novamente.");
      return false;
    }
  }

  async function removeComment(comment) {
    const confirmed = window.confirm(`Remover o comentário “${comment.comment}”?`);
    if (!confirmed) return;

    clearFeedback();
    setRemovingId(comment.id);

    try {
      await deleteComment(comment.id);
      setComments((currentComments) =>
        currentComments.filter((currentComment) => currentComment.id !== comment.id),
      );
      setSuccessMessage("Comentário removido com sucesso.");
    } catch {
      setActionError("Não foi possível remover o comentário. Tente novamente.");
    } finally {
      setRemovingId(null);
    }
  }

  async function retryLoad() {
    setIsLoading(true);
    setLoadError("");

    try {
      setComments(await getComments());
    } catch {
      setLoadError("Não foi possível carregar os comentários.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="comments-view" id="main-content">
      <h1 className="comments-view__title">Comentários</h1>
      <p className="comments-view__description">
        Compartilhe uma reflexão sobre Front-end, comunidade ou experiência de desenvolvimento.
      </p>

      {actionError && <FeedbackMessage type="error">{actionError}</FeedbackMessage>}
      {successMessage && <FeedbackMessage type="success">{successMessage}</FeedbackMessage>}

      <CommentForm adicionarComentario={addComment} />

      {isLoading ? (
        <p className="comments-view__loading" role="status">Carregando comentários...</p>
      ) : loadError ? (
        <div className="comments-view__load-error">
          <FeedbackMessage type="error">{loadError}</FeedbackMessage>
          <button className="button button--secondary" type="button" onClick={retryLoad}>
            Tentar novamente
          </button>
        </div>
      ) : (
        <CommentsList
          listaComentarios={comments}
          comentarioSendoRemovido={removingId}
          editarComentario={editComment}
          removerComentario={removeComment}
        />
      )}
    </main>
  );
}
