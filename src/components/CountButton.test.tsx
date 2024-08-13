import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CountButton from "./CountButton";

describe("CountButton", () => {
  it("should start at 0", () => {
    // Arrange/ACT
    render(<CountButton />);

    // Assert
    expect(screen.getByRole("button")).toHaveTextContent(/0/);
  });

  it("Should increment count when clicked", () => {
    render(<CountButton />);
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("button")).toHaveTextContent(/1/);

    fireEvent.click(screen.getByRole("button"));
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("button")).toHaveTextContent(/3/);
  });
});
