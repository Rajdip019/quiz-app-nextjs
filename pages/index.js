import React, { useState, useRef, useEffect } from "react";
import Document from "./document";
import Navbar from "./components/Navbar";
import StartCard from "./components/StartCard";
import Footer from "./components/Footer";
import Question from "./components/Question";
import questions from "./../database/questions";
import HighScores from "./components/HighScores";
import AllDone from "./components/AllDone";

const Home = () => {
  const [state, setState] = useState("start");
  const [questionNo, setQuestionNO] = useState(0);
  const [score, setScore] = useState(0);

  //Handleing the Questions Coming One by One.

  const handleQuestion = () => {
    if (questions.length > questionNo + 1) {
      setQuestionNO(questionNo + 1);
    } else {
      setState("done")
      setTimeout(() => {
        setTimerOn(false);
        setTime(50000);
      }, 900);
    }
  };

  const handleReset = () => {
    setQuestionNO(0);
  }

  //Hnadleing the State of the Application

  const handleState = (newState) => {
    setState(newState);
  };

  //Handleing the Score

  const handleScore = (UserScore) => {
    setScore(UserScore);
  };

  //Handleing the Timer

  const [time, setTime] = useState(50000);
  const [timerOn, setTimerOn] = useState(false);
  const [deduct, setDeduct] = useState(false);

  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1000);
      }, 1000);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    if (deduct) {
      setTime((prevTime) => prevTime - 10000);
      setDeduct(false);
    }
    return () => clearInterval(interval);
  }, [timerOn, deduct]);

  useEffect(() => {
    if (time <= 0) {
      setTimeout(() => {
        setTimerOn(false);
        setTime(50000);
      }, 900);
      setState("done")
    }
  }, [time]);

  //Functions to Start the timer 
  const handleTimerStart = () => {
    setTimerOn(true);
  }

  const handleWrongAnswer = () => {
    setDeduct(true)
  }

  //Hanlde The High Scores

  const [highScore, setHighScore] = useState([]);
  const handleHighScore = (newScore) => {
    setHighScore((prevScores) => {
      return [...prevScores, newScore]
    }) 
  }

  //Clear High Scores 
  const hadleClearHighScore = () => {
    setHighScore([]);
  }

  return (
    <div className="h-screen">
      <Document />
      <div className=" bg-skin-main py-5 px-7 flex items-center justify-between shadow-lg">
        <div className="flex items-center">
          <p
            className="text-left text-white font-light mr-3 cursor-pointer hover:text-gray-200 transition-all"
            onClick={() => {
              handleState("highscore");
            }}
          >
            View HighScores
          </p>
          <i className="fas fa-hand-point-left fa-lg text-white"></i>
        </div>
        <p className="text-right text-white font-light">Time: {time/1000}</p>
      </div>
      {state === "start" && (
        <StartCard handleState={handleState} handleTimerStart={handleTimerStart} />
      )}
      {state === "quiz" && (
        <Question
          questionText={questions[questionNo].questionText}
          options={questions[questionNo].options}
          answer={questions[questionNo].answer}
          handleQuestion={handleQuestion}
          handleState={handleState}
          handleScore={handleScore}
          handleWrongAnswer ={handleWrongAnswer}
        />
      )}
      {state === "highscore" && <HighScores handleState={handleState} highScore={highScore} hadleClearHighScore={hadleClearHighScore}/>}
      {state === "done" && <AllDone score={score} handleHighScore = {handleHighScore} handleState ={handleState} handleReset={handleReset}/>}
      <Footer />
    </div>
  );
};

export default Home;
