import React from "react";

// Data flow from parent to child component.
const PromoHeading = (props) => {
  return (
    <div>
      <h1 className="text-red-500">{props.heading}</h1>
      <h2>{props.callToAction}</h2>
    </div>
  );
};

export default PromoHeading;
