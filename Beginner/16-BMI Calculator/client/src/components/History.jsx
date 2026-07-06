import React, { useEffect, useState } from 'react';

const History = ({ historyVersion,setHeight,setWeight,setBMIScore }) => {
  const [history, setHistory] = useState([])

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await fetch('http://localhost:2000/history',{
          method:"GET",
          credentials:"include",
          headers: {
        "Content-Type": "application/json",
      }
        })
        if (!response) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json()
        console.log(data)
        setHistory(data)
      } catch (error) {
        console.error('Failed to load BMI history', error)
      }
    }

    fetchHistory()
  }, [historyVersion])

  const showDetail = (score,height,weight) =>{
    setWeight(weight)
    setHeight(height)
    setBMIScore(score)
  }
  useEffect(() => {
    const clearHistoryOnLeave = () => {
      if (navigator.sendBeacon) {
        navigator.sendBeacon('http://127.0.0.1:2000/history/clear', new Blob([JSON.stringify({})], { type: 'application/json' }))
      } else {
        fetch('http://127.0.0.1:2000/history/clear', {
          method: 'DELETE',
          credentials: 'include',
        }).catch(() => {})
      }
    }

    window.addEventListener('pagehide', clearHistoryOnLeave)
    window.addEventListener('beforeunload', clearHistoryOnLeave)

    return () => {
      window.removeEventListener('pagehide', clearHistoryOnLeave)
      window.removeEventListener('beforeunload', clearHistoryOnLeave)
    }
  }, [])

  return (
    <div className='w-72 rounded-lg border p-4 shadow-sm'>
      <h2 className='mb-3 text-lg font-semibold'>Session History</h2>
      {history.length === 0 ? (
        <p className='text-sm text-gray-500'>No history yet for this session.</p>
      ) : (
        <ul className='space-y-2'>
          {history.map((item) => (
            <li onClick={()=>showDetail(item.score,item.height,item.weight)} key={item._id} className='rounded-md bg-gray-50 px-3 py-2 text-sm'>
              BMI: {item.score}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default History;