import { describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";
import { act, renderHook } from "@testing-library/react";

describe("useCounter", () => {
  test("should initialize correctly initial value 10", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.counter).toBe(10);
  });

  test("should increment counter when handleAdd is called", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.handleAdd();
    });

    expect(result.current.counter).toBe(11);
  });

  test("should decrement counter when handleSubstract is called", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.handleSubstract();
    });
    act(() => {
      result.current.handleSubstract();
    });

    expect(result.current.counter).toBe(8);
  });

  test("should reset when handleReset is called", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.handleReset();
    });

    expect(result.current.counter).toBe(0);
  });
});
