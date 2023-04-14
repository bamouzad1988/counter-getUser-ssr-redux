import React from "react";
import { useSelector, useDispatch } from "react-redux";

const IncrementCounter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.count);
  return (
    <div>
      <h1>
        Counter: <span>{counter}</span>
      </h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Add To Count
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-----</button>
    </div>
  );
};

export default IncrementCounter;
