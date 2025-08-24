import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css'
import Routers from './routes';
import Footer from './components/Footer';



function App() {
  

  return (
      <div className="bg-white">
        <Navbar />
        <Routers />
        <Footer />
      </div>
  );
}

export default App
