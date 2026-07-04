# Desafio — Tela de Comentários

Projeto desenvolvido com React e Vite para praticar componentes, estado, eventos, validação simples, renderização de lista, CSS e acessibilidade.

## Funcionalidades

- Campo para digitar um comentário.
- Botão para adicionar comentário.
- Validação para impedir comentário vazio.
- Exibição dos comentários adicionados em lista.
- Mensagem de erro clara.
- Estilização com CSS e padrão BEM.

## Tecnologias usadas

- React
- Vite
- JavaScript
- HTML
- CSS

## Estrutura de pastas

```text
desafio-1/
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Estrutura do projeto

- `main.jsx`: entrada da aplicação React.
- `App.jsx`: componente principal da tela de comentários.
- `App.css`: estilos da tela usando padrão BEM.
- `index.css`: estilos globais da aplicação.
- `index.html`: arquivo HTML principal usado pelo Vite.

## Como rodar o projeto

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Depois, abra no navegador o endereço mostrado no terminal.

## Acessibilidade

O projeto inclui algumas boas práticas de acessibilidade:

- Uso de `label` associado ao `textarea`.
- Botão com texto claro.
- Mensagem de erro compreensível.
- Uso de `aria-invalid` no campo quando existe erro.
- Uso de `aria-describedby` para ligar o erro ao campo.
- Estrutura semântica com `main`, `section`, `h1` e `h2`.
- Foco visível no campo de texto e no botão.
- Documento com idioma definido como `pt-BR`.

O projeto também foi testado com VoiceOver.
