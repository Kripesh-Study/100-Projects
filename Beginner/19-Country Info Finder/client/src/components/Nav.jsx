import React from 'react';
import { NavLink } from 'react-router';

const Nav = () => {
  return (
    <div className=''>
    <nav className='flex items-center justify-between px-8 py-5'>
      <div className="logo text-2xl ">CountryFinder</div>
      <div className="links ">
        <NavLink className='px-5 py-2' to="/explore" end>Explore</NavLink>
        <NavLink className='px-5 py-2' to="/compare" end>Compare</NavLink>
        <NavLink className='px-5 py-2' to="/about" end>About</NavLink>
      </div>
      <div className="menu hidden"></div>
    </nav>
      <hr className='opacity-20' />
    </div>
  );
};

export default Nav;