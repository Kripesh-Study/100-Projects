import React, { useEffect, useState } from 'react';

const Mid = ({data}) => {
  return (
    <div className='overflow-hidden bg-white mx-10 my-5 gap-20 flex justify-between p-5 rounded-2xl shadow-2xl'>
      <div className='flex-24 p-5'> 
        <h2 className='font-bold text-2xl'>{data[0]?.title}</h2>
        <p className='text-sm text-gray-600 mt-4'>{data[0]?.content}</p>
        <div className='mt-3 font-bold '>Author: <span className='text-md font-medium'>{data[0]?.author}</span></div>
      </div>
      <div className='flex-20 rounded-2xl '>
        <img className='rounded-2xl' src={data[0]?.image} alt="" />
      </div>
    </div>
  );
};

export default Mid;