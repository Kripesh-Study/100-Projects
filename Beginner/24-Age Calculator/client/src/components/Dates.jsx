import React from 'react';

const Dates = ({birthDate,setBirthDate}) => {
  return (
    <div className='flex gap-1 text-2xl'>
      <div className='w-20 h-10 border'><input className='h-full w-full px-2 text-center ' type="text" onChange={(e)=> setBirthDate({...birthDate,date:e.target.value})} placeholder='DD' /></div>
      <div className='w-22 h-10 border'><input className='h-full w-full px-0 text-center' type="text" onChange={(e)=> setBirthDate({...birthDate,month:e.target.value})} placeholder='MM' /></div>
      <div className='w-30 h-10 border'><input className='h-full w-full px-2 text-center' type="text" onChange={(e)=> setBirthDate({...birthDate,year:e.target.value})} placeholder='YYYY' /></div>
    </div>
  );
};

export default Dates;