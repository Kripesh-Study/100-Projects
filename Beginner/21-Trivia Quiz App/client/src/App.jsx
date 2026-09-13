import React, { useEffect, useState } from 'react';
import Score from './components/Score';
import Quiz from './components/Quiz';

const App = () => {

  const [next, setNext] = useState(false)
  const [isStart, setIsStart] = useState(false)
  const [question,setQuestion] = useState(null)
  const [correctAnswer, setCorreectAnswer] = useState(null)
  const [answers, setAnswers] = useState([])
  const [score, setScore] = useState(0)

  const decodeHtml = (html) =>{
    let dom = new DOMParser().parseFromString(html,'text/html')
    return dom.body.textContent;
  }

  useEffect(()=>{
    fetch('https://opentdb.com/api.php?amount=1&category=11&difficulty=easy')
    .then((res)=> res.json())
    .then((data)=> {
      
      let results = data?.results[0];
      if(!results) return;
      
      let correctAnswer = results?.correct_answer;
      let incorrectAnswer = results?.incorrect_answers;
      let options = [...incorrectAnswer]
      
      const randNum = Math.floor(Math.random() * (incorrectAnswer.length + 1) )

      options.splice(randNum,0,correctAnswer)

      setQuestion(decodeHtml(results?.question));
      setCorreectAnswer(results?.correct_answer)
      setAnswers(options)
    })

  },[isStart,next])

  return (
    <>
    <Score score={score} />
    <div className='w-full h-screen flex justify-center items-center bg-gray-100'>
    <div className='max-w-[600px] bg-white rounded shadow  w-[90%]  '>
      {(!isStart)? (<button onClick={()=> setIsStart(true)} className='bg-green-600 px-5 py-3 block my-10 m-auto text-white hover:bg-green-700 cursor-pointer'>Start Quiz</button>): (<Quiz setNext={setNext} answers = {answers} question={question} setScore={setScore} correctAnswer={correctAnswer} decodeHtml={decodeHtml} />)}  
    </div>
    </div>
    </>
  );
};

export default App;