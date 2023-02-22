import { useState } from "react";
import "./App.scss";
import Square from "./components/Square";
import randomColor from "./functions/RandomColor";

function App() {
  const [addSq, setAddSq] = useState([]);
  const [changeToRed, setChangeToRed] = useState("yellow");
  const [changeToRandom, setChangeToRandom] = useState([]);
  const [addSqWithNum, setaddSqWithNum] = useState([]);
  const [changeHi, setChangeHi] = useState("crimson");
  const [addWhite, setaddWhite] = useState([]);
  const [plusOne, setPlusOne] = useState(1);

  const addSqHandler = () => {
    setAddSq((prev) => [...prev, 1]);
  };

  const changeToRedHandler = () => {
    setChangeToRed((prev) => (prev === "yellow" ? "red" : "yellow"));
  };

  const randomColorChangeHandler = () => {
    setChangeToRandom((prev) => [...prev, { color: randomColor() }]);
  };

  const addOneWithNum = () => {
    setaddSqWithNum((prev) => [...prev, 1]);
  };

  const changeHiColor = () => {
    setChangeHi("white");
  };

  const addWhiteHandler = () => {
    setaddWhite((prev) => [...prev, { color: "white" }]);
  };

  const plusOneHandler = () => {
    setPlusOne((prev) => prev + 1);
  };

  const minusOneHandler = () => {
    setPlusOne((prev) => prev - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: "flex", gap: "200px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "50px" }}>
            <button className="button green" onClick={plusOneHandler}>
              Plus 1
            </button>
            <h2>{plusOne}</h2>
            <button className="button darkblue" onClick={minusOneHandler}>
              Minus 1
            </button>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "50px" }}>
            <button className="button" onClick={changeHiColor}>
              Press me and change HI color
            </button>
            <h1 style={{ color: changeHi }}>Hi</h1>{" "}
          </div>
        </div>
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
          <button className="button darkcyan" onClick={addOneWithNum}>
            Add one with number
          </button>
          <button className="button" onClick={addWhiteHandler}>
            Add only white buttons
          </button>
        </div>
        <div className="sq-container">
          {addSq.map((a, i) => (
            <Square key={i} color={a}></Square>
          ))}
          {changeToRandom.map((a, i) => (
            <Square key={i} color={a}></Square>
          ))}
          {addSqWithNum.map((a, i) => (
            <Square key={i} color={a} index={i + 1}></Square>
          ))}
          {addWhite.map((a, i) => (
            <Square key={i} color={a}></Square>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
