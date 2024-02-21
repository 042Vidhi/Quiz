import React from 'react'
import {allquiz} from '../db/AllQuiz'
import QuizCard from '../components/QuizCard'

const QuizOptions = () => {
  return (
    //display all the quiz options using quizcards
    
    <div>
        <h1 className='text-center py-4 text-xl'>Competency Evaluation Center <br/>Assess Your Skills and Knowledge</h1>
        <div className='flex justify-evenly flex-wrap'>
            {
                allquiz.map((quiz)=>
                (<QuizCard key={quiz.quizId} quizDetails={quiz}/>)
                )
            }
        </div>
    </div>
  )
}

export default QuizOptions