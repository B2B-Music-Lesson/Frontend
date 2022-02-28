import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const ResponseBox = ({answer, guess, explanation}) => {
   return (
      <Wrapper>

      </Wrapper>
   );
}

const CorrectBox = ({explanation}) => {
   return (
      <Wrapper>
         <h3>{answer === guess ? "Success!" : "Oops!"}</h3>
         <p>{explanation}</p>
      </Wrapper>
   )
}

const Wrapper = styled.div`
   display: flex;
   justify-content: center;
   background-color: var(--background-color);
   color: var(--color);
`

const IncorrectHeader = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: baseline;
`
 
export default ResponseBox;