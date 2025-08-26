import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { CustomHeader } from "./CustomHeader";

describe("CustomHeader", () => {
  const title = "Los mejores Gifs A tu Alcanze";

  test("should render component properly", () => {
    render(<CustomHeader title={title} />);

    expect(title).toBe("Los mejores Gifs A tu Alcanze");
    expect(screen.getByText(title)).toBeTruthy();
    //    screen.debug()
  });

  test("should render the description when provided", () => {
    const description = "Descubre y comparte los mejores gifs animados 🎉";

    render(<CustomHeader title={title} description={description} />);

    expect(description).toBe(
      "Descubre y comparte los mejores gifs animados 🎉"
    );
    expect(screen.getByText(description)).toBeTruthy();
    expect(screen.getByRole("paragraph")).toBeDefined();
    expect(screen.getByRole("paragraph").innerHTML).toBe(description);

    // screen.debug();
  });

  test("should render the description when not provided", () => {
    const defaultDescription = "Los mejores Gifs A tu Alcanze";

    render(<CustomHeader title={title} />);

    expect(screen.getByText(defaultDescription)).toBeTruthy();
  });
});
