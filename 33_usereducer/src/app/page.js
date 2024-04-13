"use client";
import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "buy_ingradients") {
    return { money: state.money - 10 };
  }
  if (action.type === "sell_a_meal") {
    return { money: state.money + 20 };
  }
  return state;
};

export default function Home() {
  const initialState = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="mt-5">
      <h1 className="text-center text-2xl">Wallet: {state.money}</h1>
      <div className="flex flex-row justify-center items-center p-10 gap-5">
        <button
          className="bg-green-300 p-2 rounded"
          onClick={() => dispatch({ type: "buy_ingradients" })}
        >
          Shopping for veggies!
        </button>
        <button
          className="bg-red-300 p-2 rounded"
          onClick={() => dispatch({ type: "sell_a_meal" })}
        >
          Serve a meal to the customer
        </button>
      </div>
    </div>
  );
}
