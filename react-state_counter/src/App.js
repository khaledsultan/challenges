import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  const buttonHandlerAdd = () => {
    setCount(count + 1);
  };
  const buttonHandlerSub = () => {
    setCount(Math.max(0, count - 1));
  };

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button type="button" onClick={buttonHandlerSub}>
          -
        </button>
        <button type="button" onClick={buttonHandlerAdd}>
          +
        </button>
      </div>
    </div>
  );
}
