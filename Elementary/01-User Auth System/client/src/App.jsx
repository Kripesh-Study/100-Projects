import React from 'react';
import Signup from './components/Signup';
import { useState } from 'react';
import Login from './components/Login';
import { Outlet } from 'react-router';


const App = () => {

  // const [isLogin,setIsLogin] = useState(false)

  return (
    <div className='flex justify-center items-center w-full h-screen'>
      {/* {(isLogin)?<Login />:<Signup />} */}
      <Outlet />
    </div>
  );
};

export default App;