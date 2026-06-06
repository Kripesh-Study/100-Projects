import React from 'react';

const OverView = ({fetchWeatherData,weatherData}) => {
  
   const hourlyData = weatherData?.forecast?.forecastday[0]?.hour ?? [];
  const sixHourData = hourlyData.filter((e,i) => e?.time_epoch > ((Date.now()/1000)-3600)).slice(0,6)

  return (  
    <div className='text-white flex-12 flex flex-col gap-2 '>
      <div className=' rounded-lg bg-gray-700 '>
        <input className='w-full px-3 py-2 outline-none' onChange={(e)=>fetchWeatherData(e.target.value)} type="text" placeholder='Search for Cities' />
      </div>
      <div className='flex justify-between p-5'>
        <div className='grid gap-8'>
          <div>
            <h1 className='text-3xl font-bold'>
              {weatherData?.location?.name || 'Search a city'}
            </h1>
            <span className='text-gray-400'>Chance of rain: {weatherData?.forecast?.forecastday?.[0]?.day?.daily_chance_of_rain ?? 'N/A'}%</span>
          </div>
          <h1 className='text-4xl font-bold'>
            {weatherData?.current?.temp_c ?? '--'}<sup>o</sup>
          </h1>
        </div>
        <div className='w-30 mr-20'>
          {(weatherData)?<img className='w-full' src={weatherData?.current?.condition?.icon} alt="weather icon" />:<i className="ri-windy-line ri-3x"></i>}
          
        </div>
      </div>
      <div className='bg-gray-700 rounded-3xl p-5'>
        <h3 className='text-gray-400 font-bold text-sm mb-2'>TODAY'S FORECAST</h3>
        <div className='grid grid-cols-6 gap-3'>
          {sixHourData.map((hour) => (
            <div key={hour.time_epoch} className=' flex flex-col gap-1 '>
              <span>{new Date(hour.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
              <img className='w-12' src={hour.condition.icon} alt={hour.condition.text} />
              <h2>{hour.temp_c}<sup>o</sup></h2>
            </div>
          ))}
        </div>
      </div>
      <div className='bg-gray-700 rounded-3xl px-5 py-2'>
        <div className='flex justify-between my-2 items-center'>
          <h3 className='text-gray-400 font-bold text-sm mb-2'>AIR CONDITIONS</h3>
          <span className='text-gray-400 text-xs cursor-pointer'>See More<i className="ri-arrow-right-line"></i> </span>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className=' py-1 flex flex-col '>
            <span className='text-gray-400'><i className="ri-temp-hot-line"></i> Real Feel</span>
            <span className='text-2xl font-bold px-6'>{(weatherData)?weatherData?.current?.feelslike_c:"__"}<sup>o</sup></span>
          </div>
          <div className=' py-2 flex flex-col '>
            <span className='text-gray-400'><i className="ri-windy-line"></i> Wind</span>
            <span className='text-2xl font-bold px-6'>{(weatherData)?weatherData?.current?.wind_kph:"__"} km/h</span>
          </div>
          <div className=' py-2 flex flex-col '>
             <span className='text-gray-400'><i className="ri-contrast-drop-2-line"></i> Cloud</span>
            <span className='text-2xl font-bold px-6'>{(weatherData)?weatherData?.current?.cloud:"__"}%</span>
          </div>
          <div className=' py-2 flex flex-col '>
            <span className='text-gray-400'><i className="ri-sun-fill"></i> UV Index</span>
            <span className='text-2xl font-bold px-6'>{(weatherData)?weatherData?.current?.uv:"__"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};    

export default OverView;