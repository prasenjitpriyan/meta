# What is useReducer and how it differs from useState

## useState

Purpose: Manages simple state values within a component.

Usage:

- Takes an initial state value as an argument.
- Returns an array with the current state and a function to update it.
- Easy to understand and use for basic state management.

Example:

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
```

## useReducer

Purpose: Manages complex state logic, especially when dealing with multiple interrelated state values or complex update rules.

Concept:

- Takes a reducer function and an initial state as arguments.
- The reducer function is a pure function that accepts the current state and an action object (containing a type and optional payload).
- Based on the action type, the reducer returns the new state.
- Provides a dispatch function to trigger state updates by sending actions.

```jsx
import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = (type) => {
    dispatch({ type });
  };

  return (
    <div>
      <p>You clicked {state.count} times</p>
      <button onClick={() => handleClick("increment")}>+</button>
      <button onClick={() => handleClick("decrement")}>-</button>
    </div>
  );
}
```

## Key Differences:

- You can think of the useReducer as a superpower usestate. They useState hook starts with an initial state, but they useReducer hook gets a reducer function in addition to the initial state.
- Complexity: useState is simpler, while useReducer offers more control and is better suited for intricate state logic.
- State Updates: useState updates state directly, while useReducer uses actions and a reducer function for controlled updates.
- State Structure: useState works well for single state values or arrays, while useReducer is ideal for complex state objects.
- Testing: useReducer with a pure reducer function can make testing easier.

## When to Use Which:

Use useState for straightforward state management with a single value or a simple array.

Use useReducer when you have:

- Multiple interrelated state values.
- Complex update logic.
- Need for better organization and testability.
- Remember, you can also combine both approaches within a component!

## When to choose useReducer vs useState

The useState hook is best used on less complex data.

While it's possible to use any kind of a data structure when working with useState, it's better to use it with primitive data types, such as strings, numbers, or booleans.

The useReducer hook is best used on more complex data, specifically, arrays or objects.

While this rule is simple enough, there are situations where you might be working with a simple object and still decide to use the useState hook.

Such a decision might stem from the simple fact that working with useState can sometimes feel easier than thinking about how the state is controlled when working with useReducer.

It might help conceptualizing this dilemma as a gradual scale, on the left side of which, there is the useState hook with primitive data types and simple use cases, such as toggling a variable on or off.

At the end of this spectrum, there is the useReducer hook used to control state of large state-holding objects.

There's no clear-cut point on this spectrum, at which point you would decide: "If my state object has three or more properties, I'll use the useReducer hook".

Sometimes such a statement might make sense, and other times it might not.

What's important to remember is to keep your code simple to understand, collaborate on, contribute to, and build from.

One negative characteristic of useState is that it often gets hard to maintain as the state gets more complex.

On the flip side, a negative characteristic of useReducer is that it requires more prep work to begin with. There's more setup involved. However, once this setup is completed, it gets easier to extend the code based on new requirements.

## Conclusion

You learned about the decision-making process when choosing between useReducer and useState for working with different types of data.
