import { beforeEach, describe, expect, test, vi } from "vitest";
import { getGifsByQuery } from "./get-gifts-by-query.action";
import AxiosMockAdapter from "axios-mock-adapter";
import { giphyApi } from "../api/giphy.api";
import { giphySearchResponseMock } from "./../../../test/mock/giphy-response.data";

describe("getGifsByQuery", () => {
  let mock = new AxiosMockAdapter(giphyApi);

  beforeEach(() => {
    mock = new AxiosMockAdapter(giphyApi);
  });

  //   test("should return a list of gifs", async () => {
  //     const gifs = await getGifsByQuery("mia kalifa");

  //     gifs.forEach((gif) => {
  //       expect(gif).toEqual({
  //         id: expect.any(String),
  //         height: expect.any(Number),
  //         title: expect.any(String),
  //         url: expect.any(String),
  //         width: expect.any(Number),
  //       });
  //     });
  //   });

  test("should return a list of gifs", async () => {
    mock.onGet("/search").reply(200, giphySearchResponseMock);
    const gifs = await getGifsByQuery("ben 10");

    expect(gifs.length).toBe(50);

    gifs.forEach((gif) => {
      expect(typeof gif.id).toBe("string");
      expect(typeof gif.height).toBe("number");
      expect(typeof gif.title).toBe("string");
      expect(typeof gif.url).toBe("string");
      expect(typeof gif.width).toBe("number");
    });
  });

  test("should return an empty list if query is empty", async () => {
    // mock.onGet("/search").reply(200, giphySearchResponseMock);
    mock.restore();
    const gifs = await getGifsByQuery("");

    expect(gifs.length).toBe(0);
  });

  test("should handle error when the api returns an error", async () => {
    const consoleErrorSpy = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});

    mock.onGet("/search").reply(400, {
      data: { error: "error message" },
    });

    const gifs = await getGifsByQuery("lgtv");
    expect(gifs.length).toBe(0);

    expect(consoleErrorSpy).toHaveBeenCalled();
    // expect(consoleErrorSpy).toHaveBeenCalledWith(expect.anything);
  });
});
