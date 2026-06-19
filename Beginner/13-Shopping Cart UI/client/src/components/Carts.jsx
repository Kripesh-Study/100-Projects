import React, { useContext } from 'react';
import Cards from './Cards';
import ListItemsContext from "../context/ItemsContext.js";

const Carts = () => {
  // Access both the cart items and the dispatch function from context.
  const { cartsItem = [], dispatch } = useContext(ListItemsContext);
  return (
    <div className='bg-white m-5 px-5 py-5 rounded-2xl'>
      <div className='flex justify-between items-center mb-5 '>
        <h1>Your Carts <span className='px-4 py-1 bg-gray-200 rounded-full'>{cartsItem.length} Items</span></h1>
        <button className='text-red-400 underline cursor-pointer' onClick={()=>dispatch({type:"reset"})} >Clear Cart</button>
      </div>
      <Cards />
    </div>
  );
};

export default Carts;