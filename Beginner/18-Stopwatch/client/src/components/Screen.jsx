import React from 'react';
import "./Screen.css"


const Screen = ({time}) => {

  return (
    <div className='p-10 mt-10 bg-gray-900 max-w-110 overflow-hidden w-full text-center relative text-white after-circle rounded-xl '>
      <span className='text-2xl'>{time.hour}:{time.min}:{time.sec}</span><span>.{time.millisec}</span>
    </div>
  );
};

export default Screen;