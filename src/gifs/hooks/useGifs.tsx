import { useRef, useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/get-gifts-by-query.action";

// const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
  const [previousTerms, setPreviousTerms] = useState([] as string[]);
  const [searchGifs, setSearchGifs] = useState<Gif[]>([]);

  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleTermClick = async (term: string) => {
    if (gifsCache.current[term]) {
      setSearchGifs(gifsCache.current[term]);
      return;
    }
    const gifs = await getGifsByQuery(term);

    setSearchGifs(gifs);

    gifsCache.current[term] = gifs;
  };

  const handleSearch = async (query: string) => {
    const newTerm = query.trim().toLowerCase();

    setPreviousTerms((prev) => {
      if (!newTerm || prev.includes(newTerm)) return prev;
      return [newTerm, ...prev].slice(0, 7);
    });
    const gifs = await getGifsByQuery(query);

    setSearchGifs(gifs);

    gifsCache.current[query] = gifs;
  };

  return {
    // Propiedades
    previousTerms,
    searchGifs,
    // Metodos
    handleTermClick,
    handleSearch,
  };
};
