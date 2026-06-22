import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Mid from './components/Mid';
import Blogs from './components/Blogs';

const App = () => {
  const [data, setData] = useState([])

  const fetchedData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:2000")
      const res = await response.json();
      setData(res)

    } catch (error) {
      console.log("error", error);

    }
  }

  useEffect(() => {
    fetchedData();
  }, []); 

  return (
    <div className='w-full min-h-screen bg-gray-100'>
      <Nav />
      <Mid data={data} />
      <Blogs data={data} />
    </div>
  );
};

export default App;