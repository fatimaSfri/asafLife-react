import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home.jsx';
import Login from './components/login/Login.jsx';
import CarBody from './components/carBody/CarBody.jsx'
import Test from './components/test/Test.jsx';


function App() {
   return (<>    
    <Routes>
         <Route path="/" element={<Home />}/>
         <Route path= "/login"  element={<Login/>}/> 
         <Route path='/carBody' element={<CarBody/>} />
         <Route path="/test" element={<Test/>}></Route>
   </Routes>
   </>
  )
}

export default App
