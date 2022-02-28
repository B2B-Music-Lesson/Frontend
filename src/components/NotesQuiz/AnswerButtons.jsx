import * as React from "react";
import { useState } from "react";
import { COLORS } from "../../constants";
import styled from "styled-components";

const AnswerButtons = ({ answer, answerHidden, selected, setSelected }) => {

  return (
    <AnswerButtonsWrapper>
      <AnswerButton
        answer={answer}
        answerHidden={answerHidden}
        noteName="A"
        selectedNote={selected}
        setSelected={setSelected}
      />
      <AnswerButton
        answer={answer}
        answerHidden={answerHidden}
        noteName="B"
        selectedNote={selected}
        setSelected={setSelected}
      />
      <AnswerButton
        answer={answer}
        answerHidden={answerHidden}
        noteName="C"
        selectedNote={selected}
        setSelected={setSelected}
      />
      <AnswerButton
        answer={answer}
        answerHidden={answerHidden}
        noteName="D"
        selectedNote={selected}
        setSelected={setSelected}
      />
      <AnswerButton
        answer={answer}
        answerHidden={answerHidden}
        noteName="E"
        selectedNote={selected}
        setSelected={setSelected}
      />
      <AnswerButton
        answer={answer}
        answerHidden={answerHidden}
        noteName="F"
        selectedNote={selected}
        setSelected={setSelected}
      />
      <AnswerButton
        answer={answer}
        answerHidden={answerHidden}
        noteName="G"
        selectedNote={selected}
        setSelected={setSelected}
      />
    </AnswerButtonsWrapper>
  );
};

const AnswerButton = ({
  noteName,
  selectedNote,
  setSelected,
  answer,
  answerHidden,
}) => {
  let Component;
  if (answerHidden) {
    if (selectedNote === noteName) {
      Component = AnswerButtonSelected;
    } else {
      Component = AnswerButtonBase;
    }
  } else if (answer === noteName) {
    Component = AnswerButtonCorrect;
  } else if (selectedNote === noteName) {
    Component = AnswerButtonWrong;
  } else {
    Component = AnswerButtonBase;
  }

  return (
    <Component onClick={() => {
       if (answerHidden) {
          setSelected(noteName);
       }
    } }>{noteName}</Component>
  );
};

const AnswerButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 8px;
  margin-top: 12px;
`;

// because this works more like a radio button input than a button, just do a div
const AnswerButtonBase = styled.div`
  cursor: pointer;
  padding: 12px 25px;
  border: 2px solid black;
  border-radius: 5px;
  background-color: white;
  font-weight: bold;
  font-size: 1.2rem;
  &:hover {
    background-color: hsl(0deg, 0%, 95%);
  }
`;

const AnswerButtonSelected = styled(AnswerButtonBase)`
  background-color: ${COLORS.LightYellow};
  color: ${COLORS.DarkYellow};
  /* border: 2px solid ${COLORS.DarkYellow}; */
  &:hover {
    background-color: ${COLORS.LightYellow};
  }
`;

const AnswerButtonCorrect = styled(AnswerButtonBase)`
  background-color: ${COLORS.LightGreen};
  color: ${COLORS.DarkGreen};
  border: 2px solid ${COLORS.DarkGreen};
  &:hover {
    background-color: ${COLORS.LightGreen};
  }
`;

const AnswerButtonWrong = styled(AnswerButtonBase)`
  background-color: ${COLORS.LightRed};
  color: ${COLORS.DarkRed};
  border: 2px solid ${COLORS.DarkRed};
  &:hover {
    background-color: ${COLORS.LightRed};
  }
`;

export default AnswerButtons;
