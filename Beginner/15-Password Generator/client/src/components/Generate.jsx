import React from 'react';

const Generate = ({setClicked}) => {
  return (
    <button className='bg-blue-600 text-white hover:bg-blue-700 px-5 py-2 rounded-lg w-full cursor-pointer' onClick={()=>setClicked(prev => !prev )}>
        Generate
    </button>
  );
};

export default Generate;