import { useState } from "react";
import TextAreaField from "../atoms/TextAreaField";
import RemoveIcon from "../atoms/icons/RemoveIcon";

export default function CommentItem({ comment, isRemoving, onEdit, onRemove }) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(comment.comment);
  const [error, setError] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  async function handleSave(event) {
    event.preventDefault();
    const cleanComment = draft.trim();

    if (!cleanComment) {
      setError("O comentário não pode ficar vazio.");
      return;
    }

    setIsSaving(true);
    const saved = await onEdit(comment.id, cleanComment);
    setIsSaving(false);

    if (saved) {
      setError("");
      setIsEditing(false);
    }
  }

  function cancelEdit() {
    setDraft(comment.comment);
    setError("");
    setIsEditing(false);
  }

  return (
    <li className="comments-list__item">
      {isEditing ? (
        <form className="comment-item__edit-form" onSubmit={handleSave}>
          <TextAreaField
            id={`comment-${comment.id}`}
            label="Editar comentário"
            value={draft}
            onChange={setDraft}
            errorMessage={error}
          />
          <div className="comment-item__actions">
            <button className="button button--secondary" type="button" onClick={cancelEdit} disabled={isSaving}>
              Cancelar
            </button>
            <button className="button" type="submit" disabled={isSaving}>
              {isSaving ? "Salvando..." : "Salvar"}
            </button>
          </div>
        </form>
      ) : (
        <>
          <p className="comment-item__text">{comment.comment}</p>
          <div className="comment-item__actions">
            <button className="button button--secondary" type="button" onClick={() => setIsEditing(true)} disabled={isRemoving}>
              Editar
            </button>
            <button className="button button--danger" type="button" onClick={() => onRemove(comment)} disabled={isRemoving}>
              <RemoveIcon />
              {isRemoving ? "Removendo..." : "Remover"}
            </button>
          </div>
        </>
      )}
    </li>
  );
}
