import { use, useState } from 'react';
import ThemeContext from './ThemeContext';

const Nav = () => {
  const {theme,setTheme} = use(ThemeContext)
  // const theme = use(ThemeContext)


  return (
    <nav className='farcc:bg-gray-900  farcc:text-white flex justify-between px-20 py-5'>
      <div>Logo</div>

      <div onClick={() => setTheme(theme === 'light'?'dark':'light')} className='w-20 h-10 px-2 bg-red-400 rounded-4xl relative cursor-pointer flex justify-between items-center'>
        <div className={`h-8 w-8 rounded-full absolute top-1 left-1 bg-black transition-all duration-200 ${theme === "light"?"translate-x-0":"translate-x-10"}`}></div>
      </div>

    </nav>
  );
};

export default Nav;