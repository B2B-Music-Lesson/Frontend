import React from "react";
import { Link } from "react-router-dom";

// image={require("../images/" + image.filePath.replaceAll('\n','\\u003cbr\\u003e'))}
function Card(props) {
  return (
    <div className="cardHolder">
      <div class="card p-4 bg-white">
        <div class={`card-body-${props.type}`}>
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.subtext}</p>
          <Link to={`/challengeExam/${props.id}`} onClick={() => window.scrollTo(0, 0)}>
            <button href="#" className="stretched-link btn btn-primary mb-3">
              {props.buttonText}
            </button>
          </Link>
          <p class="card-text">
            <small class="text-muted">{props.mutedText}</small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
