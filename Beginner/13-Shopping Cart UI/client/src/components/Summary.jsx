import React, { useContext } from 'react';
import ListItemsContext from '../context/ItemsContext.js';

const Summary = () => {
  const { cartsItem = [] } = useContext(ListItemsContext);
  const totalItem = cartsItem.reduce((sum, item) => sum + (item.quantity || 0), 0);
  const totalCost = cartsItem.reduce((sum, item)=> sum + (item.quantity * item.price),0)
  const finalPayment = cartsItem.length > 0 ? totalCost - 15 -5 + 5 : 0;

  return (
    <div className='bg-white m-5 py-1 px-5 rounded-2xl'>
      <h1 className='my-5'>Summary</h1>
      <div className='grid gap-3'>
        <div>
          <span>Total Items</span>
          <span className='px-3 py-1 bg-gray-200 rounded-2xl ml-5'>{totalItem} Items</span>
        </div>
        <div className='flex justify-between'>
          <span>Sub Total</span>
          <span>${totalCost}</span>
        </div>
        <div className='flex justify-between'>
          <span>Est. Delivery</span>
          <span>$15</span>
        </div>
        <div className='flex justify-between'>
          <span>Taxes</span>
          <span>+$5</span>
        </div>
        <div className='flex justify-between'>
          <span>Discount</span>
          <span> -$5</span>
        </div>
        <div className='flex justify-between'>
          <span>Final Payment</span>
          <span>${finalPayment}</span>
        </div>
        <div className='flex '>
          <input className='border rounded px-2 py-0.5' type="text" name="" id="" placeholder='Use coupon' />
          <span className='bg-indigo-800 text-white rounded cursor-pointer hover:bg-indigo-700 px-3 py-0.5'>Apply</span>
        </div>
        <button className='bg-indigo-800 text-white rounded cursor-pointer hover:bg-indigo-700 px-3 py-0.5 w-full'>CHECKOUT</button>
        
      </div>
    </div>
  );
};

export default Summary;