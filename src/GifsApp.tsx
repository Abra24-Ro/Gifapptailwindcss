import { PreviusSeach } from "./gifs";
import { GifList } from "./gifs/components/GifList";
import { useGifs } from "./gifs/hooks/useGifs";
import { CustomHeader, SearchBar } from "./shared";

export const GifsApp = () => {
  const { previousTerms, searchGifs, handleTermClick, handleSearch } =
    useGifs();

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      {/* Header */}

      <CustomHeader
        title="Gifs App"
        description="  Descubre y comparte los mejores gifs animados 🎉"
      />
      <SearchBar placeholder="Buscar gifs ya!!" onQuery={handleSearch} />

      {/* Busquedas previas */}
      <PreviusSeach searches={previousTerms} onLabelClick={handleTermClick} />

      {/* Gifs */}
      <section className="max-w-5xl mx-auto px-6 py-6">
        {searchGifs.length > 0 ? (
          <h2 className="text-base font-medium text-gray-800 mb-2">
            Resultados:
          </h2>
        ) : (
          <h2 className="text-base font-medium text-gray-800 mb-2 text-center">
            No se encontraron resultados
          </h2>
        )}
        <GifList gifs={searchGifs} />
      </section>
    </div>
  );
};
