import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Result = ({ results, finalScore }) => {
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(false);

  // Calculate percentage
  const percentage = (finalScore / results.length) * 100;

 
  return (
    <div className='mx-4 my-4'>
      <Link to="/" className='bg-blue-500 text-white px-2 rounded-md ml-2 py-1'>Home</Link>
      <h1 className='text-center text-semibold'>Quiz Results</h1>
      <p className='text-center'>Final Score: {finalScore} ({percentage.toFixed(2)}%)</p>
      
      <button  className="bg-blue-400 text-white py-1 px-2 rounded-md mt-4" onClick={() => setShowCorrectAnswers(!showCorrectAnswers)}>
        {showCorrectAnswers ? 'Hide Detailes Result' : 'Show Detailed Result'}
      </button>
      {showCorrectAnswers &&
      <div>
        {results.map((result, index) => (
          <div key={index} className="my-4 border p-4 rounded-md">
            <p><strong>Question: </strong>{result.ques}</p>
             <p><strong>Correct Answer: </strong>{result.correct_ans}</p>
            <p><strong>User's Answer: </strong>{result.user_ans}</p>
            <p><strong>Explanation: </strong>{result.explanation}</p>
            <p><strong>Is Correct: </strong><span style={{ color: result.isCorrect === 'Yes' ? 'green' : (result.isCorrect === 'No' ? 'red' : 'grey') }}>{result.isCorrect}</span></p>
          </div>
        ))}
      </div>
    }
    </div>
  );
};

export default Result;
