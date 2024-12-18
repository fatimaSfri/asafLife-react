import  { useEffect , useState } from 'react';
import "./NewBanner.css"
import Text from './Text';
import Border from './border';

export default function LifeBanner(props) {
    
      const [ image ] =useState([
          './img/Animation/life/life-ob.webp', 
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
      <Border background="bg-life" ></Border>
     
     {/* text */}
     <Text colorText="text-life"  title="بیمـــه زنـدگــی "  subTitle="فردات ساخته ،امروزت آسوده " icon="./img/Animation/life/08-iconButton.webp"></Text>
     
    
     {/* play */}
     <div className= {`md:w-3/12 md:h-4/5  max-md:w-10/12 max-md:h-1/6 flex items-center justify-center ${props.play} `} >
      <img src="./img/Animation/life/08-Play.webp" alt=""  className="
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
    
