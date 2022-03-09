import { React } from "react";
import { ActionBanner, Card } from ".";
import challenges from "../util/challenges.json"

function Challenges() {
  return (
    <div className="challenges-page">
      
      {/* Cards */}
      {/* Make sure each item in a row is a card */}
      <div class="container">
      <ActionBanner headerText="Welcome to the Challenges Page" />
        <div class="row row-cols-2 row-cols-lg-3 gb-2 g-lg-3 ">
          {challenges.challenges.map(challenge => 
            <Card 
            id={challenge.id} 
            key={challenge.id} 
            image={challenge.image}
            title={challenge.title} 
            subtext={challenge.subtext} 
            buttonText={challenge.buttonText} 
            mutedText={challenge.mutedText} 
            link={challenge.link}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Challenges;
