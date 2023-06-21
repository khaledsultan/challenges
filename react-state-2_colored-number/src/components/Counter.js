import ColoredNumber from "./ColoredNumber";

import { useState } from "react";



export default function Counter() {
  
  const [count, setCount] = useState(0);
  
    const buttonHandlerAdd = () => {
      setCount(count + 1);
    };
    const buttonHandlerSub = () => {
      setCount(Math.max(0, count - 1));
    };
  
  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={count} />
      {/* <h1>{count}</h1> */}
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={buttonHandlerAdd}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={buttonHandlerSub}
          
        >
          -
        </button>
      </div>
    </div>
  );
}

