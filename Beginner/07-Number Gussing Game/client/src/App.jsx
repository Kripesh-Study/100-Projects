import React, { useEffect, useState } from 'react';
import Guess from './components/Guess';
import Messages from './components/Messages';
import Scores from "./components/Scores"

const App = () => {
  const [gameOver, setGameOver] = useState(true)
  const [num, setNum] = useState(0);
  const [message, setMessage] = useState([])
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  useEffect(() => {
    if (num > 99) {
      setNum(99)
    } else if (num <= 0) {
      setNum(0)
    }


  }, [num])
  useEffect(()=>{
     const bestScore = async () => {
      const response = await fetch("http://127.0.0.1:2000")
      const data = await response.json()
      setBestScore(data.bestScore)
    }
    bestScore();
  },[gameOver])
  const start = async () => {
    setGameOver(false)
    setScore(0)
    setMessage([])
    await fetch("http://127.0.0.1:2000/randNum")

  }
  const guess = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:2000/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ num ,score})
      })
      setScore(prev => prev + 1)
      const data = await response.json();
      setMessage([...message, data.message])
      setGameOver(data.gameOver)
      
    } catch (error) {

    }

  }

  return (
    <div className='w-full h-screen flex justify-center items-center bg-gray-100 '>
      <div className=' relative bg-white p-5 rounded text-center flex flex-col items-center min-w-120 w-150 max-w-200'>
        <h1 className='font-bold text-3xl mb-5'>Guess the Number</h1>
        <Scores score={score} bestScore={bestScore} />
        <div className='bg-yellow-400 px-4 py-1.5 rounded-3xl shadow-md mb-3'>~  &nbsp;&nbsp; Between 0-100 &nbsp;&nbsp;  ~</div>
        <Guess setNum={setNum} num={num} guess={guess} gameOver={gameOver} start={start} />
        <Messages message={message} />
      </div>
    </div>
  );
};

export default App;