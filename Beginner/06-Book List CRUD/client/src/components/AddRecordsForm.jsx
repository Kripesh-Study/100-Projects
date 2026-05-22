import React, { useState } from 'react';
import ModalTemplate from '../layout/ModalTemplate';

const AddRecordsForm = ({ closeModal }) => {
  const [data,setData] = useState({title:"",author:""})

  const addData = async (e) => {
    e.preventDefault();
    try {

      await fetch("http://127.0.0.1:2000/add", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      console.log("hello")
      closeModal();
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <ModalTemplate closeModal={closeModal}>
      <h2 className='font-bold mb-3 '>Add Record</h2>
      <label htmlFor="">
        <input className='w-full border rounded px-3 py-1' type="text" placeholder='Title of the book'
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />

      </label>
      <label htmlFor="">
        <input className='w-full border rounded px-3 py-1' type="text" placeholder='Author'
          onChange={(e) => setData({ ...data, author: e.target.value })}
        />
      </label>
      <button className='cursor-pointer bg-blue-600 text-white' onClick={addData}>Add Records</button>
    </ModalTemplate>

  );
};

export default AddRecordsForm;