import * as React from "react";

const Row = ({ children, spacing }) => {
  const childStyle = {
    marginLeft: `${spacing}px`,
  };

  return (
    <div>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          style: {
            ...child.props.style,
            ...(index > 0 ? childStyle : {}),
          },
        });
      })}
    </div>
  );
};

const Manipulating = () => {
  return (
    <div className="bg-red-300 text-white mt-5 rounded border-2 border-red-600">
      <Row spacing={32}>
        <p>Pizza Margarita</p>
        <p>2</p>
        <p>$10.00</p>
        <p>18:30</p>
        <p>Prasenjit</p>
      </Row>
    </div>
  );
};

export default Manipulating;
