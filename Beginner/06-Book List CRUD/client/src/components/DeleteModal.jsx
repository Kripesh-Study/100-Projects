import React from 'react';
import ModalTemplate from '../layout/ModalTemplate';

const DeleteModal = ({closeModal,deleteData,id}) => {
  return (
    <ModalTemplate closeModal={closeModal}>
      <h2 className='p-5'>Do you really want to delete this book?</h2>
      <div > 
        <button style={{padding:"10px 40px"}}
        className='bg-red-600  border border-red-600 text-white hover:bg-red-700 cursor-pointer '
        onClick={(e)=>deleteData(e,id)}
        >Delete</button>
        <button
        style={{padding:"10px 40px"}}
        className='border hover:bg-gray-200 ml-4 cursor-pointer '
          onClick={closeModal}
        >No</button>
      </div>
    </ModalTemplate>
  );
};

export default DeleteModal;



