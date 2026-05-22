import React, { useState } from 'react';
import "./table.css"
import DeleteModal from './DeleteModal';
import EditModal from './EditModal';

const Table = ({ modal,setModal,allData,closeModal }) => {

const [id,setId] = useState("")
const [values,setValues] = useState({})
const deleteData = async(e,id)=>{
  e.preventDefault();
    console.log(id)

    try {
      await fetch("http://127.0.0.1:2000/delete",{
        method:"delete",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({id})
      })
      closeModal();
    } catch (error) {
      console.log(error)
    }
  }
  const editData = async(e,id)=>{
    e.preventDefault();
    // console.log(id)
   try {
     await fetch("http://127.0.0.1:2000/edit",{
       method:"put",
       headers:{
         "Content-Type":"application/json"
       },
       body:JSON.stringify({...values,id})
     })
     closeModal();
   } catch (error) {
    console.log(error);
    
   }
  }

  return (
    <>
    {modal.deleteModal && <DeleteModal id={id} deleteData={deleteData} closeModal={closeModal} />} 
    {modal.editModal && <EditModal id={id} values={values} setValues={setValues} editData={editData} closeModal={closeModal} />} 
    <table className='border border-black border-collapse p-5 '>
      <thead className='border '>
        <tr>
        <th>S.N</th>
        <th>Title</th>
        <th>Author</th>
        <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {allData.length >= 1 ? allData.map((items,i) => (
          <tr key={i}>
            <td>{i+1}</td>
            <td>{items.bookTitle}</td>
            <td>{items.author}</td>
            
            <td>
              <button
              className='mr-3 bg-blue-600 text-white '
              onClick={()=>{setId(items._id);setModal({...modal,editModal:true});setValues({title:items.bookTitle,author:items.author})}}
              >edit</button>
              <button className='mr-3 bg-red-600 text-white'
              onClick={()=>{setModal({...modal,deleteModal:true});setId(items._id)}}
              >delete</button>
            </td>
          </tr>
        )):
        <tr className='text-center'>
          <td colSpan={4}>No Data Found!</td>
        </tr>
        }
      </tbody>
    </table>
    </>
  );
};

export default Table;