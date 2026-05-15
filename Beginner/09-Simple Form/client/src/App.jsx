import React, { useState } from 'react';
import axios from "axios";

const App = () => {
  const [activeTab, setActiveTab] = useState("signup");
  const [formData, setFormData] = useState({ name: "", email: "", password: "", loginError: "" })
  const emailRegex = /[a-z0-9]*@gmail.com/gmi;
  const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{6,255}/g;
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState("")

  const checkError = () => {
    if (formData.name == null) {
      setError({ name: "User name cannot be empty" })
    } else if (formData.email == null) {
      setError({ email: "Email is required..." })
    } else if (!emailRegex.test(formData.email)) {
      setError({ email: "Only Gmail is available." })
    } else if (formData.password == null) {
      setError({ password: "Password is Required." });
    } else if (!passwordRegex.test(formData.password)) {
      setError({ password: "password didnot match with its requirements" })
    } else {
      setSuccess("signup successful");
      setError(null)
    }
  }

  const signupFormSubmit = async (e) => {
    e.preventDefault();
    checkError();
    if (error == null) {
      await axios.post("http://127.0.0.1:2000/register", {
        header: {
          "Content-Type": "application/json"
        },
        data: {
          name: formData.name,
          email: formData.email,
          password: formData.password
        }
      })
    }
  }
  const loginFormSubmit = async (e) => {
    e.preventDefault();
    try {

      const response = await axios.post("http://127.0.0.1:2000/login", {
        data: {
          email: formData.email,
          password: formData.password
        }
      })
      if (response.status == 200) {
        console.log(response.data)
        setSuccess("Login successfully");
        setError(null)
      }
    } catch (error) {
      setError({ loginError: "login failed" });
      console.log(error)
      setSuccess("")

    }


  }

  const fieldValues = async (e) => {
    // console.log(e.target)
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value })
  }
  return (
    <div className='bg-blue-500 flex justify-center items-center w-full h-screen'>
      <div className='flex flex-col py-10 px-15 rounded-2xl bg-white w-100'>
        <div className='w-full flex justify-between items-center bg-gray-400 p-2 rounded-xl'>
          <button
            className={` px-8 py-2 cursor-pointer ${activeTab === "signup" ? "bg-white rounded-xl" : "text-white"}`}
            onClick={() => setActiveTab("signup")}
          >Signup</button>
          <button
            className={` px-8 py-2 cursor-pointer ${activeTab === "login" ? "bg-white rounded-xl" : "text-white"}`}
            onClick={() => setActiveTab("login")}
          >Login</button>
        </div>
        {activeTab == "signup" ? (
          <form method="post" action="http://127.0.0.1:2000/register" className='flex flex-col gap-3 mt-10 justify-center items-center w-full' >
            {setSuccess && <p>{success}</p>}
            <label className='w-full' htmlFor="">
              <div>Name</div> <input className='w-full border outline-none px-2 py-1' onChange={fieldValues} name='name' type="text" />
              {error && <p>{error.name}</p>}
            </label>
            <label className='w-full' htmlFor="">
              <div>Email</div> <input className='w-full border outline-none px-2 py-1 ' onChange={fieldValues} name='email' type="email" />
              {error && <p>{error.email}</p>}
            </label>
            <label className='w-full' htmlFor="">
              <div>Password</div> <input className='w-full border outline-none px-2 py-1' onChange={fieldValues} name='password' type="password" />
              {error && <p>{error.password}</p>}
            </label>
            <button
              className='w-full border px-5 py-2 bg-blue-500 text-white hover:bg-blue-700 cursor-pointer'
              onClick={signupFormSubmit}
            >Signup</button>
          </form>
        ) : (
          <form method="post" action="http://127.0.0.1:2000/login" className='flex flex-col gap-3 mt-10 justify-center items-center w-full' >
            {error && <p>{error.loginError}</p>}
            {success && <p>{success}</p>}
            <label className='w-full' htmlFor="">
              <div>Email</div> <input className='w-full border outline-none px-2 py-1 ' onChange={fieldValues} name='email' type="email" />
            </label>
            <label className='w-full' htmlFor="">
              <div>Password</div> <input className='w-full border outline-none px-2 py-1' onChange={fieldValues} name='password' type="password" />
            </label>
            <button
              className='w-full border px-5 py-2 bg-blue-500 text-white hover:bg-blue-700 cursor-pointer'
              onClick={loginFormSubmit}
            >Login</button>
          </form>
        )
        }
      </div>
    </div>
  );
};

export default App;