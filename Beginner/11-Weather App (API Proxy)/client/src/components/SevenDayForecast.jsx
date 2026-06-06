import React from 'react';

const SevenDayForcast = ({weatherData}) => {
  return (
    <div className=' flex-6 rounded-3xl px-5 py-3 text-white bg-gray-700'>
      <h2 className='font-bold text-sm text-gray-400 mb-5'>7-DAY FORECAST</h2>
      {}
      <div className='w-full px-5 py-2 flex justify-between '>
          <div className='text-gray-400'>Today</div>
          <div><img src="" alt="" /> Sunny</div>
          <div><span>36</span><span className='text-gray-400'>/22</span></div>
      </div>
    </div>
  );
};

export default SevenDayForcast;