import { renderHook } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { useGifs } from "./useGifs";
import { act } from "react";
import * as gifsActions from "../actions/get-gifts-by-query.action";

describe("useGifs", () => {
  test("should return default values and methods", () => {
    const { result } = renderHook(() => useGifs());

    expect(result.current.searchGifs.length).toBe(0);
    expect(result.current.previousTerms.length).toBe(0);
    expect(result.current.handleSearch).toBeDefined();
    expect(result.current.handleTermClick).toBeDefined();
  });

  test("should return a list of gifs", async () => {
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleSearch("ben 10");
    });
    expect(result.current.searchGifs.length).toBe(10);
  });

  test("should return a list od gifs when handleTermClick is called", async () => {
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleTermClick("ben 10");
    });
    expect(result.current.searchGifs.length).toBe(10);
  });

  test("should return  a list of gifs from cache", async () => {
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleTermClick("ben 10");
    });
    expect(result.current.searchGifs.length).toBe(10);

    vi.spyOn(gifsActions, "getGifsByQuery").mockRejectedValue({
      data: { error: "error message" },
    });

    await act(async () => {
      await result.current.handleTermClick("ben 10");
    });
    expect(result.current.searchGifs.length).toBe(10);
  });

  test("should return no more than 50 gifs previous terms", async () => {
    const { result } = renderHook(() => useGifs());

    vi.spyOn(gifsActions, "getGifsByQuery").mockResolvedValue([]);

    for (let i = 0; i < 55; i++) {
      await act(async () => {
        await result.current.handleSearch(`term-${i}`);
      });
    }

    expect(result.current.previousTerms.length).toBeLessThanOrEqual(50);
  });
});
