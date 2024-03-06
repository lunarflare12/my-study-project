import { useState } from "react";
import cl from "./counter.style.mod.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className={cl.title}>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
    </div>
  );
};

export default Counter;
