import afonsoPacifer1 from "../assets/images/width-1000/afonso-pacifer-1.webp";
import afonsoPacifer2 from "../assets/images/width-1000/afonso-pacifer-2.webp";
import afonsoPacifer3 from "../assets/images/width-1000/afonso-pacifer-3.webp";

const presentations = [
  {
    id: 1,
    image: afonsoPacifer1,
    alt: "Palestrante em um palco ao lado de uma tela com o texto Developer Experience.",
    title: "Developer Experience",
    subtitle: "Experiência de desenvolvimento no Front-End",
    description:
      "Esta apresentação destaca a importância de criar ambientes, ferramentas e processos que tornem o desenvolvimento mais claro, produtivo e consistente para quem constrói interfaces."
  },
  {
    id: 2,
    image: afonsoPacifer2,
    alt: "Palestrante em evento de tecnologia falando ao microfone ao lado de uma projeção com o texto Pausa para água.",
    title: "Comunidade e ensino",
    subtitle: "Compartilhamento de conhecimento em tecnologia",
    description:
      "Este tema representa a relação entre aprendizado, comunicação e comunidade. A troca de experiências ajuda pessoas desenvolvedoras a evoluírem com mais segurança no Front-End."
  },
  {
    id: 3,
    image: afonsoPacifer3,
    alt: "Palestrante falando ao microfone em uma apresentação técnica, com uma tela exibindo código ao fundo.",
    title: "CSS, Open Source e interfaces",
    subtitle: "Construção de interfaces mais consistentes",
    description:
      "Esta apresentação conecta CSS, Design Systems e Open Source como partes importantes da criação de produtos digitais mais organizados, acessíveis e fáceis de manter."
  }
];

function ImagesView() {
  return (
    <main className="images-view">
      <section className="images-view__intro">
        <h1 className="images-view__title">
          Afonso Pacifer: Front-End, Comunidade e Developer Experience
        </h1>

        <p className="images-view__subtitle">
          Uma galeria sobre a trajetória de um especialista em Front-End,
          Design Systems, Open Source, ensino e comunidade.
        </p>

        <p className="images-view__text">
          Esta página reúne apresentações e temas ligados à trajetória pública
          de Afonso Pacifer no Front-End. O conteúdo destaca sua relação com
          Developer Experience, CSS, Open Source, ensino, comunidade e construção
          de interfaces mais consistentes.
        </p>
      </section>

      <section className="presentations">
        <h2 className="presentations__title">Apresentações e temas</h2>

        <ul className="presentations__list">
          {presentations.map((presentation) => (
            <li className="presentations__item" key={presentation.id}>
              <article className="presentation-card">
                <img
                  className="presentation-card__image"
                  src={presentation.image}
                  alt={presentation.alt}
                />

                <div className="presentation-card__content">
                  <h3 className="presentation-card__title">
                    {presentation.title}
                  </h3>

                  <p className="presentation-card__subtitle">
                    {presentation.subtitle}
                  </p>

                  <p className="presentation-card__text">
                    {presentation.description}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default ImagesView;