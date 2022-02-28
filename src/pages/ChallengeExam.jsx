import React, { useState } from "react";
import FlashcardList from "./FlashcardList";
import styled from "styled-components";
import "../App.css";
import AnswerButtons from "../components/NotesQuiz/AnswerButtons";
import { COLORS } from "../constants";

const ChallengeExam = () => {

  const [answer, setAnswer] = useState("A");
  const [answerHidden, setAnswerHidden] = useState(true);
  
  return (
    <ExamWrapper>
      <ExamTitle>Treble Clef Space Notes</ExamTitle>
      <QuestionNumber>Question 1:</QuestionNumber>
      <QuestionContent>
        picture of treble clef staff and a half note A
      </QuestionContent>
      <AnswerButtons answer={answer} answerHidden={answerHidden}/>
      <ExamFooter>
        <ProgressBar>
          --------------- progress bar goes here
          ----------------------------------
        </ProgressBar>
        <SubmitButton onClick={() => setAnswerHidden(false)}>SUBMIT</SubmitButton>
      </ExamFooter>
      <ResponseBox>Success!</ResponseBox>
    </ExamWrapper>
  );
}

const ExamWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr min(80ch, 100%) 1fr;
  height: 100%;
  & > * {
    grid-column: 2;
  }
`;

const ExamTitle = styled.h3`
  margin-top: 16px;
`;

const QuestionNumber = styled.div`
  font-weight: bold;
  justify-self: start;
`;

const QuestionContent = styled.div`
  margin-top: 8px;
  align-self: center;
  border: 3px solid black;
  border-radius: 4px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;


const ExamFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProgressBar = styled.div`
  border: 2px solid black;
  padding: 0px 16px;
  letter-spacing: 1px;
  border-radius: 4px;
`;
const SubmitButton = styled.button`
  cursor: pointer;
  background-color: hsl(225deg, 15%, 15%);
  border: none;
  color: white;
  letter-spacing: 1px;
  padding: 12px 20px;
  border-radius: 3px;
  &:hover {
    background-color: hsl(225deg, 15%, 20%);
  }
`;
const ResponseBox = styled.div`
  background-color: ${COLORS.LightGreen};
  color: ${COLORS.DarkGreen};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 12px 24px;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export default ChallengeExam;
