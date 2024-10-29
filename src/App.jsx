import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Footer from './components/footer/Footer.jsx'
import Home from './components/Home.jsx';
import Register from './components/register/Register.jsx';
import Login from './components/login/Login.jsx';
import NewLogin from './components/newLogin/NewLogin.jsx'


function App() {


  
  return (
    <>
    
    <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/footer" element={<Footer />} />
         <Route path= "/login"  element={<NewLogin/>}/>     
   </Routes>
   
   </>
  )
}

export default App
