import React from 'react';

const Result = ({BMIScore,BMIStatus}) => {
  return (
    <div className='flex flex-col gap-10'>
      <div>Your BMI Score is : {BMIScore}</div>
      
      {BMIScore > 0 && <div>You are {BMIStatus}</div>}
    </div>
  );
};

export default Result;