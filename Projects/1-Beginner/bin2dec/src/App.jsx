import { useState } from "react";
import binToDec from "./functions";
import "./App.css";

function App() {
  const [input, setInput] = useState(0);
  const [output, setOutput] = useState(0);

  function onClick() {
    setOutput(binToDec(input));
  }

  return (
    <>
      <label htmlFor="Input a binary number">Input a binary number</label>
      <input
        type="text"
        className="input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="button" onClick={onClick}>
        Calculate!
      </button>
      <p>Your converted value is {output}</p>
    </>
  );
}

export default App;
