import React, { useState } from 'react';

const AddItems = ({closeModal,putValue,saveExpense,setCategories}) => {
  
  const pickCategories = (e) =>{
    setCategories(e.target.innerHTML);
    // console.log(categories)
  }
  

  return (
    <div className='fixed top-0 left-0  w-full h-screen flex items-center justify-center bg-black/50' >
      <div className='bg-white rounded p-5 w-[95%] max-w-100 '>
        <div className='flex justify-between px-3 py-1 mb-4 '>
          <h1>Add Income</h1>
          <span onClick={closeModal} className='w-7 h-7 flex justify-center items-center text-gray-600 cursor-pointer rounded bg-gray-200'>X</span>
        </div>
        <div className='border-t flex flex-col gap-4   border-gray-300 p-3'>
          <label className='relative flex flex-col' htmlFor="">Amount
            <input onChange={putValue} name="amount" className='relative border px-4.5 py-1 rounded-lg' type="number" placeholder='5000' />
            <span className='absolute top-7.5 left-2'>$</span>
          </label>
          <label className='relative flex flex-col' htmlFor="">Title
            <input onChange={putValue} name='title' className='relative border px-4.5 py-1 rounded-lg' type="text" placeholder='e.g. Monthly Salary' />
          </label>
          <div className='flex flex-col '>
            <h3>Categories</h3>
            <div className='flex mt-3 flex-wrap gap-x-3 gap-y-2'>
              <span onClick={pickCategories} name="housing" className='bg-gray-200 px-3 py-1.5  rounded border'>Housing</span>
              <span onClick={pickCategories} name="school" className='bg-gray-200 px-3 py-1.5 rounded border'>School</span>
              <span onClick={pickCategories} name="food" className='bg-gray-200 px-3 py-1.5 rounded border'>Food</span>
              <span onClick={pickCategories} name="loan" className='bg-gray-200 px-3 py-1.5 rounded border'>Loan</span>
              <span onClick={pickCategories} name="shoping" className='bg-gray-200 px-3 py-1.5 rounded border'>Shoping</span>
              <span onClick={pickCategories} name="other" className='bg-gray-200 px-3 py-1.5 rounded border'>Other</span>
            </div>
          </div>
          <label className='flex flex-col ' htmlFor="">
            <span>Date</span>
            <input className='border rounded px-2 py-1' type="date" name="" id="" />
          </label>
          <label className='flex flex-col' htmlFor="">
            <div>Note <span className='text-gray-400'>(Optional)</span></div>
            <textarea onChange={putValue} name='note'  className='border rounded ' placeholder='Add note...' name="" id="" ></textarea>
          </label>

          <div className='w-full flex justify-between items-center gap-2.5'>
            <button onClick={closeModal} className='border w-full bg-white px-3 py-2 rounded transition-all duration-300 cursor-pointer hover:bg-blue-600 hover:text-white'>Cancel</button>
            <button onClick={saveExpense} className='border w-full bg-blue-600 hover:bg-white hover:text-blue-600 transition-all duration-300 text-white cursor-pointer px-3 py-2 rounded '>Save Expense</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItems;