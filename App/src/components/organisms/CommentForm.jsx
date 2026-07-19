import { useState } from "react";
import TextAreaField from "../atoms/TextAreaField";
import AddIcon from "../atoms/icons/AddIcon";

function CommentForm({ adicionarComentario }) {
	const [textoComentario, setTextoComentario] = useState("");
	const [mensagemErro, setMensagemErro] = useState("");
	const [enviando, setEnviando] = useState(false);

	async function enviarFormulario(event) {
		event.preventDefault();

		const textoLimpo = textoComentario.trim();

		if (textoLimpo === "") {
			setMensagemErro("Por favor, digite um comentário.");
			return;
		}

		setEnviando(true);
		const sucesso = await adicionarComentario(textoLimpo);
		setEnviando(false);

		if (sucesso) {
			setTextoComentario("");
			setMensagemErro("");
		}
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

			<button className="comment-form__button" type="submit" disabled={enviando}>
				<AddIcon />
				{enviando ? "Adicionando..." : "Adicionar comentário"}
			</button>
		</form>
	)
}

export default CommentForm;
