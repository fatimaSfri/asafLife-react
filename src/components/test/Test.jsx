// // // // // import './Test.css'
// // // // // import Lottie from "lottie-react";
// // // // // import animationData from '/public/Test/balance.json'

// // // // // export default function Test() {
// // // // //     const logos = [
// // // // //         'https://example.com/logo1.png',
// // // // //         'https://example.com/logo2.png',
// // // // //         'https://example.com/logo3.png',
// // // // //         // لوگوهای بیشتری اضافه کنید
// // // // //       ];
// // // // //   return (

// // // // //     // <div className="flex justify-center items-center h-40 w-40 ">
// // // // //     // <Lottie animationData={animationData} loop={true} />
// // // // //     // </div>

// // // // //     // <>
// // // // //     // <div className='border border-red-500 w-full h-96'>
// // // // //     // </div>
// // // // //    // </>
  
// // // // //   )
// // // // // }


// // // // const cards = [
// // // //   {
// // // //     title: "مشاوره روانشناسی",
// // // //     description: "مشاور خانواده",
// // // //     duration: "۶۰ دقیقه",
// // // //     image: "/path/to/image1.jpg",
// // // //   },
// // // //   {
// // // //     title: "مشاوره سرمایه گذاری",
// // // //     description: "مشاور سرمایه‌گذاری",
// // // //     duration: "۶۰ دقیقه",
// // // //     image: "/path/to/image2.jpg",
// // // //   },
// // // //   {
// // // //     title: "مشاوره حقوقی",
// // // //     description: "مشاور حقوقی",
// // // //     duration: "۶۰ دقیقه",
// // // //     image: "/path/to/image3.jpg",
// // // //   },
// // // //   // افزودن کارت‌های دیگر به همین ترتیب
// // // // ];

// // // // const ResponsiveSection = () => {
// // // //   return (
// // // //     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 py-8">
// // // //       {/* بخش متن */}
// // // //       <div className="space-y-4 text-right">
// // // //         <h2 className="text-3xl font-bold text-blue-900">مشاورها</h2>
// // // //         <p className="text-gray-700">
// // // //           شرکت کارگزاری آینده سازان آتیش با سابقه ۳۰ ساله مدیران خود در عرضه تجارت و بیمه و ایجاد باشگاه مشتریان.
// // // //         </p>
// // // //         <p className="text-gray-700">
// // // //           شرکت کارگزاری آینده سازان آتیش با سابقه ۳۰ ساله مدیران خود در عرضه تجارت و بیمه و ایجاد باشگاه مشتریان.
// // // //         </p>
// // // //       </div>

// // // //       {/* بخش کارت‌ها */}
// // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //         {cards.map((card, index) => (
// // // //           <div key={index} className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center text-center">
// // // //             <img src={card.image} alt={card.title} className="rounded-t-lg w-full h-40 object-cover" />
// // // //             <div className="mt-4">
// // // //               <h3 className="text-lg font-bold text-blue-900">{card.title}</h3>
// // // //               <p className="text-sm text-gray-500">{card.description}</p>
// // // //               <p className="text-sm text-gray-500 mt-2">{card.duration}</p>
// // // //               <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">درخواست مشاوره</button>
// // // //             </div>
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ResponsiveSection;
// // // import React, { useState, useEffect } from 'react';
// // // // import './Test.css'; 

// // // export default function Counseling() {
// // //   const [isMobile, setIsMobile] = useState(window.innerWidth < 1540); 

// // //   useEffect(() => {
// // //     const handleResize = () => {
// // //       setIsMobile(window.innerWidth < 1540);
// // //     };

// // //     window.addEventListener('resize', handleResize);

// // //     // Cleanup listener on component unmount
// // //     return () => {
// // //       window.removeEventListener('resize', handleResize);
// // //     };
// // //   }, []);


// // //   const cards = [
// // //     {
// // //       title: "مشاوره روانشناسی",
// // //       description: "مشاور خانواده",
// // //       duration: "۶۰ دقیقه",
// // //       image: "/path/to/image1.jpg",
// // //     },
// // //     {
// // //       title: "مشاوره سرمایه گذاری",
// // //       description: "مشاور سرمایه‌گذاری",
// // //       duration: "۶۰ دقیقه",
// // //       image: "/path/to/image2.jpg",
// // //     },
// // //     {
// // //       title: "مشاوره حقوقی",
// // //       description: "مشاور حقوقی",
// // //       duration: "۶۰ دقیقه",
// // //       image: "/path/to/image3.jpg",
// // //     },
// // //     {
// // //       title: "مشاوره شغلی",
// // //       description: "مشاور شغلی",
// // //       duration: "۶۰ دقیقه",
// // //       image: "/path/to/image4.jpg",
// // //     },
// // //   ];

