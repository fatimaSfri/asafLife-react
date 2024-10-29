import React, { useEffect , useState } from 'react';
import './NewBanner.css'
import Modal from '../modal/Modal';

function  NewBanner(){

    const [carAnimation , setCarAnimation] = useState(false);
    const [videoShow , setVideoShow] = useState(false)


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
        './img/Animation/text.png',
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
        {background: ' md:bg-bg-car max-md:bg-bg-sm-car ', frontObjectCarOff:image[0],frontObjectCarOn:image[1], text:image[2]  },
     ]
     )
    
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
        <Modal videoShow={videoShow}  setVideoShow={setVideoShow} ></Modal>
        <div className={`back_medium_01  bg-[length:100%_100%] bg-no-repeat shadow-md h-[700px] flex items-end justify-center relative ml-0 overflow-hidden slider
            ${sliderImages[newIndex].background}`}  >

            {/* <!-- play --> */}

             <div className=" h-full w-full absolute flex justify-center items-center ">

              {/* <div class=" xl:w-[240px] max-xl:hidden h-[40%] absolute">
              <img src= "./img/Animation/message.png"  alt="" class="w-28 h-28"></img>
              </div> */}

              <img src= "./img/Animation/playicon.png"  alt=""  className="z-40 absolute max-md:mb-[230px]  md:h-48 md:w-48 max-md:h-40 max-md:w-40 "  
              onClick={videoShowHandle} ></img>
              <img src="./img/Animation/textcircle.png"  alt="" className="z-30 max-md:mb-[230px]  h-full route  md:w-[220px] md:h-[220px] max-md:w-[150px] max-md:h-[150px]"></img>
              </div>

            {/* <!-- **********  --> */}

            <div className="flex flex-col h-full w-full justify-end items-end ">
            <div className="flex h-full w-full md:justify-end items-center max-md:flex-col max-md:justify-end  ">
            <div className="w-1/2 md:h-5/6 mx-auto max-md:h-[10px] max-md:w-9/12 text-center flex flex-col items-center justify-center max-md:text-[20px] text-white " >
                <img  src={sliderImages[newIndex].text} ></img>
                <div className="w-1/6 h-4/6  absolute flex items-end -mr-40 max-lg:hidden image">
              <img src="./img/Animation/flash.png" alt=""  ></img>
            </div>
            </div>
             

            <div className="absolute max-md:ml-20 max-sm:ml-10 max-md:w-10/12 max-md:mx-auto md:w-1/2 h-5/6 flex flex-col justify-end">

     {/* <!--flex layout  --> */}
       <div className="w-full h-1/2  flex flex-col items-center justify-end max-md:hidden ">
    
       
     <div className="h-[60%] max-xl:h-[38%] lg:w-4/6 max-lg:w-5/6  flex justify-between  ">
      {/* <!--heart  --> */}
        <div className=" w-1/4 h-full flex items-end justify-center " >
            <img src="./img/Animation/heart.png" className="w-16 h-16 " ></img>
        </div>
       {/* <!-- umbrella --> */}
        <div className="h-full w-2/6  flex justify-center down " >
            <img src="./img/Animation/umbrella.png"  className="max-xl:w-20 max-xl:h-20 xl:w-24 xl:h-24 " 
             ></img>
       </div>
         {/* <!-- user  --> */}
        <div className=" w-1/4 h-full flex items-end justify-center ">
            <img src="./img/Animation/user.png" className="w-16 h-16" 
           ></img>
        </div>
     </div>


     <div className="h-2/6  xl:w-11/12  max-xl:w-full flex justify-between">
       {/* <!-- security --> */}
        <div className=" w-1/4 h-full  flex items-start justify-center xl:ml-10  ">
      <img src="./img/Animation/security.png" className="w-16 h-16 movement" ></img>
        </div>
       {/* <!-- note  --> */}
      <div className=" w-1/6 h-full  flex items-start  xl:justify-center xl:ml-10 max-xl:justify-end  max-xl:items-start">
       <img src="./img/Animation/note.png" className="w-16 h-16 movement" ></img>
       </div>


     </div>
</div>
  <div className="w-full h-1/2  flex justify-center">

  </div>
{/* <!-- ****************************** --> */}

            </div>
           
            <img src={sliderImages[newIndex].frontObjectCarOn} className="object-contain object-fit max-md:w-10/12 max-md:h-5/6  md:w-1/2 h-4/6 absolute z-10 " ></img>
            {carAnimation &&
            <img src={sliderImages[newIndex].frontObjectCarOn} className="object-contain object-fit max-md:w-10/12 max-md:h-5/6  md:w-1/2 h-4/6 z-20 " ></img>}
            {!carAnimation &&
             <img src={sliderImages[newIndex].frontObjectCarOff}   className="object-contain object-fit max-md:w-10/12 max-md:h-5/6  md:w-1/2 h-4/6 z-20 " 
             v-show="!carAnimation" ></img>}
          </div>
         </div>   
        </div>
 
        </>


)

}
export default NewBanner