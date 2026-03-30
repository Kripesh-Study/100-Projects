import React, { useEffect, useState } from 'react';

const TasksContainer = () => {

    const URL = "http://localhost:2000/api/todos"
    const [mainText,setMainText] = useState("The best task ever Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum quos id voluptatum ullam repellat tempore! Repudiandae ipsam autem quidem beatae architecto sunt maiores adipisci quos ipsa minus esse, error dolor.");

    const [taskValue,setTaskValue] = useState("");
    
    
    useEffect(function(){
        if(mainText.length > 35){
            setMainText(mainText.slice(0,35).concat("..."))
        }
        console.log(taskValue)
        
    })

    function upadateTask(){
        fetch(URL,{
            method:"post",
            headers:{
                'Content-Type':'application/json'
            },
            body:{
                task:taskValue
            }
        })
    }


    return (
        <div className='flex flex-col gap-5'>
            <div className='border px-4 py-2 rounded flex justify-between'>
                <label className='flex gap-2 cursor-pointer '>
                    <input type="checkbox" />
                    <span className='text-start select-none'>{mainText}</span>
                </label>
                <div className='flex gap-4 cursor-pointer' >
                    <div><i className="ri-pencil-line"></i></div>
                    <div><i className="ri-delete-bin-line"></i></div>
                </div>
            </div>
          
           
            <div className='border px-4 py-2 rounded flex justify-between'>
                <label className='flex gap-2 cursor-pointer '>
                    <input type="checkbox" />
                    <input type='text' value={taskValue} onChange={(e)=>setTaskValue(e.target.value)}  className='text-start select-none border px-3 outline-none rounded' />
                </label>
                <div className='flex gap-4 cursor-pointer' >
                    <button className='bg-blue-700 px-4 py-1 text-nowrap rounded-sm text-sm cursor-pointer text-white' onClick={upadateTask} >Save</button>
                    <button className='text-black px-4 py-1 text-nowrap rounded-sm text-sm cursor-pointer bg-white'>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default TasksContainer;