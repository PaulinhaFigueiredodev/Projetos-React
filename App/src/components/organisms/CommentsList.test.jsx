import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import CommentsList from "./CommentsList";

const defaultProps = {
  comentarioSendoRemovido: null,
  editarComentario: vi.fn(),
  removerComentario: vi.fn(),
};

describe("CommentsList", () => {
  it("mostra o estado vazio", () => {
    render(<CommentsList {...defaultProps} listaComentarios={[]} />);
    expect(screen.getByText("Nenhum comentário foi adicionado ainda.")).toBeInTheDocument();
  });

  it("renderiza os comentários recebidos", () => {
    render(
      <CommentsList
        {...defaultProps}
        listaComentarios={[{ id: "1", comment: "React com acessibilidade" }]}
      />,
    );
    expect(screen.getByText("React com acessibilidade")).toBeInTheDocument();
  });
});
