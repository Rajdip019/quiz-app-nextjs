import React from 'react'


const HighScores = ({handleState, highScore, hadleClearHighScore }) => {

  let sortedList = []
    if(highScore){
      sortedList = highScore.sort((a , b ) => {
        return b.score - a.score;
      })
    }

    return (
        <div>
       <div className="flex flex-col justify-center h-[90vh]">
      <div className="lg:w-6/12 w-10/12 mx-auto px-10 py-16 outline outline-slate-300 outline-2 rounded-3xl shadow-xl">
        <h1 className="font-black font-Inter mb-6 drop-shadow-sm">
          Highscores
        </h1>
        {highScore && (
        <>
        {sortedList.map((entry, index) => {
        return (
        <p className=" font-medium drop-shadow-sm mb-5 indent-3">
          {index+1}. {entry.name} - {entry.score}
        </p>
        )
        })}
        </>
        )}
        <button className="bg-skin-main text-white px-3 py-3 rounded-lg hover:bg-green-900 transition-all shadow-md mr-5 mb-3" onClick={() => {handleState("start")}}>
          Go back
        </button>
        <button className="bg-skin-main text-white px-3 py-3 rounded-lg hover:bg-green-900 transition-all shadow-md" onClick={() => {hadleClearHighScore();}}>
          Clear Highscores
        </button>
      </div>
    </div>
        </div>
    )
}

export default HighScores
