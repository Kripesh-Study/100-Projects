import React, { useState } from 'react';

const Layout = ({ generateRandColor, randomColor, isCopied,isFavourite,setIsFavourite, clipBoard }) => {
  const favourite = () => {
    setIsFavourite(prev => (prev == true) ? false : true)
    const newFavouriteState = !isFavourite;

 fetch("http://127.0.0.1:2000/favourite/", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ isFavourite:newFavouriteState, randomColor })
    })

  }

  return (
    <div className='bg-white p-2 rounded max-w-[240px] w-[90%] max-h-65 ml-50 '>
      <div style={{ backgroundColor: randomColor }} className='w-full h-30 rounded-2xl'>

      </div>
      <div className='flex justify-between px-1 py-3'>
        <h3 onClick={clipBoard} style={{ backgroundColor: randomColor }} className='cursor-pointer px-3 rounded-3xl py-1 bg-red-400'>{isCopied ? "Copied" : randomColor}</h3>
        <div className='cursor-pointer' onClick={favourite}>
          {isFavourite ? <svg width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,69,96,1)"><path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3Z"></path></svg> : <svg width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black">
            <path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 11.9435 5.66627 14.533 8.64514 16.9029C9.39 17.4955 10.1845 18.0485 11.0661 18.6038C11.3646 18.7919 11.6611 18.9729 12 19.1752C12.3389 18.9729 12.6354 18.7919 12.9339 18.6038Z"></path>
          </svg>}
        </div>
      </div>
      <div className='w-full'>
        <button className='border px-3 py-2 rounded-2xl bg-red-400 text-white w-full hover:bg-red-500 cursor-pointer m-auto' onClick={generateRandColor}>Generate</button>
      </div>
    </div>
  );
};

export default Layout;