import  { useEffect , useState } from 'react';
import "./NewBanner.css"
import Text from './Text';

export default function Treatment(props) {
    
      const [ image ] =useState([
          './img/banner/treatment/02-ob.webp', 
          './img/banner/treatment/02-Textbutton.png',
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
       <div className= "bg-gradient-circle-treatment back_medium_01  bg-[length:100%_100%] bg-no-repeat shadow-md h-[750px]  w-full  flex justify-evenly max-md:flex-col items-center ">
     
     {/* text */}
    
     <Text colorText="text-red-500"  title="با بیمه درمان"  subTitle=" مسیر بهبودی را هموار کنید" icon="./img/banner/treatment/02-Shield.webp" sizeTitle="xl:text-[80px] lg:text-[70px] md:text-[60px] max-md:text-[48px]" sizeSubTitle="xl:text-[40px] lg:text-[35px] md:text-[30px] max-md:text-[24px]"></Text>
     
     {/* object */}

     <div className=" md:h-4/5 xl:w-[600px] sm:min-w-[350px] max-sm:w-full max-md:h-3/6 -mb-[4.5rem] jump-to-right  lg:p-14 xl:p-1 flex items-center 
        justify-center ">
      <img src={image[0]}alt=""  className=" max-md:h-full pt-5 " />
     </div>
     </div>
      </>

      )
    }
    















