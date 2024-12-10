import React, { useEffect , useState } from 'react';
export default function MobileBanner(props) {
    
      const [ image , setImage ] =useState([
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
       <div className= " max-md:bg-bg-ministrant md:bg-bg-ministrant back_medium_01  bg-[length:100%_100%] bg-no-repeat shadow-md h-[750px]  w-full  flex justify-evenly max-md:flex-col items-center ">
   
     {/* text */}
     <div className= " xl:max-w-[550px] max-xl:max-w-[400px] max-sm:min-w-[250px] jump-to-left flex md:flex-col md:justify-center items-center md:mt-20 z-20">
      <img src= {image[1]} alt="" className=" px-8 cursor-pointer"  />
      <img src="./img/Animation/ministrant/02-Arrow.svg" alt="" className="max-md:hidden mt-5 -mr-20 image w-4/12"></img>
     </div>
  

    {/* object */}
     <div className=" md:h-3/5 xl:w-[700px] sm:min-w-[350px] max-sm:w-full max-md:h-3/6 -mb-[4.5rem] jump-to-right max-md:p-8 flex items-center 
        justify-center xl:-mr-10">
      <img src={image[0]}alt=""  className=" max-md:h-full pt-5 " />
     </div>

   </div>
   
      </>

      )
    }
    
