import React from "react";
import { useEffect } from "react";

const Popup = ({
  correctLetters,
  wrongLetters,
  selectedWord,
  setPlayable,
  playAgain,
}) => {
  let finalMsg = "";
  let status = "win";
  let wordReveal = "";
  let playable = true;

  const checkWin = (correctLetters, wrongLetters, selectedWord) => {
    selectedWord.split("").forEach((letter) => {
      if (!correctLetters.includes(letter)) {
        status = "";
      }
    });

    if (wrongLetters.length === 6) {
      status = "lose";
    }

    return status;
  };
  let nstatus = checkWin(
    correctLetters,
    wrongLetters,
    selectedWord,
    setPlayable
  );
  if (nstatus === "win") {
    finalMsg = "congrats you won";
    playable = false;
  } else if (nstatus === "lose") {
    finalMsg = "You lost";
    wordReveal = "... the word was" + " " + selectedWord;
    playable = false;
  }
  // console.log(nstatus);
  useEffect(() => setPlayable(playable));

  return (
    <div
      className="popup-container"
      style={nstatus !== "" ? { display: "block" } : { display: "none" }}
    >
      <h2>{finalMsg}</h2>
      <h5> {wordReveal}</h5>
      <button onClick={playAgain} className="play-button">
        Play Again
      </button>
    </div>
  );
};

export default Popup;

// {/* winning condition */}
// if (selectedWord.split('').map((letter, i)=> correctLetters.includes(letter)) && wrongLetters.length < 6)
// {
//     return 1;
// }
// // else {
// //     return 0;
// // }

// console.log(status);
// if (checkWin(correctLetters, wrongLetters, selectedWord, setPlayable) === 1 ){

// else if(checkWin(correctLetters, wrongLetters, selectedWord, setPlayable) === 0){
