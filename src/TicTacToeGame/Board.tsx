import React from "react";

import { useState } from "react";
import Box from "./Box";

const Board = () => {
    
  const [state, setState] = useState(Array(9).fill(null));

  // Whose turn Logic
  const [isXTurn, setisXTurn] = useState(true);

  // Winner Logic
  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    //  For Loop Logic for Winner
    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };

  const isWinner = checkWinner();

  const isDraw = !isWinner && state.every((box) => box !== null);

  const handleClick = (index: number) => {
    // Stop if the box is already filled
    if (state[index] !== null) {
      return;
    }

    // Stop if the game is already over
    if (isWinner || isDraw) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";
    setState(copyState);
    // setting the X turn false so that it changes to O
    setisXTurn(!isXTurn);
    //   console.log("Clicked on index", index);
  };

  //   Handling Reset
  const handleReset = () => {
    setState(Array(9).fill(null));
    setisXTurn(true);
  };

  return (
    <div className="board-container">
      <h1 className="game-title">Tic Tac Toe</h1>

      {!isWinner && !isDraw && (
        <h3 className="turn">Turn: {isXTurn ? "❌" : "⭕"}</h3>
      )}
      {isDraw && (
        <>
          <h2 className="draw">🤝 Better Luck Next Time!</h2>
          <p className="draw-text">It's a Draw!</p>

          <button className="play-btn" onClick={handleReset}>
            Play Again
          </button>
        </>
      )}

      {isWinner && (
        <>
          <h2 className="winner">🏆 {isWinner} Wins!</h2>

          <button className="play-btn" onClick={handleReset}>
            Play Again
          </button>
        </>
      )}

      {!isWinner && (
        <>
          <div className="board-row">
            <Box onClick={() => handleClick(0)} value={state[0]} />
            <Box onClick={() => handleClick(1)} value={state[1]} />
            <Box onClick={() => handleClick(2)} value={state[2]} />
          </div>

          <div className="board-row">
            <Box onClick={() => handleClick(3)} value={state[3]} />
            <Box onClick={() => handleClick(4)} value={state[4]} />
            <Box onClick={() => handleClick(5)} value={state[5]} />
          </div>

          <div className="board-row">
            <Box onClick={() => handleClick(6)} value={state[6]} />
            <Box onClick={() => handleClick(7)} value={state[7]} />
            <Box onClick={() => handleClick(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
