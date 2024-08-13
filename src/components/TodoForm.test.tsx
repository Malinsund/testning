import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import TodoForm from "./TodoForm";

describe("TodoForm", () => {
  it("should render an input with submit button", () => {
    render(<TodoForm onSubmit={vi.fn()} />);

    expect(screen.getByRole("textbox")).toBeVisible;
    expect(screen.getByRole("button")).toBeVisible;
  });

  it("should submit the text that was entered in the input", () => {
    const handleSubmit = vi.fn();

    render(<TodoForm onSubmit={vi.fn()} />);

    // Skriv Eat och klicka på spara
    fireEvent.input(screen.getByRole("textbox"), { target: { value: "Eat" } });
    fireEvent.click(screen.getByRole("button"));

    expect(handleSubmit).toBeCalledWith("Eat");
  });
});
