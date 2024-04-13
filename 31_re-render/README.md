# This Context API Mistake Ruins Your Whole React App (All Components Re-Render)

> app.jsx

```jsx
import { useState, createContext, useContext } from "react";
import "./App.css";

const CountContext = createContext(null);

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <CountContext.Provider value={{ count, setCount }}>
        <ExampleComponent1 />
        <ExampleComponent2 />
      </CountContext.Provider>
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
```

Here the ExampleComponent2 don't use the useContext hook, so it is assumed that this component will not re-render when count state change. But that's not true because the CounterContext.Provider bound two components and rendering both of them every time count state change.

To achieve unnecessary re render of ExampleComponent2 firstly create a new context for storing counter value and pass children props:

> CountContext.jsx

```jsx
import { useState, createContext } from "react";

export const CountContext = createContext(null);

export default function CountContextProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}
```

> app.jsx

```jsx
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
```
