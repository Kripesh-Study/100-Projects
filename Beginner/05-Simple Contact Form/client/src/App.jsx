import React, { useState } from 'react';

const App = () => {
  const [data,setData] = useState({fullName:"",email:"",description:""})
  const [message,setMessage] = useState("")
  const [error ,setError] = useState(false)
  

  async function sendData(e){
    e.preventDefault();
    try {
      await fetch("http://127.0.0.1:2000",{
        method:"post",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
      })
      setMessage("form submitted successfully")
      setError(false)
    } catch (error) {
      setMessage("form didnot submit")
      setError(true)
    }
  }



  return (
    <div className='w-full h-screen flex items-center justify-center bg-gray-100'>
      <form className='flex flex-col items-center gap-2 w-90% max-w-107 bg-white px-15 py-10 shadow-xl rounded'>
        <h2 className='mb-4 text-2xl font-bold'>Contact Form</h2>
       {error?<p className='text-red-400 mb-2'> {message}</p>:<p className='text-green-400 mb-2'> {message}</p>}
        <label className='w-full' htmlFor="">
          <input className='border border-gray-200 rounded px-3 py-1 w-full' type="text" name='fullName' placeholder='Full Name' onChange={(e)=>setData({...data,fullName:e.target.value})} />
        </label>
        <label className='w-full' htmlFor="">
          <input className='border border-gray-200 rounded px-3 py-1 w-full' type="email" name='email' placeholder='Enter Email' onChange={(e)=>setData({...data,email:e.target.value})} />
        </label>
        <label className='w-full' htmlFor="">
          <textarea className='border border-gray-200 rounded px-3 py-1 w-full' name="description" name="description" placeholder='Enter Your Description...' id="" rows={5} onChange={(e)=>setData({...data,description:e.target.value})} ></textarea>
        </label>
        <button className='border border-blue-500 bg-blue-500 hover:bg-blue-400 rounded cursor-pointer text-white px-3 py-1 w-full' onClick={sendData}>Submit</button>
      </form>
    </div>
  );  
};

export default App;