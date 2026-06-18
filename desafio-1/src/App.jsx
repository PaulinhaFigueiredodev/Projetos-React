import { useState } from "react"
/* O useState cria uma memoria dentro do componente
  Essa memória serve para guardar um valor que pode mudar com o tempo.
*/

function App() {

  const [textoComentario, setTextoComentario] = useState("");
  const [listaComentarios, setListaComentarios] = useState([]);

  /**
      Quando adicionarComentario for chamada:
        crie uma nova lista com tudo que já existia em listaComentarios
        adicione textoComentario no final
        salve essa nova lista em listaComentarios
        limpe textoComentario
   */
  function adicionarComentario(){
    const novaListaComentarios = [
      ...listaComentarios, 
      textoComentario 
    ];
    setListaComentarios(novaListaComentarios);
    setTextoComentario("");
  }

  return (
    <main>
      <h1>Comentários</h1>

      <section>
        <h2>Adicionar comentário</h2>

        <label htmlFor="comentario">Comentário</label>

        <textarea id="comentario" 
          value={textoComentario}
          onChange={(e) => setTextoComentario(e.target.value)}></textarea>

        <button onClick={adicionarComentario}>Adicionar comentário</button> 
      </section>

      <section>
        <h2>Comentários adicionados</h2>
      </section>
    </main>
  )       
}

export default App