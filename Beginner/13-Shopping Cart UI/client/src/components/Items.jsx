import React, { useContext,useReducer } from 'react';
import ListItemsContext from '../context/ItemsContext.js';

const Items = () => {
  const {listItems,dispatch} = useContext(ListItemsContext);
  return (
    <div className='grid grid-cols-3 p-5 gap-5 '>
      {listItems.map((e,i)=>
      <div key={i} className='bg-white rounded-2xl' >
        <div className='rounded-2xl h-30 bg-gray-200'>
          <img  src="" alt="" />
        </div>
        <div className='px-3 py-2'>
          <h3 className='text-xl font-bold text-center py-1 '>{e.item}</h3>
          <div className='flex justify-between my-4'>
            <span>${e.price}</span>
            <span className='text-xs px-3 py-1.5 bg-gray-200 rounded-full '>{e.categories}</span>
          </div>
          <button  onClick={()=> dispatch({type:"addProduct",id:i})} className='text-center w-full bg-indigo-800 text-white hover:bg-indigo-700 rounded-2xl py-1 cursor-pointer'>Add To Cart</button>
        </div>
      </div>
      )}
    </div>
  );
};

export default Items;