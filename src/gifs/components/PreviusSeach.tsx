import type { FC } from "react";

interface Props {
  searches: string[];
  onLabelClick: (term: string) => void;
}

export const PreviusSeach: FC<Props> = ({ searches, onLabelClick }) => {
  return (
    <section className="max-w-3xl mx-auto px-6 py-4">
      <h2 className="text-base font-medium text-gray-800 mb-2">
        Búsquedas previas
      </h2>
      <ul className="flex gap-2 flex-wrap">
        {searches.map((b, i) => (
          <li
            key={i}
            onClick={() => onLabelClick(b)}
            className="px-3 py-1 text-sm border border-gray-300 rounded-md bg-white hover:bg-gray-50 cursor-pointer"
          >
            {b}
          </li>
        ))}
      </ul>
    </section>
  );
};
