import React from 'react';
import "./SideNav.css"

const SideNav = () => {
  return (
    <div className='flex flex-col flex-1 bg-gray-700 text-white p-2 items-center rounded-3xl'>
      <div><i className="ri-windy-line ri-3x"></i></div>
      <div className='flex flex-col gap-5 mt-10  text-sm'>
        <a href="">
          <i className="ri-cloud-windy-fill ri-xl"></i>
          Weather
        </a>
        <a href="">
         <i className="ri-list-check ri-lg"></i>
          Cities
        </a>
        <a href="">
          <i className="ri-map-2-fill ri-lg"></i>
          Map
        </a>
        <a href="">
          <i className="ri-equalizer-line ri-lg"></i>
          Settings
        </a>
      </div>
    </div>
  );
};

export default SideNav;