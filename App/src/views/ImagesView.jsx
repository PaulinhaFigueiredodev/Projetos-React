import afonsoPacifer1 from "../assets/images/width-1000/afonso-pacifer-1.webp";
import afonsoPacifer2 from "../assets/images/width-1000/afonso-pacifer-2.webp";
import afonsoPacifer3 from "../assets/images/width-1000/afonso-pacifer-3.webp";

const imagens = [
	{
		id: 1,
		src: afonsoPacifer1,
		alt: "Palestrante em um palco ao lado de uma tela com o texto Developer Experience."
	},
	{
		id: 2,
		src: afonsoPacifer2,
		alt: "Palestrante em evento de tecnologia falando ao microfone ao lado de uma projeção com o texto Pausa para água."
	},
	{
		id: 3,
		src: afonsoPacifer3,
		alt: "Palestrante falando ao microfone em uma apresentação técnica, com uma tela exibindo código ao fundo."
	}
]

function ImagesView() {

	return (
		<main className="images-view">
			<h1 className="images-view__title">Galeria de imagens</h1>
			<section className="images-view__section">
				<h2 className="images-view__subtitle">Lista de imagens</h2>
				<ul className="images-view__list">
					{imagens.map((imagem) => (
						<li className="images-view__item" key={imagem.id}>
							<img
								src={imagem.src}
								alt={imagem.alt}
								className="images-view__image"
							/>
						</li>
					))}
				</ul>
			</section>
		</main>
	)
}

export default ImagesView;