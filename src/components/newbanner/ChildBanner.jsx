import React, { useEffect , useState } from 'react';
export default function PsychologyBanner(props) {
    
      
      const [ image , setImage ] =useState([
          './img/Animation/children/03-ob.png', 
          './img/Animation/children/03-Textbutton.png',
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
    
      <div className=" md:bg-bg-children max-md:bg-bg-sm-children back_medium_01 bg-[length:100%_100%] bg-no-repeat shadow-md h-[750px]  w-full  flex justify-center max-md:flex-col-reverse items-center  overflow-hidden">
         
         {/* object */}
         <div className=" lg:max-w-[500px] max-sm:w-full max-md:h-3/6 xl:-mb-[16rem] max-xl:-mb-[16rem] max-lg:-mb-[26rem] max-md:-mb-[8rem] jump-to-left max-md:p-8 flex items-center justify-center ">
           <img src={image[0]} alt=""  className=" max-md:h-full pt-5"/>
          </div>
         
          {/* play */}
           <div className=" md:w-3/12 md:h-4/5 max-md:w-10/12 max-md:h-1/6 flex items-center justify-center ">
           <img src="./img/Animation/children/03-Play.png" alt=""  className="xl:w-[90px]  max-xl:w-[70px] xl:hover:w-[100px] max-xl:hover:w-[80px] transition-width duration-300 ease-in-in z-30 cursor-pointer "  onClick={props.videoShowHandle} />
           <img src="./img/Animation/PlayText.svg" alt=""  className=" absolute route xl:w-[140px] max-xl:w-[100px] cursor-pointer " />
           <img src='./img/Animation/car/mouse.png' className='absolute z-30 lg:w-[30px] lg:h-[40px] max-lg:w-[20px] max-lg:h-[25px] movement md:-mb-[90px] md:ml-[70px] max-md:ml-[50px] max-md:-mb-[70px]' ></img>
          </div>

           {/* text */}
           <div className=" xl:max-w-[500px] max-xl:max-w-[350px] max-sm:min-w-[250px] max-md:mb-[60px] jump-to-right flex md:flex-col md:justify-center items-center md:mt-20 z-20">
           <img src= {image[1]} alt="" className="z-20 px-8 cursor-pointer"  />
           <img src="./img/Animation/children/03-Arrow.svg" alt="" className="max-md:hidden mt-5 -ml-20 image-reverse  w-4/12" ></img>
          </div>
    
          </div>
      )
    }
    
















