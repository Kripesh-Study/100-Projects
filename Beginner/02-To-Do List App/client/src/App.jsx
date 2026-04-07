import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tasks from './components/Tasks.jsx'
import Categories from './components/Categories.jsx'
import TasksContainer from './components/TasksContainer.jsx'

function App() {
  const [count, setCount] = useState(null)

  return (
    <div className='flex justify-center w-100vw h-[100vh] overflow-hidden py-5 '>
      <div className='max-w-50vw w-137.5 overflow-hidden px-4 py-6 bg-amber-300'>
        <Tasks count={count} onSetCount={setCount} />
        <Categories />
        <TasksContainer count={count} onSetCount={setCount} />
      </div>

    </div>
  )
}

export default App
