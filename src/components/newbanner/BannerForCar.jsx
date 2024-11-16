import React, { useEffect , useState } from 'react';
export default function PsychologyBanner(props) {
    
      
      
       const [carAnimation , setCarAnimation] = useState(false)
       const [Opacity ,setOpacity]=useState(false)
    

       useEffect(() => {
                const interval = setInterval(() => {
                    setCarAnimation(true);
                    setTimeout(() => {
                        setCarAnimation(false);
                    }, 1000);
                }, 2000);
                return () => clearInterval(interval);
            }, []);
        
          
            const [ image , setImage ] =useState([
                './img/Animation/off.png',
                './img/Animation/on.png', 
                './img/Animation/car/Textbutton.png',
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
        
       setTimeout(() => {
           setOpacity(true)
                }, 2000); 
    
      return (
    
      <div className=" md:bg-bg-car max-md:bg-bg-sm-car back_medium_01  bg-[length:100%_100%] bg-no-repeat shadow-md h-[750px] 
       w-full  flex justify-center max-md:flex-col  items-center overflow-hidden">
           {/* text */}
           <div className=" md:w-4/12 xl:w-[28%] md:h-4/5  max-md:w-8/12 max-md:h-2/6 jump-to-left flex md:flex-col md:justify-center items-center md:mt-20 z-20">
           <img src= {image[2]} alt="" className=" xl:px-8 cursor-pointer "/>
           <img src="./img/Animation/car/Arrow.png" alt="" className="max-md:hidden mt-5 -mr-20 image w-4/12"></img>
          </div>
         
          {/* play */}
          <div className=" md:w-3/12 md:h-4/5  max-md:w-10/12 max-md:h-1/6  flex items-center justify-center ">
           <img src="./img/Animation/car/Play.png" alt=""  className=" max-md:h-3/6 md:w-3/12 xl:w-[20%]  md:hover:w-[23%] transition-width duration-300 ease-in-in max-md:hover:h-[60%] z-30 cursor-pointer"  onClick={props.videoShowHandle} />
           <img src="./img/Animation/PlayText.svg" alt=""  className=" absolute route max-md:h-[12%] md:w-1/12 cursor-pointer" />
           <img src='./img/Animation/car/mouse.png' className='absolute z-30 lg:w-[30px] lg:h-[40px] max-lg:w-[20px] max-lg:h-[25px] movement md:-mb-[90px] md:ml-[70px] max-md:ml-[50px] max-md:-mb-[70px] '></img>
          </div>
          
           {/* object */}
         <div className=" md:w-4/12 xl:w-[30%] md:h-4/5 -mb-[4.5rem] max-md:w-11/12 min-w-[200px] max-md:h-3/6 jump-to-right max-md:p-8 flex items-center 
         max-lg:w-8/12 justify-center ">
           <img src={image[0]} alt=""  className="max-md:h-full max-md:pb-5  absolute" />
        {carAnimation &&
         <img src={image[1]} className={ `max-md:h-full  max-md:pb-5 z-50 absolute ${Opacity ? 'opacity-100' : 'opacity-0'}`} ></img>}
        {!carAnimation &&
        <img src={image[0]}  className={ `max-md:h-full  max-md:pb-5 z-50 absolute ${Opacity ? 'opacity-100' : 'opacity-0'}`} 
         ></img>}
          </div></div>

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
//         './img/Animation/off.png',
//         './img/Animation/on.png', 
//         './img/Animation/car/Textbutton.png',
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
  
//     <div className='md:bg-bg-car max-md:bg-bg-sm-car back_medium_01  bg-[length:100%_100%] bg-no-repeat shadow-md h-[750px] flex items-end justify-center relative ml-0        overflow-hidden slider'  >
       
//         {/* <!-- play --> */}

//          <div className="h-full w-full absolute flex justify-center items-center border-4">
//           <img src= "./img/Animation/car/Play.png"  alt=""  className="z-40 absolute max-md:mb-[150px]  md:h-24 md:w-24 max-md:h-16 max-md:w-16 cursor-pointer"  
//           onClick={props.videoShowHandle} ></img>
//           <img src='./img/Animation/car/mouse.png' className='absolute z-50 md:w-2/12 max-md:w-3/12 movement max-md:mb-[150px] '></img>
//           <img src="./img/Animation/PlayText.svg"  alt="" className="z-30 max-md:mb-[150px]  h-full route  md:w-[150px] md:h-[150px] max-md:w-[120px] max-md:h-[120px] "></img>
//           </div>

//         {/* <!-- **********  --> */}

//         <div className="flex flex-col h-full w-full justify-end items-end ">
//         <div className="flex h-full w-full md:justify-end items-center max-md:flex-col max-md:justify-end ">
//         <div className="w-3/12 md:h-5/6 mx-auto max-md:h-[10px] max-md:w-7/12 text-center flex flex-col items-center justify-center max-md:text-[20px] text-white " >
//             <img  src= {image[2]} className='cursor-pointer z-20 jump-to-left border'></img>
//             <div className="w-1/6 h-4/6  absolute flex items-end -mr-16 max-lg:hidden image  pb-14 ">
//           <img src="./img/Animation/car/Arrow.png" alt=""  ></img>
//         </div>
//         </div>
         

      
//        <img src={image[1]} className="object-contain object-fit max-md:w-10/12 max-md:h-1/6  md:w-1/2 h-4/6 absolute z-10 max-md:-mb-14 jump-to-right border" ></img>
//         {carAnimation &&
//         <img src={image[1]} className={`object-contain object-fit max-md:w-10/12 max-md:h-5/6  md:w-1/2 h-4/6 z-20 max-md:-mb-14 ${Opacity ? 'opacity-100' : 'opacity-0'}`}  ></img>}
//         {!carAnimation &&
//          <img src={image[0]}  className={`object-contain object-fit max-md:w-10/12 max-md:h-5/6  md:w-1/2 h-4/6 z-20 max-md:-mb-14 ${Opacity ? 'opacity-100' : 'opacity-0'}`} 
//          v-show="!carAnimation" ></img>}
//       </div>
//      </div>   
//     </div>

//  )
// }
