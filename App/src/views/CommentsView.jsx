import { useState, useEffect } from "react";
import CommentForm from "../components/organisms/CommentForm";
import CommentsList from "../components/organisms/CommentsList";

export default function CommentsView() {
	const [listaComentarios, setListaComentarios] = useState([]);
	const [carregandoComentarios, setCarregandoComentarios] = useState(false);
	const [erroComentarios, setErroComentarios] = useState(null);

	async function carregarComentarios() {
		setCarregandoComentarios(true);
		setErroComentarios(null);

		try {
			const resposta = await fetch("http://localhost:3000/comments");

			const dados = await resposta.json();

			setListaComentarios(dados);
		} catch (erro) {
			setErroComentarios("Não foi possível carregar os comentários.");
		} finally {
			setCarregandoComentarios(false);
		}
	}

	useEffect(() => {
		carregarComentarios();
	}, []);

	async function adicionarComentario(textoComentario) {
		setErroComentarios(null);

		const url = "http://localhost:3000/comments";

		const novoComentario = {
			id: crypto.randomUUID(),
			comment: textoComentario,
			user: "user-local"
		};

		try {
			const response = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(novoComentario)
			});

			if (!response.ok) {
				throw new Error("Não foi possível adicionar seu comentário.");
			}

			const comentarioCriado = await response.json();

			setListaComentarios((listaAtual) => [
				...listaAtual,
				comentarioCriado
			]);
		} catch (error) {
			setErroComentarios("Não foi possível adicionar seu comentário.");
		}
	}

	async function removerComentario(idParaRemover) {
		setErroComentarios(null);

		const url = `http://localhost:3000/comments/${idParaRemover}`;

		try {
			const response = await fetch(url, {
				method: "DELETE"
			});

			if (!response.ok) {
				throw new Error("Não foi possível remover o comentário.");
			}

			setListaComentarios((listaAtual) =>
				listaAtual.filter((comentarioAtual) => {
					return comentarioAtual.id !== idParaRemover;
				})
			);
		} catch (error) {
			setErroComentarios("Não foi possível remover o comentário.");
		}
	}

	return (
		<main className="comments-view">
			<h1 className="comments-view__title">Comentários</h1>

			{carregandoComentarios && <p>Carregando comentários...</p>}

			{erroComentarios && <p>{erroComentarios}</p>}

			<CommentForm adicionarComentario={adicionarComentario} />

			<CommentsList
				listaComentarios={listaComentarios}
				removerComentario={removerComentario}
			/>
		</main>
	);
}