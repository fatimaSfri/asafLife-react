import React, { useEffect , useState } from 'react';
import { Link } from 'react-router-dom';

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
                './img/Animation/car/carOff.png',
                './img/Animation/car/carOn.png', 
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
    
      <div className={` md:bg-bg-car max-md:bg-bg-sm-car back_medium_01  bg-[length:100%_100%] bg-no-repeat shadow-md h-[750px] 
       w-full  flex justify-center max-md:flex-col  items-center overflow-hidden ${props.gap}`}>
           {/* text */}
      <div className="xl:max-w-[550px] max-xl:max-w-[400px] max-sm:min-w-[250px] jump-to-left flex md:flex-col md:justify-center items-center md:mt-20 z-20" >
      <Link to="/carBody" target="_blank" rel="noopener noreferrer"> <img src= {image[2]} alt="" className=" px-8 cursor-pointer "/></Link> 
           <img src="./img/Animation/car/Arrow.png" alt="" className="max-md:hidden mt-5 -mr-20 image w-4/12"></img>
          </div>
         
          {/* play */}
          <div className={` md:w-3/12 md:h-4/5 max-md:w-10/12 max-md:h-1/6  flex items-center justify-center ${props.play}`}>
           <img src="./img/Animation/car/Play.png" alt=""  className=
           " xl:w-[90px]  max-xl:w-[70px] xl:hover:w-[100px]  max-xl:hover:w-[80px] transition-width duration-300 ease-in-in  z-30 cursor-pointer max-md:-mb-10 "  onClick={props.videoShowHandle} />
           <img src="./img/Animation/PlayText.svg" alt=""  className="absolute route xl:w-[140px] max-xl:w-[100px] cursor-pointer max-md:-mb-10" />
           <img src='./img/Animation/car/mouse.png' className='absolute z-30 lg:w-[30px] lg:h-[40px] max-lg:w-[20px] max-lg:h-[25px] movement -mb-[100px] md:ml-[70px] max-md:ml-[50px]  '></img>
          </div>
          
           {/* object */}
         <div className= {`md:h-4/5 xl:min-w-[500px] sm:min-w-[350px] max-sm:w-full max-md:h-3/6 -mb-[4.5rem] jump-to-right max-md:p-8 flex items-center 
        justify-center ${props.size}`} >
           <img src={image[0]} alt=""  className="max-md:h-full max-md:pb-5  absolute" />
        {carAnimation &&
         <img src={image[1]} className={ `max-md:h-full  max-md:pb-5 z-50 absolute ${Opacity ? 'opacity-100' : 'opacity-0'}`} ></img>}
        {!carAnimation &&
        <img src={image[0]}  className={ `max-md:h-full  max-md:pb-5 z-50 absolute ${Opacity ? 'opacity-100' : 'opacity-0'}`} 
         ></img>}
          </div></div>

      )
    }
    