import { React } from "react";
import { ActionBanner } from ".";

function Home() {
  return (
    <div className="home">
         <ActionBanner
         headerText="Apollo"
         subText="Flashcards for interactive learning of music theory"
         />
        <p>Click on the Challenges Button to begin learning</p>
        <p>Click on the Login Button to save and report progress</p>
        </div>

  );
}

export default Home;
