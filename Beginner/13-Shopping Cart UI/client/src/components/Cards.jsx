import React, { useContext, useEffect, useReducer, useState } from 'react';
import ListItemsContext from "../context/ItemsContext.js";

const Cards = () => {
  const { listItems, dispatch, cartsItem } = useContext(ListItemsContext);

  const [items, setItems] = useState([]);

  useEffect(()=>{
    console.log(cartsItem)
    setItems(cartsItem)
  },[cartsItem])

  // Render each cart item directly from the cart IDs.
  return (
    <div className='grid gap-5'>
      {Array.isArray(items) && items.length > 0 && items.map((item, idx) => {
       console.log(item)
        // Calculate quantity as the number of times this id appears in the cart.
        // const quantity = cartsItem.filter(itemId => itemId === id).length;
        return (
          <div key={idx} className='flex w-full justify-between items-center'>
            <label className='flex items-center gap-3'>
              <input type="checkbox" name="hello" />
              <img src="" alt="" />
              <div>
                <h2>{item.item}</h2>
                <span>${item.price}</span>
              </div>
            </label>
            <div className='flex items-center gap-3 bg-gray-200 shadow-2xl px-1 py-1 rounded-2xl'>
              <button onClick={() => dispatch({type:"decrease", id:item.id})} className='w-7 h-7 cursor-pointer bg-white rounded-full'> - </button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch({type:"increase", id:item.id})} className='w-7 h-7 cursor-pointer bg-white rounded-full'>+</button>
            </div>
            <div className='flex gap-5 bg-gray-200 px-5 py-1 rounded-2xl'>
              <span>${Math.round(item.quantity * item.price)}</span>
              <button onClick={()=> dispatch({type:"deleteProduct",id:item.id})} >d</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;