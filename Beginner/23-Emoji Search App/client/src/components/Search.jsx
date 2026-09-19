import React, { useState, use } from 'react';
import Context from './Context';

const Search = () => {

    const { setSearchQuery,setEmojies,setRecentlyUsed } = use(Context);



    const debounceSearch = (fn, time) => {
        let timer;
        return function (...args) {
            clearTimeout(timer)
            timer = setTimeout(() => {
                fn.apply(this, args)
            }, time)
        }
    }

    const searchQueries = (q) => {
        fetch(`http://127.0.0.1:2000?q=${q}`)
            .then((res) => res.json())
            .then((data) => {
                setEmojies(data)
                console.log(data)
                fetch("http://127.0.0.1:2000/recent",{
                    method:"POST",
                    headers:{
                        'Content-Type':"application/json"
                    },
                    body:JSON.stringify({recentEmo:data.slice(0,10)})
                })
            })
        
    }

    const searchHandle = debounceSearch(searchQueries, 500)

    return (
        <div className=' w-full'>
            <input className='border-gray-500/80 border outline-none px-3 py-2.5 w-full rounded-xl text-sm ' type="text" placeholder='Search...' onChange={(e) => { setSearchQuery(e.target.value); searchHandle(e.target.value) }} />
            {/* <button className='absolute right-0 top-[50%] -translate-y-[50%]  bg-blue-800 '>search</button> */}
        </div>
    );
};

export default Search;