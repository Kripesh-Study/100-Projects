import React, { useState } from 'react';
import Result from './components/Result';
import Dates from './components/Dates';
import Button from './components/Button';

const App = () => {

  const [dates,setDates] = useState([])
  const [birthDate,setBirthDate] = useState({year:2025,month:11,date:23})
  const [yearDate,setYearDate] = useState({year:0,month:0,date:0})
  const [errorDate,setErrorDate] = useState("")

  // console.log(new Date().getFullYear())
  const btnclicked = () =>{
    const today = new Date();
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth(); 
    let currentDate = today.getDate();
    
    const birth = new Date(birthDate.year, birthDate.month -1, birthDate.date );

    if(birth > today){
      setErrorDate("Enter a valid birth date")
      return;
    }

    if(currentDate < birthDate.date){
      let prevMonthDate = new Date(currentYear,currentMonth-1,0).getDate()
      currentDate = prevMonthDate + currentDate - birthDate.date
      currentMonth--;
    }else{
      currentDate = currentDate-birthDate.date;
    }
    if(currentMonth < birthDate.month){
      currentMonth = currentMonth+12-birthDate.month;
      currentYear--;
    }else{
      currentMonth = currentMonth - birthDate.month;
    }
    currentYear = currentYear - birthDate.year;


    setYearDate({year:currentYear,month:currentMonth,date:currentDate})

  }



  return (
    <div className='w-full bg-gray-100 font-reader font-bold h-screen flex flex-col justify-center items-center'>
     <div className='bg-white flex flex-col p-10 rounded-2xl shadow-2xl'>
       <Dates setBirthDate={setBirthDate} birthDate={birthDate} />
      <Button btnclicked={btnclicked} />
      <Result yearDate={yearDate} errorDate={errorDate} />
     </div>
    </div>
  );
};

export default App;