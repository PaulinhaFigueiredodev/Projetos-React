# Projetos React

Portfólio de estudos práticos em desenvolvimento Front-end com React. O repositório apresenta aplicações construídas de forma incremental, com atenção a componentização, integração com APIs, acessibilidade, responsividade e qualidade de código.

## Projeto disponível

### Front-end, comunidade e comentários

Aplicação React com uma galeria responsiva sobre um Profissional de Front-end e uma área de comentários integrada a uma API local.

[Ver documentação completa da aplicação](./App/README.md)

#### Funcionalidades

- Navegação entre páginas com React Router.
- Galeria com imagens responsivas e carregamento otimizado.
- Consulta, criação, edição e exclusão de comentários.
- Validação de formulário.
- Confirmação antes da exclusão.
- Estados de carregamento, vazio, sucesso e erro.
- Nova tentativa quando a API falha.
- Página personalizada para rotas não encontradas.
- Layout adaptado para desktop e dispositivos móveis.
- Feedback acessível para tecnologias assistivas.

#### Conhecimentos demonstrados

- Componentes funcionais, propriedades, estado e efeitos em React.
- Formulários controlados e operações assíncronas.
- Integração HTTP com `GET`, `POST`, `PATCH` e `DELETE`.
- Separação entre interface, estado da página e camada de serviços.
- Atomic Design aplicado de forma pragmática.
- CSS com BEM, custom properties e media queries.
- HTML semântico e fundamentos de acessibilidade.
- Testes de comportamento com React Testing Library.
- Fluxo de trabalho com Git e validação automatizada.

## Tecnologias

- React 19
- React Router
- Vite
- JavaScript
- HTML e CSS
- JSON Server
- Vitest
- React Testing Library
- ESLint

## Estrutura do repositório

```text
Projetos-React/
├── App/                    # Aplicação React e sua documentação
├── CONTRIBUTING.md         # Convenções de contribuição e Git
├── LICENSE                 # Licença do repositório
├── NOTICE                  # Titularidade e atribuições
└── README.md               # Apresentação principal
```

Dentro da aplicação:

```text
App/src/
├── assets/                 # Imagens em diferentes resoluções
├── components/
│   ├── atoms/              # Elementos básicos da interface
│   ├── molecules/          # Composições pequenas
│   └── organisms/          # Blocos completos da interface
├── services/               # Comunicação com a API
├── test/                   # Configuração dos testes
├── views/                  # Páginas da aplicação
├── App.jsx                 # Definição das rotas
├── App.css                 # Componentes e responsividade
└── index.css               # Tokens e estilos globais
```

## Como executar

Requisitos: Node.js 20 ou superior e npm.

```bash
git clone <URL_DO_REPOSITORIO>
cd Projetos-React/App
npm install
cp .env.example .env
npm run dev
```

O comando `npm run dev` inicia os dois serviços:

- Front-end: `http://localhost:8080`
- API local: `http://localhost:3000`

Para iniciar os processos separadamente:

```bash
npm run dev:web
npm run dev:api
```

## Verificações de qualidade

Execute os comandos dentro de `App/`:

```bash
npm run lint
npm test
npm run build
```

| Comando | Finalidade |
| --- | --- |
| `npm run lint` | Verifica problemas de qualidade e uso dos hooks. |
| `npm test` | Executa os testes automatizados uma vez. |
| `npm run test:watch` | Mantém os testes em execução durante o desenvolvimento. |
| `npm run build` | Gera e valida a versão de produção. |
| `npm run preview` | Exibe localmente o build de produção. |

## Acessibilidade e performance

O projeto inclui:

- HTML semântico e hierarquia de títulos.
- Navegação por teclado e foco visível.
- Link para pular diretamente ao conteúdo.
- Labels e mensagens de erro associadas aos campos.
- Regiões vivas para feedback de ações assíncronas.
- Textos alternativos descritivos.
- Imagens com `srcSet`, `sizes`, dimensões e lazy loading.
- Tokens CSS para manter consistência visual.

## Documentação e contribuição

- [Documentação da aplicação](./App/README.md)
- [Guia de contribuição](./CONTRIBUTING.md)
- [Licença](./LICENSE)

## Licença

O código-fonte e a documentação deste projeto estão licenciados sob a [Apache License 2.0](./LICENSE).

Copyright 2026 Paula Figueiredo. Consulte também o arquivo [NOTICE](./NOTICE).

As fotografias presentes em `App/src/assets/images/` são usadas com autorização e não estão cobertas pela Apache License 2.0. A presença desses arquivos no repositório não concede direito automático de reutilização por terceiros. Consulte o [aviso específico das imagens](./App/src/assets/images/README.md).
