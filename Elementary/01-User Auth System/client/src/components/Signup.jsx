import React, { useState } from 'react';
import { Link } from "react-router";

const Signup = () => {

    const register = async(e) =>{
        e.preventDefault();
        const req = await fetch("http://localhost:2000/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formData)
        });
    }



    const [formData, setFormData] = useState({name:"",email:"",password:""})
  return (
    <div className='border px-5 py-10 rounded-xl shadow-xl'>
        <h1 className='text-2xl font-bold text-center' >Register</h1>
      <form className='flex flex-col gap-5 mt-10'>
        <label>
            <input className='border px-4 outline-none w-full py-1 rounded-2xl' type="text" placeholder='John. Doe' onChange={(e)=> setFormData({...formData,name:e.target.value})} />
        </label>
        <label>
            <input className='border px-4 outline-none w-full py-1 rounded-2xl'  type="email" placeholder='example@gmail.com' onChange={(e)=> setFormData({...formData,email:e.target.value})} />
        </label>
        <label>
            <input className='border px-4 outline-none w-full py-1 rounded-2xl'  type="password" placeholder='password' onChange={(e)=> setFormData({...formData,password:e.target.value})} />
        </label>
        <button className='px-5 py-1.5 text-white cursor-pointer active:scale-y-110 transition-all duration-50 hover:bg-blue-900 rounded-4xl bg-blue-700' onClick={register} >Signup</button>
      </form>
      <div className='text-center mt-3'>already have an account?<Link className='text-blue-600 underline' to="/login">Login</Link></div>
    </div>
    
  );
};

export default Signup;