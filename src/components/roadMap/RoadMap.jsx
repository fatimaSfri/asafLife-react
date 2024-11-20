
import './RoadMap.css'
import React, { useState, useEffect } from 'react';

const Roadmap = () => {
  const milestones = [
    { title: 'مرحله ۱', description: 'شرح مرحله ۱', date: 'تاریخ ۱' },
    { title: 'مرحله ۲', description: 'شرح مرحله ۲', date: 'تاریخ ۲' },
    { title: 'مرحله ۳', description: 'شرح مرحله ۳', date: 'تاریخ ۳' },
    { title: 'مرحله ۴', description: 'شرح مرحله ۴', date: 'تاریخ ۴' },
    { title: 'مرحله ۵', description: 'شرح مرحله ۵', date: 'تاریخ ۵' },
  ];

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < milestones.length) {
          return prev + 1;
        } else {
          return 0; 
        }
      });
    }, 2000);
    

    return () => clearInterval(interval);
  }, [milestones.length]);

// ****************************
 

  return (
    <>
       {/* <div className='flex justify-end items-center max-md:hidden border border-red-900'> */}
          <div className="flex flex-col items-center justify-center py-10 lg:w-8/12 max-md:hidden  max-lg:w-full border h-[500px] border-red-500" >
     
       <div className="flex items-center justify-center w-full relative flex-row-reverse border border-sky-900 max-xl:gap-14 xl:gap-24">
         {/* خط اصلی */}
        <div className="absolute top-26 left-0 h-1 bg-blue-500 transition-all duration-2000" style={{ width: `${(progress / milestones.length) * 100}%` }}></div>

         {milestones.map((milestone, index) => (
          <div key={index} className="flex flex-col items-center relative z-10 border border-green-900" >

          { (index%2-1) ?
            <div
              className={`mt-2 text-center transition-opacity duration-500 border-8 border-rose-500 h-[100px]  ${index < progress ? 'fade-in' : ''}
              `}
              style={{
                opacity: index < progress ? 1 : 0,
                transitionDelay: `${index * 300}ms`, // تأخیر متناسب با ایندکس
              }}
            >
              <h2 className="text-xl font-semibold">{milestone.title}</h2>
              <span className="text-gray-400">{milestone.date}</span>
            </div>
            :
            <div
            className={`mt-2 text-center transition-opacity duration-500 border-8 border-rose-500 h-[100px]  ${index < progress ? 'fade-in' : ''}`}
            style={{
              opacity: index < progress ? 1 : 0,
              transitionDelay: `${index * 300}ms`, // تأخیر متناسب با ایندکس
            }}
          >
           <p className="text-gray-600">{milestone.description}</p>
           </div>

            } 

            {/* دایره‌های مراحل */}
            <div
              className={`w-10 h-10  bg-blue-500 rounded-full flex  items-center justify-center text-white transition-opacity duration-500 `}
              style={{
                opacity: index < progress ? 1 : 0,
                transitionDelay: `${index * 100}ms`, // تأخیر متناسب با ایندکس
              }}
            >
              {index + 1}
            </div>
            {/* توضیحات مرحله */}

            { !(index%2-1) ?
            <div
              className={`mt-2 text-center transition-opacity duration-500 border-8 border-rose-500 h-[100px]  ${index < progress ? 'fade-out' : ''} `}
              style={{
                opacity: index < progress ? 1 : 0,
                transitionDelay: `${index * 300}ms`, // تأخیر متناسب با ایندکس
              }}
              >
                
              <h2 className="text-xl font-semibold">{milestone.title}</h2>
              <span className="text-gray-400">{milestone.date}</span>

             </div> :
            <div
            className={`mt-2 text-center transition-opacity duration-500 border-8 border-rose-500 h-[100px]  ${index < progress ? 'fade-out' : ''}`}
            style={{
              opacity: index < progress ? 1 : 0,
              transitionDelay: `${index * 300}ms`, // تأخیر متناسب با ایندکس
            }}
          >
           <p className="text-gray-600">{milestone.description}</p>
          </div>
         }
          </div>
           
        ))}
      </div>
    {/* </div> */}
    </div>


{/* ********************************************************************************************************************************************** */}

    <div className='flex justify-center items-center md:hidden'>
      <div className="flex flex-col items-center justify-center  gap-10 py-10 lg:w-1/2 max-lg:w-full border  border-red-500 relative">
        <div className="absolute left-1/2 top-0 w-1 bg-blue-500 transition-all duration-2000" style={{ height: `${(progress / milestones.length) * 100}%` }}></div>

        {milestones.map((milestone, index) => (


          <div key={index} className="flex items-center gap-20   z-10 border" style={{ position: 'relative', top: `${(index / milestones.length) * 100}%` }}>
             {/* توضیحات مرحله */}
             { (index%2-1) ?
             <div
              className={`mt-2 text-center transition-opacity duration-500 border border-red-500  relative h-[100px] ` }
              style={{
                opacity: index < progress ? 1 : 0,
                transitionDelay: `${index * 300}ms`,
              }}
            >
              <h2 className="text-xl font-semibold">{milestone.title}</h2>
              {/* <p className="text-gray-600">{milestone.description}</p> */}
              <span className="text-gray-400">{milestone.date}</span>
            </div>
            :
            <div
            className={`mt-2 text-center transition-opacity duration-500 border border-red-500  relative  h-[100px]`}
            style={{
              opacity: index < progress ? 1 : 0,
              transitionDelay: `${index * 300}ms`,
            }}
          >
            {/* <h2 className="text-xl font-semibold">{milestone.title}</h2> */}
            <p className="text-gray-600">{milestone.description}</p>
            {/* <span className="text-gray-400">{milestone.date}</span> */}
          </div>

            }



            {/* دایره‌های مراحل */}
            {/* ${(index / milestones.length) * 100} */}
            <div className={`w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white transition-opacity duration-500 border-8`}
              style={{
                opacity: index < progress ? 1 : 0,
                transitionDelay: `${index * 100}ms`,
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                top: ``,
              }}
            >
              {index + 1}
            </div>
            {/* توضیحات مرحله */}
           {  !(index%2-1)?
            <div
              className={`mt-2 text-center transition-opacity duration-500 border border-red-500  relative h-[100px]` }
              style={{
                opacity: index < progress ? 1 : 0,
                transitionDelay: `${index * 300}ms`,
              }}
            >
              <h2 className="text-xl font-semibold">{milestone.title}</h2>
              {/* <p className="text-gray-600">{milestone.description}</p> */}
              <span className="text-gray-400">{milestone.date}</span>
            </div> :

               <div
              className={`mt-2 text-center transition-opacity duration-500 border border-red-500  relative h-[100px]`}
              style={{
                opacity: index < progress ? 1 : 0,
                transitionDelay: `${index * 300}ms`,
              }}
            >
              {/* <h2 className="text-xl font-semibold">{milestone.title}</h2> */}
              <p className="text-gray-600">{milestone.description}</p>
              {/* <span className="text-gray-400">{milestone.date}</span> */}
            </div> 






             }
             


          </div>

          

        ))}
      </div>
    </div>

    
    </>
  );
};

export default Roadmap;
