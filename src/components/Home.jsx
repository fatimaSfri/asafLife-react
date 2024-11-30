import React from 'react';
import NewBanner from './newbanner/NewBanner.jsx';
import Services from './services/Services.jsx';
import Logo from "./logo/Logo.jsx"
import Informathion from './info/Informathion.jsx';
import Counseling from './counseling/Counseling.jsx';
import Staff from './staff/Staff.jsx';
import Blog from './blog/Blog.jsx';
import Footer from './footer/Footer.jsx';
import Infography from './infography/Infography.jsx';


export default function Home(){

   return(
     <div className="w-full h-[2600hv] flex flex-col " >
   
   <NewBanner></NewBanner>
    <Services ></Services>
    <Logo></Logo>
    <Informathion></Informathion>
    <Counseling></Counseling>
    <Infography></Infography>
    <Staff></Staff>
    <Blog text="بلاگ"></Blog>
   <Footer></Footer>
    
   </div>

   )
}