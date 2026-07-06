import React, { useState } from 'react';
import BMICalculator from './components/BMICalculator'
import Result from './components/Result'
import History from './components/History'

const App = () => {
  const [BMIScore, setBMIScore] = useState(0)
  const [BMIStatus, setBMIStatus] = useState("")
  const [historyVersion, setHistoryVersion] = useState(0)

  const refreshHistory = () => {
    setHistoryVersion((prev) => prev + 1)
  }

  return (
    <div className='flex justify-center w-full h-screen gap-15 mt-20 '>
      <div className='flex flex-col gap-10'>
        <BMICalculator setBMIScore={setBMIScore} setBMIStatus={setBMIStatus} onHistoryUpdate={refreshHistory} />
        <Result BMIScore={BMIScore} BMIStatus={BMIStatus} />
      </div>
      <History historyVersion={historyVersion} />
    </div>
  );
};

export default App;