import React, { useEffect, useState } from 'react';
import Table from './components/Table';
import AddRecordsForm from './components/AddRecordsForm';



const App = () => {
  const [allData,setAllData] = useState([])
  const [modal,setModal] = useState({addModal:false,deleteModel:false,editModal:false})
  const fetchAllData = async() =>{
    try {
      const response = await fetch("http://127.0.0.1:2000")
      const newResponse = await response.json()
      setAllData(newResponse);
    } catch (error) {
      console.log("couldn't get all data");
    }
  }
  useEffect(()=>{
    fetchAllData()
  },[modal])
  
  
 

  const closeModal = () => {
    setModal({addModal:false,deleteModal:false,editModal:false})
  }

  return (
    <>
    {modal.addModal && <AddRecordsForm closeModal={closeModal} />} 
    
  
    <div className='flex flex-col w-full h-screen items-center'>
      <h2 className='font-bold text-3xl py-5 '>Books Records</h2>
      <Table modal={modal} allData={allData} setModal={setModal} closeModal={closeModal}  />
      <button className='border rounded border-purple-600 mt-5 bg-purple-600 text-white hover:bg-purple-800 cursor-pointer'
      onClick={()=>setModal({addModal:true})}
      >Add Records</button>
    </div>
    </>
  );
};

export default App;