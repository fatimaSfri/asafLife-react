import  { useEffect , useState } from 'react';
import "./NewBanner.css"
import Text from './Text';
import Border from './border';

export default function LifeBanner(props) {
    
      const [ image ] =useState([
          './img/Animation/life/08-ob.png', 
          './img/Animation/life/08-Textbutton.png',
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
       {/* bg-gradient-circle-life  */}
       <div className=  {` bg-gradient-circle-life back_medium_01  bg-[length:100%_100%] bg-no-repeat shadow-md h-[750px] w-full flex justify-center max-md:flex-col items-center px-4 ${props.gap}`}>


       {/* around */}
       
        {/* <div className={`absolute left-0 top-96 transform -translate-y-1/2 transition-transform duration-300 h-[43%] xl:w-7 lg:w-6 max-lg:w-4 rounded-s-full p-2 bg-[#f6f462]`}   >
            </div>
            <div className={`absolute right-0 top-96 transform -translate-y-1/2 transition-transform duration-300 h-[43%]  xl:w-7 lg:w-6 max-lg:w-4 rounded-e-full -mr-[0.5px] bg-[#f6f462] p-2`}>
             </div>   */}
        <Border></Border>
     
     {/* text */}
     {/* <div className= " xl:max-w-[550px] max-xl:max-w-[400px] max-sm:min-w-[250px] jump-to-left flex flex-col md:justify-center items-center md:mt-20 z-20 ">
       <h1 className='xl:text-[80px] lg:text-[70px] md:text-[60px] max-md:text-[46px]  font-bold text-[#f6f462] whitespace-nowrap font-KalamehBold cursor-pointer'> بیمـــه زنـدگــی </h1>
      <p  className='xl:text-[40px] lg:text-[35px] md:text-[30px] max-md:text-[21px]  whitespace-nowrap text-white cursor-pointer' >فردات ساخته ،امروزت آسوده </p>
      <div className='w-11/12 h-10 rounded-2xl bg-white mt-4 flex'>
        <img src="./img/Animation/life/08-iconButton.webp" alt="" className=' absolute lg:-mt-5 md:-mt-3 max-md:-mt-2 -mr-3 lg:h-16 md:h-14 max-md:h-12'/>
        <p className='w-full h-full flex justify-center items-center lg:text-[24px] max-lg:text-[20px] font-bold text-[#213063] cursor-pointer'>صـــــدور بیمـــــه </p>
      </div>
      <img src="./img/Animation/treatment/02-Arrow.svg" alt="" className="max-md:hidden mt-5 -mr-20 image w-4/12 "></img>
     </div> */}

     <Text colorText="text-lime-400"  title="بیمـــه زنـدگــی "  subTitle="فردات ساخته ،امروزت آسوده " icon="./img/Animation/life/08-iconButton.webp"></Text>
     
    
     {/* play */}
     <div className= {`md:w-3/12 md:h-4/5  max-md:w-10/12 max-md:h-1/6 flex items-center justify-center ${props.play} `} >
      <img src="./img/Animation/life/08-Play.png" alt=""  className="
        xl:w-[90px]  max-xl:w-[70px] xl:hover:w-[100px]  max-xl:hover:w-[80px] transition-width duration-300 ease-in-in z-30 cursor-pointer max-md:-mb-10 "  onClick={props.videoShowHandle}  />
      <img src="./img/Animation/PlayText.svg" alt=""  className="absolute route xl:w-[140px] max-xl:w-[100px] cursor-pointer max-md:-mb-10 " />
      <img src='./img/Animation/car/mouse.png' className='absolute z-30 lg:w-[30px] lg:h-[40px] max-lg:w-[20px] max-lg:h-[25px] movement -mb-[100px] 
      md:ml-[70px] max-md:ml-[50px] max-sm:hidden'></img>
     </div>
     {/* object */}
     <div className= {`xl:max-w-[500px] max-xl:max-w-[350px] sm:min-w-[50px] max-md:h-3/6 -mb-[6rem] jump-to-right max-md:p-8 flex items-center 
        justify-center xl:p-8 `}>
      <img  src={image[0]}alt="" className="max-md:h-full pt-5"/>
     </div>
     </div>
      </>

      )
    }
    
