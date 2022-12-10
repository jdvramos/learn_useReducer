import React, { useContext } from "react";
import { CountContext } from "./App";

const ComponentD = () => {
  const countContext = useContext(CountContext);
  return (
    <div>
      <p>Component D</p>
      <button onClick={() => countContext.countDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
};

export default ComponentD;
