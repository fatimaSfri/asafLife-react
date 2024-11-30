import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home.jsx';
import NewLogin from './components/newLogin/NewLogin.jsx';
import CarBody from './components/carBody/CarBody.jsx'



function App() {
   return (<>    
    <Routes>
         <Route path="/" element={<Home />}/>
         <Route path= "/login"  element={<NewLogin/>}/> 
         <Route path='/carBody' element={<CarBody/>} />
   </Routes>
   </>
  )
}

export default App
