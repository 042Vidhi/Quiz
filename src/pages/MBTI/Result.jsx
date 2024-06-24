import React from 'react';
import { Link } from 'react-router-dom';
import { Progress } from 'antd';

// Interpretation of each MBTI personality type
const mbtiDescriptions = {
  ISTJ: "Practical, fact-minded, and responsible. Prefers organization and structure.",
  ISFJ: "Protective, warm, and caring. Prefers to serve others and ensure their safety.",
  INFJ: "Idealistic, organized, and insightful. Prefers to inspire and guide others.",
  INTJ: "Strategic, logical, and innovative. Prefers to plan and solve complex problems.",
  ISTP: "Observant, practical, and flexible. Prefers hands-on activities and problem-solving.",
  ISFP: "Sensitive, kind, and adaptable. Prefers personal values and living in the moment.",
  INFP: "Idealistic, empathetic, and creative. Prefers personal values and meaningful goals.",
  INTP: "Analytical, inventive, and curious. Prefers to understand and theorize.",
  ESTP: "Energetic, perceptive, and bold. Prefers action and practical solutions.",
  ESFP: "Outgoing, friendly, and spontaneous. Prefers to enjoy life and entertain others.",
  ENFP: "Enthusiastic, creative, and sociable. Prefers to inspire and connect with others.",
  ENTP: "Innovative, curious, and witty. Prefers to challenge norms and think creatively.",
  ESTJ: "Organized, assertive, and practical. Prefers to manage and lead others.",
  ESFJ: "Warm, cooperative, and conscientious. Prefers to support and care for others.",
  ENFJ: "Charismatic, altruistic, and organized. Prefers to inspire and lead others.",
  ENTJ: "Strategic, decisive, and efficient. Prefers to organize and lead others toward goals."
};

const Result = ({ results, finalScore, mbtiType }) => {
  const user = {
    O: finalScore.O,
    C: finalScore.C,
    E: finalScore.E,
    A: finalScore.A,
    N: finalScore.N
  };

  console.log("finalScore", finalScore);
  console.log("result", results);

  return (
    <div className='mx-4 my-4'>
      <Link to="/" className='bg-blue-500 text-white px-2 rounded-md ml-2 py-1'>Home</Link>
      <div className='flex justify-center'>
        <div className='w-60 py-12'>
          <div className='text-center w-full'>Thank you for taking the test</div>
          <Progress percent={100} strokeColor={'#22C55E'} />
        </div>
      </div>
      <h1 className='text-center text-3xl font-semibold'>Quiz Results</h1>
      <div className='flex justify-evenly my-4'>
        <p className='text-xl font-semibold'>Your Personality Type is: {mbtiType}</p>
      </div>
      <div className='flex justify-center my-4'>
        <p className='text-lg'>{mbtiDescriptions[mbtiType]}</p>
      </div>
    </div>
  );
};

export default Result;
