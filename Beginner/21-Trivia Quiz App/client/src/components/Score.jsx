import React from 'react';

const Score = ({score}) => {
  return (
    <div>
      <div className='absolute top-10 right-10 bg-green-300 px-5 py-3 rounded-2xl'>Score: <span>{score}</span></div>
    </div>
  );
};

export default Score;