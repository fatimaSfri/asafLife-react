import  { useEffect , useState } from 'react';
import "./NewBanner.css"

export default function LegalBanner() {
    
      const [ image ] =useState([
          './img/banner/legal/05-ob.webp', 
          './img/banner/legal/Textbutton.png',
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
       <div className= "bg-gradient-circle-legal back_medium_01 bg-[length:100%_100%] bg-no-repeat shadow-md h-[750px] w-full flex justify-center max-md:flex-col-reverse items-center xl:gap-40 gap-20">
     

     {/* object */}
     <div className=" md:h-4/5 xl:min-w-[500px] sm:min-w-[350px] max-sm:w-full max-md:h-3/6 -mb-[4.5rem] jump-to-left max-md:p-8 flex items-center 
        justify-center ">
      <img src={image[0]}alt=""  className=" max-md:h-full pt-5 " />
     </div>
     
     {/* text */}
     <div className=" xl:max-w-[550px] max-xl:max-w-[400px] max-sm:min-w-[250px] jump-to-right flex md:flex-col md:justify-center items-center md:mt-20 z-20">
      <img src= {image[1]} alt="" className=" px-8 cursor-pointer" />
      <img src="./img/banner/legal/03-Arrow.svg" alt="" className="max-md:hidden mt-5 -ml-20 image-reverse  w-4/12" ></img>
     </div>

     </div>
      </>

      )
    }
    














