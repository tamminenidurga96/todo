import React, { useState, useContext } from "react";
import { MyContext } from "../App";

const myQuestion = [
  {
    title: "1. What is the value of (14) squared?",
    A: "156",
    B: "166",
    C: "176",
    D: "196",
    answer: "D",
  },
  {
    title: "2. What is the value of (16) squared?",
    A: "156",
    B: "166",
    C: "256",
    D: "196",
    answer: "C", // Corrected to lowercase "c"
  },
  {
    title: "3. What is the value of (15) squared?",
    A: "156",
    B: "166",
    C: "225",
    D: "196",
    answer: "C",
  },
];

export function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { setData, setScore,Score  } = useContext(MyContext); // Corrected to MyContext
  const [ correctAnswer, setCorrectAnswer] = useState(" ")

  function goToNewQuestion() {
    setCurrentQuestion(currentQuestion + 1);

    if (myQuestion[currentQuestion].answer === correctAnswer){
      setScore(Score + 1)

    }
  }

  function goToResults() {
    setData("result");
  }

  const buttonStyle = {
    marginLeft: "80px",
    padding: "10px",
    width: "150px",
    height: "50px",
    marginTop: "20px",
    backgroundColor: "black",
    color: "white",
  };

  const continueButtonStyle = {
    marginLeft: "80px",
    marginTop: "20px",
    padding: "10px",
    width: "150px",
    height: "50px",
    color: "white",
    backgroundColor: "green",
  };

  const submitButtonStyle = {
    marginLeft: "80px",
    marginTop: "20px",
    padding: "10px",
    width: "150px",
    height: "50px",
    color: "white",
    backgroundColor: "red",
  };

  return (
    <div>
      <div style={{ marginTop: "100px", marginLeft: "500px" }}>
        <h3>{myQuestion[currentQuestion].title} </h3>
        <div>
          <button onClick={function(){
            setCorrectAnswer("A")

          }}
           style={buttonStyle}>1. {myQuestion[currentQuestion].A}</button>
        </div>
        <div>
          <button onClick={function(){
            setCorrectAnswer("B")

          }} style={buttonStyle}>2. {myQuestion[currentQuestion].B}</button>
        </div>
        <div>
          <button onClick={function(){
            setCorrectAnswer("C")

          }} style={buttonStyle}>3. {myQuestion[currentQuestion].C}</button>
        </div>
        <div>
          <button onClick={function(){
            setCorrectAnswer("D")

          }} style={buttonStyle}>4. {myQuestion[currentQuestion].D}</button>
        </div>
        {currentQuestion === myQuestion.length - 1 ? (
          <button style={submitButtonStyle} onClick={goToResults}>
            Submit
          </button>
        ) : (
          <button style={continueButtonStyle} onClick={goToNewQuestion}>
            Continue
          </button>
        )}
      </div>
    </div>
  );
}

export default Question;
