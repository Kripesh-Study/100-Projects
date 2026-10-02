import React from 'react';

const Button = ({btnclicked}) => {
  return (
    <div onClick={(e)=> btnclicked() } className='m-auto my-8 bg-purple-500 hover:bg-purple-600 transition-all ease-in p-5  rounded-full rotate-135 group cursor-pointer '>
<svg width="30px"  height="30px" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
<path d="M10 0L9 1L11.2929 3.29289L6.2929 8.29289L7.70711 9.70711L12.7071 4.7071L15 7L16 6V0H10Z" fill="#fff" className='group-hover:fill-[white]'  />
<path d="M1 2H6V4H3V13H12V10H14V15H1V2Z" fill="#fff" className='group-hover:fill-[white]' />
</svg>
    </div>
  );
};

export default Button;