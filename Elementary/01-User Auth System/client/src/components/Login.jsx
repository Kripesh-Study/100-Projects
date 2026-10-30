import React, { useState } from 'react';
import { Link,useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  
    const login = async(e) =>{
        e.preventDefault();
        try {
          const req = await fetch("http://localhost:2000/login",{
              method:"POST",
              headers:{
                  "Content-Type":"application/json"
              },
              credentials:"include",
              body:JSON.stringify(formData)
          });
          console.log(req.status)
          if(req.status === 200){
            navigate("/dashboard")
          }
          
        } catch (error) {
          
        }
    }



    const [formData, setFormData] = useState({email:"",password:""})
  return (
    <div className='border px-5 py-10 rounded-xl shadow-xl'>
        <h1 className='text-2xl font-bold text-center' >Login</h1>
      <form className='flex flex-col gap-5 mt-10'>
        <label>
            <input className='border px-4 outline-none w-full py-1 rounded-2xl'  type="email" placeholder='example@gmail.com' onChange={(e)=> setFormData({...formData,email:e.target.value})} />
        </label>
        <label>
            <input className='border px-4 outline-none w-full py-1 rounded-2xl'  type="password" placeholder='password' onChange={(e)=> setFormData({...formData,password:e.target.value})} />
        </label>
        <button className='px-5 py-1.5 text-white cursor-pointer active:scale-y-110 transition-all duration-50 hover:bg-blue-900 rounded-4xl bg-blue-700' onClick={login} >Login</button>
      </form>
      <div className='text-center mt-3'>Don't have an account?<Link className='text-blue-600 underline' to="/signup">SignUp</Link></div>
    </div>
    
  );
};

export default Login;