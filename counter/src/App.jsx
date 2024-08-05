import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }
  return (
    <>
      <h1>React internals</h1>
      <h2>Counter value: {count}</h2>
      <button onClick={increaseCount}>increase count</button>
      <button onClick={decreaseCount}>decrease count</button>
    </>
  );
}

export default App;
