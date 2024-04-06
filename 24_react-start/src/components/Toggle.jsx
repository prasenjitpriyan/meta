import React from "react";

const Toggle = () => {
  let darkModeOn = false;
  const darkMode = <h1>Dark Mode is On</h1>;
  const lightMode = <h1>Light Mode is On</h1>;

  const handleClick = () => {
    darkModeOn = !darkModeOn;
    if (darkModeOn == true) {
      console.log("Dark Mode is On");
    } else {
      console.log("Light Mode is On");
    }
  };

  return (
    <div>
      {darkModeOn ? darkMode : lightMode}
      <button onClick={handleClick}>Toggle</button>
    </div>
  );
};

export default Toggle;
