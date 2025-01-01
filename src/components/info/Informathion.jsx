import { useEffect , useState } from 'react';
import InfoOne from './InfoOne.jsx' 
import InfoTwo from "./InfoTwo.jsx"
import InfoCarBody from "./InfoCarBody"

function  NewBanner(){



    const [sliderImages]= useState(
      [
     {componnet:<InfoOne></InfoOne>},
     {componnet:<InfoTwo></InfoTwo>},
     {componnet:<InfoCarBody></InfoCarBody>}
     ]
     )

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
     
    
     function setActiveImage(index){
       setNewIndex(index);   
    }

    
return (
     <>  
    {sliderImages[newIndex].componnet}
    </>

)
}

export default NewBanner