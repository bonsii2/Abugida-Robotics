import { useState } from 'react'
import Navbar from './components/Navbar';
import './App.css'
import HomePage from './pages/home'

function App() {
  

  return (
    <div className='bg-white' >
       <Navbar />
       <HomePage />
   
    </div>
  )
}

export default App
