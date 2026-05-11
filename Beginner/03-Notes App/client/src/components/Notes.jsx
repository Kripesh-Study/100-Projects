import React, { useEffect,useState } from 'react';

const Notes = ({editNoteBtn,data}) => {

    const deleteNoteBtn = async (id) =>{
        try{
      const request =  await fetch("http://127.0.0.1:2000",{
           method:"delete",
           headers:{
            "Content-Type":"application/json"
           },
           body:JSON.stringify({id})
       })
       if(request){
         console.log("deleted successfully");
       }else{
         console.log("deleted unsuccessfully")
       }
    }catch(err){
      console.log("err is ", err);
      
    }
    }
    return (
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-3 p-3 gap-y-10'>
            {data.map((e,i) => (
                <div key={i} className='bg-blue-900 text-white p-3 flex justify-between max-w-87.5 rounded-xl'>
                    <div className=' space-y-4'>
                        <div>{e.title}</div>
                        <div className='text-xs'>{e.description}</div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <button onClick={()=>editNoteBtn(e._id)}  className='bg-purple-500 px-2 py-1 rounded-xl cursor-pointer'>edit</button>
                        <button onClick={()=>deleteNoteBtn(e._id)} className='bg-red-500 px-2 py-1 rounded-xl cursor-pointer'>delete</button>
                    </div>
                </div>

            ))}
        </div>

    );
};

export default Notes;