import React, { useRef, useState } from 'react';


export default function Modal(props) {
 

function showVideohandle(){
  props.setVideoShow(false)

}
 
  return (
     <> 
     {props.videoShow &&
     <div className={`absolute z-50 bg-[rgba(0,0,0,0.8)] w-full h-full flex items-center justify-center `}  >
      
     <div className="h-full absolute w-full p-5">
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="md:w-14 md:h-14 max-md:w-10 max-md:h-10 " onClick={showVideohandle}>
       <path fill="#ffffff" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></div>
     
       <video className="rounded-3xl md:h-3/6"
        src= "./img/Animation/asafdesign.mp4"
        preload="auto"
        controls
        autoPlay
        loop
        muted >
     </video>
     </div>}
   </>
   );
  
}
