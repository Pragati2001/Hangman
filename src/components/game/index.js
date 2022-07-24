import React, { useState } from "react";
import Layout from "./layout";

const MAX_LIVES = 6;
export default function Game() {
  const [playedLetter, setplayedLetter] = useState([]);
  const [actualWord, setactualWord] = useState("");
  const [number, setNumber] = useState(0);
  const word_set = new Set([...actualWord]);
  const played_set = new Set([...playedLetter]);
  const wrongLetter = playedLetter.filter((letter) => {
    return !word_set.has(letter);
  });
  let flag = 1;
  const words = ["village", "romania", "rock", "duplex", "director"];

  let lives = MAX_LIVES - wrongLetter.length;
  const isRunning = lives && actualWord;
  const isWon =
    isRunning &&
    [...word_set].reduce((acc, curr) => {
      if (!played_set.has(curr)) return false;
      return acc;
    }, true);
  const guess = (letter) => {
    setplayedLetter((prev) => [...prev, letter]);
  };
  const start = () => {
    words.map((no) => {
      setactualWord(words[number]);
    });
    setplayedLetter([]);
  };
  const next_game = (e) => {
    if (e == "Enter") {
      setNumber(number + 1);
      lives = 6;
      setactualWord("");
      isWon = 0;
    }
  };

  return (
    <>
      <Layout
        lives={lives}
        actualWord={actualWord}
        played_set={played_set}
        guess={guess}
        start={start}
        isWon={isWon}
        isRunning={isRunning}
        next_game={next_game}
        flag={flag}
        // number={number}

        // setNumber={setNumber}
      />
    </>
  );
}
