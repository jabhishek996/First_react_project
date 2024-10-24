import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Career from './components/Career';
import Help from './components/Help';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';




function App() {
  return (
    <Router>
      <div >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/Career" element={<Career/>} />
          <Route path="/Help" element={<Help/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Signup" element={<Signup/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
//<Login/>

  );
}

export default App;
