import Card from "./components/Card";
import Button from "./components/Button";
import Toggle from "./components/Toggle";
import DynamicEvents from "./components/DynamicEvents";
import Promo from "./components/Promo";

function App() {
  const clickHandler = () => {
    console.log("Clicked");
  };

  return (
    <div>
      <div className="App">
        <h1>Task: Add three Card elements</h1>
        <Card h2="First card's h2" h3="First card's h3" />
        <Card h2="Second card's h2" h3="Second card's h3" />
        <Card h2="Third card's h2" h3="Third card's h3" />
      </div>
      <hr />
      <Button name="Props button" onClick={clickHandler} />
      <hr />
      <Toggle />
      <hr />
      <h1>Dnamic Events</h1>
      <DynamicEvents />
      <hr />
      <h1>Parent-child data flow</h1>
      <Promo />
    </div>
  );
}

export default App;
