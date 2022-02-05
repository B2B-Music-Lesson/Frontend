import { React } from "react";
import { ActionBanner, Card } from ".";

function Challenges() {
  return (
    <div className="home">
      <ActionBanner headerText="Welcome to the Challenges Page" />
      {/* Cards */}
      {/* Make sure each item in a row is a card */}
      <div class="container">
        <div class="row row-cols-2 row-cols-lg-3 gb-2 g-lg-3 ">
        <Card
            title="Challenge Exam #1"
            subtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At urna condimentum mattis pellentesque id nibh. Pretium quam vulputate dignissim suspendisse in est ante."
            buttonText="Practice Now"
            mutedText="Average completion time: 15 minutes"
          />
          <Card
            title="Challenge Exam #2"
            subtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At urna condimentum mattis pellentesque id nibh. Pretium quam vulputate dignissim suspendisse in est ante."
            buttonText="Practice Now"
            mutedText="Average completion time: 15 minutes"
          />
          <Card
            title="Challenge Exam #3"
            subtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At urna condimentum mattis pellentesque id nibh. Pretium quam vulputate dignissim suspendisse in est ante."
            buttonText="Practice Now"
            mutedText="Average completion time: 15 minutes"
          />
          <Card
            title="Challenge Exam #4"
            subtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At urna condimentum mattis pellentesque id nibh. Pretium quam vulputate dignissim suspendisse in est ante."
            buttonText="Practice Now"
            mutedText="Average completion time: 15 minutes"
          />
        </div>
      </div>
    </div>
  );
}

export default Challenges;
