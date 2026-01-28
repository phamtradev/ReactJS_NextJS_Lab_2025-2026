import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h1>Counter App</h1>
      <div className={`counter-display ${count > 10 ? "red" : ""}`}>
        {count}
      </div>
      <div className="button-group">
        <button onClick={decrement} className="btn btn-minus">
          -
        </button>
        <button onClick={reset} className="btn btn-reset">
          Reset
        </button>
        <button onClick={increment} className="btn btn-plus">
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
