import RemoveIcon from "../atoms/icons/RemoveIcon";

function CommentsList({ listaComentarios, removerComentario }) {
	const estaEmDesenvolvimento = (import.meta.env.VITE_ENVIRONMENT === "development");

	return (
		<section className="comments-list">
			<h2 className="comments-list__title">Comentários adicionados</h2>

			<ul className="comments-list__items">
				{listaComentarios.map((comentario, index) => (
					<li className="comments-list__item" key={index}>
						<p>{comentario}</p>

						{estaEmDesenvolvimento && (
							<button
								aria-label={`Remover comentário: ${comentario}`}
								className="comments-list__remove-button"
								onClick={() => removerComentario(index)}>
								<RemoveIcon />
								Remover comentário
							</button>
						)}
					</li>
				))}
			</ul>
		</section>
	);
}

export default CommentsList;