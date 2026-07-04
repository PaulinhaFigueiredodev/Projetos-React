import { useState } from "react";
import CommentForm from "../components/CommentForm"
import CommentsList from "../components/CommentsList"

function CommentsPage() {

    const [textoComentario, setTextoComentario] = useState("");
    const [listaComentarios, setListaComentarios] = useState([]);
    const [mensagemErro, setMensagemErro] = useState("");

    function adicionarComentario() {

        const textoLimpo = textoComentario.trim();

        if (textoLimpo === "") {
            setMensagemErro("Por favor, digite um comentário.");
            return;
        }
        const novaListaComentarios = [
            ...listaComentarios,
            textoLimpo
        ];

        setListaComentarios(novaListaComentarios);
        setTextoComentario("");
        setMensagemErro("");
    }

    function removerComentario(indiceParaRemover) {
        const novaListaComentarios = listaComentarios.filter((_, indiceAtual) => {
            return indiceAtual !== indiceParaRemover;
        });

        setListaComentarios(novaListaComentarios);
    }

    return (
        <main className="comments-page">
            <h1 className="comments-page__title">Comentários</h1>
            <CommentForm
                textoComentario={textoComentario}
                setTextoComentario={setTextoComentario}
                mensagemErro={mensagemErro}
                adicionarComentario={adicionarComentario}
            />
            <CommentsList
                listaComentarios={listaComentarios}
                removerComentario={removerComentario}
            />
        </main>
    )
}

export default CommentsPage;