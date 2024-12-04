import  { useEffect , useState } from 'react';
import './NewBanner.css'
import Modal from '../modal/Modal';
import BannerForCar from './BannerForCar';
import Navbar from '../navbar/Navbar'
import LifeBanner from './LifeBanner';


function  NewBanner(){

    const [videoShow , setVideoShow] = useState(false)
   

    //  , frontObjectCarOff:image[0],frontObjectCarOn:image[1], text:image[2]
    const [sliderImages,setsliderImages]= useState(
      [
      { component: <LifeBanner videoShowHandle={videoShowHandle}></LifeBanner> , 
        modalVideo:'./img/video/asaf.mp4'},
        { component: <BannerForCar  videoShowHandle={videoShowHandle}></BannerForCar> ,
        modalVideo:"./img/video/CarBody.mp4" },
      ]
     )

     //     modalVideo:'./img/video/pet.mp4'},
     //     { component: <MobileBanner  videoShowHandle={videoShowHandle}></MobileBanner> , modalVideo:'./img/video/all.mp4'},
     //     { component: <Legal  videoShowHandle={videoShowHandle}></Legal> , 
     //     modalVideo:'./img/video/all.mp4'},
     //     { component: <Treatment  videoShowHandle={videoShowHandle}></Treatment> , 
     //     modalVideo:'./img/video/all.mp4'},
     //     { component: <Child  videoShowHandle={videoShowHandle}></Child> , 
     //     modalVideo:'./img/video/all.mp4' },
     //     { component: <Psychology  videoShowHandle={videoShowHandle}></Psychology> , 
     //     modalVideo:'./img/video/all.mp4' }, 
     //  ]
     

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
        const intervalId = setInterval(sliderTimeOut, 600000);
        return () => clearInterval(intervalId); 
        });
     
    
     function setActiveImage(index){
       setNewIndex(index);   
    }

    function videoShowHandle(){
       setVideoShow(true)
    }
    
    useEffect(() => {
      console.log(videoShow);
    },[videoShow]);

    
return (
        <>
        {/* if click play Modal event exists in modal for close */}
     
        <Modal videoShow={videoShow}  setVideoShow={setVideoShow} defultVideo={sliderImages[newIndex].modalVideo} ></Modal>
        <Navbar></Navbar>
          <div className="w-full z-10 h-[750px] flex items-end justify-center gap-4 pb-3 absolute">
          {sliderImages.map((item, index) => (
        <span
          key={index}
          onClick={() => setActiveImage(index)}
          className={`w-3 h-3 mb-4  bg-white  rounded-full block transition-all duration-300 ${
            newIndex == index ? "active" : ""
          }`}
        ></span>
      ))}
    </div>
    {sliderImages[newIndex].component}
    </>

)
}

export default NewBanner