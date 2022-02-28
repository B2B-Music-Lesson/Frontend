import * as React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";

const ResponseBox = ({ answer, guess, explanation }) => {
  let Wrapper;

  if (answer === guess) {
    Wrapper = CorrectWrapper;
  } else {
    Wrapper = IncorrectWrapper;
  }

  return (
    <Wrapper>
        {answer === guess ? (
          <h3>Correct!</h3>
        ) : (
          <IncorrectHeader>
            <h3>Oops!</h3>
            <Explanation>
              You answered {guess}, but the correct answer was {answer}
            </Explanation>
          </IncorrectHeader>
        )}
      <p>{explanation}</p>
    </Wrapper>
  );
};

const BaseWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  text-align: left;
  padding: 12px 60px;
  border-radius: 4px;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const CorrectWrapper = styled(BaseWrapper)`
  background-color: ${COLORS.LightGreen};
  color: ${COLORS.DarkGreen};
`;

const IncorrectWrapper = styled(BaseWrapper)`
  background-color: ${COLORS.LightRed};
  color: ${COLORS.DarkRed};
`;
const IncorrectHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;
const Explanation = styled.p`
   margin-left: auto;
   margin-right: auto;
   font-weight: 550;
`

export default ResponseBox;
