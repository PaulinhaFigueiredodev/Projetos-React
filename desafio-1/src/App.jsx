import { useState } from "react"
import "./App.css"
import CommentForm from "./components/CommentForm"
import CommentsList from "./components/CommentsList"

function App() {

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
      />
    </main>
  )
}

export default App