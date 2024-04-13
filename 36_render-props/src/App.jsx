import "./App.css";
import { DesertsCount, DrinksCount } from "./components/DataFetcher";
import {
  PanelMouseLogger,
  PointMouseLogger,
} from "./components/ScrollerPosition";

function App() {
  return (
    <div>
      <header>Little Lemon Restaurant 🍕</header>
      <DesertsCount />
      <DrinksCount />
      <hr />
      <PanelMouseLogger />
      <PointMouseLogger />
    </div>
  );
}

export default App;
