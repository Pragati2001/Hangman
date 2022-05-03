import React from 'react'

const ALL_ALPHABETS = [..."abcdefghijklmnopqrstuvwxyz"];

export default function Letters({
  playedLetters, onSelect,isWon
}) {
  return (
    <div className={`display-flex justify-content-center ${isWon && 'display-none'}`}>
      {ALL_ALPHABETS.map((alphabet) => (
        <button
          onClick={() => onSelect(alphabet)}
          disabled={playedLetters.has(alphabet)}
          className='start-button start-button--letter'
        >
          {alphabet}
        </button>
      ))}
    </div>
  )
}
