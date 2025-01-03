import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Signup from './components/Authentification/Signup';
import Login from './components/Authentification/Login';
import Home from './components/Home';
import Footer from './components/Footer/Footer';

const App=()=>{
  return(
    <div>
      <Header/>
      <div className='main'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App;
