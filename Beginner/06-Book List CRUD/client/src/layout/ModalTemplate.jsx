import React from 'react';

const ModalTemplate = ({children,closeModal}) => {
  return (
    <div className='w-full shadow-2xl h-screen flex justify-center items-center fixed top-0 left-0 bg-black/70'>
      <form className='bg-white p-8 flex flex-col gap-3 w-[90%] max-w-100 relative'>
      <div className='absolute right-10 bg-gray-100 w-7 h-7 flex justify-center items-center cursor-pointer shadow-2xl rounded-full'
      onClick={closeModal}
      >x</div>
        {children}
      </form>
    </div>
  );
};

export default ModalTemplate;