function CommentsList({listaComentarios}) {
    return (
        <section className="comments-list">
            <h2 className="comments-list__title">Comentários adicionados</h2>
            <ul className="comments-list__items">
                {listaComentarios.map((comentario, index) =>
                    <li className="comments-list__item" key={index}>{comentario}</li>
                )}
            </ul>
        </section>
    )
}

export default CommentsList