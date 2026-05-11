import { useEffect, useState } from 'react';

const App = () => {
  const [number, setNumber] = useState(0)
  useEffect(() => {

    fetchData();

  },[])

  function fetchData(){
    fetch("http://127.0.0.1:2000").then((reseponse) => {
      return reseponse.json()
    }).then((data) => {
      setNumber(data)
    }).catch(e => {
      console.log(e);
    })
  }

  const inc = async () => {
    console.log("clicked")
    try {
      await fetch("http://127.0.0.1:2000/inc", {
        method: "put",
        headers: {
          "Content-Type": "application/json"
        }
      })
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }
  const dec = async () => {
    console.log("clicked")
    try {
      await fetch("http://127.0.0.1:2000/dec", {
        method: "put",
        headers: {
          "Content-Type": "application/json"
        }
      })
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }
  const rst = async () => {
    console.log("clicked")
    try {
      await fetch("http://127.0.0.1:2000/rst", {
        method: "put",
        headers: {
          "Content-Type": "application/json"
        }
      })
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className='w-full h-screen bg-black flex justify-center items-center'>
      <div className='border text-white p-5 flex justify-center items-center flex-col'>
        <h2 className='font-bold text-center'>counter</h2>
        <div className='mt-5'>
          <button onClick={() => inc()} className='border rounded px-5 py-1 cursor-pointer'>+</button>
          <span className='mx-5'>{number}</span>
          <button onClick={() => dec()} className='border rounded px-5 py-1 cursor-pointer'>-</button>
        </div>
        <button onClick={() => rst()} className='mt-5  border rounded px-5 py-1 cursor-pointer'>Reset</button>
      </div>

    </div>
  );
};

export default App;