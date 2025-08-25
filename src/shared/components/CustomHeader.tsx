interface Props {
  title: string;
  description?: string;
}

export const CustomHeader = ({ title, description }: Props) => {
  return (
    <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md">
      <div className="max-w-3xl mx-auto px-6 py-6 text-center">
        <h1 className="text-3xl font-bold tracking-tight drop-shadow-md">
          {title}
        </h1>
        <p className="text-base mt-2 opacity-90">{description && description }</p>
      </div>
    </header>
  );
};
