# Front-end, comunidade e comentários

Aplicação React criada como projeto de portfólio. Reúne uma galeria responsiva sobre Front-end e uma área de comentários com CRUD completo consumindo uma API local.

## Funcionalidades

- Navegação com React Router e página 404.
- Galeria semântica com imagens responsivas.
- Consulta, criação, edição e exclusão de comentários.
- Confirmação antes da exclusão.
- Estados de carregamento, vazio, sucesso e erro.
- Nova tentativa quando o carregamento falha.
- Interface responsiva e feedback acessível.
- Testes do formulário e da lista.

## Tecnologias

React 19, React Router, Vite, JavaScript, CSS com BEM e custom properties, JSON Server, Vitest e React Testing Library.

## Arquitetura

```text
src/
├── assets/                  # Imagens em diferentes resoluções
├── components/
│   ├── atoms/               # Campo, feedback e ícones
│   ├── molecules/           # Item editável de comentário
│   └── organisms/           # Header, formulário e lista
├── services/                # Comunicação com a API
├── test/                    # Configuração dos testes
├── views/                   # Páginas da aplicação
├── App.jsx                  # Rotas
├── App.css                  # Componentes e responsividade
└── index.css                # Tokens e estilos globais
```

A view coordena os estados da página e `commentsService.js` concentra os detalhes HTTP. Os componentes recebem dados e callbacks por propriedades, mantendo o fluxo de dados explícito.

## Como executar

Requisitos: Node.js 20 ou superior e npm.

```bash
npm install
cp .env.example .env
```

Inicie a API e a interface juntas:

```bash
npm run dev
```

A interface estará em `http://localhost:8080` e a API em `http://localhost:3000`.

Se precisar executar somente a API ou somente a interface, use `npm run dev:api` ou `npm run dev:web`.

## Qualidade

```bash
npm run lint
npm test
npm run build
```

Para executar testes em modo interativo, use `npm run test:watch`.

## Acessibilidade e performance

- Estrutura semântica e títulos hierárquicos.
- Link para pular ao conteúdo.
- Labels associados aos campos.
- Erros ligados ao campo com `aria-describedby` e `aria-invalid`.
- Feedbacks anunciados por regiões vivas.
- Foco visível e áreas de toque adequadas.
- Imagens com `srcSet`, `sizes`, dimensões e lazy loading.
- Teste manual inicial com VoiceOver.

## Decisões

- JSON Server mantém o projeto executável sem back-end externo.
- O formulário só é limpo após confirmação da API.
- Cada operação possui feedback e estado de processamento.
- Tokens CSS concentram cores, espaçamentos, tipografia, raios e sombras.
- Atomic Design é aplicado de forma pragmática, extraindo componentes com responsabilidade clara.

## Licença

O código-fonte e a documentação estão licenciados sob a [Apache License 2.0](../LICENSE). Copyright 2026 Paula Figueiredo. Consulte também o arquivo [NOTICE](../NOTICE).

As fotografias utilizadas na galeria possuem autorização de uso, mas não estão cobertas pela licença do código. Consulte o [aviso de direitos das imagens](./src/assets/images/README.md).
