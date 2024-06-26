import Card from "./components/Card";
import Button from "./components/Button";
import Toggle from "./components/Toggle";
import DynamicEvents from "./components/DynamicEvents";
import Promo from "./components/Promo";
import Dog from "./components/dataFlowInReact/Parent";
import Parent from "./components/childToParentDataFlow/Parent";
import UseState from "./components/useState/UseState";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutMe from "./pages/AboutMe";

function App() {
  const clickHandler = () => {
    console.log("Clicked");
  };

  return (
    <div>
      <nav>
        <Link to="/" className="nav-item">
          Homepage
        </Link>
        <Link to="/about" className="nav-item">
          About Little Lemon
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
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
      <hr />
      <h1>Data flow in React</h1>
      <Dog />
      <hr />
      <h1>Passing Data from Child to Parent Components in React</h1>
      <Parent />
      <hr />
      <h1>useState</h1>
      <UseState />
    </div>
  );
}

export default App;
