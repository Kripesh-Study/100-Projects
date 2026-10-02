import React from 'react';

const Result = ({yearDate,errorDate}) => {
  if(errorDate){
    return(
      <div>{errorDate}</div>
    )
  }else{
    return (
      <div className='text-4xl grid gap-3'>
          <h2><span className='text-purple-600' >{yearDate.year}</span> Years</h2>
          <h2><span className='text-purple-600' >{yearDate.month}</span> Months</h2>
          <h2><span className='text-purple-600' >{yearDate.date}</span> Days</h2>
      </div>
    ); 

  }
};

export default Result;