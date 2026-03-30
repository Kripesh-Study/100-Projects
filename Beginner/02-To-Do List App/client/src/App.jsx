import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tasks from './components/Tasks'
import Categories from './components/Categories'
import TasksContainer from './components/TasksContainer'

function App() {


  return (
    <div className='flex justify-center w-100vw h-fit'>
      <div className='max-w-50vw w-137.5 h-screen px-4 py-6 bg-amber-300'>
        <Tasks />
        <Categories />
        <TasksContainer />
      </div>

    </div>
  )
}

export default App
