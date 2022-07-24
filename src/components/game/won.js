import React from "react";

export default function Won({ next_game }) {
  return (
    <div className="win">
      <button
        className="start-button"
        onClick={() => {
          next_game("Enter");
        }}
      >
        You Won the game
        {/* <p className="p_style">You Won the game!!</p> */}
        {/* <div>Click to Start new Game</div> */}
      </button>
    </div>
  );
}
