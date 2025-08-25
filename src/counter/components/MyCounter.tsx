
import { useCounter } from "../hooks/useCounter";

export const MyCounter = () => {
  const { counter, handleAdd, handleSubstract, handleReset } = useCounter();

  return (
    <div className="">
      <h1>Counter: {counter}</h1>

      <div className="flex columns-2 gap-2">
        <button
          onClick={handleAdd}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          +1
        </button>
        <button
          onClick={handleSubstract}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          -1
        </button>
        <button
          onClick={handleReset}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          reset
        </button>
      </div>
    </div>
  );
};
