import { useEffect, useState } from 'react';
import './Timer.css'
export default function TestTwo() {
  
  const targetDate = new Date('2025-04-28T00:00:00Z');

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now; 

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const totalSeconds = Math.floor(difference / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const secendThree = totalSeconds % 60 +1;
    const secendOne = totalSeconds % 60 -1;
    const secendFour = totalSeconds % 60 +2;
    const secendTwo = totalSeconds % 60 -2;

    return { days, hours, minutes, seconds,secendThree,secendOne,secendFour ,secendTwo };
  };

  const [time, setTime] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex max-sm:flex-col-reverse justify-center items-center sm:gap-8 h-full lg:w-5/12 max-lg:w-full max-sm:w-full mx-auto  max-sm:h-[300px]  max-lg:relative max-lg:overflow-hidden px-6'>
      <div className='flex sm:flex-col sm:gap-6 max-sm:gap-6 justify-between items-center max-sm:h-2/6  max-sm:w-full md:h-[450px] max-lg:relative z-10  md:mr-10 max-sm:mt-8 '>
      
        <div className='w-10 h-10 flex items-center justify-center md:-ml-28 sm:-ml-12 
        max-sm:-mt-14 lg:text-[22px] max-lg:text-[20px] text-white opacity-50 media-R'>{String(time.secendFour).padStart(2, '0')}</div>
        <div className='w-10 h-10 lg:text-[22px] max-lg:text-[20px] text-white opacity-75 flex items-center justify-center '>{String(time.secendThree).padStart(2, '0')}</div>
       
          <div className='w-10 h-10 lg:text-[22px] max-lg:text-[20px] text-white flex items-center justify-center sm:ml-6 max-sm:mt-10 '>{String(time.seconds).padStart(2, '0')}</div>
      
        <div className='w-10 h-10 lg:text-[22px] max-lg:text-[20px] text-white opacity-75 flex items-center justify-center ' >{String(time.secendOne).padStart(2, '0')}</div>
        <div className='w-10 h-10  lg:text-[22px] max-lg:text-[20px] text-white opacity-50 flex items-center justify-center md:-ml-28 max-sm:-mt-14 sm:-ml-12 media-R'>{String(time.secendTwo).padStart(2, '0')}</div>
      
      </div>
      
      <img src="./img/roadMap/Shape-01.png" alt="" className='absolute sm:ml-32 max-sm:rotate-[92deg] max-sm:w-[300px] max-sm:mb-10'/>
      <div className="md:text-xl max-md:text-lg mt-4 h-full flex flex-row-reverse md:gap-2 max-md:gap-1 max-sm:-mb-52">
            <p className='text-[#55c7e0] text-bold'>{time.days}</p>
            <p className='pr-4 text-gray-700'>Day</p> 
            <p className='text-[#55c7e0] text-bold'>{String(time.hours).padStart(2, '0')} </p>
            <p className='pr-4 text-gray-700'>Hrs</p>
            <p className='text-[#55c7e0] text-bold'>{String(time.minutes).padStart(2, '0')}</p>
            <p className='pr-4 text-gray-700'>Min</p>
          </div>
    </div>
    
  );
}