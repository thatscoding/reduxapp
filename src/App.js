import React from "react";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state);
  return (
    <div className="" style={{ display: "flex", gap: 20, margin: "8rem" }}>
      <button onClick={() => dispatch({ type: "DEC" })}>Decrement</button>
      <p>{counter}</p>
      <button onClick={() => dispatch({ type: "INC" })}>Increment</button>
    </div>
  );
};

export default App;
