import { useState } from "react"
import "./App.css"

function App() {

  const [textoComentario, setTextoComentario] = useState("");
  const [listaComentarios, setListaComentarios] = useState([]);
  const [mensagemErro, setMensagemErro] = useState("");

  function adicionarComentario() {

    const textoLimpo = textoComentario.trim();

    if (textoLimpo === "") {
      setMensagemErro("Por favor, digite um comentário.");
      return;
    }
    const novaListaComentarios = [
      ...listaComentarios,
      textoLimpo
    ];

    setListaComentarios(novaListaComentarios);
    setTextoComentario("");
    setMensagemErro("");
  }

  return (
    <main className="comments-page">
      <h1 className="comments-page__title">Comentários</h1>

      <section className="comment-form">
        <h2 className="comment-form__title">Adicione aqui seu comentário</h2>

        <label className="comment-form__label" htmlFor="comentario">Comentário:</label>

        <textarea
          id="comentario"
          placeholder="Digite seu comentário..."
          className={
            mensagemErro
              ? "comment-form__textarea comment-form__textarea--error"
              : "comment-form__textarea"
          }
          value={textoComentario}
          onChange={(e) => setTextoComentario(e.target.value)}
          aria-describedby={Boolean(mensagemErro) ? "comment-error" : undefined}
          aria-invalid={Boolean(mensagemErro)}
        ></textarea>

        {mensagemErro && (
          <p id="comment-error" className="comment-form__error">
            {mensagemErro}
          </p>
        )}

        <button
          type="button"
          className="comment-form__button"
          onClick={adicionarComentario}>
          Adicionar comentário
        </button>
      </section>

      <section className="comments-list">
        <h2 className="comments-list__title">Comentários adicionados</h2>
        <ul className="comments-list__items">
          {listaComentarios.map((comentario, index) =>
            <li className="comments-list__item" key={index}>{comentario}</li>
          )}
        </ul>
      </section>
    </main>
  )
}

export default App