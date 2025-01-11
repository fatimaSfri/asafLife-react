import NewBanner from './newbanner/NewBanner.jsx';
import Services from './services/Services.jsx';
import Logo from "./logo/Logo.jsx"
import Informathion from './info/Informathion.jsx';
import Counseling from './counseling/Counseling.jsx';
import Staff from './staff/Staff.jsx';
import Blog from './blog/Blog.jsx';
import Footer from './footer/Footer.jsx';
import Infography from './infography/Infography.jsx';
import { useState } from 'react';
import Loading from './loading/Loading.jsx';

export default function Home(){

   const [loading, setLoading] = useState(true);
      const totalImages = 1;
      const [imagesLoaded, setImagesLoaded] = useState(0);
  
      const handleImageLoad = () => {
        setImagesLoaded(prev => prev + 1);
        if (imagesLoaded + 1 >= totalImages) {
          setLoading(false);
        }
      };

   return(
    <>
    <div className='w-full h-full'>
    {loading &&
    <div className='w-full h-full z-50'>
    <Loading></Loading>
    </div>
    }</div>
    
     <div className="w-full h-[2600hv] flex flex-col " >
    <NewBanner srcLife="./img/banner/life/life-ob.webp" onLoad={handleImageLoad}  loading={loading} ></NewBanner>
     {!loading &&
    <div>
    <Services></Services>
    <Logo></Logo>
    <Informathion></Informathion>
    <Counseling></Counseling>
    <Infography></Infography>
    <Staff></Staff>
    <Blog></Blog>
    <Footer></Footer>
   </div>}

   </div>
   </>
   )
}