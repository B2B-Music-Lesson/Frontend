import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "../App.css";
import AnswerButtons from "../components/NotesQuiz/AnswerButtons";
import ResponseBox from "../components/NotesQuiz/ResponseBox";
import SheetMusic from "react-sheet-music";
import { Piano, KeyboardShortcuts, MidiNumbers } from "react-piano";
import "react-piano/dist/styles.css";
import ProgressBar from "@ramonak/react-progress-bar";

import SoundfontProvider from "./SoundfontProvider";

const ChallengeExam = () => {
  const noteRange = {
    first: MidiNumbers.fromNote("c3"),
    last: MidiNumbers.fromNote("b3"),
  };
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const soundfontHostname = "https://d1pzp51pvbm36p.cloudfront.net";
  const firstNote = MidiNumbers.fromNote("c3");
  const lastNote = MidiNumbers.fromNote("f5");
  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: firstNote,
    lastNote: lastNote,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
  });

  const EXPLANATIONS = {
    F: "F-A-C-E spells out the four spaces of the treble clef from bottom to top, so the first space will be F",
    A: "F-A-C-E spells out the four spaces of the treble clef from bottom to top, so the second space will be A",
    C: "F-A-C-E spells out the four spaces of the treble clef from bottom to top, so the third space will be C",
    E: "F-A-C-E spells out the four spaces of the treble clef from bottom to top, so the fourth space will be E",
  };

  const NOTATIONS = {
    F: "F",
    A: "A",
    C: "c",
    E: "e",
  };

  const QUESTIONS = ["F", "A", "E", "C", "A", "F", "E", "F", "C", "A"];

  const [questionNumber, setQuestionNumber] = useState(0);
  const [answer, setAnswer] = useState(QUESTIONS[questionNumber]);
  const [answerHidden, setAnswerHidden] = useState(true);
  const [selected, setSelected] = useState("none");

  useEffect(() => {
    setAnswerHidden(true);
    setAnswer(QUESTIONS[questionNumber]);
    setSelected("none");
  }, [questionNumber]);

  // this saves the note played
  // it uses the midinumber format
  //we will need to convert midinumber to actual key
  const saveNote = (note) => {
    console.log(note + " was saved as the answer");
  };

  return (
    <ExamWrapper>
      <ExamTitle>Treble Clef Space Notes</ExamTitle>
      <QuestionNumber>
        Question {questionNumber + 1} / {QUESTIONS.length}:
      </QuestionNumber>
      <QuestionContent>
        <MusicWrapper>
          <SheetMusic
            notation={`|${NOTATIONS[answer]}2|`}
            scale={3}
            responsive="resize"
          />
        </MusicWrapper>
      </QuestionContent>
      <AnswerButtons
        answer={answer}
        answerHidden={answerHidden}
        selected={selected}
        setSelected={setSelected}
      />
      <ExamFooter>
        <ProgressBar
          completed={questionNumber * 10}
          className="wrapper"
          bgColor="linear-gradient(90deg, rgba(10,10,198,1) 0%, rgba(0,212,255,1) 100%)"
        />
        {answerHidden ? (
          <BaseButton onClick={() => setAnswerHidden(false)}>SUBMIT</BaseButton>
        ) : (
          <BaseButton
            onClick={() => {
              setQuestionNumber((prev) => prev + 1);
            }}
          >
            {"NEXT ->"}
          </BaseButton>
        )}
      </ExamFooter>
      {!answerHidden && (
        <ResponseBox
          answer={answer}
          guess={selected}
          explanation={EXPLANATIONS[answer]}
        ></ResponseBox>
      )}
      <SoundfontProvider
        instrumentName="acoustic_grand_piano"
        audioContext={audioContext}
        hostname={soundfontHostname}
        render={({ isLoading, playNote, stopNote }) => (
          <Piano
            noteRange={noteRange}
            width={600}
            playNote={playNote}
            stopNote={stopNote}
            keyboardShortcuts={keyboardShortcuts}
            onPlayNoteInput={(midiNumber) => saveNote(midiNumber)}
          />
        )}
      />
    </ExamWrapper>
  );
};


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

const MusicWrapper = styled.div`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
`;

const ExamFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// const ProgressBar = styled.div`
//   border: 2px solid black;
//   padding: 0px 16px;
//   letter-spacing: 1px;
//   border-radius: 4px;
// `;
const BaseButton = styled.button`
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

export default ChallengeExam;
