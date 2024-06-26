import React from "react";

const DynamicEvents = () => {
  function handleClick() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt("type a number");
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  }

  return (
    <div>
      <button onClick={handleClick}>Guess the number between 1 and 3</button>
    </div>
  );
};

export default DynamicEvents;
