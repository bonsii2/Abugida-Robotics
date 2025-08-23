import { useState } from 'react'
import Navbar from './components/Navbar';
import './App.css'
import HomePage from './pages/home'
import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom'; 

function App() {
  

  return (
 
    <div className="bg-white">
      <Navbar />
      <HomePage />
      <Routes />
    </div>
  
  );
}

export default App
