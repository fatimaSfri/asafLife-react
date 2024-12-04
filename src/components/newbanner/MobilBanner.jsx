import React, { useEffect , useState } from 'react';
export default function MobileBanner(props) {
    
      const [ image , setImage ] =useState([
          './img/Animation/mobile/07-ob.png', 
          './img/Animation/mobile/07-Textbutton.png',
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
       <div className= " max-md:bg-bg-sm-mobile md:bg-bg-mobile back_medium_01  bg-[length:100%_100%] bg-no-repeat shadow-md h-[750px]  w-full  flex justify-evenly max-md:flex-col-reverse items-center ">
     
  {/* object */}
  <div className=" md:h-3/5 xl:w-[300px] sm:min-w-[350px] max-sm:w-full max-md:h-3/6 -mb-[4.5rem] jump-to-right max-md:p-8 flex items-center 
        justify-center xl:-mr-10">
      <img src={image[0]}alt=""  className=" max-md:h-full pt-5 " />
     </div>
    

     {/* text */}
     <div className= " xl:max-w-[550px] max-xl:max-w-[400px] max-sm:min-w-[250px] jump-to-left flex md:flex-col md:justify-center items-center md:mt-20 z-20">
      <img src= {image[1]} alt="" className=" px-8 cursor-pointer"  />
      <img src="./img/Animation/children/03-Arrow.svg" alt="" className="max-md:hidden mt-5 mr-20 image-reverse w-4/12 "></img>
     </div>
    
     {/* play */}

     {/* <div className=" md:w-3/12 md:h-4/5  max-md:w-10/12 max-md:h-1/6  flex items-center justify-center ">
      <img src="./img/Animation/mobile/07-Play.png" alt=""  className="
        xl:w-[90px]  max-xl:w-[70px] xl:hover:w-[100px]  max-xl:hover:w-[80px] transition-width duration-300 ease-in-in  z-30 cursor-pointer max-md:-mb-10 "  onClick={props.videoShowHandle}  />
      <img src="./img/Animation/PlayText.svg" alt=""  className="absolute route xl:w-[140px] max-xl:w-[100px] cursor-pointer max-md:-mb-10 " />
      <img src='./img/Animation/car/mouse.png' className='absolute z-30 lg:w-[30px] lg:h-[40px] max-lg:w-[20px] max-lg:h-[25px] movement -mb-[100px] md:ml-[70px] max-md:ml-[50px] '></img>
     </div> */}

   </div>
   
      </>

      )
    }
    
