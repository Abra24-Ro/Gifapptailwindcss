import { useState } from "react";

export const useCounter = () => {
  const [counter, setCounter] = useState(5);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubstract = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
  };


  const handleReset = () => {
    setCounter(0);
  };

  return {

    // Propiedades
    counter,

    // Metodos
    handleAdd,
    handleSubstract,
    handleReset,
  };
};
