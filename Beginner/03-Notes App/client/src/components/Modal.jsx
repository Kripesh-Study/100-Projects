import React, { useEffect, useState } from 'react';

const Modal = ({notesId,isPostData,cancelBtn,fetchedAllData}) => {
  const [title,setTitle] = useState("")
  const [description,setDescription] = useState("")

  useEffect(()=>{

  })

  const postData = async (title,description) =>{
    try{

      const request =  await fetch("http://127.0.0.1:2000",{
           method:"POST",
           headers:{
            "Content-Type":"application/json"
           },
           body:JSON.stringify({title,description})
       })
       if(request){
         console.log("successfully saved notes");
       }else{
         console.log("not succesfully save notes")
       }
    }catch(err){
      console.log("err is ", err);
      
    }finally{
      cancelBtn()
      fetchedAllData();
    }
  }
 
  const editData = async (id,title,description) =>{
    try{
      const request =  await fetch("http://127.0.0.1:2000",{
           method:"put",
           headers:{
            "Content-Type":"application/json"
           },
           body:JSON.stringify({id,title,description})
       })
       if(request){
         console.log("successfully saved notes");
       }else{
         console.log("not succesfully save notes")
       }
    }catch(err){
      console.log("err is ", err);
      
    }finally{
      cancelBtn()
      fetchedAllData()
    }
  }
  const values = async () =>{
    
  }
  return (
    <div className='absolute top-0 left-0 h-screen w-full bg-black/70  flex justify-center items-center'>
      <div className=' border bg-blue-950 text-white flex flex-col gap-2 p-5 rounded'>
      <h1 className='font-bold text-xl'>Notes</h1>
        <input onChange={(e)=>{setTitle(e.target.value)}} className='border px-2 py-1' type="text" name='title' value={title} placeholder='Title' />
        <textarea onChange={(e)=>{setDescription(e.target.value)}} className='border px-2 py-1' name="description" id="" value={description} placeholder='Description...'>
        </textarea>
        <div className='flex gap-2.5'>
        <button onClick={()=>{
          if(isPostData){
            postData(title,description);
          }else{
            editData(notesId,title,description)
          }
          
        }} className='bg-blue-500 rounded px-2 py-1 hover:bg-blue-600 cursor-pointer'>Save</button>
          <button onClick={()=>{
          cancelBtn()
        }} className='bg-gray-600 rounded px-2 py-1 hover:bg-gray-700 cursor-pointer'>cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;