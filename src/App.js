import "./App.css";
import { useState, useEffect } from "react";
import Figure from "./components/Figure";
import Header from "./components/Header";
import Word from "./components/Word";
import Popup from "./components/Popup";
import Notification from "./components/Notification";
import WrongLetter from "./components/WrongLetter";
import { showNotification as show } from "./helpers/helper";

const words = ["application", "programming", "interface", "wizard"];
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  let [playable, setPlayable] = useState(true);
  let [correctLetters, setCorrectLetters] = useState([]);
  let [wrongLetters, setWrongLetters] = useState([]);
  let [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleKeydown = (event) => {
      const key = event.key;
      const keyCode = event.keyCode;

      // const[key, keyCode] = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((correctLetters = [...correctLetters, letter]));
          } else {
            // console.log("letter already used");
            // console.log(letter);
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((wrongLetters = [...wrongLetters, letter]));
          } else {
            // console.log("letter already used (wrong) ");
            show(setShowNotification);
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [wrongLetters, correctLetters, playable]);

  const playAgain = () => {
    setPlayable(true);

    setCorrectLetters([]);
    setWrongLetters([]);

    console.log(selectedWord);
    let random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
    console.log(selectedWord);
  };

  return (
    <div className="App">
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetter wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      <Notification showNotification={showNotification} />
    </div>
  );
}

export default App;
