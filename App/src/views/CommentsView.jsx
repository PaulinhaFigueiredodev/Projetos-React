import { useState } from "react";
import CommentForm from "../components/organisms/CommentForm";
import CommentsList from "../components/organisms/CommentsList";

function CommentsView() {

	const [listaComentarios, setListaComentarios] = useState([]);

	function adicionarComentario(comentarioValido) {
		const novaListaComentarios = [
			...listaComentarios,
			comentarioValido
		];

		setListaComentarios(novaListaComentarios);
	}

	function removerComentario(indiceParaRemover) {
		const novaListaComentarios = listaComentarios.filter((_, indiceAtual) => {
			return indiceAtual !== indiceParaRemover;
		});

		setListaComentarios(novaListaComentarios);
	}

	return (
		<main className="comments-view">
			<h1 className="comments-view__title">Comentários</h1>

			<CommentForm adicionarComentario={adicionarComentario} />

			<CommentsList
				listaComentarios={listaComentarios}
				removerComentario={removerComentario}
			/>
		</main>
	)
}

export default CommentsView;