import { useState, useEffect } from "react";
import type { KeyboardEvent } from "react";


interface Props {
  placeholder?: string;
  onQuery: (query: string) => void;
}

export const SearchBar = ({ placeholder, onQuery }: Props) => {
  const [query, setQuery] = useState("");

  const handleSubmit = () => {
    onQuery(query);
    setQuery("");
  };

useEffect(() => {
  if (query === "") {
    onQuery("");
  }
}, [query]); // 👈 solo query


  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && query.trim() !== "") {
      handleSubmit();
    }
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-6">
      <div className="flex gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder={placeholder || "Buscar gifs"}
          className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md bg-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
          onKeyDown={handleKeyDown}
        />
        <button
          className="px-4 py-2 text-sm font-medium bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
          onClick={handleSubmit}
        >
          Buscar
        </button>
      </div>
    </section>
  );
};
