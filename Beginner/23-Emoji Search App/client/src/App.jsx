import React, { useEffect, useState } from 'react';
import Search from './components/Search';
import Recent from './components/Recent';
import Context from './components/Context';
import EmojiContainer from './components/EmojiContainer';

const App = () => {

  const [emojies, setEmojies] = useState([])
  const [searchQuery,setSearchQuery] = useState("")
  const [recentlyUsed,setRecentlyUsed] = useState([])


  useEffect(() => {
    fetch("http://localhost:2000")
      .then((res) => res.json())
      .then((data) => {
        setEmojies(data)
        // console.log(data)
      })

    fetch("http://localhost:2000/recent")
      .then((res)=>res.json())
      .then((data)=>{
        setRecentlyUsed(data)
        // console.log(data)
      })
  }, [searchQuery])








  return (
    <Context value={{searchQuery,setSearchQuery,recentlyUsed,emojies,setEmojies,setRecentlyUsed}}>
      <div className='w-full h-screen overflow-hidden shadow-2xl bg-gray-100 flex justify-center  '>
        <div className='bg-white mt-10 p-5 rounded-xl min-w-90 w-150 h-[80vh] '>
          <Search />
          <EmojiContainer setEmojies={setEmojies} />
        </div>
      </div>
    </Context>
  );
};

export default App;