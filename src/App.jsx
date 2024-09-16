import React, { useContext } from "react";
import { ContextCounter } from "./Context/CounterContext";

const App = () => {
  const { counter, setCounter } = useContext(ContextCounter);
  return (
    <div>
      {counter}
      <br />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default App;
