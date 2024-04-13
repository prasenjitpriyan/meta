import "./App.css";
import React from "react";

const App = () => {
  const [toogle, setToogle] = React.useState(false);

  const clickHandler = () => {
    setToogle(!toogle);
  };

  React.useEffect(() => {
    document.title = toogle
      ? "Welcome to little lemon"
      : "Using the useEffect hook";
  }, [toogle]);

  return (
    <div>
      <h1>Using the useEffect hook</h1>
      <button onClick={clickHandler}>Toggle message</button>
      {toogle ? (
        <p>Welcome to little lemon</p>
      ) : (
        <p>Using the useEffect hook</p>
      )}
    </div>
  );
};

export default App;
