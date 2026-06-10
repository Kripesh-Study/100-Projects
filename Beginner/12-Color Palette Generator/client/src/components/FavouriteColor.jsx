import React from 'react';
import useFavouriteColor from '../hooks/favouriteColor.hooks.js';


const FavouriteColor = ({isFavourite,setRandomColor,setIsFavourite}) => {
  const favouriteColor = useFavouriteColor(isFavourite)

  return (
    <div className='bg-white grid overflow-scroll gap-2 p-5 w-40 h-screen absolute top-0 left-0  '>
      <h1 className='mb-5 text-center'>Favourites</h1>
      {favouriteColor.map((e,i)=>(
        <div key={i} onClick={()=>{setRandomColor(e.favouriteColor);setIsFavourite(true)}} style={{backgroundColor:e.favouriteColor}} className='px-3 py-1 flex items-center cursor-pointer justify-center  rounded-2xl'>{e.favouriteColor}</div>
      ))}
      </div>
  );
};

export default FavouriteColor;