import React, { useEffect , useState } from 'react';
export default function LegalBanner(props) {
    
      const [ image , setImage ] =useState([
          './img/Animation/legal/05-ob.png', 
          './img/Animation/legal/Textbutton.png',
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
      {/* <div className=" md:bg-bg-legal back_medium_01  bg-[length:100%_100%] bg-no-repeat shadow-md h-[750px]  w-full  
       flex justify-center max-md:flex-col items-center max-md:hidden ">
       */}
          {/* play */}
          {/* <div className=" md:w-3/12 md:h-4/5  max-md:w-10/12 max-md:h-1/6  flex items-center justify-center ">
           <img src="./img/Animation/legal/Play.png" alt=""  className="  max-md:h-3/6 md:w-3/12 xl:w-[20%]  md:hover:w-[23%] transition-width duration-300 ease-in-in z-30 cursor-pointer " onClick={props.videoShowHandle}  />
           <img src="./img/Animation/PlayText.svg" alt=""  className=" absolute route max-md:h-1/6 md:w-1/12 " />
           <img src='./img/Animation/car/mouse.png' className='absolute z-30 lg:w-[30px] lg:h-[40px] max-lg:w-[20px] max-lg:h-[25px] 
           movement md:-mb-[70px] md:ml-[70px] max-md:ml-[50px] max-md:-mb-[70px]' ></img>
          </div> */}
          {/* object */}
          {/* <div className=" md:w-4/12 md:h-4/5  max-md:w-10/12 max-md:h-3/6 jump-to-left max-md:p-8 flex items-center max-lg:w-8/12 justify-center md:mt-20">
           <img src={image[0]} alt=""  className=" max-md:h-full pt-5 " />
          </div> */}
           {/* text */}
           {/* <div className=" md:w-4/12 xl:w-[28%] md:h-4/5  max-md:w-8/12 max-md:h-2/6 jump-to-right flex md:flex-col md:justify-center items-center md:mt-20 z-20">
           <img src= {image[1]} alt="" className=" xl:px-8 cursor-pointer"  />
           <img src="./img/Animation/legal/03-Arrow.svg" alt="" className=" max-md:hidden mt-5 -ml-28 image-reverse w-4/12" ></img>
          </div>
          </div> */}

       {/* for max-md */}
       <div className="  max-md:bg-bg-sm-legal  md:bg-bg-legal back_medium_01  bg-[length:100%_100%] bg-no-repeat shadow-md h-[750px] w-full flex justify-center max-md:flex-col-reverse items-center ">
     

     {/* object */}
     <div className=" md:w-4/12 md:h-4/5  max-md:w-10/12 max-md:h-[45%] jump-to-left  flex items-center max-lg:w-8/12 justify-center md:mt-20">
      <img src={image[0]}alt=""  className=" max-md:h-full pt-5 " />
     </div>
     
    
     {/* play */}
     <div className=" md:w-3/12 md:h-4/5  max-md:w-10/12 max-md:h-1/6  flex items-center justify-center ">
      <img src="./img/Animation/legal/Play.png" alt=""  className="  max-md:h-3/6 md:w-3/12 xl:w-[20%]  md:hover:w-[23%] transition-width duration-300 ease-in-in max-md:hover:h-[60%] z-30 cursor-pointer"  onClick={props.videoShowHandle}  />
      <img src="./img/Animation/PlayText.svg"   alt=""  className=" absolute route max-md:h-[12%] md:w-1/12 " />
      <img src='./img/Animation/car/mouse.png' className='absolute z-30 lg:w-[30px] lg:h-[40px] max-lg:w-[20px] max-lg:h-[25px] movement md:-mb-[90px] md:ml-[70px] max-md:ml-[50px] max-md:-mb-[70px] '></img>
     </div>
     {/* text */}
     <div className=" md:w-4/12 md:h-4/5 xl:w-[28%] max-md:w-8/12 max-md:h-2/6 jump-to-right flex md:flex-col md:justify-center items-center md:mt-20 z-20 ">
      <img src= {image[1]} alt="" className=" xl:px-8 cursor-pointer"  />
      <img src="./img/Animation/legal/03-Arrow.svg" alt="" className="max-md:hidden mt-5 -ml-20 image-reverse  w-4/12" ></img>
     </div>

     </div>
      </>

      )
    }
    


















// import React, { useEffect , useState } from 'react';


// export default function BannerForCar(props) {
    
//     const [Opacity ,setOpacity]=useState(false)
//     const [carAnimation , setCarAnimation] = useState(false)
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCarAnimation(true);
//             setTimeout(() => {
//                 setCarAnimation(false);
//             }, 1000);
//         }, 2000);
//         return () => clearInterval(interval);
//     }, []);

//     const [ image , setImage ] =useState([
//         './img/Animation/legal/ob.png', 
//         './img/Animation/legal/Textbutton.png',
//      ])  
     
//      const preloadImages = () => {
//         image.forEach((img) => {
//           const image = new Image();
//           image.src = img;
//         });
//       };
         
//      useEffect(() => {
//         preloadImages();
//         setTimeout(() => {
//           setOpacity(true)
//         }, 2000);
//       }, []); 

//   return (
//      <>
//     <div className='md:bg-bg-legal max-md:bg-bg-sm-car back_medium_01  bg-[length:100%_100%] bg-no-repeat shadow-md h-[750px] flex items-end justify-center relative ml-0 overflow-hidden slider px-10 max-md:hidden' >
       
//   {/* <!-- **********  --> */}

//         <div className="flex flex-col h-full w-full justify-end items-end ">
//         <div className="flex h-full w-full justify-center items-center max-md:flex-col  ">

//         <div className=" md:h-full max-md:h-1/6 md:w-3/12 max-md:w-4/12   flex justify-center items-center ">
//           <img src= "./img/Animation/legal/Play.png"  alt=""  className="z-40 absolute   md:h-24 md:w-24 max-md:h-14 max-md:w-14 cursor-pointer"  
//           onClick={props.videoShowHandle} ></img>
//           <img src='./img/Animation/car/mouse.png' className='absolute z-50 md:w-2/12 max-md:w-3/12 movement  '></img>
//           <img src="./img/Animation/PlayText.svg"  alt="" className="z-30 route h-full   md:w-[150px] md:h-[150px] max-md:w-[120px] max-md:h-[120px] border"></img>
//           </div>


//             <img src={image[0]} className="object-contain object-fit max-md:w-10/12 max-md:h-3/6  md:w-1/3 h-4/6  z-10 max-md:-mb-14 jump-to-left border" ></img>
//           <div className="md:w-4/12 lg:px-14 max-lg: md:h-5/6 max-md:h-1/6  max-md:w-8/12 text-center flex flex-col items-center justify-center  max-md:text-[20px] text-white border " >
//             <img src= {image[1]} className="cursor-pointer z-10 jump-to-right mx-auto "></img>
//             <div className="w-1/6 h-4/6  absolute flex items-end -mr-16 max-lg:hidden ">
//           <img src="./img/Animation/car/Arrow.png" alt=""  ></img>
//         </div>
//         </div>
//       </div>
//      </div>   
//     </div>

//     <div className='bg-bg-legal back_medium_01  bg-[length:100%_100%] bg-no-repeat shadow-md h-[750px] flex items-end justify-center relative ml-0 overflow-hidden slider
//        md:hidden '  >
       
//         {/* <!-- play --> */}

//          <div className=" h-full w-full absolute flex justify-center items-center ">
//           <img src= "./img/Animation/legal/Play.png"  alt=""  className="z-40 absolute max-md:mb-[150px]  md:h-24 md:w-24 max-md:h-16 max-md:w-16 cursor-pointer"  
//           onClick={props.videoShowHandle} ></img>
//           <img src='./img/Animation/car/mouse.png' className='absolute z-50 md:w-2/12 max-md:w-3/12 movement max-md:mb-[150px] '></img>
//           <img src="./img/Animation/PlayText.svg"  alt="" className="z-30 max-md:mb-[150px]  h-full route  md:w-[150px] md:h-[150px] max-md:w-[120px] max-md:h-[120px]"></img>
//           </div>

//         {/* <!-- **********  --> */}

//         <div className="flex flex-col h-full w-full justify-end items-end ">
//         <div className="flex h-full w-full md:justify-end items-center max-md:flex-col max-md:justify-end  ">
//         <div className="w-3/12 md:h-5/6 mx-auto max-md:h-[10px] max-md:w-7/12 text-center flex flex-col items-center justify-center max-md:text-[20px] text-white " >
//             <img  src= {image[1]} className='cursor-pointer z-10  jump-to-left' ></img>
//             <div className="w-1/6 h-4/6  absolute flex items-end -mr-16 max-lg:hidden image  pb-14 ">
//           <img src="./img/Animation/car/Arrow.png" alt=""  ></img>
//         </div>
//         </div>
       
//        <img src={image[0]} className="object-contain object-fit max-md:w-10/12 max-md:h-5/6 md:w-1/2 h-4/6  z-10 max-md:-mb-24 jump-to-right border"></img>
       
//       </div>
//      </div>   
//     </div>
//     </>


//  )
// }
