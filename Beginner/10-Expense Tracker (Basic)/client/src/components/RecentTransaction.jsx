import React from 'react';



const RecentTransaction = ({ data }) => {

  return (
    <div className='p-10 bg-white rounded mt-8 grid gap-2'>
      <div className='mb-5'>
        <h1>Recent Transaction</h1>
      </div>
      {data.map(e => (
        <div className='flex w-full justify-between  px-4 py-2 items-center'>
          <div className="flex gap-6 items-center">
            <img className='w-6 h-6' src="./icons/wallet.png" alt="" />
            <div>
              <h3>Salary</h3>
              <span className='text-xs text-gray-500'>{e.transaction} .{e.date} </span>
            </div>
          </div>
          <div>${e.amount}</div>
        </div>
      ))}
    </div>
  );
};

export default RecentTransaction;