import React, { useState, useRef, useEffect } from 'react';
import Screen from './components/Screen';
import Buttons from './components/Buttons';
import Laps from './components/Laps';


const App = () => {
  const [isRunning, setIsRunning] = useState(false)


  const [time, setTime] = useState({ hour: 0, min: 0, sec: 0, millisec: 0 });
  const timeRef = useRef(null)
  const [laps, setLaps] = useState([])

  useEffect(() => {
    if (isRunning) {
      timeRef.current = setInterval(() => {
        setTime((prev) => {
          let { hour, min, sec, millisec } = prev;

          millisec += 10;

          if (millisec === 1000) {
            millisec = 0;
            sec += 1;
          }
          if (sec === 60) {
            sec = 0;
            min += 1;
          }
          if (min === 60) {
            min = 0;
            hour += 1;
          }

          return { hour, min, sec, millisec };
        });


      }, 10);
    }

    return () => {
      clearInterval(timeRef.current)
    }

  }, [isRunning])

  const resetHandling = () => {
    clearInterval(timeRef.current)
    setTime({ hour: 0, min: 0, sec: 0, millisec: 0 })
    setIsRunning(false)
    setLaps([])
  }

  const lapsResult = (e) => {
    setLaps(prev => {
      const prevTime = (laps.length == 0) ? { hour: 0, min: 0, sec: 0, millisec: 0 } : laps[laps.length - 1].currentTime;
      // const lapTime = {hour:time.hour - prevTime.hour,min:time.min - prevTime.min,sec:time.sec - prevTime.sec,millisec:time.millisec - prevTime.millisec};
      const lapMillisec = (time.hour * 60 * 60 * 1000 + time.min * 60 * 1000 + time.sec * 1000 + time.millisec) - (prevTime.hour * 60 * 60 * 1000 + prevTime.min * 60 * 1000 + prevTime.sec * 1000 + prevTime.millisec)

      console.log(lapMillisec)

      const hour = Math.floor(lapMillisec/(1000*60*60))
      const min = Math.floor((lapMillisec%(1000*60*60))/(1000*60))
      const sec = Math.floor((lapMillisec%(1000*60))/1000)
      const millisec = Math.floor(lapMillisec%1000)

      // console.log(hour, min, sec, millisec)
      const duration = { hour, min, sec, millisec }
      // console.log(lapTime)

      fetch("http://localhost:3000/laps",{
        method:"post",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({time,duration})
      })
      return [...prev, { lapTime:duration, currentTime: time }]
    })
  }





  return (
    <div className='w-full h-screen bg-black'>
      <div className='w-full max-h-screen flex items-center flex-col gap-10'>
        <Screen time={time} />
        <Buttons isRunning={isRunning} resetHandling={resetHandling} setIsRunning={setIsRunning} lapsResult={lapsResult} />
        <Laps laps={laps} />
      </div>
    </div>
  );
};

export default App;