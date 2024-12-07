import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home.jsx';
import Login from './components/login/Login.jsx';
import CarBody from './components/introduction/CarBody.jsx'
import Life from "./components/introduction/Life.jsx"
import Treatment from "./components/introduction/Treatment.jsx"
import Pet from "./components/introduction/Pet.jsx"
import Mobile from "./components/introduction/Mobile.jsx"
import Psychology from "./components/introduction/Psychology.jsx"
import LegalAdvice from "./components/introduction/LegalAdvice.jsx"

function App() {
   return (<>    
    <Routes>
         <Route path="/" element={<Home />}/>
         <Route path= "/login"  element={<Login/>}/> 
         <Route path='/carBody' element={<CarBody/>} />
         <Route path='/Life' element={<Life/>} />
         <Route path='/treatment' element={<Treatment/>} />
         <Route path='/pet' element={<Pet/>} />
         <Route path='/Mobile' element={<Mobile/>} />
         <Route path='/psychology' element={<Psychology/>} />
         <Route path='/legalAdvice' element={<LegalAdvice/>} />
   </Routes>
   </>
  )
}

export default App
