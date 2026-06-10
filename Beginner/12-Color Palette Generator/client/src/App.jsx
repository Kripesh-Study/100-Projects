import React, { useState } from 'react';
import Layout from './components/RandomColorLayout';
import FavouriteColor from './components/FavouriteColor';


const App = () => {
  const [randomColor, setRandomColor] = useState("#f3f3f3")
  const [isFavourite, setIsFavourite] = useState(false)

  // const [fevouriteColors,setFavouriteColor] = useState([])
  const [isCopied,setIsCopied] = useState(false)
  

  const clipBoard = async() =>{
    try {
      await navigator.clipboard.writeText(randomColor)
      setIsCopied(true)
      setTimeout(()=>{
        setIsCopied(false)
      },500)
    } catch (error) {
      throw new Error("clipboard error: ",error);
    }
  }

  const generateRandColor = () =>{
    setIsFavourite(false)
    const colorCodes = "0123456789abcdef";
    let color = "#"
    for(let i=0;i<6;i++){
      color += colorCodes[Math.floor(Math.random()*16)]
    }
    setRandomColor(color);    
    console.log(randomColor)
  }
  
  return (
    <div className='bg-gray-200 h-screen'>
      <FavouriteColor clipBoard={clipBoard} isFavourite={isFavourite} setRandomColor={setRandomColor} setIsFavourite={setIsFavourite} />
      <Layout generateRandColor={generateRandColor} randomColor={randomColor} clipBoard={clipBoard} isFavourite={isFavourite} setIsFavourite={setIsFavourite} isCopied={isCopied} />
    </div>
  );
};

export default App;  