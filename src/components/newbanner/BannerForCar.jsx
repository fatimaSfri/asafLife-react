import  { useEffect , useState } from 'react';
import { Link } from 'react-router-dom';
import "./NewBanner.css"
import Text from './Text';
import Border from './border';

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
        
          
            const [ image ] =useState([
                './img/Animation/car/01-obl.webp',
                './img/Animation/car/01-obwl.webp', 
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
    
      <div className={`bg-gradient-circle-carBody back_medium_01  bg-[length:100%_100%] bg-no-repeat shadow-md h-[750px] 
       w-full flex justify-center max-md:flex-col items-center overflow-hidden p-4 ${props.gap}`}>
        <Border background="bg-car" ></Border>
     

          <Text colorText="text-car"  title="بیمـــه ثالث بدنــه "  subTitle=" همگام با شما تا آینده ای مطمئن" icon="./img/Animation/life/08-iconButton.webp"  sizeTitle="xl:text-[70px] lg:text-[60px] md:text-[44px] max-md:text-[40px]" sizeSubTitle="xl:text-[34px] lg:text-[30px] max-lg:text-[22px] "></Text>
         
          {/* play */}
          <div className={` md:w-3/12 md:h-4/5 max-md:w-10/12 max-md:h-1/6 flex items-center mb-20 justify-center ${props.play}`}>
           <img src="./img/Animation/car/01-Play.webp" alt=""  className=
           " xl:w-[90px]  max-xl:w-[70px] xl:hover:w-[100px]  max-xl:hover:w-[80px] transition-width duration-300 ease-in-in  z-30 cursor-pointer max-md:-mb-10 "  onClick={props.videoShowHandle} />
           <img src="./img/Animation/PlayText.svg" alt=""  className="absolute route xl:w-[140px] max-xl:w-[100px] cursor-pointer max-md:-mb-10" />
           <img src='./img/Animation/car/mouse.png' className='absolute z-30 lg:w-[30px] lg:h-[40px] max-lg:w-[20px] max-lg:h-[25px] movement -mb-[100px] md:ml-[70px] max-md:ml-[50px]  max-sm:hidden'></img>
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
    