
import './RoadMap.css'
import React, { useState, useEffect } from 'react';

const Roadmap = () => {
  const milestones = [
    { title: 'مرحله ۱' , subTitle: 'تحلیل بازار و ایجاد زیر ساخت ها ' , description: 'تحلیل بازار و رقبا بهبود محصولات زیر ساخت های دیجیتال ', date: '1400' , color: '#fdce0b' },
    { title: 'مرحله ۲' , subTitle: 'تحلیل بازار و ایجاد زیر ساخت ها ' , description: 'بهره وری عملیاتی ارتباطات موثر با مشتریان  ', date: '1401'  , color: '#115052' },
    { title: 'مرحله ۳' , subTitle: 'تحلیل بازار و ایجاد زیر ساخت ها ' , description: 'نوآوری در محصولات بهبود خدمات مشتریان سرویس های پس انداز و سرمایه گذاری  ', date: '1402' , color: '#26b890'  },
    { title: 'مرحله ۴' , subTitle: 'تحلیل بازار و ایجاد زیر ساخت ها ' , description: 'افزایش کانال های توزیع کمپین های بازار یابی آموزش و بهبود مهارت های فروش  ', date: '1403' , color: '#55c7e0'  },
    { title: 'مرحله ۵' , subTitle: 'تحلیل بازار و ایجاد زیر ساخت ها ' , description: 'ارزیابی عملکرد و بهبود استراتژی ها تمرکز بر رضایت مشتری', date: '1404'  , color: '#213063' },
  ]

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
          <div className="flex flex-col items-center justify-center py-10 lg:w-9/12 max-md:hidden max-lg:w-full border h-[500px] border-red-500 z-50  " >
     
       <div className="flex items-center justify-center w-full relative flex-row-reverse border h-5/6 border-sky-900  ">
        
        <div className="absolute top-26 left-0 h-[2px] bg-black transition-all duration-2000 mb-2" style={{ width: `${(progress / milestones.length) * 94}%` }}></div>

         {milestones.map((milestone, index) => (
          <div key={index} className="flex  flex-col items-center max-xl:justify-between xl:justify-evenly  relative z-10 border w-full border-green-900 h-5/6 " >
          
          { (index%2-1) ?
            <div
              className={` text-center transition-opacity duration-500 border-8 border-rose-500 h-[100px]   ${index < progress ? 'fade-in' : ''}
              `}
              style={{
                opacity: index < progress ? 1 : 0,
                transitionDelay: `${index * 300}ms`, 
              }}
            >
              <h2 className="text-xl font-semibold">{milestone.title}</h2>
              <span className='text-[28px] text-bold ' style={{color:milestone.color}}>{milestone.date}</span>
            </div>
            :
            <div
            className={`text-center transition-opacity duration-500 h-[100px]  ${index < progress ? 'fade-in' : ''}`}
            style={{
              opacity: index < progress ? 1 : 0,
              transitionDelay: `${index * 300}ms`, 
            }}
          >
             
           <p className="text-gray-600  overflow-hidden text-[14px] max-h-16  absolute -mt-4 ">{milestone.description}</p>
           <p className="rounded-lg text-white font-bold max-xl:text-[12px] xl:text-[14px] px-2 py-1 mt-12 " style={{backgroundColor:milestone.color}}>{milestone.subTitle}
           </p>
           </div>

            } 

           
            <div
              className={`w-4 h-4 rounded-full flex items-center justify-center text-white transition-opacity duration-500 `}
              style={{
                opacity: index < progress ? 1 : 0,
                transitionDelay: `${index * 100}ms`, 
                backgroundColor:milestone.color
              }}
            >
             
            </div>
          

            { !(index%2-1) ?
            <div
              className={`mt-2 text-center transition-opacity duration-500 h-[100px]  ${index < progress ? 'fade-out' : ''} `}
              style={{
                opacity: index < progress ? 1 : 0,
                transitionDelay: `${index * 300}ms`, 
              }}
              >
                
              <span className="text-[28px] text-bold" style={{color:milestone.color}}>{milestone.date}</span>
              <h2 className="text-xl font-semibold">{milestone.title}</h2>
              
             </div> :
            <div
            className={`mt-2 text-center transition-opacity duration-500  h-[100px]  ${index < progress ? 'fade-out' : ''}`}
            style={{
              opacity: index < progress ? 1 : 0,
              transitionDelay: `${index * 300}ms`,
            }}
          >
            <p className="rounded-lg text-white font-bold max-xl:text-[12px] xl:text-[14px] py-1 px-1  " style={{backgroundColor:milestone.color}}>{milestone.subTitle}</p>
           <p className="text-gray-600 text-[14px] overflow-hidden mt-4">{milestone.description}</p>
          </div>
         }
          </div>
           
        ))}
      </div>
    {/* </div> */}
    </div>


{/* ********************************************************************************************************************************************** */}

    <div className='flex justify-center items-center md:hidden'>
      <div className="flex flex-col items-center justify-center gap-6 py-10 max-lg:w-full border border-red-500 relative">
        <div className="absolute left-1/2 top-0 w-1 bg-blue-500 transition-all duration-2000" style={{ height: `${(progress / milestones.length) * 100}%` }}></div>

        {milestones.map((milestone, index) => (
        

          <div key={index} className="flex items-center justify-between z-10 border" style={{ position: 'relative', top: `${(index / milestones.length) * 100}%` }}>
             
             { (index%2-1) ?
             <div
              className={` text-center transition-opacity duration-500 border border-red-500 relative flex w-1/2 bg-green-500 justify-center gap-2 ` }
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
            className={` text-center transition-opacity duration-500 border px-4 border-red-500 w-[50%] bg-red-900 h-full relative `}
            style={{
              opacity: index < progress ? 1 : 0,
              transitionDelay: `${index * 300}ms`,
            }}
          >
            {/* <h2 className="text-xl font-semibold">{milestone.title}</h2> */}
            <p className="text-gray-600  text-[14px]">{milestone.description}</p>
            {/* <span className="text-gray-400">{milestone.date}</span> */}
          </div>

            }


            {/* ${(index / milestones.length) * 100} */}
            <div className={`w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white transition-opacity 
            duration-500 border-8`}
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
         
           {  !(index%2-1)?
            <div
              className={`text-center transition-opacity duration-500 border border-red-500 relative w-1/2 flex items-center` }
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
              className={`mt-2 text-center transition-opacity duration-500 border border-red-500 px-4 w-[50%] bg-red-900 h-full relative -z-10  `}
              style={{
                opacity: index < progress ? 1 : 0,
                transitionDelay: `${index * 300}ms`,
              }}
            >
              {/* <h2 className="text-xl font-semibold">{milestone.title}</h2> */}
              <p className="text-gray-600 text-[14px] ">{milestone.description}</p>
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
