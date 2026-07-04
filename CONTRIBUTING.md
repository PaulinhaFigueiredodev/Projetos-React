# Guia de contribuição

Este documento define padrões simples para organizar o desenvolvimento React deste repositório.

## Objetivo

Manter o projeto organizado usando issues, branches, commits e pull requests de forma clara.

## Padrão de branches

Use branches com prefixo indicando o tipo da mudança.

### `feature/`

Use para nova funcionalidade.

Exemplos:

- `feature/images-page`
- `feature/comments-page`
- `feature/header-navigation`

### `fix/`

Use para correção de bug.

Exemplos:

- `fix/remove-button-env`
- `fix/accessibility-label`
- `fix/header-active-link`

### `chore/`

Use para tarefas de organização, configuração, documentação ou manutenção.

Exemplos:

- `chore/add-contributing`
- `chore/update-readme`
- `chore/project-guidelines`

## Regras para nomes de branches

- Usar letras minúsculas.
- Usar hífen entre palavras.
- Evitar acentos.
- Usar nomes curtos e claros.
- Relacionar o nome da branch com a issue sempre que possível.

Exemplos bons:

- `feature/images-page`
- `feature/shared-header`
- `fix/remove-comment-button`
- `chore/update-readme`

Evite:

- `MinhaBranch`
- `ajustes`
- `coisas-novas`
- `teste123`

## Fluxo de trabalho

1. Criar ou escolher uma issue.
2. Criar uma branch a partir da `main`.
3. Fazer a alteração proposta.
4. Testar localmente.
5. Fazer commit com uma mensagem clara.
6. Enviar a branch para o GitHub.
7. Abrir um pull request.
8. Revisar antes de fazer merge.
9. Fazer merge na `main`.

## Padrão de commits

Use mensagens curtas e claras.

Exemplos:

- `feat: cria página de imagens`
- `feat: adiciona header compartilhado`
- `fix: corrige texto alternativo das imagens`
- `chore: adiciona guia de contribuição`
- `docs: atualiza readme`

## Checklist antes de abrir um Pull Request

Antes de abrir um PR, confira:

- A aplicação roda sem erro.
- A funcionalidade foi testada.
- O console do navegador não mostra erro.
- Acessibilidade foi considerada.
- O código está organizado.
- O nome da branch segue o padrão.
- A mudança está relacionada à issue.

## Acessibilidade

Sempre que alterar interface, conferir:

- Botões têm texto claro.
- Links têm texto compreensível.
- Imagens têm `alt` adequado.
- A navegação funciona por teclado.
- O foco visual aparece.
- A estrutura usa HTML semântico quando possível.

## Observação

Este guia pode evoluir conforme os desafios ficarem mais complexos.