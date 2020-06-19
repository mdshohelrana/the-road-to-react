import React, { useState } from "react";

export default function Function_component({ count }) {
  let [counter, setCounter] = useState(count);
  return (
    <div>
      <h3>Counter using React function component</h3>
      <h2>{counter}</h2>
      <button onClick={() => setCounter((counter = counter + 1))}>+</button>
      <button onClick={() => setCounter((counter = counter - 1))}>+</button>
    </div>
  );
}
