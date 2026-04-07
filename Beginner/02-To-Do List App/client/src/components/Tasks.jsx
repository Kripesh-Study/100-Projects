import React, { useEffect, useState } from 'react';

const Tasks = ({count,onSetCount}) => {
  const URL = "/api/todos"

  const [title, setTitle] = useState('')


  async function addTask() {
    const sendTitle = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title
      })
    })
    if(sendTitle){
      fetch(URL).then((data) => {
          return data.json()
        }).then((data) => {
          onSetCount(data.count)
          // console.log(todos)
        })
    }


  }
  useEffect(function(){
           fetch(URL).then((data) => {
          return data.json()
        }).then((data) => {
          onSetCount(data.count)
          // console.log(todos)
        })
  },[count])


  return (
    <div className=''>
      <div className='flex justify-between'>
        <h2 className='text-2xl bold '>Tasks</h2>
        <span className='bg-blue-200 px-4 py-1 rounded-2xl text-sm self-center  '>{count} tasks</span>
      </div>
      <div className='flex justify-between gap-5 mt-8'>
        <input onChange={(e) => setTitle(e.target.value)} value={title} className='w-full px-4 py-1 outline-none border rounded-sm' type="text" />
        <button onClick={addTask} className='bg-blue-700 px-4 py-1 text-nowrap rounded-sm text-sm cursor-pointer text-white'>+Add Tasks</button>
      </div>
    </div>
  );
};

export default Tasks;