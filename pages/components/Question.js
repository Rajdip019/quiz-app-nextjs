import React, { useState } from "react";

const Question = ({
  questionText,
  options,
  answer,
  handleQuestion,
  handleScore,
  handleWrongAnswer,
}) => {
  const [isCoreect, setIsCorrect] = useState(null);
  const [score, SetScore] = useState(0);

  const handleAnswer = async (userAnswer) => {
    if (answer === userAnswer) {
      setIsCorrect(true);
      SetScore(score + 10);
    } else {
      setIsCorrect(false);
      handleWrongAnswer();
    }
  };

  try{

    handleScore(score);
  }catch{(err) => {console.log(err)}}

  return (
    <div>
      <div className="flex flex-col justify-center h-[90vh]">
        <div className="lg:w-6/12 w-10/12 mx-auto px-10 py-16 outline outline-slate-300 outline-2 rounded-3xl shadow-xl">
          <h1 className="font-black font-Inter mb-6 drop-shadow-sm text-4xl">
            {questionText}
          </h1>
          {options && (
            <>
              {options.map((option, index) => {
                return (
                  <p
                    className=" font-medium drop-shadow-sm my-2 bg-skin-main text-white p-3 rounded-xl pl-5 hover:bg-teal-700 transition-all cursor-pointer"
                    onClick={async () => {
                      await handleAnswer(option);
                      handleQuestion();
                    }}
                  >
                    {option}
                  </p>
                );
              })}
            </>
          )}
          <br />
          <hr />
          <br />
          {isCoreect === null && (
            <p className=" font-medium drop-shadow-sm ml-3">
              Let's Start Evaluating!
            </p>
          )}
          {isCoreect !== null && (
            <>
              {isCoreect ? (
                <p className=" font-medium drop-shadow-sm ml-3">Correct!</p>
              ) : (
                <p className=" font-medium drop-shadow-sm ml-3">Incorrect!</p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Question;
