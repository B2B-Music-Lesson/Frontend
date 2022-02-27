import React, { useState } from 'react'

export default function Flashcard({ flashcard }) {
  const [flip, setFlip] = useState(false)

  return (
    <div
      className={`card m-1 ${flip ? 'flip' : ''}`}
      style={{ height: 100}}
      onClick={() => setFlip(!flip)}
    >
      <div className="front" >
        {flashcard.question}
      </div>
      <div className="back" >{flashcard.answer}</div>
    </div>
  )
}
