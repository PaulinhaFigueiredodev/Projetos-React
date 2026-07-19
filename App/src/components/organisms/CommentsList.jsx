import CommentItem from "../molecules/CommentItem";

export default function CommentsList({ listaComentarios, comentarioSendoRemovido, editarComentario, removerComentario }) {
	return (
		<section className="comments-list" aria-labelledby="comments-list-title">
			<h2 className="comments-list__title" id="comments-list-title">Comentários adicionados</h2>

			{listaComentarios.length === 0 ? (
				<p className="comments-list__empty">Nenhum comentário foi adicionado ainda.</p>
			) : (
				<ul className="comments-list__items">
					{listaComentarios.map((comentario) => (
						<CommentItem
							key={comentario.id}
							comment={comentario}
							isRemoving={comentarioSendoRemovido === comentario.id}
							onEdit={editarComentario}
							onRemove={removerComentario}
						/>
					))}
				</ul>
			)}
		</section>
	);
}
