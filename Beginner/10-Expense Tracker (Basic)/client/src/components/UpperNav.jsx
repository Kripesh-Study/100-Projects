import React from 'react';

const UpperNav = ({setOpenIncomeModal,setOpenExpensesModal}) => {
  return (
    <div className=' flex justify-between  items-center '>
      <div>
        <h1 className='font-bold text-2xl'>OverView</h1>
        <span className='text-gray-600 text-sm'>December 2024</span>
      </div>
      <div className='flex gap-5'>
        <button onClick={()=>setOpenIncomeModal(true)} className='border border-black bg-white px-3 py-1 rounded cursor-pointer hover:bg-white/50'>+Add Income</button>
        <button onClick={()=>setOpenExpensesModal(true)} className='border border-blue-700 bg-blue-700 px-3 py-1 rounded text-white cursor-pointer hover:bg-blue-800'> -Add Expenses</button>
      </div>
    </div>
  );
};

export default UpperNav;