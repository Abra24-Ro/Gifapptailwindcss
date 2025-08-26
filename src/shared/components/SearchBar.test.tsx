import { describe, expect, test, vi } from "vitest";
import { SearchBar } from "./SearchBar";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

describe("SearchBar", () => {
  test("should render searchbar properly", () => {
    const { container } = render(<SearchBar onQuery={() => {}} />);

    expect(container).toMatchSnapshot();
    expect(screen.getByRole("textbox")).toBeTruthy();
  });

  test("should call Onquery with the correct value after 700ms", async () => {
    const onQuery = vi.fn();
    render(<SearchBar onQuery={onQuery} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Goku" } });

    await waitFor(() => {
      expect(onQuery).toHaveBeenCalledWith("Goku");
      expect(onQuery).toHaveBeenCalledTimes(1);
    });
  });

  test("should call only one with the last value (debounce)", async () => {
    const onQuery = vi.fn();
    render(<SearchBar onQuery={onQuery} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "t" } });

    await waitFor(() => {
      expect(onQuery).toHaveBeenCalledWith("t");
      expect(onQuery).toHaveBeenCalledTimes(1);
    });
  });

  test("should call Onquery when clicked with the input value", () => {
    const onQuery = vi.fn();
    render(<SearchBar onQuery={onQuery} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "t" } });

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(onQuery).toHaveBeenCalledWith("t");
    expect(onQuery).toHaveBeenCalledTimes(1);
  });

  test("should the input has the correct placeHolader value", () => {
    const placeHolder = "Busca lo que quieras";

    render(<SearchBar onQuery={() => {}} placeholder={placeHolder} />);
    expect(screen.getByPlaceholderText(placeHolder)).toBeTruthy();
    
  });
});
