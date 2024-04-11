import React from "react";
import CarChildren from "./CarChildren";

const CarParents = () => {
  return (
    <div>
      <h1>Hello from state vs props</h1>
      <CarChildren name="maruti" color="red" defaultName="Prasenjit" />
    </div>
  );
};

export default CarParents;
