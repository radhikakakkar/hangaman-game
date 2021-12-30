import React from 'react'

const Word = ({ selectedWord, correctLetters }) => {
    return (
        <div className="word-container">
           <div className="letter-contanier">
        {selectedWord.split('').map((letter, i)=> {
            return(
                // console.log({letter});
                <span className="letter" key={i}>
                {correctLetters.includes(letter) ? letter :''}
                </span>
            )
        })}
        </div>
        </div>
    )
}

export default Word
