import React, { useState } from 'react';

const Display = ({inputValue,setInputValue}) => {
    const [isCopied,setIsCopied] = useState(false)
    
    const copy = async () =>{
        try {
            await window.navigator.clipboard.writeText(inputValue)
            setIsCopied(true)
            setTimeout(()=>{
                setIsCopied(false)
            },2000)
        } catch (error) {
            console.log(error);
            
        }
    }

  return (
    <div className='relative box-border w-full'>
      <input className='w-full border text-2xl rounded-lg px-5 pr-45 py-10' readOnly type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
      <button className='absolute top-[50%] -translate-y-2/4 right-5 bg-blue-600 rounded-xl px-10 py-3 border border-blue-600 hover:bg-blue-700 text-white cursor-pointer'  onClick={copy}>{isCopied?"copied":"copy"}</button>
    </div>
  );
};

export default Display;