import React from "react";
import { useState } from "react";
import styled from "styled-components";

export default function Mathgen() {
  let inta = Math.floor(Math.random() * 100);
  let intb = Math.floor(Math.random() * 100);
  return (
    <Wrapper>
      <Generator>
        <Question>
          What is {inta} + {intb} ?
        </Question>
        <SubmitInput id="answer"></SubmitInput>
        <SubmitButton>Submit</SubmitButton>
      </Generator>
    </Wrapper>
  );
}

const Question = styled.h2`
  background: pink;
`;

const Wrapper = styled.div`
  background: blue;
  width: 500px;
  position: relative;
  left: 175px;
  top: 75px;
`;

const Generator = styled.div`
  background: pink;
  width: 500px;
  position: absolute;
`;

const SubmitButton = styled.button`
  width: fit-content;
`;

const SubmitInput = styled.input`
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  background: white;
  width: fit-content;
`;
