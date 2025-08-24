import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css'
import Routers from './routes';
import HomePage from './pages/home';


function App() {
  

  return (
    <Router>
      <div className="bg-white">
        <Navbar />
        <Routers />
      </div>
    </Router>
  );
}

export default App
