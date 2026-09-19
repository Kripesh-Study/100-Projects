import React, { useState,use } from 'react';
import Categories from "./Categories"
import Recent from './Recent';
import Context from './Context';

const EmojiContainer = ({setEmojies}) => {
  const {searchQuery, emojies} = use(Context);
  // const [isSearched, setIsSearched] = useState(false)


  



  return (
    <div className='h-[65vh]'>

      {searchQuery ? <div className='flex flex-wrap gap-5 mt-10'>
        {emojies.map(e=>(
          <div>{e.emoji}</div>
        ))}

      </div>
       : (
        <div className='overflow-scroll overflow-x-hidden h-full mt-5'>
          <Recent   />
          <Categories emojies={emojies} />
        </div>
      )}
    </div>
  );
};

export default EmojiContainer;