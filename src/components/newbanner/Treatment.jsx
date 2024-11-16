import React, { useEffect , useState } from 'react';
export default function LegalBanner(props) {
    
      const [ image , setImage ] =useState([
          './img/Animation/treatment/02-ob.png', 
          './img/Animation/treatment/02-Textbutton.png',
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
      {/* <div className=" bg-bg-treatment back_medium_01  bg-[length:100%_100%] bg-no-repeat shadow-md h-[750px]  w-full  flex justify-center max-md:flex-col items-center max-md:hidden"> */}
       
           {/* text */}
           {/* <div className=" md:w-4/12 md:h-4/5 xl:w-[28%] max-md:w-8/12 max-md:h-2/6 jump-to-left flex md:flex-col md:justify-center items-center md:mt-20 z-20">
           <img src= {image[1]} alt="" className=" xl:px-8 cursor-pointer"  />
           <img src="./img/Animation/treatment/02-Arrow.svg" alt="" className="max-md:hidden mt-5 -mr-28 image w-4/12" ></img>
          </div> */}
          {/* object */}
       {/* <div className=" md:w-4/12 md:h-4/5  max-md:w-10/12 max-md:h-3/6 jump-to-right max-md:p-8 flex items-center max-lg:w-8/12 justify-center md:mt-20">
           <img src={image[0]} alt=""  className=" max-md:h-full pt-5 " />
          </div> */}
          {/* play */}
          {/* <div className=" md:w-3/12 md:h-4/5  max-md:w-10/12 max-md:h-1/6  flex items-center justify-center ">
           <img src="./img/Animation/treatment/02-Play.png" alt=""  className=" z-30  cursor-pointer max-md:h-3/6 md:w-3/12 xl:w-[20%]  md:hover:w-[23%] transition-width duration-300 ease-in-in max-md:hover:h-[60%] "  onClick={props.videoShowHandle}  />
           <img src="./img/Animation/PlayText.svg" alt=""  className=" absolute route max-md:h-1/6 md:w-1/12 " />
           <img src='./img/Animation/car/mouse.png' className='absolute z-30 lg:w-[30px] lg:h-[40px] max-lg:w-[20px] max-lg:h-[25px] movement md:-mb-[90px] md:ml-[70px] max-md:ml-[50px] max-md:-mb-[70px] '></img>
          </div>
          </div> */}

       {/* for max-md */}
       <div className=" max-md:bg-bg-sm-treatment md:bg-bg-treatment back_medium_01  bg-[length:100%_100%] bg-no-repeat shadow-md h-[750px]  w-full  flex justify-center max-md:flex-col items-center">
     
     {/* text */}
     <div className=" md:w-4/12 md:h-4/5  max-md:w-8/12 max-md:h-2/6 jump-to-left flex md:flex-col md:justify-center items-center md:mt-20 z-20">
      <img src= {image[1]} alt="" className=" xl:px-16 cursor-pointer"  />
      <img src="./img/Animation/treatment/02-Arrow copy.svg" alt="" className="max-md:hidden mt-5 -mr-20 image w-4/12 "></img>
     </div>
    
     {/* play */}
     <div className=" md:w-3/12 md:h-4/5  max-md:w-10/12 max-md:h-1/6  flex items-center justify-center ">
      <img src="./img/Animation/treatment/02-Play.png" alt=""  className=" z-30  cursor-pointer  max-md:h-3/6 md:w-3/12 xl:w-[20%]  md:hover:w-[23%] transition-width duration-300 ease-in-in max-md:hover:h-[60%] "  onClick={props.videoShowHandle}  />
      <img src="./img/Animation/PlayText.svg" alt=""  className=" absolute route max-md:h-[12%] md:w-1/12 " />
      <img src='./img/Animation/car/mouse.png' className='absolute z-30 lg:w-[30px] lg:h-[40px] max-lg:w-[20px] max-lg:h-[25px] movement md:-mb-[90px] md:ml-[70px] max-md:ml-[50px] max-md:-mb-[70px]'></img>
     </div>
     {/* object */}
     <div className=" md:w-4/12 md:h-4/5 max-md:w-full max-md:h-3/6 jump-to-right flex items-center max-lg:w-8/12 justify-center md:mt-20">
      <img src={image[0]}alt=""  className=" max-md:h-full pt-5 " />
     </div>
     </div>
      </>

      )
    }
    















