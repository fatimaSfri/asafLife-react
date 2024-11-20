import { useState } from 'react'
import './Slider.css'
import React, { useEffect } from 'react';

function Slider(){
  const [ image , setImage ] =useState([
    './src/assets/img/background/IMG_2413.MP4',
    './src/assets/img/background/treatment.png',
    './src/assets/img/background/brain.png',
    './src/assets/img/background/child.png',
    './src/assets/img/background/scal.png',
    './src/assets/img/background/halo.png',
 ])     
 
 const preloadImages = () => {
  image.forEach((img) => {
    const image = new Image();
    image.src = img;
    // console.log(image.src) 
  });
};

useEffect(() => {
  preloadImages();
}, []); 

const [newIndex ,setNewIndex] = useState(0)
 function sliderTimeOut (step = 1) { 
  setNewIndex((newIndex + step + sliderImages.length) % sliderImages.length);
  
}

const [imgSecond, setImgSecond] = useState(true);

// animation
  useEffect(() => {
    setImgSecond(true)
    if (imgSecond) {
      const timer = setTimeout(() => setImgSecond(false),0);
      return () => clearTimeout(timer); 
    }
  }, [newIndex]); 

  // slider
  useEffect(() => {
    const intervalId = setInterval(sliderTimeOut, 6000);
    return () => clearInterval(intervalId); 
    });



 const [sliderImages,setsliderImages]= useState(
  [
    {video:image[0] , videoShow:true , background:'bg-[#005051]'},
    {background: 'bg-back-gradint-yellow',frontObject: image[4] , title: "مشـــاوره حقـــوقی" , text:"راهنمایی به سوی عدالت", btntext:"درخواست مشاوره " ,
     classText:' text-[#ffffff] bg-[#014e4c] ' , sloganClass:"text-[#005051]" , rotate:'rotate'  },
    {background:'bg-back-gradint-blue' ,frontObject:'./src/assets/img/background/treatment.png' , title: "بــــــا بیمــــــه درمــــــان", text:"مسیر بهبودی را هموار کنید", btntext:"صدور بیمه" , classText:"text-[#0065cc] bg-white " , shadowClass:"text-shadow-treatment" , rotate:'rotate'},
    {background:'bg-back-gradint-blue' ,frontObject:image[2] , title: "  مشـاوره روانشـناسی", text:" حَــرفش با تو،حَــلش با ما ", btntext:"دریافت مشاوره" , classText:"text-[#00b4ff] bg-white" ,  shadowClass:"text-shadow-psychology" , rotate:'rotate'},
    {background:'bg-back-gradint-dark-skinned' , frontObject:image[3] ,
    frontObject1:image[5] , title: " نگهـــــداری کودکـــان" , text:"آغوشی امن برای فرزند شما", btntext:"صدور بیمه" , classText:"text-[#00b4ff] bg-white" , imgSecond:true , shadowClass:"text-shadow-child" , customClass:"  max-sm:mb-[-19%] max-md:mb-[-5%] max-lg:mb-[-19%]  max-xl:mb-[-10%] xl:mb-[-2%] flex " , rotate:'rotate' },
  ]
 )

 

 function setActiveImage(index){
   setNewIndex(index);
}


    return(
        <>
        <div 
        className=
        {`back_medium_01 bg-[length:100%_100%] bg-no-repeat shadow-md h-[700px] flex items-end justify-center mt-16 relative ml-0 overflow-hidden slider ${sliderImages[newIndex].background}
        ${ imgSecond ? 'rotate' : ''}`}
         >
         <div class="flex flex-col h-full w-full justify-end items-end slide " 
          >
         {!sliderImages[newIndex].videoShow &&
         <div class="flex h-full w-full justify-end items-end max-md:flex-col max-md:justify-center max-md:items-center " >
         <div class="w-1/2 h-5/6 max-md:w-10/12 text-center flex flex-col items-center justify-center max-md:text-[20px] text-white gap-y-3" >
         <p class={`text-[60px] max-lg:text-[50px] max-sm:text-[30px] font-KalamehBold ${sliderImages[newIndex].sloganClass}`} >
          {sliderImages[newIndex].title}
         </p>
         <p class= {`text-[45px] max-lg:text-[35px] max-sm:text-[20px] font-KalamehRegular ${sliderImages[newIndex].sloganClass} `}  >
        {sliderImages[newIndex].text}
         </p> 
          <a  class="w-6/12 " ><button class={`lg:w-9/12 max-lg:w-11/12 mx-auto text-[26px] max-md:text-[18px] shadow-lg flex justify-center items-center h-10  lg:mt-3 pb-[12px] rounded-lg  mix-hard-light text-shadow-custom  pt-3  ${sliderImages[newIndex].classText}`}
           >{sliderImages[newIndex].btntext}</button>
         </a>
         </div>
     
       <img src={sliderImages[newIndex].frontObject}  class="slider_images[newIndex].customClass" 
        className={`object-contain object-fit  max-md:mr-10 max-md:w-10/12 max-md:h-5/6 max-md:mx-auto md:w-1/2 h-5/6  ${ !imgSecond ? 'slider slide-up' : ''}`} ></img>
      {sliderImages[newIndex].imgSecond && 
       <img src={sliderImages[newIndex].frontObject1}  class="object-contain absolute  mix-blend-soft-light object-fit  max-md:w-10/12  max-md:h-1/2 max-md:mx-auto md:w-1/2 h-5/6  max-md:mt-64">
       </img>}
         </div>
      }
             { sliderImages[newIndex].videoShow &&
               <div class="w-full h-full flex items-center justify-center"  >
                  <video src={sliderImages[newIndex].video} class="opacity-80" autoPlay
                  muted></video>
               </div>
             }
            <div class="w-full h-20 flex items-end justify-center gap-4 mb-2">
           { sliderImages.map((item,index) =>(
             <span class={`w-4 h-4 bg-white rounded-full block transition-all 
             duration-300 ${newIndex === index ? 'active': ''} `} 
                 onClick={() => setActiveImage(index)} 
                   key={index} >
                 </span>
                 ))
             }
            </div>  
          </div>   
     </div>
     
     </>
    )
}

export default Slider