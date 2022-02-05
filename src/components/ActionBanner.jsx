import React from "react";

function ActionBanner(props) {
  return (
    <div>
      <div class="text-center bg-white ">
        <br />
        <h1 class="display-4">{props.headerText}</h1>
        <p class="lead"></p>
        {props.headerLine ? <hr class="my-1" /> : null}
        <p>{props.subText}</p>
        <p class="lead">{props.button}</p>
        <br />
      </div>
    </div>
  );
}

export default ActionBanner;