// // //   const [currentIndex, setCurrentIndex] = useState(0);

// // //   useEffect(() => {
// // //     const interval = setInterval(() => {
// // //       setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
// // //     }, 2000); 

// // //     return () => clearInterval(interval);
// // //   }, [cards.length]);

// // //   return (
// // //     <div className="w-full h-auto border-4 border-red-500 flex max-xl:flex-col-reverse relative overflow-hidden mb-20">
// // //       <div className="w-10/12 max-xl:w-full border border-sky-500 flex justify-center items-center">
// // //         {/* <div className=" w-full h-full"> */}
// // //         {/* grid grid-cols-2 xl:grid-cols-4  py-8 gap-6 border w-full max-xl:mx-auto */}
// // //         <div className=" flex  border w-full gap-4 " >
        
// // //           {cards.map((card, index) => (
      
// // //             <div
// // //               key={index}
// // //               className={`${isMobile?' w-full h-full transition-transform duration-500 ease-in-out  flex items-center justify-center' : 'w-full '} 
// // //                 ${index === currentIndex  ? 'max-xl:opacity-100 max-xl:flex max-xl:z-10 max-xl:translate-x-0' : 'max-xl:opacity-0  max-xl:z-0 max-xl:translate-x-full max-xl:hidden'}
// // //                 `}
// // //               >
// // //               <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center text-center max-xl:w-5/12 max-lg:w-7/12 max-md:w-9/12">
// // //                 <img src={card.image} alt={card.title} className="rounded-t-lg h-40 object-cover" />
// // //                 <div className="mt-4">
// // //                   <h3 className="text-lg font-bold text-blue-900">{card.title}</h3>
// // //                   <p className="text-sm text-gray-500">{card.description}</p>
// // //                   <p className="text-sm text-gray-500 mt-2">{card.duration}</p>
// // //                   <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">درخواست مشاوره</button>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           ))}
// // //           </div>
// // //         {/* </div> */}
// // //       </div>
// // //       <div className="w-1/2 h-[400px] border border-green-500 flex max-xl:h-[30vh] max-md:w-full mx-auto" >
// // //         <div className="border border-red-500 w-9/12 h-full max-xl:w-full ">
// // //           <div className="border w-1/2 h-1/6 max-xl:w-full max-xl:h-1/3"></div>
// // //           <div className="border w-full h-5/6 max-xl:h-2/3"></div>
// // //         </div>
// // //         <div className="border-4 border-red-900 w-3/12 h-full flex-col justify-between max-xl:w-full  max-xl:flex-row max-xl:justify-between">
// // //           <div></div>
// // //           <div></div>
// // //         </div>
// // //       </div>
// // //       <div class="flex justify-center items-center h-screen bg-gray-100">
// // //   <div class="bg-white shadow-lg rounded-lg w-72 overflow-hidden group">
// // //     <div class="p-4 transition-all duration-300 group-hover:h-52 h-28 active:h-52">
// // //       <h3 class="text-xl font-bold">Card Title</h3>
// // //       <p class="text-gray-600 mb-4">Card description goes here.</p>
// // //       <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// // //         <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
// // //           Click me
// // //         </button>
// // //         <p class="text-gray-600 mt-2">Additional content</p>
// // //       </div>
// // //     </div>
// // //   </div>
// // // </div>
// // //     </div>
// // //   );
// // // }


// // import React, { useState, useEffect } from 'react';

// // export default function Counseling() {
// //   const [isMobile, setIsMobile] = useState(window.innerWidth < 1540);

// //   useEffect(() => {
// //     const handleResize = () => {
// //       setIsMobile(window.innerWidth < 1540);
// //     };

// //     window.addEventListener('resize', handleResize);

// //     return () => {
// //       window.removeEventListener('resize', handleResize);
// //     };
// //   }, []);

