import { useState } from "react"

function App() {

  const [textoComentario, setTextoComentario] = useState("")

  return (
    <main>
      <h1>Comentários</h1>

      <section>
        <h2>Adicionar comentário</h2>

        <label htmlFor="comentario">Comentário</label>

        <textarea id="comentario" 
          value = {textoComentario}
          onChange = {(e) => setTextoComentario(e.target.value)}></textarea>
      </section>

      <section>

        <h2>Comentários adicionados</h2>

      </section>
    </main>
  )       
}

export default App