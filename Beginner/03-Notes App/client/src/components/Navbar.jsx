import React from 'react';

const Navbar = ({addNoteBtn}) => {
  
  return (
    <nav className='bg-blue-950 text-white flex justify-between px-10 py-5 items-center'>
      <div>logo</div>
      <button onClick={()=>addNoteBtn()} className='bg-blue-500 px-2 py-1 rounded-xl cursor-pointer '>+Add Notes</button>
    </nav>
  );
};

export default Navbar;