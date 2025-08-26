import { useState } from "react";

export const useCounter = (inicialValue: number = 10) => {
  const [counter, setCounter] = useState(inicialValue);

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
