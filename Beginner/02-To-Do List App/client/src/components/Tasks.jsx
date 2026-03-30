import React from 'react';

const Tasks = () => {

  function addTask(){
    
  }
  return (
     <div className=''>
        <div className='flex justify-between'>
            <h2 className='text-2xl bold '>Tasks</h2>
            <span className='bg-blue-200 px-4 py-1 rounded-2xl text-sm self-center  '>0 tasks</span>
        </div>
        <div className='flex justify-between gap-5 mt-8'>
          <input className='w-full px-4 py-1 outline-none border rounded-sm' type="text" />
          <button onClick={addTask} className='bg-blue-700 px-4 py-1 text-nowrap rounded-sm text-sm cursor-pointer text-white'>+Add Tasks</button>
        </div>
      </div>
  );
};

export default Tasks;