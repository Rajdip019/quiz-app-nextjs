import React from 'react'

const TimeUp = ({handleState}) => {
    return (
        <div className="flex flex-col justify-center h-[90vh]">
        <div className="lg:w-6/12 w-10/12 mx-auto px-10 py-16 outline outline-slate-300 outline-2 rounded-3xl shadow-xl">
          <h1 className="font-black font-Inter mb-6 drop-shadow-sm">
            Time Up!
          </h1>
          <p className=" font-medium drop-shadow-sm mb-5">
            Your Score is recorded! 
          </p>
          <p className=" font-medium drop-shadow-sm mb-5">
            Click on Check Score to Check Final Score and Submit it!
          </p>
          <button className="bg-skin-main text-white px-3 py-3 rounded-lg hover:bg-green-900 transition-all shadow-md" onClick={() => {handleState("done");}}>
            Check Score
          </button>
        </div>
      </div>
    )
}

export default TimeUp
