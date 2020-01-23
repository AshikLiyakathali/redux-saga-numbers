import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { add, sub, mul, div } from "./actions";

function App() {
  const number = useSelector(state => state.number);
  const dispatch = useDispatch();

  const a = 5;
  const b = 2;

  return (
    <div className="App">
      <h1>
        Numbers: {a}, {b}
      </h1>
      <button onClick={() => dispatch(add(a, b))}>+</button>
      <br />
      <button onClick={() => dispatch(sub(a, b))}>-</button>
      <br />
      <button onClick={() => dispatch(mul(a, b))}>*</button>
      <br />
      <button onClick={() => dispatch(div(a, b))}>/</button>
      <br />
      <h1>Result: {number}</h1>
    </div>
  );
}

export default App;
