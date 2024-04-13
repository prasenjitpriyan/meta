import { useContext } from "react";
import "./App.css";
import CountContextProvider, { CountContext } from "./context/CountContext";

export default function App() {
  return (
    <main>
      <CountContextProvider>
        <ExampleComponent1 />
        <ExampleComponent2 />
      </CountContextProvider>
    </main>
  );
}

export function ExampleComponent1() {
  const { count, setCount } = useContext(CountContext);
  console.log("ExampleComponent1 rendering...");
  return (
    <div>
      <h3>Example Component 1</h3>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
export function ExampleComponent2() {
  console.log("ExampleComponent2 rendering...");
  return (
    <div>
      <h3>Example Component 2</h3>
    </div>
  );
}
