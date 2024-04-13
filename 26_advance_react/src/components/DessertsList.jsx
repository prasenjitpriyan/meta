import React from "react";

const DessertsList = (props) => {
  const lowCaloriesDesserts = props.data
    .filter((dessert) => {
      return dessert.calories < 500;
    })
    .sort((a, b) => {
      return a.calories - b.calories;
    })
    .map((dessert) => {
      return (
        <li>
          {dessert.name} - {dessert.calories} cal
        </li>
      );
    });
  return (
    <div className="grid grid-cols-1 p-10 border-2">
      <ul>{lowCaloriesDesserts}</ul>
    </div>
  );
};

export default DessertsList;