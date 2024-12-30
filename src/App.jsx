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
import Input from './components/input/Input.jsx';
import CreateUser from "./components/dashbord/CreateUser.jsx"
import Registration from "./components/dashbord/Registration.jsx"
import Contract from "./components/dashbord/Contract.jsx"
import Ministrant from "./components/introduction/Ministrant.jsx"
import MyContracts from './components/managementPanel/MyContracts.jsx';
import Profile from './components/managementPanel/Profile.jsx';
import Services from './components/managementPanel/ServicesPanel.jsx';
import Support from './components/managementPanel/Support.jsx';
import GetDashbordUsers from './components/dashbord/GetDashbordUsers.jsx'
import ManagementPanel from "./components/managementPanel/ManagementPanel.jsx"
import ChildProfil from "./components/managementPanel/ChildProfil.jsx"
import Test from "./components/test/Test.jsx"
import Insurer from './components/dashbord/Insurer.jsx';

function App() {
 
   return (
   
   <>    
    <Routes>
         <Route path="/"      element={<Home />}/>
         <Route path='/carBody'  element={<CarBody/>} />
         <Route path='/life'     element={<Life/>} />
         <Route path='/treatment'  element={<Treatment/>} />
         <Route path='/pet'   element={<Pet/>} />
         <Route path='/mobile'  element={<Mobile/>} />
         <Route path='/psychology' element={<Psychology/>} />
         <Route path='/legal-advice' element={<LegalAdvice/>} />
         <Route path='/ministrant' element={<Ministrant/>} />
         <Route path="login/*"  element={<Login/>}>
                <Route
                 index element={ <Input />} />
                <Route
                  path="password"
                  element={<Input /> } />
         </Route>

         <Route path="dashbord/*"  element={<ManagementPanel/>}>
            <Route index   element={< Profile/>}/>
            <Route path='profile' element={< Profile/>}/>
            <Route path='table' element={< ChildProfil/>}/>
        
            <Route path="mycontracts"  element={<MyContracts />}/>
            <Route path="services"  element={<Services />}/>
           <Route  path="support" element={<Support />}/>
         </Route>

         <Route path='/user-create' element={<CreateUser/>} />
        <Route path='/insurance' element={<Registration/>} />
        <Route path='/user'  element={<GetDashbordUsers/>} />
        <Route path='/contract' element={<Contract/>} />
        <Route path='/test'  element={<Test/>} />
        <Route path='/Insurer'  element={<Insurer/>} />
        
   </Routes>
  
   </>
  )
}

export default App
