import { useState } from "react";
import "./App.scss";
import Square from "./components/Square";
import randomColor from "./functions/RandomColor";

function App() {
  const [addSq, setAddSq] = useState([]);
  const [changeToRed, setChangeToRed] = useState("yellow");
  const [changeToRandom, setChangeToRandom] = useState([]);

  const addSqHandler = () => {
    setAddSq((prev) => [...prev, 1]);
  };

  const changeToRedHandler = () => {
    setChangeToRed((prev) => (prev === "yellow" ? "red" : "yellow"));
  };

  const randomColorChangeHandler = () => {
    setChangeToRandom((prev) => [...prev, { color: randomColor() }]);
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="flex">
          <button className="button" onClick={addSqHandler}>
            Add one
          </button>
          <button
            style={{
              height: "80px",
              width: "160px",
              fontSize: "22px",
              marginTop: "40px",
            }}
            className={changeToRed}
            onClick={changeToRedHandler}
          >
            Change to red and back
          </button>
          <button className="button orange" onClick={randomColorChangeHandler}>
            Random color
          </button>
        </div>
        <div className="sq-container">
          {addSq.map((a, i) => (
            <Square key={i} color={a}></Square>
          ))}
          {changeToRandom.map((a, i) => (
            <Square key={i} color={a}></Square>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
