import React from "react";
import Bowl from "./Grandchild";

const Puppy = (props) => {
  return (
    <div>
      {props.name} has <Bowl bowlShape="square" bowlStatus="full" />
    </div>
  );
};

export default Puppy;
