import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import NoteState from './Context/notes/noteState';
import Alert from './Component/Alert'
import Login from './Component/Login'
import Signup from "./Component/Signup";
import { useState } from 'react';

function App() {
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
    <NoteState>
      <Router>
        <Navbar/>
        <Alert alert = {alert}/>
        <div className="container">
        <Routes>
          <Route path="/" element={<Home showAlert={showAlert}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login showAlert={showAlert}/>} />
          <Route path="/signup" element={<Signup showAlert={showAlert}/>}/>
        </Routes>
        </div>
      </Router>
      </NoteState>
    </>
  );
}


export default App;
