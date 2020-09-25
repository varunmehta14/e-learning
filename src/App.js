import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
     <Navbar/> 
     <Home/>
    </div>
  );
}

export default App;
