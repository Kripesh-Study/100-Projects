import React from 'react';

const Categories = () => {
  return (
     <div className='my-5 p-5 flex gap-5 items-center'>
        <span className='bg-blue-300 px-5 cursor-pointer py-1 rounded-2xl'>All</span>
        <span>Live</span>
        <span>Completed</span>
      </div>
  );
};

export default Categories;