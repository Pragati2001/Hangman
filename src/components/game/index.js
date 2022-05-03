import React, { useState } from 'react';
import Layout from './layout';


const MAX_LIVES = 6;
export default function Game() {
    const [playedLetter, setplayedLetter] = useState([]);
    const [actualWord, setactualWord] = useState("");

    const word_set=new Set([...actualWord]);
    const played_set=new Set([...playedLetter]);
    const wrongLetter=playedLetter.filter((letter)=>{
        return !word_set.has(letter);
    });



    const lives=MAX_LIVES-wrongLetter.length;
    const isRunning=lives&&actualWord;
    const isWon=isRunning&&[...word_set].reduce((acc,curr)=>{
        if (!played_set.has(curr)) return false;
        return acc;
    },true)
    const guess=letter=>{
        setplayedLetter((prev)=>[...prev,letter]);
    }
    const start=()=>{
        setactualWord("bazzinga")
        setplayedLetter([]);
    }

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
      />
    </>
  )
}
