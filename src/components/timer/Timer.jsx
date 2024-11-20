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