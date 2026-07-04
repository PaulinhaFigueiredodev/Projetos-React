import TextAreaField from "./TextAreaField"

function CommentForm({ textoComentario, setTextoComentario, mensagemErro, adicionarComentario }) {

    return (
        <section className="comment-form">
            <h2 className="comment-form__title">Adicione aqui seu comentário</h2>

            <label className="comment-form__label" htmlFor="comentario">Comentário:</label>

            <TextAreaField
                textoComentario={textoComentario}
                setTextoComentario={setTextoComentario}
                mensagemErro={mensagemErro}
            />

            {mensagemErro && (
                <p id="comment-error" className="comment-form__error">
                    {mensagemErro}
                </p>
            )}

            <button
                className="comment-form__button"
                onClick={adicionarComentario}>
                Adicionar comentário
            </button>
        </section>
    )
}

export default CommentForm