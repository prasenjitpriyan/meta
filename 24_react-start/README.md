# React + Vite

<div style="text-align: justify;">

## Passing Data from Child to Parent Components in React

In React, data is typically passed down from parent components to child components via props. However, passing data up from child to parent can be a bit more complex.

One way to pass data from a child to a parent component is to define a callback function in the parent component and pass it down to the child component as a prop. The child component can then call this function with the data it wants to pass up to the parent.

Here’s an example:

```jsx
// Parent component
import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [dataFromChild, setDataFromChild] = useState("");

  function handleDataFromChild(data) {
    setDataFromChild(data);
  }

  return (
    <div>
      <h1>Data from Child: {dataFromChild}</h1>
      <Child sendDataToParent={handleDataFromChild} />
    </div>
  );
}

export default Parent;

// Child component
import { useState } from "react";

function Child({ sendDataToParent }) {
  const [data, setData] = useState("");

  function handleClick() {
    sendDataToParent(data);
  }

  return (
    <div>
      <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
      <button onClick={handleClick}>Send Data to Parent</button>
    </div>
  );
}

export default Child;
```

In this example, the Parent component defines a state variable dataFromChild and a function handleDataFromChild that updates this state when called. The Parent component also renders a Child component and passes down the handleDataFromChild function as a prop called sendDataToParent.

The Child component defines its own state variable data and a function handleClick that calls the sendDataToParent function passed down as a prop with the current value of data as an argument. The Child component renders an input element and a button element, and when the button is clicked, the handleClick function is called.

When the handleClick function is called, it calls the sendDataToParent function passed down from the Parent component with the current value of data. This causes the handleDataFromChild function in the Parent component to be called with the data from the child component as an argument, and updates the dataFromChild state variable. Finally, the updated value of dataFromChild is displayed in an h1 element in the Parent component.

This approach allows child components to communicate with their parent components in a clean and efficient way. By defining callback functions in the parent component and passing them down to child components as props, you can easily pass data up from child components to parent components, without having to rely on complex state management techniques.

In conclusion, passing data up from child components to parent components in React can be achieved by defining a callback function in the parent component and passing it down to the child component as a prop. The child component can then call this function with the data it wants to pass up to the parent, allowing for efficient and straightforward communication between components.

</div>
