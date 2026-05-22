import React, {useState} from 'react';
import ModalTemplate from '../layout/ModalTemplate';

const EditModal = ({id,editData,closeModal,values,setValues}) => {
  
  return (
    <ModalTemplate closeModal={closeModal} >
       <h2 className='font-bold mb-3 '>Edit Record</h2>
      <label htmlFor="">
        <input className='w-full border rounded px-3 py-1' type="text" placeholder='Title of the book' value={values.title}
          onChange={(e) => setValues({ ...values, title: e.target.value })}
        />

      </label>
      <label htmlFor="">
        <input className='w-full border rounded px-3 py-1' type="text" placeholder='Author' value={values.author}
          onChange={(e) => setValues({ ...values, author: e.target.value })}
        />
      </label>
      <button className='cursor-pointer bg-blue-600 text-white' onClick={(e)=>editData(e,id)}>Update Records</button>
    </ModalTemplate>
  );
};

export default EditModal;