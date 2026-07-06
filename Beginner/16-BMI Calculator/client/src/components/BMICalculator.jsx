import React, { useState } from 'react';

const BMICalculator = ({ setBMIScore, setBMIStatus,onHistoryUpdate }) => {
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)


  const BMICalculatorFnc = async (height, weight) => {
    const score = (weight / (height * height)).toFixed(2)
    setBMIScore(score);
    if (score < 18.5) {
      setBMIStatus("Unhealthy");
    } else if (score >= 18.5 && score <= 24.9) {
      setBMIStatus("Healthy");
    } else if (score >= 25 && score <= 29.9) {
      setBMIStatus("OverWeight");
    } else if (score > 30) {
      setBMIStatus("Obesity");
    }
    
    try {
      const res = await fetch("http://localhost:2000/history", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ score }),
      })
      const response = await res.json()
      console.log(response);
      
    } catch (error) {    
      console.log(error);
    }
  }
  return (
    <div className=' flex flex-col gap-4'>
      <form className=' flex flex-col gap-4'>
        <h1>BMI Calculator</h1>
        <label>
          <span>Height:</span>
          <input className='border rounded-md px-2 py-1 ml-3' type="text" onChange={(e) => setHeight(e.target.value)} />
        </label>
        <label>
          <span>weight:</span>
          <input className='border rounded-md px-2 py-1 ml-3' type="text" onChange={(e) => setWeight(e.target.value)} />
        </label>
        <button className='bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md cursor-pointer' onClick={(e) => {e.preventDefault();BMICalculatorFnc(height, weight);onHistoryUpdate()}}>Check</button>
        {height != 0 && weight != 0 && <input className='bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md cursor-pointer' type='reset' />}
      </form>
    </div>
  );
};

export default BMICalculator;