// //   const cards = [
// //     {
// //       title: "مشاوره روانشناسی",
// //       description: "مشاور خانواده",
// //       duration: "۶۰ دقیقه",
// //       image: "/path/to/image1.jpg",
// //     },
// //     {
// //       title: "مشاوره سرمایه گذاری",
// //       description: "مشاور سرمایه‌گذاری",
// //       duration: "۶۰ دقیقه",
// //       image: "/path/to/image2.jpg",
// //     },
// //     {
// //       title: "مشاوره حقوقی",
// //       description: "مشاور حقوقی",
// //       duration: "۶۰ دقیقه",
// //       image: "/path/to/image3.jpg",
// //     },
// //     {
// //       title: "مشاوره شغلی",
// //       description: "مشاور شغلی",
// //       duration: "۶۰ دقیقه",
// //       image: "/path/to/image4.jpg",
// //     },
// //   ];

// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
// //     }, 2000);

// //     return () => clearInterval(interval);
// //   }, [cards.length]);

// //   return (
// //     <div className="w-full h-auto border-4 border-red-500 flex max-xl:flex-col-reverse relative overflow-hidden mb-24">
// //       <div className="w-10/12 max-xl:w-full border border-sky-500 flex justify-center items-center">
// //         <div className="flex border w-full gap-4">
// //           {cards.map((card, index) => (
// //             <div
// //               key={index}
// //               className={`${isMobile ? 'w-full max-xl:w-5/12 max-lg:w-7/12 max-md:w-9/12' : 'w-1/4'} 
// //                 ${index === currentIndex ? 'max-xl:opacity-100 max-xl:flex max-xl:z-10 max-xl:translate-x-0' : 'max-xl:opacity-0 max-xl:z-0 max-xl:translate-x-full max-xl:hidden'}`}>
// //               <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center text-center relative">
// //                 <img src={card.image} alt={card.title} className="rounded-t-lg h-72 object-cover " />
// //              <div class="flex justify-center items-center  group ">
// //              <div class="bg-white shadow-lg rounded-lg w-11/12  overflow-hidden absolute mb-28  group-hover:h-52 hover:mb-52 transition-transform duration-300 ease-in-out">
// //                 <div class="p-1 transition-all duration-500 h-16 ">
// //                 <h3 class="text-xl font-bold">{card.title}</h3>
// //                 <p class="text-gray-600 mb-4">{card.description}</p>
// //                <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// //                <p class="text-gray-600 mt-2"> {card.duration}</p>
// //                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
// //                 درخواست مشاوره
// //                </button>
              
// //              </div>
// //              </div>
// //              </div>
// //              </div>

// //                 { /* <div className="mt-4">
// //                   <h3 className="text-lg font-bold text-blue-900">{card.title}</h3>
// //                   <p className="text-sm text-gray-500">{card.description}</p>
// //                   <p className="text-sm text-gray-500 mt-2">{card.duration}</p>
// //                   <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">درخواست مشاوره</button>
// //                 </div> */ }

 
// //               </div>
// //              </div>
          
// //           ))}
// //         </div>
// //       </div>
// //       <div className="w-1/2 h-[400px] border border-green-500 flex max-xl:h-[30vh] max-md:w-full mx-auto">
// //         <div className="border border-red-500 w-9/12 h-full max-xl:w-full">
// //           <div className="border w-1/2 h-1/6 max-xl:w-full max-xl:h-1/3"></div>
// //           <div className="border w-full h-5/6 max-xl:h-2/3"></div>
// //         </div>
// //         <div className="border-4 border-red-900 w-3/12 h-full flex-col justify-between max-xl:w-full max-xl:flex-row max-xl:justify-between">
// //           <div></div>
// //           <div></div>
// //         </div>
// //       </div>




// //     </div>
// //   );
// // }


// import React, { useEffect, useRef } from 'react';

// const SpiralLine = () => {
//   const lineRef = useRef(null);
//   const points = [
//     { length: 100, color: 'red' },
//     { length: 400, color: 'blue' },
//     { length: 780, color: 'green' },
//   ];

//   useEffect(() => {
//     const line = lineRef.current;

//     const showPoints = () => {
//       points.forEach((point, index) => {
//         const position = line.getPointAtLength(point.length);
//         const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
//         circle.setAttribute('cx', position.x);
//         circle.setAttribute('cy', position.y);
//         circle.setAttribute('r', '6');
//         circle.setAttribute('fill', point.color);
//         circle.setAttribute('opacity', '0'); // شروع با شفافیت صفر
//         line.parentNode.appendChild(circle);

