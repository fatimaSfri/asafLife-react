// // // // import React from 'react'

// // // // export default function TestTwo() {
// // // //   return (
// // // //     <div>TestTwo</div>
// // // //   )
// // // // }


// // // import React, { useState, useEffect } from 'react';

// // // const Timer = () => {
// // //   const initialTime = { days: 147, hours: 23, minutes: 60, seconds: 60 };
// // //   const [time, setTime] = useState(initialTime);

// // //   useEffect(() => {
// // //     const storedTime = JSON.parse(localStorage.getItem('timer')) || initialTime;
// // //     setTime(storedTime);

// // //     const interval = setInterval(() => {
// // //       setTime(prevTime => {
// // //         let { days, hours, minutes, seconds } = prevTime;

// // //         if (seconds > 0) {
// // //           seconds--;
// // //         } else {
// // //           if (minutes > 0) {
// // //             minutes--;
// // //             seconds = 59;
// // //           } else {
// // //             if (hours > 0) {
// // //               hours--;
// // //               minutes = 59;
// // //               seconds = 59;
// // //             } else {
// // //               if (days > 0) {
// // //                 days--;
// // //                 hours = 23;
// // //                 minutes = 59;
// // //                 seconds = 59;
// // //               } else {
// // //                 clearInterval(interval);
// // //                 return { days: 0, hours: 0, minutes: 0, seconds: 0 };
// // //               }
// // //             }
// // //           }
// // //         }

// // //         const newTime = { days, hours, minutes, seconds };
// // //         localStorage.setItem('timer', JSON.stringify(newTime));
// // //         return newTime;
// // //       });
// // //     }, 1000); // هر ثانیه به روزرسانی می‌شود

// // //     return () => clearInterval(interval);
// // //   }, []);

// // //   return (
// // //     <div style={{ textAlign: 'center', fontSize: '2rem' }}>
     
// // //       <p>
// // //         {time.days}:{String(time.hours).padStart(2, '0')}:
// // //         {String(time.minutes).padStart(2, '0')}:
// // //         {String(time.seconds).padStart(2, '0')}
// // //       </p>
// // //     </div>
// // //   );
// // // };

// // // export default Timer;


// // import React, { useState, useEffect } from 'react';
// // import './Test.css'

// //   const Timer = () => {
// //   const initialTime = { days: 147 , hours: 23 , minutes: 60 , seconds: 60 };
// //   const [time, setTime] = useState(initialTime);
// //   const [rotation, setRotation] = useState(0);

// //   useEffect(() => {
// //     const storedTime = JSON.parse(localStorage.getItem('timer')) || initialTime;
// //     setTime(storedTime);

// //     const interval = setInterval(() => {
// //       setTime(prevTime => {
// //         let { days, hours, minutes, seconds } = prevTime;

// //         if (seconds > 0) {
// //           seconds--;
// //         } else {
// //           if (minutes > 0) {
// //             minutes--;
// //             seconds = 59;
// //           } else {
// //             if (hours > 0) {
// //               hours--;
// //               minutes = 59;
// //               seconds = 59;
// //             } else {
// //               if (days > 0) {
// //                 days--;
// //                 hours = 23;
// //                 minutes = 59;
// //                 seconds = 59;
// //               } else {
// //                 clearInterval(interval);
// //                 return { days: 0, hours: 0, minutes: 0, seconds: 0 };
// //               }
// //             }
// //           }
// //         }

// //         const newTime = { days, hours, minutes, seconds };
// //         localStorage.setItem('timer', JSON.stringify(newTime));
// //         return newTime;
// //       });

// //       // Update rotation for every second
// //       setRotation(prevRotation => prevRotation + 6); // 360 degrees / 60 seconds = 6 degrees per second
// //     }, 1000); // هر ثانیه به روزرسانی می‌شود

// //     return () => clearInterval(interval);
// //   }, []);

// //   return (
// //     <div className="flex flex-col items-center justify-center h-screen bg-gray-100 overflow-hidden border-4 border-green-500" >

      
// //         <div
// //           className="absolute w-full h-full rounded-full border-4 border-transparent  border-red-500 overflow-hidden"
// //           style={{
// //             transform: `rotate(${rotation}deg)`,
// //             transition: 'transform 1s linear',
// //           }}
// //         >
// //           {Array.from({ length: 60 }).map((_, index) => (
// //             <div
// //               key={index}
// //               className="absolute text-xs text-gray-700 w-[500px] "
// //               style={{
// //                 transform: `rotate(${index * 6}deg) `,
// //                 top: '50%',
// //                 left: '50%',
                  
// //               }}
              
// //             >
// //               {index}
// //             </div>
// //           ))}
// //         </div>
    
// //       <p className="text-2xl mt-4">
// //         {time.days}:{String(time.hours).padStart(2, '0')}:
// //         {String(time.minutes).padStart(2, '0')}:
// //         {String(time.seconds).padStart(2, '0')}
// //       </p>
// //     </div>
// //   );
// // };

// // export default Timer;


// import React, { useEffect, useState } from 'react'


// export default function TestTwo() {

 
  

//   // const [millisecond,setMillisecond] = useState(0);
//   const initialTime = { days: 147 , hours: 23 , minutes: 60 , seconds : 60 , secendOne : 59 , secendTwo : 58 , secendThree: 61 , secendFour: 62 };
//   // const [secendOne , setSecondOne ] = useState(58)
//   const [time, setTime] = useState(initialTime);

