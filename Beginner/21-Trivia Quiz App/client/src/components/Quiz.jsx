import React, { useState } from 'react';

const Quiz = ({setNext,question,answers,setScore,correctAnswer,decodeHtml}) => {
  const [isDisable,setIsDisable] = useState(false)
  const [isSelected, setIsSelected] = useState(false)
  const [ans, setAns] = useState(null)
  const updateScore = (ans) =>{
    setIsDisable(true)
    setIsSelected(false)
    if(ans === correctAnswer){
      setScore(prev => prev + 1)
    }
    setTimeout(()=>{
      setIsDisable(false)
    },7000)
  }



  return (
     <div className='w-full h-auto p-10 '>
      <h1 className='font-bold tracking-wider text-3xl text-center '>Quizz Time</h1>
      <p className='my-10 text-center text-xl'>{question}</p>
      <div className="ans grid text-center grid-cols-2">
        {answers.map((e,i)=>(
          <label  key={i} className={`border shadow  flex gap-5 cursor-pointer rounded px-5 py-3 m-3 `}> <input type="radio" checked={ans === e}  onChange={(e) => {setAns(e.target.value);setIsSelected(true)}} value={e} name='ans' /> <span>{decodeHtml(e)}</span></label>))}
       
      </div>
      <button onClick={()=>{
        setNext(prev => !prev);
        updateScore(ans)
      }} className={` px-10 m-auto py-3 rounded-2xl block text-white  cursor-pointer ${(isDisable || !isSelected)?"bg-gray-500":"bg-green-600 hover:bg-green-700"} `} disabled={isDisable} >Next   </button>
      </div>
  );
};

export default Quiz;