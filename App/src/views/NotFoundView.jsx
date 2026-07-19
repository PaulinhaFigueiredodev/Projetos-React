import { Link } from "react-router";

export default function NotFoundView() {
  return (
    <main className="not-found" id="main-content">
      <p className="not-found__code">404</p>
      <h1>Página não encontrada</h1>
      <p>O endereço informado não existe ou foi alterado.</p>
      <Link className="button not-found__link" to="/">Voltar para o início</Link>
    </main>
  );
}
