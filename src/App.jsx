import styled from "styled-components";
import { useState } from "react";
import React from "react";

function App() {
  const [step, setState] = useState(1);
  const style = {
    backgroundColor: "#7950f2",
    color: "white",
  };
  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

  return (
    <Wrapper>
      <Step step={step}>
        <Number style={{ "--Color": step === 1 && "#7950f2" }}>1</Number>
        <Number style={{ "--Color": step === 2 && "#7950f2" }}>2</Number>
        <Number style={{ "--Color": step === 3 && "#7950f2" }}>3</Number>
      </Step>
      <Span>
        Step: {step} {messages[step - 1]}
      </Span>
      <Buttons>
        <Button
          onClick={() => {
            if (step === 1) return;
            else setState(step - 1);
          }}
        >
          Previous
        </Button>
        <Button
          onClick={() => {
            if (step === messages.length) return;
            else setState(step + 1);
          }}
        >
          Next
        </Button>
      </Buttons>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 600px;
  background-color: #f7f7f7;
  margin: 20px auto;
  border-radius: 7px;
  padding: 25px 100px;
  margin: 100px auto;
`;

const Step = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
const Number = styled.div`
  height: 40px;
  aspect-ratio: 1;
  background-color: #e7e7e7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;

  ${Step} & {
    background-color: var(--Color);
  }
`;
const Span = styled.span`
  display: block;
  text-align: center;
  font-size: 20px;
  margin: 40px 0;
  font-weight: bold;
`;
const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  border: none;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 100px;
  font-size: 14px;
  font-weight: bold;
  background-color: #7950f2;
  color: #fff;

  display: flex;
  align-items: center;
  gap: 10px;
`;
export default App;
