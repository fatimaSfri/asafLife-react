import  { useEffect , useState } from 'react';
import "./NewBanner.css"
import Text from './Text';

export default function MobileBanner(props) {
    
      const [ image , setImage ] =useState([
          './img/banner/mobile/07-ob.png', 
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
       <div className= " bg-gradient-circle-Mobile  back_medium_01  bg-[length:100%_100%] bg-no-repeat shadow-md h-[750px] w-full flex justify-evenly max-md:flex-col-reverse items-center ">
     
  {/* object */}
  <div className=" md:h-3/5 xl:w-[300px] sm:min-w-[350px] max-sm:w-full max-md:h-3/6 -mb-[4.5rem] jump-to-right max-md:p-8 flex items-center 
        justify-center xl:-mr-10">
      <img src={image[0]}alt=""  className=" max-md:h-full pt-5 " />
     </div>
    
     {/* text */}
     <Text colorText="text-[#d21a1a]"  title="بیمــه موبایل "  subTitle="در امان، از خط و خش و زیان" icon="./img/banner/mobile/07-Shield.webp"
       sizeTitle="xl:text-[70px] lg:text-[65px] md:text-[50px] max-md:text-[45px]" sizeSubTitle="xl:text-[34px] lg:text-[32px] max-lg:text-[24px]" colorSubTitle="text-[#552ade]"></Text>

   </div>
   
      </>

      )
    }
    
