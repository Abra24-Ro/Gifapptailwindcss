import type { FC } from "react";
import type { Gif } from "../interfaces/gif.interface";

interface Props {
  gifs: Gif[];
}

export const GifList: FC<Props> = ({ gifs }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {gifs?.map((gif) => (
        <div
          key={gif.id}
          className="bg-white border border-gray-300 rounded-md overflow-hidden hover:shadow transition-shadow"
        >
          <img
            src={gif.url}
            alt={gif.title}
            className="w-full h-40 object-cover border-b border-gray-200"
          />
          <div className="p-3">
            <h3 className="text-sm font-medium text-gray-900 truncate">
              {gif.title}
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              {gif.width}×{gif.height}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
