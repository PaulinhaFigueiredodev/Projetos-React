import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import CommentForm from "./CommentForm";

describe("CommentForm", () => {
  it("informa quando o comentário está vazio", async () => {
    const user = userEvent.setup();
    render(<CommentForm adicionarComentario={vi.fn()} />);

    await user.click(screen.getByRole("button", { name: /adicionar comentário/i }));

    expect(screen.getByText("Por favor, digite um comentário.")).toBeInTheDocument();
    expect(screen.getByLabelText("Comentário")).toHaveAttribute("aria-invalid", "true");
  });

  it("envia texto limpo e limpa o campo depois do sucesso", async () => {
    const user = userEvent.setup();
    const addComment = vi.fn().mockResolvedValue(true);
    render(<CommentForm adicionarComentario={addComment} />);

    const field = screen.getByLabelText("Comentário");
    await user.type(field, "  Um comentário acessível  ");
    await user.click(screen.getByRole("button", { name: /adicionar comentário/i }));

    expect(addComment).toHaveBeenCalledWith("Um comentário acessível");
    expect(field).toHaveValue("");
  });

  it("preserva o texto quando a criação falha", async () => {
    const user = userEvent.setup();
    const addComment = vi.fn().mockResolvedValue(false);
    render(<CommentForm adicionarComentario={addComment} />);

    const field = screen.getByLabelText("Comentário");
    await user.type(field, "Meu comentário");
    await user.click(screen.getByRole("button", { name: /adicionar comentário/i }));

    expect(field).toHaveValue("Meu comentário");
  });
});
