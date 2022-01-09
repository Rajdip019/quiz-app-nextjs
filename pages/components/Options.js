import React from "react";

const Options = ({options, handleAnswer, handleQuestion ,key}) => {
  return (
    <div >

      <p className=" font-medium drop-shadow-sm my-2 bg-skin-main text-white p-3 rounded-xl pl-5 hover:bg-teal-700 transition-all cursor-pointer" key={key} onClick={()=> {handleAnswer(options); handleQuestion()} }>
        {options}
      </p>

    </div>
  );
};

export default Options;
