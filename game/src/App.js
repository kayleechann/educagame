import React, { useState, useRef } from "react";
import "./styles.css";
import { buildSquares } from "./components/Square";
import { moveMole, removeMoles } from "./mole.js";
import Score from "./components/Score";
import Question from "./components/Question";

let moleIntervalId;
let timerId;
let squareEls;
let timerDuration = 30;
let moleSpeed = 750;
let setScore;

export default function App() {
  let inta = Math.floor(Math.random() * 100);
  let intb = Math.floor(Math.random() * 100);
  let [score, setScoreState] = useState(0);
  let [gameStart, setGameStart] = useState(false);
  let squares = buildSquares(12, setScoreState);

  squareEls = useRef();
  setScore = setScoreState;

  function startGame(startHandler) {
    startHandler(true);
    setScore(0);

    moveMole(squareEls.current.children);
    moleIntervalId = setInterval(() => {
      moveMole(squareEls.current.children);
    }, moleSpeed);
  }

  function stopGame(startHandler) {
    clearTimeout(moleIntervalId);
    clearTimeout(timerId);
    startHandler(false);
    removeMoles(squareEls.current.children);
  }

  const [isShown, setIsShown] = useState(false);
  const handleClick = (event) => {
    //  toggle shown state
    setIsShown(true);
  };


  return (
    <div className="App">
      <h1 className="gamename">Whack-a-Math</h1>
      <div className="startButton">
        {gameStart ? (
          <>
            <button onClick={() => stopGame(setGameStart)}>Stop Game</button>
            <Score value={score} />
          </>
        ) : (
          <>
            <button onClick={handleClick}>START</button>

            {isShown ? (
              <div className="MathHolder">
                <h2 className="MathHolder">
                  What is {inta} + {intb}?
                </h2>
                <input id="answer"></input>
                <button
                  className="submit"
                  onClick={() => startGame(setGameStart)}
                >
                  Submit
                </button>
              </div>
            ) : null}
          </>
        )}
      </div>

      <div className="gridholder">
        <ul id="squares" ref={squareEls}>
          {squares}
        </ul>
      </div>
    </div>
  );
}
