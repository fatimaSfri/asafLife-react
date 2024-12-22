import { useEffect , useState } from 'react';
import "./NewBanner.css"

export default function MobileBanner(props) {
    
      const [ image ] =useState([
          './img/Animation/ministrant/shrine.png', 
          './img/Animation/ministrant/text.png',
       ])  
       
       const preloadImages = () => {
          image.forEach((img) => {
            const image = new Image();
            image.src = img;
          });
        };
           
       useEffect(() => {
          preloadImages();
        }, []); 
    
      return (
     <>
       {/* for max-md */}
       <div className= " bg-gradient-circle-ministrant  back_medium_01 bg-[length:100%_100%] bg-no-repeat shadow-md h-[750px]  w-full  flex justify-evenly max-md:flex-col-reverse items-center ">
   
     {/* text */}
     <div className= " xl:max-w-[550px] max-xl:max-w-[400px] max-sm:min-w-[250px] jump-to-left flex md:flex-col md:justify-center items-center md:mt-20 max-md:-mt-32 z-20">
      <img src= {image[1]} alt="" className="px-8 cursor-pointer"  />
      <img src="./img/Animation/ministrant/02-Arrow.svg" alt="" className="max-md:hidden mt-5 -mr-20 image w-4/12"></img>
     </div>
  

    {/* object */}

  
     <div className='md:w-1/2 max-md:w-11/12  flex justify-center items-center py-16 max-md:-mt-20'>
      <video className="rounded-lg"
        src= "./img/video/ministrant.MP4"
        preload="auto"
        autoPlay
        loop
        controls
       >
      </video>
  
   </div>


   </div>
   
      </>

      )
    }
    
