import React from "react";

const Bowl = (props) => {
  return (
    <span>
      {props.bowlShape}-shaped bowl, and it's currently {props.bowlStatus}
    </span>
  );
};

export default Bowl;
