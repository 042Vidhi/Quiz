import React, { useState, useEffect } from 'react';
import { Progress } from 'antd';

const Quiz = () => {
  const [timer, setTimer] = useState(120); // Main Timer
  const[questionTimer , setQuestionTimer] = useState(5);
  const [progress, setProgress] = useState(0); // Progress percentage
  const [texts, setTexts] = useState(["BLUE", "RED", "GREEN"]); // Array of text values
  const [colors, setColors] = useState(["#0000FF", "#FF0000", "#008000"]); // Array of text colors
  const [textIndex, setTextIndex] = useState(0); // Index to track current text
  const [textColorIndex, setTextColorIndex] = useState(0); // Index to track current text color
  const [correct, setCorrect] = useState(0); // Number of correct answers
  const [wrong, setWrong] = useState(0); // Number of wrong answers
  const[finish,setFinish] = useState(false);
 


// Handle user click
const handleClick = () => {
  if (textIndex === textColorIndex) {
    setCorrect(correct + 1);
  } else {
    setWrong(wrong + 1);
  }
  resetText(); 
  setQuestionTimer(0);
};


  // Random text and color
  const resetText = () => {
    setTextIndex(Math.floor(Math.random() * 3));
    setTextColorIndex(Math.floor(Math.random() * 3));
  };


// Change text and text color periodically
useEffect(() => {
  const questionTimerInterval = setInterval(() => {
    if (questionTimer > 0) {
      setQuestionTimer((prev) => prev - 1);
    } else {
      if(textIndex!==textColorIndex) setCorrect(correct+1)
      if(textColorIndex === textIndex) setWrong(wrong+1)
      resetText(); // Reset text and color
      setQuestionTimer(5); // Reset the question timer
    }
    setTimer((prevtime)=> prevtime - 1)
    setProgress(100 - (timer/120)*100);
    if(timer === 0) setFinish(true);
  }, 1000); // Update question timer every second

  return () => {
    clearInterval(questionTimerInterval);
  };
}, [questionTimer]); // Add questionTimer as dependency


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">

    {
      !finish  ? ( 
        <div>
        <div className="w-full absolute top-0 left-0 p-4 flex justify-between items-center">
        <div className='w-[85%]'>
          <Progress percent={Math.round(progress)} strokeColor={'#22C55E'} />
        </div>

        <div className="flex justify-center text-lg rounded-md w-[12%] bg-purple-400 text-white p-2 ">
          <p>{timer}</p><p>sec</p>
        </div>
      </div>
        <p className='text-center'>Timer:{questionTimer}</p>
        <div className=" border-2 py-2 border-slate-300 my-2 rounded-lg  flex gap-6 justify-center items-center">
        <p>Correct: {correct}</p>
        <p>Wrong: {wrong}</p>
      </div>
      
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-[500] mb-8 ">Left Click when it matches</h1>
        <div className="lg:w-80 w-60 font-bold text-6xl bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center cursor-pointer" style={{ color: colors[textColorIndex] }} 
        onClick={handleClick}
        >
          {texts[textIndex]}
        </div>
      </div>
     
        </div>
      )
      :(
        <div>Results</div>
      )
    }
     
    </div>
  );
};

export default Quiz;
