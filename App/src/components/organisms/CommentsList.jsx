import RemoveIcon from "../atoms/icons/RemoveIcon";

export default function CommentsList({ listaComentarios, removerComentario }) {
	const estaEmDesenvolvimento = (import.meta.env.VITE_ENVIRONMENT === "development");

	return (
		<section className="comments-list">
			<h2 className="comments-list__title">Comentários adicionados</h2>

			<ul className="comments-list__items">
				{listaComentarios.map((comentario) => (
					<li className="comments-list__item" key={comentario.id}>
						<p>{comentario.comment}</p>

						{estaEmDesenvolvimento && (
							<button
								aria-label={`Remover comentário: ${comentario.comment}`}
								className="comments-list__remove-button"
								onClick={() => removerComentario(comentario.id)}
							>
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