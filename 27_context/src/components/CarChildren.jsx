import React, { useState } from "react";

const CarChildren = ({ defaultName, color }) => {
  const [carName, setCarName] = useState(defaultName);

  return (
    <div>
      <h1>Hi, I am a Car</h1>
      <input
        type="text"
        placeholder="Enter car name"
        onChange={(e) => setCarName(e.target.value)}
      />
      <p>My car name is {carName}</p>
      <p>My car's color is {color}</p>
    </div>
  );
};

export default CarChildren;
