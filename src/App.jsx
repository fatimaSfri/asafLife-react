import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Footer from './components/footer/Footer.jsx'
import Home from './components/Home.jsx';
import NewLogin from './components/newLogin/NewLogin.jsx';
import Test from './components/test/Test.jsx'



function App() {
   return (<>   
    <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/footer" element={<Footer />} />
         <Route path= "/login"  element={<NewLogin/>}/> 
         <Route path="/test" element={<Test/>} />   
   </Routes>
   </>
  )
}

export default App
