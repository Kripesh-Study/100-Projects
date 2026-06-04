import React from 'react';

const TransactionByCategories = () => {
  return (
    <div className='bg-white flex-2 rounded p-5 grid gap-2.5'>
      <h1 className='text-md font-bold'>Categories</h1>
      <div className=''>
        <div className='flex w-full justify-between text-sm'>
        <h3>Housing</h3> 
        <span>$3000</span>
        </div>
        <div className='w-full h-2 bg-gray-300 rounded-2xl'>
          <div className='w-[70%] h-full bg-blue-300 rounded'></div>
        </div>
      </div>
      <div className=''>
        <div className='flex w-full justify-between text-sm'>
        <h3>School</h3>
        <span>$3000</span>
        </div>
        <div className='w-full h-2 bg-gray-300 rounded-2xl'>
          <div className='w-[70%] h-full bg-green-300 rounded'></div>
        </div>
      </div>
      <div className=''>
        <div className='flex w-full justify-between text-sm'>
        <h3>Food</h3>
        <span>$3000</span>
        </div>
        <div className='w-full h-2 bg-gray-300 rounded-2xl'>
          <div className='w-[70%] h-full bg-red-300 rounded'></div>
        </div>
      </div>
      <div className=''>
        <div className='flex w-full justify-between text-sm'>
        <h3>Loan</h3>
        <span>$3000</span>
        </div>
        <div className='w-full h-2 bg-gray-300 rounded-2xl'>
          <div className='w-[70%] h-full bg-pink-300 rounded'></div>
        </div>
      </div>
      <div className=''>
        <div className='flex w-full justify-between text-sm'>
        <h3>Shoping</h3>
        <span>$3000</span>
        </div>
        <div className='w-full h-2 bg-gray-300 rounded-2xl'>
          <div className='w-[70%] h-full bg-purple-300 rounded'></div>
        </div>
      </div>
      <div className=''>
        <div className='flex w-full justify-between text-sm'>
        <h3>Others</h3>
        <span>$3000</span>
        </div>
        <div className='w-full h-2 bg-gray-300 rounded-2xl'>
          <div className='w-[70%] h-full bg-yellow-300 rounded'></div>
        </div>
      </div>
    </div>
  );
};

export default TransactionByCategories;