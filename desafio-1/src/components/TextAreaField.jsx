function TextAreaField({ textoComentario, setTextoComentario, mensagemErro }) {

    return (
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
    )
}

export default TextAreaField;