//   useEffect(() => {
//     const storedTime = JSON.parse(localStorage.getItem('timer')) || initialTime;
//     setTime(storedTime);

//     const interval = setInterval(() => {
//       setTime(prevTime => {
//         let { days , hours , minutes , seconds ,secendOne , secendTwo ,secendThree , secendFour } = prevTime;

//         if (seconds > 0) {
//           seconds--;
//           //other seconds
//          if (secendOne > 0){
//             secendOne--;
//          }
//          if(secendTwo > 0){
//             secendTwo--;
//           }
//           if(secendThree > 0){
//             secendThree--;
//           }
//           if(secendFour > 0){
//             secendFour--;
//           }
//           if(seconds == 0){
//             secendOne = 60
//             secendTwo = 59
//             secendThree = 1
//             secendFour = 2
//           }
//         }
//          else {
//           if (minutes > 0) {
//             minutes--;
//             seconds = 59;
//             secendOne = 58;
//             secendTwo = 57;
//             secendThree = 60;
//             secendFour = 61 ;

//           } else {
//             if (hours > 0) {
//               hours--;
//               minutes = 59;
//               seconds = 59;
//               secendOne=58;
//               secendTwo = 57;
//               secendThree = 60;
//               secendFour = 61
//             } else {
//               if (days > 0) {
//                 days--;
//                 hours = 23;
//                 minutes = 59;
//                 seconds = 59;
//                 secendOne=58;
//                 secendTwo = 57;
//                 secendThree = 60;
//                 secendFour = 61;
//               } else {
//                 clearInterval(interval);
//                 return { days: 0, hours: 0, minutes: 0, seconds: 0 };
//               }
//             }
//           }
//         }

//         const newTime = { days, hours, minutes, seconds , secendOne , secendTwo , secendThree  ,  secendFour  };
//         localStorage.setItem('timer', JSON.stringify(newTime));
//         return newTime;
//       });

      
//     }, 1000); 

//     return () => clearInterval(interval);
//   }, []);





//   return (
//       <div   className=' flex flex-col gap-4 '>
     
//       <div className=''>
//       <div className='w-40 h-20 border-4 border-blue-500   flex items-center justify-center'>{ time.secendFour }</div>
//       <div className='w-40 h-20 border-4 border-teal-500  flex items-center justify-center'>{ time.secendThree }</div>
//       <div className='flex  items-center gap-4'>
//       <div className='w-40 h-20 border-4 border-red-500 flex items-center justify-center'>{ time.seconds }</div>
//       <p className="text-2xl mt-4">
//         :{time.days}:{String(time.hours).padStart(2, '0')}:
//          {String(time.minutes).padStart(2, '0')}
         
//        </p></div>
//       <div className='w-40 h-20 border-4 border-sky-500 flex items-center justify-center'>{ time.secendOne }</div>
//       <div className='w-40 h-20 border-4 border-green-500 flex items-center justify-center'>{ time.secendTwo }</div>
     
//       </div>
    
//      </div>
//   )
// }



import React, { useEffect, useState } from 'react';

export default function TestTwo() {
  const initialTime = { days: 147, hours: 23, minutes: 60, seconds: 60, secendOne: 59, secendTwo: 58, secendThree: 61, secendFour: 62 };
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const storedTime = JSON.parse(localStorage.getItem('timer')) || initialTime;
    setTime(storedTime);

    const interval = setInterval(() => {
      setTime(prevTime => {
        let { days, hours, minutes, seconds, secendOne, secendTwo, secendThree, secendFour } = prevTime;

        if (seconds > 0) {
          seconds--;
          secendOne = secendOne > 0 ? secendOne - 1 : 60;
          secendTwo = secendTwo > 0 ? secendTwo - 1 : 59;
          secendThree = secendThree > 0 ? secendThree - 1 : 60;
          secendFour = secendFour > 0 ? secendFour - 1 : 61;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
          secendOne = 58; secendTwo = 57; secendThree = 60; secendFour = 61;
        } else if (hours > 0) {
          hours--;
          minutes = 59; seconds = 59;
          secendOne = 58; secendTwo = 57; secendThree = 60; secendFour = 61;
        } else if (days > 0) {
          days--;
          hours = 23; minutes = 59; seconds = 59;
          secendOne = 58; secendTwo = 57; secendThree = 60; secendFour = 61;
        } else {
          clearInterval(interval);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const newTime = { days, hours, minutes, seconds, secendOne, secendTwo, secendThree, secendFour };
        localStorage.setItem('timer', JSON.stringify(newTime));
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-col gap-4'>
      <div className=''>
        <div className='w-40 h-20 border-4 border-blue-500 flex items-center justify-center'>{time.secendFour}</div>
        <div className='w-40 h-20 border-4 border-teal-500 flex items-center justify-center'>{time.secendThree}</div>
        <div className='flex items-center gap-4'>
          <div className='w-40 h-20 border-4 border-red-500 flex items-center justify-center'>{time.seconds}</div>
          <p className="text-2xl mt-4">
            {time.days}:{String(time.hours).padStart(2, '0')}:{String(time.minutes).padStart(2, '0')}
          </p>
        </div>
        <div className='w-40 h-20 border-4 border-sky-500 flex items-center justify-center'>{time.secendOne}</div>
        <div className='w-40 h-20 border-4 border-green-500 flex items-center justify-center'>{time.secendTwo}</div>
      </div>
    </div>
  );
}