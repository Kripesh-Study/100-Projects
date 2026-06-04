import React from 'react';

const Card = ({totalIncome,totalExpenses}) => {
  return (
    <div className='my-5 grid grid-cols-2 lg:grid-cols-4 gap-2.5 '>
      <div className='grid rounded bg-white px-5 py-2 gap-2.5 '>
        <span className='text-gray-400'>Total Income</span>
        <span className='text-2xl font-bold'>${totalIncome}</span>
        <span className='text-xs text-gray-400'><span className='text-blue-500'>+855</span> this month
        </span>
      </div>
      <div className='grid rounded bg-white px-5 py-2 gap-2.5 '>
        <span className='text-gray-400'>Total Expenses</span>
        <span className='text-2xl font-bold'>${totalExpenses}</span>
        <span className='text-xs text-gray-400'> <span className='text-red-500'>  -600</span>  last month</span>
      </div>
      <div className='grid rounded bg-white px-5 py-2 gap-2.5 '>
        <span className='text-gray-400'>Net Balance</span>
        <span className='text-2xl font-bold'>${totalIncome-totalExpenses}</span>
        <span className='text-xs text-gray-400'><span className='text-blue-500'>+588</span> income-expenses</span>
      </div>
      <div className='grid rounded bg-white px-5 py-2 gap-2.5 '>
        <span className='text-gray-400'>Saving Rate</span>
        <span className='text-2xl font-bold'>26.8%</span>
        <span className='text-xs text-gray-400'><span className='text-blue-400'>5%</span> of the income saved</span>
      </div>

    </div>
  );
};

export default Card;