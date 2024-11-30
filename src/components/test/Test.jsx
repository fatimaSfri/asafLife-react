// import React, { useState } from 'react';

// const DashInput = ({ count=5 }) => {
//   const [values, setValues] = useState(Array(count).fill(''));
  
//   const handleChange = (index, event) => {
//     const newValues = [...values];
//     newValues[index] = event.target.value.replace(/[^0-9]/g, ''); 
//     setValues(newValues);
    
//     // اگر ورودی پر شد، به خط بعدی برو
//     if (newValues[index] && index < count - 1) {
//       document.getElementById(`input-${index + 1}`).focus();
//     }
//   };

//   return (
//     <div className="flex space-x-2 flex-row-reverse">
//       {values.map((value, index) => (
//         <div key={index} className={`border-b-2 ${value ? 'border-gray-500' : 'border-red-500'} w-12`}>
//           <input
//             id={`input-${index}`}
//             type="text"
//             value={value}
//             onChange={(e) => handleChange(index, e)}
//             className="w-full text-center outline-none"
//             maxLength={1} // فقط یک کاراکتر را اجازه بده
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DashInput;

import  { useState, useEffect } from 'react';

const DashInput = ({ count }) => {
  const [values, setValues] = useState(Array(count).fill(''));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleChange = (index, event) => {
    const newValues = [...values];
    newValues[index] = event.target.value.replace(/[^0-9]/g, '');
    setValues(newValues);


    if (newValues[index] && index < count - 1) {
      setCurrentIndex(index + 1);
    }
    
   
    if (newValues[index] === '') {
      setHasInteracted(true);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight' && currentIndex < count - 1) {
      setCurrentIndex(currentIndex + 1);
      document.getElementById(`input-${currentIndex + 1}`).focus();
    } else if (event.key === 'ArrowLeft' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      document.getElementById(`input-${currentIndex - 1}`).focus();
    }
  };

  useEffect(() => {
    const currentInput = document.getElementById(`input-${currentIndex}`);
    if (currentInput) {
      currentInput.focus();
    }
  }, [currentIndex]);

  return (
    <div className="flex space-x-2">
      {values.map((value, index) => {
        const isEmpty = hasInteracted && value === '';
        return (
          <div
            key={index}
            className={`border-b-2 ${isEmpty ? 'border-red-500' : 'border-gray-500'} w-12`}
          >
            <input
              id={`input-${index}`}
              type="text"
              value={value}
              onChange={(e) => handleChange(index, e)}
              onKeyDown={handleKeyDown}
              className="w-full text-center outline-none"
              maxLength={1} 
            />
          </div>
        );
      })}
    </div>
  );
};

export default DashInput;