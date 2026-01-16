import { describe, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App", () => {
  test("renders all elements", (): void => {
    render(<App />);

    const heading = screen.getByRole("heading", { name: /Hello world/i });
    expect(heading).toBeInTheDocument();

    const input = screen.getByPlaceholderText(/input value/i);
    expect(input).toBeInTheDocument();

    const button = screen.getByText(/Click me/i);
    expect(button).toBeInTheDocument();
  });

  test("does not render non-existent element", (): void => {
    render(<App />);

    const noFoundElem = screen.queryByText(/noFoundElem/i);
    expect(noFoundElem).toBeNull();
  });
});
