import { useState,useEffect } from 'react';
import Navbar from './components/Navbar';
import Notes from './components/Notes';
import Modal from './components/Modal';



const App = () => {
  const [modal, setModal] = useState(false)
    const [data, setData] = useState([]);
    const [notesId, setNotesId] = useState("");
  const [isPostData, setPostData] = useState(false)
  const [isEditData, setEditData] = useState(false)
  
  
  const fetchedAllData = async () => {
    const fetchedData = await fetch("http://127.0.0.1:2000")
    const response = await fetchedData.json();
    setData(response)
  }

  fetchedAllData();


  const addNoteBtn = () => {
    setModal(true);
    setPostData(true)
  }
  const editNoteBtn = async (noteId) => {
    setModal(true)
    setEditData(true)
    setNotesId(noteId)
  }

  const cancelBtn = async () => {
    setModal(false)
    setEditData(false)
    setPostData(false)
    setNotesId("")
  }
  return (
    <>
      <Navbar addNoteBtn={addNoteBtn} />
      <Notes setNotesId={setNotesId} data={data} editNoteBtn={editNoteBtn}  />
      {modal && <Modal isPostData={isPostData} cancelBtn={cancelBtn} notesId={notesId} fetchedAllData={fetchedAllData} />}
    </>
  );
};

export default App;