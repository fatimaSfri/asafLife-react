import './RoadMap.css'
import  { useState, useEffect } from 'react';
import Lottie from "lottie-react";
import seo from '/src/assets/json/seo.json';
import chart from '/src/assets/json/chart.json'
import testing from '/src/assets/json/Testing.json'
import growth from '/src/assets/json/Growth.json'
import target from '/src/assets/json/target.json'

const Roadmap = () => {

  const milestones = [
    { image:'./img/roadMap/circle.svg' ,icon :seo , subTitle: 'تحلیل بازار و ایجاد زیر ساخت ها ' , description: 'تحلیل بازار و رقبا بهبود محصولات زیر ساخت های دیجیتال ', date: '1400' , color: '#fdce0b' },
    { image:'./img/roadMap/circle.svg' ,icon :chart , subTitle: 'تثبیت جایگاه و افزایش سهم بازار' , description: 'بهره وری عملیاتی ارتباطات موثر با مشتریان  ', date: '1401'  , color: '#115052' },
    { image:'./img/roadMap/circle.svg' ,icon :testing , subTitle: 'شبکه  فروش  و تبلیغات  گسترده' , description: 'نوآوری در محصولات بهبود خدمات مشتریان سرویس های پس انداز و سرمایه گذاری  ', date: '1402' , color: '#26b890'  },
    { image:'./img/roadMap/circle.svg' ,icon :growth ,subTitle: 'گسـترش نوآوری و خدمـات مشــتریان توسعه' , description: 'افزایش کانال های توزیع کمپین های بازار یابی آموزش و بهبود مهارت های فروش  ', date: '1403' , color: '#55c7e0'  },
    { image:'./img/roadMap/circle.svg' ,icon :target , subTitle: 'رسیدن به هدف ۳۰ درصد سهم بازار ' , description: 'ارزیابی عملکرد و بهبود استراتژی ها تمرکز بر رضایت مشتری', date: '1404'  , color: '#213063' },
  ]

  const [progress, setProgress] = useState(0);
 const [animated , setAnimated] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
       if(innerWidth>900 && window.scrollY > 2400 && window.scrollY < 3400 || 
        innerWidth<900 && window.scrollY > 4401 && window.scrollY < 5400 || window.scrollY > 3401 && window.scrollY < 4400 
        ){
        setAnimated(true)
      setProgress((prev) => {
        if (prev < milestones.length ) {
          return prev + 1;
        } else {
          clearInterval(interval); 
          
          return prev; 
        }
      });}
    }, 2000);
    
    return () => clearInterval(interval);
   
  }, [milestones.length]);


  return (
    <>
      
      <div className="flex flex-col items-center justify-center py-10 lg:w-9/12 max-md:hidden max-lg:w-full h-[500px] z-50 " >
     
       <div className="flex items-center justify-center w-full relative flex-row-reverse  ">
        {/* style={{ width: `${(progress / milestones.length) * 90}%` }} */}
        <div className={`absolute top-26 left-0 h-[2px] bg-black transition-all duration-2000 mb-2  ${animated ?'roadMap w-[90%]':'' }`}  
        ></div>

         {milestones.map((milestone, index) => (
          <div key={index} className="flex  flex-col items-center max-xl:justify-between xl:justify-evenly  relative z-10  w-full  " >
          
          { (index%2-1) ?
            <div
              className={` text-center transition-opacity duration-500 h-[150px] flex flex-col  items-center justify-center  ${index < progress ? 'fade-in' : ''}
              `}
              style={{
                opacity: index < progress ? 1 : 0,
                transitionDelay: `${index * 300}ms`, 
              }}
            >
          <div className='w-16 h-16 rounded-full border flex items-center justify-center ' style={{borderColor:milestone.color}}>
          <div className='w-12'>
          <Lottie animationData={milestone.icon} loop={true} /></div>
            </div>
            <div className='w-2 h-2  rounded-full ' style={{backgroundColor:milestone.color}}></div>
            <div className='h-[35px] w-[1px] ' style={{backgroundColor:milestone.color}}></div>
             <span className='text-[28px] text-bold' style={{color:milestone.color}}>{milestone.date}</span>
            </div>
            :
            <div
            className={`text-center transition-opacity duration-500 h-[150px] flex flex-col justify-center ${index < progress ? 'fade-in' : ''}`}
            style={{
              opacity: index < progress ? 1 : 0,
              transitionDelay: `${index * 300}ms`, 
            }}
          >
             
           <p className="text-gray-600  overflow-hidden text-[14px] max-h-16  ">{milestone.description}</p>
           <p className="rounded-lg text-white font-bold max-xl:text-[12px] xl:text-[14px] px-2 py-1 mt-3 " style={{backgroundColor:milestone.color}}>{milestone.subTitle}
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
              className={`mt-2 text-center transition-opacity duration-500 h-[150px] flex flex-col items-center ${index < progress ? 'fade-out' : ''} `}
              style={{
                opacity: index < progress ? 1 : 0,
                transitionDelay: `${index * 300}ms`, 
              }}
              >
                <div className='h-[35px] w-[1px] ' style={{backgroundColor:milestone.color}}></div>
                <div className='w-2 h-2  rounded-full ' style={{backgroundColor:milestone.color}}></div>
              <div className='w-16 h-16 rounded-full border flex items-center justify-center ' style={{borderColor:milestone.color}}>
              <div className='w-12'>
              <Lottie animationData={milestone.icon} loop={true} /></div>
            </div>
            
              <span className="text-[28px] text-bold" style={{color:milestone.color}}>{milestone.date}</span>
             
              
             </div> :
            <div
            className={`mt-2 text-center transition-opacity duration-500  h-[150px]  ${index < progress ? 'fade-out' : ''}`}
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
      <div className="flex flex-col items-center justify-center gap-6 py-10 max-lg:w-full  relative">
        {/* style={{ height: `${(progress / milestones.length) * 86}%` }} */}
        <div className={`absolute left-1/2 top-0 w-[1px] bg-black transition-all duration-2000   ${animated?'roadMapVertical h-[86%]':''}`} 
         ></div>

        {milestones.map((milestone, index) => (
        
          <div key={index} className="flex items-center justify-between w-full z-10 " style={{ position: 'relative', top: `${(index / milestones.length) * 100}%` }}>
             
             { (index%2-1) ?
             <div
              className={` text-center transition-opacity duration-500 relative flex w-1/2  items-center justify-center` }
              style={{
                opacity: index < progress ? 1 : 0,
                transitionDelay: `${index * 300}ms`,
              }}
            >
             
            <div className='w-14 h-14 rounded-full border flex items-center justify-center' style={{borderColor:milestone.color}}>
            <div className='w-10'>
            <Lottie animationData={milestone.icon} loop={true} /></div>
            </div>
            <div className='w-2 h-2  rounded-full -mr-1' style={{backgroundColor:milestone.color}}></div>
            <div className='w-[35px] h-[1px] ' style={{backgroundColor:milestone.color}}></div>
              <span className='text-[20px] text-bold' style={{color:milestone.color}}>{milestone.date}</span>
            </div>
            :
            <div
            className={` text-center transition-opacity duration-500  px-4  w-[50%]  h-full relative `}
            style={{
              opacity: index < progress ? 1 : 0,
              transitionDelay: `${index * 300}ms`,
            }}
          >
           
            <p className="rounded-lg text-white  text-[12px] px-2 py-1 " style={{backgroundColor:milestone.color}}>{milestone.subTitle}
            </p>
            <p className="text-gray-600  text-[12px]">{milestone.description}</p>
            
          </div>

            }


            {/* ${(index / milestones.length) * 100} */}
            <div className={`w-3 h-3  rounded-full flex items-center justify-center text-white transition-opacity 
            duration-500 `}
              style={{
                opacity: index < progress ? 1 : 0,
                transitionDelay: `${index * 100}ms`,
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                top: ``,
                backgroundColor:milestone.color
              }}
            >
              
            </div>
         
           {  !(index%2-1)?
            <div
              className={`text-center transition-opacity duration-500  relative w-1/2 flex items-center justify-center ` }
              style={{
                opacity: index < progress ? 1 : 0,
                transitionDelay: `${index * 300}ms`,
              }}
            >
              
            <span className='text-[20px] text-bold' style={{color:milestone.color}}>{milestone.date}</span>

             <div className='w-[35px] h-[1px] ' style={{backgroundColor:milestone.color}}></div>
            <div className='w-2 h-2  rounded-full -ml-1' style={{backgroundColor:milestone.color}}></div>
            <div className='w-14 h-14 rounded-full border flex items-center justify-center' style={{borderColor:milestone.color}}>
             
            <div className='w-10'>
            <Lottie animationData={milestone.icon} loop={true} /></div>
            </div>
            
            </div> :

               <div
              className={`mt-2 text-center transition-opacity duration-500  px-4 w-[50%]  h-full flex flex-col items-center justify-center relative -z-10  `}
              style={{
                opacity: index < progress ? 1 : 0,
                transitionDelay: `${index * 300}ms`,
              }}
            >
             
              <p className="rounded-lg text-white  text-[12px] px-2 py-1 " style={{backgroundColor:milestone.color}}>{milestone.subTitle}
              </p>
              <p className="text-gray-600 text-[12px] ">{milestone.description}</p>
           
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
