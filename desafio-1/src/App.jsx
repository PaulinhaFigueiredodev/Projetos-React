import { useState } from "react"

function App() {

  const [textoComentario, setTextoComentario] = useState("");
  const [listaComentarios, setListaComentarios] = useState([]);
  const [mensagemErro, setMensagemErro] = useState("");

  function adicionarComentario(){

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
    <main>
      <h1>Comentários</h1>

      <section>
        <h2>Adicionar comentário</h2>

        <label htmlFor="comentario">Comentário</label>

        <textarea 
          id="comentario" 
          value={textoComentario} 
          onChange={(e) => setTextoComentario(e.target.value)} 
          aria-describedby={Boolean(mensagemErro) ? "comentario-erro" : undefined} 
          aria-invalid={Boolean(mensagemErro)}></textarea>

        {mensagemErro && <p id="comentario-erro">{mensagemErro}</p>}

        <button onClick={adicionarComentario}>Adicionar comentário</button> 
      </section>

      <section>
        <h2>Comentários adicionados</h2>
      </section>
    </main>
  )   
}

export default App