import React, { useState } from "react";
export function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Hello React {counter}</h1>
      <button onClick={()=> setCounter(counter+1)}>count</button>
      <button onClick={()=> setCounter(0)}>reset</button>
    </div>
  );
}
