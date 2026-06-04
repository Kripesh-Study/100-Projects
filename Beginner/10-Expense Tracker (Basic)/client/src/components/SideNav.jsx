import React from 'react';

const SideNav = () => {
    return (
        <div className='fixed top-0 left-0 p-5 bg-white h-screen flex flex-col justify-between  w-55'>
            <div>
                <div className='font-bold text-xl p-3'>Spendr</div>
                <div className='mt-10 flex flex-col gap-2 '>
                    <div className='hover:bg-blue-200 rounded px-3 py-1 cursor-pointer' >OverView</div>
                    <div className='hover:bg-blue-200 rounded px-3 py-1 cursor-pointer'>Transactions</div>
                </div>

            </div>
            <div className='flex w-full gap-2.5 justify-between p-3 bg-gray-100 rounded-4xl'>
                <img className='p-1 h-10 w-10 bg-red-300 border rounded-full' src="../assets/img/profile.svg" alt="" />
                <div>
                    <h3 >Alex Zender</h3>
                    <p
                     className='text-gray-500 text-sm'>Personal</p>
                </div>
            </div>
        </div>
    );
};
export default SideNav;