function CommentForm({ textoComentario, setTextoComentario, mensagemErro, adicionarComentario }) {

    return (
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
    )
}

export default CommentForm