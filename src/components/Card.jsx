import React, {useState} from "react";
import { Link } from "react-router-dom";

// image={require("../images/" + image.filePath.replaceAll('\n','\\u003cbr\\u003e'))}
function Card(props) {

  const [completed, setCompleted] = useState(false);
  const [score, setScore] = useState(0);

 // create request for card completion

  return (
    <div className="cardHolder">
      <div class="card p-4 bg-white">
        <div class={`card-body-${props.type}`}>
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.subtext}</p>
         
          <p class="card-text">
            <small class="text-muted">{props.mutedText}</small>
          </p>
          {completed ? (
            <p className='challenge-complete'>Completed</p>
          ) :
          ( <p className='challenge-incomplete'>Not Completed</p>)}
          <p>Score: {score}</p>
          <Link to={`/challengeExam/${props.id}`} onClick={() => window.scrollTo(0, 0)}>
              {completed ? <button href="#" className="stretched-link btn btn-primary mb-3">Practice Again</button> : 
              <button href="#" className="stretched-link btn btn-primary mb-3">Practice Now</button>}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
