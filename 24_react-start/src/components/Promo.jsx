import React from "react";
import PromoHeading from "./PromoHeading";

const data = {
  heading: "99% of all items!",
  callToAction: "Everything must go!",
};

// -- Promo.jsx is Parent component
// -- PromoHeading.jsx is Child Component
const Promo = () => {
  return (
    <div>
      <PromoHeading heading={data.heading} callToAction={data.callToAction} />
    </div>
  );
};

export default Promo;
