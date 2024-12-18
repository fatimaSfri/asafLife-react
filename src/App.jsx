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
import Test from "./components/test/Test.jsx"
import Input from './components/input/Input.jsx';
import InsuredPerson from "./components/dashbord/InsuredPerson.jsx"
import Registration from "./components/dashbord/Registration.jsx"
import Contract from "./components/dashbord/Contract.jsx"
import Ministrant from "./components/introduction/Ministrant.jsx"
import ManagementPanel from './components/managementpanel/ManagementPanel.jsx';


function App() {
   return (
   
   <>    
    <Routes>
         <Route path="/"            element={<Home />}/>
         <Route path='/carBody'     element={<CarBody/>} />
         <Route path='/Life'        element={<Life/>} />
         <Route path='/treatment'   element={<Treatment/>} />
         <Route path='/pet'         element={<Pet/>} />
         <Route path='/Mobile'      element={<Mobile/>} />
         <Route path='/psychology'  element={<Psychology/>} />
         <Route path='/legalAdvice' element={<LegalAdvice/>} />
         <Route path='/Ministrant' element={<Ministrant/>} />
         <Route path="/panel"      element={<ManagementPanel/>} />
        <Route path="login/*"  element={<Login/>}>
                <Route
                 index element={ <Input />} />
                <Route
                  path="password"
                  element={<Input /> } />
         </Route>
         <Route path='/insuredPerson' element={<InsuredPerson/>} />
        <Route path='/registration' element={<Registration/>} />
        <Route path='/contract' element={<Contract/>} />

   </Routes>
  
   </>
  )
}

export default App
