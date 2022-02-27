import React, { useState } from 'react';
import FlashcardList from './FlashcardList';
import '../App.css'

function ChallengeExam() {
  const [flashcards, setFlashcards] = useState([{
    "question": "What is C#?",
    "answer": "a note"
  }, {
    "question": "Who was mozart?",
    "answer": "A famous musician"
  }, {
    "question": "Does this card flip?",
    "answer": "Oh yes it does"
  }])
  return (
    <div className='challengeExam'>
      <div className="container">
        <FlashcardList flashcards={flashcards} />
      </div>
    </div>
  );
}

export default ChallengeExam;