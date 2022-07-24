import React from "react";
import Lives from "./lives";
import Word from "./word";
import Letters from "./letters";
import Start from "./start";
import Won from "./won";
import { useState } from "react";

export default function Layout({
  lives,
  actualWord,
  played_set,
  guess,
  start,
  isWon,
  isRunning,
  next_game,
  // flag,
  // setNumber,
}) {
  // const [won,setWon]=useState("lose");
  // if(isWon) setWon("win");
  // console.log(won);
  return (
    <>
      <div className="game-wrapper">
        {isRunning && isWon == 0 && (
          <>
            <div className="left-pane">
              <Lives livesLeft={lives} />
            </div>
            <div className="right-pane">
              <Word actualWord={actualWord} playedLetters={played_set} />
              <Letters playedLetters={played_set} onSelect={guess} />
            </div>
          </>
        )}
        {<Start onStart={start} isRunning={isRunning} />}

        {isWon && (
          <>
            <Won next_game={next_game} />
          </>
        )}
      </div>
    </>
  );
}
