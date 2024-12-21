import  { useEffect , useState } from 'react';
import "./NewBanner.css"

export default function AnimalBanner(props) {
    
      const [ image ] =useState([
          './img/Animation/animal/pet-ob.webp', 
          './img/Animation/animal/06-Textbutton.png',
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
       <div className= "bg-gradient-circle-pet max-md:bg-bg-sm-animal md:bg-bg-animal back_medium_01  bg-[length:100%_100%] bg-no-repeat shadow-md h-[750px]  w-full  flex justify-evenly max-md:flex-col items-center">
     
     {/* text */}
     <div className= " xl:max-w-[550px] max-xl:max-w-[400px] max-sm:min-w-[250px] jump-to-left flex md:flex-col md:justify-center items-center md:mt-20 z-20">
      <img src= {image[1]} alt="" className=" px-8 cursor-pointer"  />
      <img src="./img/Animation/treatment/02-Arrow.svg" alt="" className="max-md:hidden mt-5 -mr-20 image w-4/12 "></img>
     </div>
    
    
     {/* object */}

     <div className="xl:w-[600px] sm:min-w-[450px]  max-sm:w-full max-md:h-3/6 -mb-[4.5rem] jump-to-right  flex items-center 
        justify-center">
      <img src={image[0]}alt=""  className=" xl:h-full " />
     </div>
     </div>
      </>

      )
    }
    
