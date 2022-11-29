import React, { useState } from "react";

import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");

  function handleInput(e) {
    setInput(e.target.value);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input onChange={handleInput} type="text" />
      <h2>
        {input.split("").map((item, index) => {
          if (["a", "b", "c"].includes(item)) {
            return (
              <span key={index} style={{ color: "red" }}>
                {item}
              </span>
            );
          } else {
            return item;
          }
        })}
      </h2>
    </div>
  );
}