//         // انیمیشن ظهور دایره‌ها پس از عبور خط
//         setTimeout(() => {
//           circle.setAttribute('opacity', '1'); // تغییر به شفافیت 1
//         }, 1000 + (index * 3000)); // زمان تأخیر برای هر نقطه

//         // برگرداندن به شفافیت صفر برای بار بعدی
//         setTimeout(() => {
//           circle.setAttribute('opacity', '0');
//         }, 13000 + (index * 3000)); // زمان برای برگرداندن به شفافیت 0
//       });
//     };

//     // صدا زدن تابع برای اولین بار
//     showPoints();

//     const interval = setInterval(() => {
//       // پاک کردن دایره‌های قبلی
//       const circles = line.parentNode.querySelectorAll('circle');
//       circles.forEach(circle => circle.remove());
//       showPoints();
//     }, 16000); // زمان بین تکرارها

//     return () => clearInterval(interval); // پاک کردن interval
//   }, [points]);

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <svg width="800" height="200" className="overflow-visible">
//         <path
//           d="M 20 100 Q 100 0, 400 100 T 780 100"
//           fill="none"
//           stroke="black"
//           strokeWidth="4"
//           className="animate-line"
//           ref={lineRef}
//         />
//       </svg>
//       <style jsx>{`
//         @keyframes lineAnimation {
//           0% {
//             stroke-dasharray: 0, 800;
//           }
//           100% {
//             stroke-dasharray: 800, 0;
//           }
//         }
//         .animate-line {
//           animation: lineAnimation 10s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default SpiralLine;


import React, { useEffect, useRef } from 'react';

const SpiralLine = () => {
  const lineRef = useRef(null);
  const points = [
    { length: 100, color: 'red' },   // نقطه اول
    { length: 400, color: 'blue' },  // نقطه دوم
    { length: 700, color: 'green' }, // نقطه سوم
  ];

  useEffect(() => {
    const line = lineRef.current;

    const animatePoints = () => {
      points.forEach((point, index) => {
        const position = line.getPointAtLength(point.length);
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        
        circle.setAttribute('cx', position.x);
        circle.setAttribute('cy', position.y);
        circle.setAttribute('r', '6');
        circle.setAttribute('fill', point.color);
        circle.setAttribute('opacity', '0'); // شروع با شفافیت صفر

        label.setAttribute('x', position.x + 10);
        label.setAttribute('y', position.y - 10);
        label.setAttribute('opacity', '0'); // شروع با شفافیت صفر
        label.textContent = 'Label'; // می‌توانید متن را تغییر دهید

        line.parentNode.appendChild(circle);
        line.parentNode.appendChild(label);

        // انیمیشن ظهور دایره و برچسب به محض رسیدن خط
        setTimeout(() => {
          circle.setAttribute('opacity', '1'); // تغییر به شفافیت 1
          label.setAttribute('opacity', '1'); // تغییر به شفافیت 1
        }, 2000 + (index * 3000)); // زمان تأخیر برای هر نقطه

        // انیمیشن خاموش شدن
        setInterval(() => {
          const currentOpacity = circle.getAttribute('opacity');
          circle.setAttribute('opacity', currentOpacity === '1' ? '0' : '1');
          label.setAttribute('opacity', currentOpacity === '1' ? '0' : '1');
        }, 1000 + (index * 3000)); // روشن و خاموش شدن هر بار

      });
    };

    animatePoints();

    const interval = setInterval(() => {
      // پاک کردن دایره‌های قبلی
      const circles = line.parentNode.querySelectorAll('circle, text');
      circles.forEach(circle => circle.remove());
      animatePoints();
    }, 16000); // زمان بین تکرارها

    return () => clearInterval(interval); // پاک کردن interval
  }, [points]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <svg width="800" height="200" className="overflow-visible">
        <path
          d="M 20 100 Q 100 0, 400 100 T 780 100"
          fill="none"
          stroke="black"
          strokeWidth="4"
          className="animate-line"
          ref={lineRef}
        />
      </svg>
      <style jsx>{`
        @keyframes lineAnimation {
          0% {
            stroke-dasharray: 0, 800;
          }
          100% {
            stroke-dasharray: 800, 0;
          }
        }
        .animate-line {
          animation: lineAnimation 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SpiralLine;