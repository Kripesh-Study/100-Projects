import React, { useState } from 'react';

const Buttons = ({isRunning,setIsRunning,resetHandling,lapsResult}) => {
  const [isStart,setIsStart] = useState(false)
  return (
    <div className='flex items-center gap-5'>
      <button onClick={()=>{setIsStart(false);resetHandling();}} className={!isStart?'bg-red-400/20 border cursor-pointer border-red-500/40 text-red-500/40 rounded-3xl px-6 py-2':'bg-red-400/30 border border-red-500 cursor-pointer text-red-500 rounded-3xl px-6 py-2'} >Reset</button>
      {!isRunning?<button onClick={()=>{setIsStart(true);setIsRunning(true)}} className='bg-yellow-400 border border-yellow-400  rounded-3xl px-15 cursor-pointer py-5'>Start</button>:<button onClick={()=>{setIsStart(true);setIsRunning(false)}} className='bg-yellow-400 border border-yellow-400  rounded-3xl px-12 cursor-pointer py-3'>Pause</button>}
      <button onClick={()=>(isRunning)?lapsResult():null}  className={!isRunning?'bg-yellow-400/20 cursor-pointer border border-yellow-500/40 text-yellow-500/40 rounded-3xl px-8 py-2':'bg-yellow-400/30 cursor-pointer border border-yellow-500 text-yellow-500 rounded-3xl px-8 py-2'}>Lap</button>
    </div>
  );
};

export default Buttons;