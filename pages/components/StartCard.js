import React from "react";

const StartCard = ({handleState, handleTimerStart}) => {
  return (
    <div className="flex flex-col justify-center h-[90vh]">
      <div className="lg:w-6/12 w-10/12 mx-auto px-10 py-16 outline outline-slate-300 outline-2 rounded-3xl shadow-xl">
        <h1 className="font-black font-Inter mb-6 drop-shadow-sm">
          Coding Quiz Challenge
        </h1>
        <p className=" font-medium drop-shadow-sm mb-5">
          Try to answer to following code-related questions within time limit.
        </p>
        <p className=" font-medium drop-shadow-sm mb-4">
          Keep in ind that incorrect answers will penalize your score/time bey
          ten seconds!
        </p>
        <button className="bg-skin-main text-white px-3 py-3 rounded-lg hover:bg-green-900 transition-all shadow-md" onClick={() => {handleState("quiz"); handleTimerStart();}}>
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default StartCard;
