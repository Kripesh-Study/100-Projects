import React, { useState } from 'react';

const MothlySpending = ({sixMonthExp,isMonth}) => {
 
  const [height, setHeight] = useState(0)
  
  return (
    <div className='p-5 bg-white rounded text-center flex flex-4 flex-col'>
      <div className='flex w-full justify-between'>
        <span className='text-sm font-bold'>Monthly Spending</span>
        <span className='text-sm text-gray-500'>Last 6 Months</span>
      </div>
      {isMonth?(<div className='flex mt-8 w-full gap-2.5'>
        {sixMonthExp.map(e => (
          <>
            <div className={`w-20 flex  flex-col h-40 gap-2.5`}>
              <span className='text-sm text-gray-500'>${e.spending}</span>
              <div className='w-full h-full flex items-end '>
                <div className='bg-blue-300 w-full' style={{ height: `${(e.spending / 3000) * 100}%` }}></div>
              </div>
              <div className='text-sm text-gray-500'>{e.month}</div>
            </div>
          </>
        ))}
      </div>):(
        <p className='mt-10'> No Monthly Transactions... </p>
      )}
    </div>
  );
};

export default MothlySpending;