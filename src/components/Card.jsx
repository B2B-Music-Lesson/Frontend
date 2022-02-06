import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="cardHolder">
      <div class="card p-4">
        <img class="card-img-top" src="..." alt="Challenge Exam" />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.subtext}</p>
          <Link to="/challengeExam" onClick={() => window.scrollTo(0, 0)}>
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
