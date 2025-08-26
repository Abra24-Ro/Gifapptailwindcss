import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { MyCounter } from "./MyCounter";
// import { useCounter } from "../hooks/useCounter";

const handleAddMock = vi.fn();
const handleSubstractMock = vi.fn();
const handleResetMock = vi.fn();

vi.mock("../hooks/useCounter", () => ({
  useCounter: () => ({
    counter: 10,
    handleAdd: handleAddMock,
    handleSubstract: handleSubstractMock,
    handleReset: handleResetMock,
  }),
}));

describe("MyCounter2", () => {
  test("should render component properly", () => {
    render(<MyCounter />);
    expect(screen.getAllByRole("heading", { level: 1 })[0].innerHTML).toContain(
      `Counter: 10`
    );
  });

  test("should handleAdd if Button is clicked", () => {
    render(<MyCounter />);

    const button = screen.getAllByRole("button")[0];

    fireEvent.click(button);
    expect(handleAddMock).toHaveBeenCalled();
    expect(handleSubstractMock).not.toHaveBeenCalled();
    expect(handleResetMock).not.toHaveBeenCalled();
  });
});
