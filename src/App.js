import { useState } from "react";
import "./App.scss";
import Square from "./components/Square";
import randomColor from "./functions/RandomColor";
import RandomNum from "./functions/RandomNum";
import { v4 as uuidv4, v4 } from "uuid";
import SpinningBtn from "./components/SpinningBtn";

function App() {
  const [addSq, setAddSq] = useState([]);
  const [changeToRed, setChangeToRed] = useState("yellow");
  const [changeToRandom, setChangeToRandom] = useState([]);
  const [addSqWithNum, setaddSqWithNum] = useState([]);
  const [changeHi, setChangeHi] = useState("crimson");
  const [addWhite, setaddWhite] = useState([]);
  const [plusOne, setPlusOne] = useState(1);
  const [randomNum, setRandomNum] = useState([]);
  const [rotate, setRotate] = useState([]);
  const [addDelete, setaddDelete] = useState([]);

  const addSqHandler = () => {
    setAddSq((prev) => [...prev, 1]);
  };

  const changeToRedHandler = () => {
    setChangeToRed((prev) => (prev === "yellow" ? "red" : "yellow"));
  };

  const randomColorChangeHandler = () => {
    setChangeToRandom((prev) => [
      ...prev,
      { id: uuidv4(), color: randomColor() },
    ]);
  };

  const addOneWithNum = () => {
    setaddSqWithNum((prev) => [...prev, { id: uuidv4() }]);
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

  const addRandomNumHandler = () => {
    setRandomNum((prev) => [
      ...prev,
      { id: uuidv4(), number: RandomNum(5, 555) },
    ]);
  };

  const rotateHandler = () => {
    setRotate((prev) => [...prev, { id: uuidv4() }]);
  };

  const addDeleteBtnHandler = () => {
    setaddDelete((prev) => [...prev, { id: uuidv4() }]);
  };

  const button = <button>Delete</button>;

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
          <button className="button purple" onClick={addRandomNumHandler}>
            Add random number
          </button>
          <button className="button orange" onClick={rotateHandler}>
            Rotate every second
          </button>
          <button className="button" onClick={addDeleteBtnHandler}>
            Add delete button
          </button>
        </div>
        <SpinningBtn cl={"button"}></SpinningBtn>
        <div className="sq-container">
          {addSq.map((a, i) => (
            <Square key={i} color={a}></Square>
          ))}
          {changeToRandom.map((a, i) => (
            <Square key={a.id} color={a.color}></Square>
          ))}
          {addSqWithNum.map((a, i) => (
            <Square key={a.id} color={a} index={i + 1}></Square>
          ))}
          {addWhite.map((a, i) => (
            <Square key={i} color={a} index={i}></Square>
          ))}

          {randomNum.map((a, i) => (
            <Square key={i} color={a} index={a.number}></Square>
          ))}
          {rotate.map((a, i) => (
            <Square rotateIndex={i} key={i} color={a}></Square>
          ))}
          {addDelete.map((a, i) => (
            <Square key={i} color={a} button={button}></Square>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
