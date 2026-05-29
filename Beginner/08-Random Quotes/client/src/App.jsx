import React, { useEffect, useState } from 'react';

const App = () => {

  const [data, setData] = useState({})

  const quotes = async () => {
    const response = await fetch("http://127.0.0.1:2000/quotes")
    const newResponse = await response.json();
    setData(newResponse)
  }
  
  useEffect(() => {
    quotes();
  }, [])

  return (
    <div className='w-full h-screen flex justify-center  items-center bg-gray-400'>
      <div className='max-w-110 w-[90%] rounded p-10 text-center bg-green-700 text-white'>
            <div className='text-2xl '> 
              &ldquo;
              { data.quote}
              &rdquo;
            </div>
            <div className='my-5'>
              <div>---------------</div>
               {data.author} 
              <div>---------------------------</div>
            </div>
            <button className='bg-green-100 text-black px-8 py-2 rounded-2xl cursor-pointer hover:bg-white ' onClick={quotes}>Random Quote</button>
       
      </div>
    </div>
  );
};

export default App;