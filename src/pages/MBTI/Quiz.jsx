import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { quiz7 } from '../../db/MBTI/MBTI';
import Result from './Result';
import {initial_result} from './store_result'
import LikertScale from '../../components/LikertScale';

const Quiz = () => {
    const quizData = quiz7;

    const [activeQuestion, setActiveQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isFinish, setIsFinish] = useState(false);
    const [result, setResult] = useState(initial_result);
    const [score, setScore] = useState(0);
  
    // const navigate = useNavigate();
  
    const handleNext = () => {
      setActiveQuestion((prevQuestion) => Math.min(prevQuestion + 1, quizData.totalQuestions - 1));
      setSelectedAnswer(null);
    };
  
    const handlePrevious = () => {
      setActiveQuestion((prevQuestion) => Math.max(prevQuestion - 1, 0));
      setSelectedAnswer(null);
    };
  
    const handleOptionSelect = (option) => {
      setSelectedAnswer(option);
    };
  
    const handleQuesNavigation=(index)=>{
        setActiveQuestion((index))
    }

    const handleScore = () => {
      let count = 0;
      const updatedResult = result.map(question => {
        if (question.user_ans === question.correct_ans) {
          count++;
          return { ...question, isCorrect: "Yes" };
        } 
        else if (question.user_ans.trim() === "") {
          return { ...question, isCorrect: "Skipped" };
        }
        else if (question.type === "Floating Type" && question.user_ans.trim().toLowerCase() === question.correct_ans.trim().toLowerCase()) {
          count++;
          return { ...question, isCorrect: "Yes" };
        }
        else {
          return { ...question, isCorrect: "No" };
        }
      });
      setScore(count);
      setResult(updatedResult);
      setIsFinish(true);
    };
    
    
    
    const handleSaveAns = (index) => {
      const updatedResult = [...result];
      const updatedQuestion = {
        Sno: index + 1,
        ques: quizData.questions[index].question,
        correct_ans: quizData.questions[index].correctAnswer,
        user_ans: selectedAnswer || "",
        explanation: quizData.questions[index].explanation,
      };
      updatedResult[index] = updatedQuestion;
      setResult(updatedResult);
      handleNext();
    };
    
    
  
    return (
      <div>
        {isFinish ? (
          <Result results={result}  finalScore={score} />
        ) : (
          <div>
            <h1 className='text-center font-medium text-xl py-2'>{quizData.quizName}</h1>
            <p className='text-center text-sm py-2'>Category: {quizData.category}</p>
            <section className='flex'>
            <div className='w-[100%]'>
              {quizData.questions.map((question, index) => (
                <div key={index} style={{ display: index === activeQuestion ? 'block' : 'none' }}>
                  {
                    <div>

                    <LikertScale question={question.question}/>
                    <LikertScale question={question.question}/>

                    <LikertScale question={question.question}/>

                    <LikertScale question={question.question}/>
                    </div>
                  }
                    
                </div>
              ))}
              <div className='text-white flex space-x-8 pt-8'>
                <button
                  onClick={handlePrevious}
                  className={`p-2 rounded-md ml-4 ${activeQuestion === 0 ? 'bg-gray-400' : 'bg-blue-400'}`}
                  disabled={activeQuestion === 0}
                >
                  Previous
                </button>
                {activeQuestion === quizData.totalQuestions - 1 ? (
                  <button className='bg-blue-500 p-2 rounded-md mx-4' onClick={()=>handleSaveAns(activeQuestion)}>
                    Save 
                  </button>
                ) : (
                  <button className='bg-blue-500 p-2 rounded-md mx-4' onClick={()=>handleSaveAns(activeQuestion)}>
                    Save & Next
                  </button>
                )}
              </div>
            </div>

               
               


            </section>
          </div>
        )}
      </div>
    );
  };

export default Quiz