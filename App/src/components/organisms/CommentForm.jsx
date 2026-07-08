import { useState } from "react";
import TextAreaField from "../atoms/TextAreaField";
import AddIcon from "../atoms/icons/AddIcon";

function CommentForm({ adicionarComentario }) {

	const [textoComentario, setTextoComentario] = useState("");
	const [mensagemErro, setMensagemErro] = useState("");

	function enviarFormulario(event) {
		event.preventDefault();

		const textoLimpo = textoComentario.trim();

		if (textoLimpo === "") {
			setMensagemErro("Por favor, digite um comentário.");
			return;
		}

		adicionarComentario(textoLimpo);
		setTextoComentario("");
		setMensagemErro("");
	}

	return (
		<form className="comment-form" onSubmit={enviarFormulario}>
			<h2 className="comment-form__title">Adicione aqui seu comentário</h2>

			<TextAreaField
				id="comentario"
				label="Comentário"
				value={textoComentario}
				onChange={setTextoComentario}
				placeholder="Digite seu comentário..."
				errorMessage={mensagemErro}
			/>

			<button className="comment-form__button" type="submit">
				<AddIcon />
				Adicionar comentário
			</button>
		</form>
	)
}

export default CommentForm;