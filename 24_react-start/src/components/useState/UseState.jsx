import React, { useState } from "react";
import UseStateHeading from "./UseStateHeading";

const UseState = () => {
  const [words, setWords] = useState("Eat");

  const handleClick = () => {
    setWords("Drink");
  };

  return (
    <div>
      <UseStateHeading message={words + " at Little Lemon"} />
      <button
        className="bg-red-400 p-2 text-white rounded"
        onClick={handleClick}
      >
        Change Words
      </button>
    </div>
  );
};

export default UseState;
