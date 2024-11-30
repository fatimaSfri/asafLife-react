// // import  { useState, useEffect } from 'react';
// // import  "./MouseCurser.css"

// // const Cursor = () => {

// //   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  

// //   useEffect(() => {
// //     const handleMouseMove = (e) => {
// //       setCursorPosition({ x: e.clientX, y: e.clientY });
// //     };

// //     document.addEventListener('mousemove', handleMouseMove);

// //     return () => {
// //       document.removeEventListener('mousemove', handleMouseMove);
// //     };
// //   }, []);

// //   return (
// //     <>
// //       <div
// //         className="cursor  visi fixed"
// //         style={{
// //           left: cursorPosition.x,
// //           top: cursorPosition.y,
// //           transform: 'translate(-50%, -50%)',
// //         }}
// //       />
    
// //     </>
// //   );
// // };

// // export default Cursor;


// import React, { useState, useEffect } from 'react';
// import  "./MouseCurser.css"

// const Cursor = () => {
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
//   const [isMoving, setIsMoving] = useState(false);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setCursorPosition({ x: e.clientX, y: e.clientY });
//       setIsMoving(true);
      
//       // Reset isMoving after a short delay
//       clearTimeout(window.movementTimeout);
//       window.movementTimeout = setTimeout(() => setIsMoving(false), 100);
//     };

//     document.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//       clearTimeout(window.movementTimeout);
//     };
//   }, []);

//   return (
//     <div>
//       <div
//         className={`cursor ${isMoving ? 'visible' : 'hidden'}`}
//         style={{
//           left: cursorPosition.x,
//           top: cursorPosition.y,
//         }}
//       />
//     </div>
//   );
// };

// export default Cursor;



import React, { useState, useEffect } from 'react';
import './MouseCurser.css';

const Cursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [length, setLength] = useState(20); // طول اولیه خط

  useEffect(() => {
    let lastPosition = { x: 0, y: 0 };
    let lastTime = Date.now();

    const handleMouseMove = (e) => {
      const currentTime = Date.now();
      const deltaX = e.clientX - lastPosition.x;
      const deltaY = e.clientY - lastPosition.y;
      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
      const timeElapsed = currentTime - lastTime;

      // محاسبه سرعت موس
      const speed = distance / timeElapsed;

      // تغییر طول خط بر اساس سرعت
      const newLength = Math.min(100, 20 + speed * 2); // حداکثر طول خط 100 پیکسل

      setCursorPosition({ x: e.clientX, y: e.clientY });
      setLength(newLength);
      setIsMoving(true);

      lastPosition = { x: e.clientX, y: e.clientY };
      lastTime = currentTime;

      clearTimeout(window.movementTimeout);
      window.movementTimeout = setTimeout(() => setIsMoving(false), 100);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(window.movementTimeout);
    };
  }, []);

  return (
    <div>
      <div
        className={`cursor ${isMoving ? 'visible' : 'hidden'}`}
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
          height: '2px',
          width: `${length}px`,
          backgroundColor: 'blue', // رنگ خط
          transform: 'translate(-50%, -50%) rotate(45deg)', // چرخش خط
          transition: 'width 0.1s', // انیمیشن طول خط
        }}
      />
    </div>
  );
};

export default Cursor;