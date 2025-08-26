import { describe, expect, test } from "vitest";
import { giphyApi } from "./giphy.api";

describe("giphy api", () => {

    test("should be configured correctly",()=> {

        const params = giphyApi.defaults.params

        expect(giphyApi.defaults.baseURL).toBe("https://api.giphy.com/v1/gifs");
        expect(params.api_key).toBe(import.meta.env.VITE_GIPHY_API_KEY);
        expect(params.lang).toBe("es");

        expect(params).toStrictEqual( {
            api_key: import.meta.env.VITE_GIPHY_API_KEY,
            lang: "es"
        })
    })
});