import React, { useState } from "react";

const AllDone = ({ score, handleHighScore, handleState, handleReset }) => {
  const [name, setName] = useState("");
  console.log(name);

  return (
    <div>
      <div className="flex flex-col justify-center h-[90vh]">
        <div className="lg:w-6/12 w-10/12 mx-auto px-10 py-16 outline outline-slate-300 outline-2 rounded-3xl shadow-xl">
          <h1 className="font-black font-Inter mb-6 drop-shadow-sm">
            All Done!
          </h1>
          <p className=" font-medium drop-shadow-sm mb-5">
            Your Final Score is: {score}
          </p>
          <p className=" font-medium drop-shadow-sm mb-4">
            Enter Initials:
            <input
              className="sm:ml-3 mt-3 sm:mt-0 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-gray-700 focus:ring-gray-700 rounded-md sm:text-sm focus:ring-1 sm:w-[250px] w-[150px]"
              placeholder="example: RS"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
            <button
              className="sm:ml-3 mt-3 sm:mt-0 bg-skin-main text-white px-3 py-2 rounded-lg hover:bg-green-900 transition-all shadow-md"
              onClick={(e) => {
                handleHighScore({name:name ,score:score});
                handleState("highscore");
                handleReset();
                console.log({name:name ,score:score})
              }}
            >
              Submit
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllDone;
