// import { useEffect, useState } from "react";
// import { useOutletContext } from "react-router-dom";

// function Input() {
//   const context = useOutletContext();

  
//   const { count, name, icon, onChange, validationErrors , phone,
//     password,
//     validationErrorsPass,
//     navigate,
//     handleInputChange,
//     handleInputChangePass,
//     validate,
//     handleErrorPass,
//     data,
//     generateNewCode,
//     showLink,} = context;

//   const [values, setValues] = useState(Array(count).fill(''));
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [hasInteracted, setHasInteracted] = useState(false);

//   const handleChange = (index, event) => {
//     const newValues = [...values];
//     newValues[index] = event.target.value.replace(/[^0-9]/g ,''); 
//     setValues(newValues);

//     const concatenatedValues = newValues.join(''); 
//     onChange(name, concatenatedValues); 

//     // Move to the next input if the current input is filled
//     if (newValues[index] && index < count - 1) {
//       setCurrentIndex(index + 1);
//     }

//     // Mark as interacted
//     setHasInteracted(true);
//   };

//   const handleKeyDown = (event) => {
//     if (event.key === 'ArrowRight') {
//       if (currentIndex < count - 1) {
//         setCurrentIndex(currentIndex + 1);
//       }
//     } else if (event.key === 'ArrowLeft') {
//       if (currentIndex > 0) {
//         setCurrentIndex(currentIndex - 1);
//       }
//     } else if (event.key === 'Backspace') {
//       if (values[currentIndex] === '' && currentIndex > 0) {
//         setCurrentIndex(currentIndex - 1);
//       }
//     } else if (event.key === 'Enter') {
//       if (currentIndex < count - 1) {
//         setCurrentIndex(currentIndex + 1);
//       }
//     }
//   };

//   useEffect(() => {
//     const currentInput = document.getElementById(`input-${currentIndex}`);
//     if (currentInput) {
//       currentInput.focus();
//     }
//   }, [currentIndex]);

//   return (
//     <div className="lg:w-[470px] max-lg:w-7/12 max-md:w-10/12 h-20 flex flex-col items-center">
//       <div className='bg-white w-full rounded-xl h-4/5 flex items-center justify-end'>
//         <img src={icon} alt="" className='h-10 w-10 mx-auto' />
//         <div className="flex flex-row-reverse space-x-2 px-4 rounded-lg bg-gray-200 h-full w-10/12 items-center justify-center">
//           {values.map((value, index) => {
//             const isEmpty = hasInteracted && value === '';
//             return (
//               <div
//                 key={index}
//                 className={`border-b-2 bg-gray-200 ${isEmpty ? 'border-gray-500' : 'border-[#55c7e0]'}`}
//               >
//                 <input
//                   id={`input-${index}`}
//                   type="text"
//                   value={value}
//                   onChange={(e) => handleChange(index, e)}
//                   onKeyDown={handleKeyDown}
//                   className="w-full text-center outline-none bg-gray-200"
//                   maxLength={1}
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       {/* {validationErrors && (
//         <span className="w-full text-[12px] text-red-500 pt-1 pr-1">{validationErrors}</span>
//       )} */}
//       {validationErrors && (
//   <span className="w-full text-[12px] text-red-500 pt-1 pr-1">
//     {typeof validationErrors === "string" ? validationErrors : JSON.stringify(validationErrors)}
//   </span>
// )}
//     </div>
//   );
// }

// export default Input;


import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

function Input() {
  const { inputProps } = useOutletContext();

  const {
     icon,
    // initialValue,
    onChange,
    name,
    validationError,
    count,
  } = inputProps;

  console.log(inputProps);

  const [values, setValues] = useState(Array(count).fill("")); 
  const [currentIndex, setCurrentIndex] = useState(0); 
  const [hasInteracted, setHasInteracted] = useState(false); 


  const handleChange = (index, event) => {
    const newValues = [...values];
    newValues[index] = event.target.value.replace(/[^0-9]/g, ""); 
    setValues(newValues);

    const concatenatedValues = newValues.join(""); 
    onChange(name, concatenatedValues); 

  
    if (newValues[index] && index < count - 1) {
      setCurrentIndex(index + 1);
    }

    setHasInteracted(true); 
  };

 
  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight" && currentIndex < count - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (event.key === "ArrowLeft" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (event.key === "Backspace" && values[currentIndex] === "" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

 
  useEffect(() => {
    const currentInput = document.getElementById(`input-${currentIndex}`);
    if (currentInput) {
      currentInput.focus();
    }
  }, [currentIndex]);

  return (
    <div className="lg:w-[470px] max-lg:w-7/12 max-md:w-10/12 h-20 flex flex-col items-center">
      <div className="bg-white w-full rounded-xl h-4/5 flex items-center justify-end">
        {icon && <img src={icon} alt="icon" className="h-10 w-10 mx-auto" />}
        <div className="flex flex-row-reverse space-x-2 px-4 rounded-lg bg-gray-200 h-full w-10/12 items-center justify-center">
          {values.map((value, index) => {
            const isEmpty = hasInteracted && value === "";
            return (
              <div
                key={index}
                className={`border-b-2 bg-gray-200 ${
                  isEmpty ? "border-gray-500" : "border-[#55c7e0]"
                }`}
              >
                <input
                  id={`input-${index}`}
                  type="text"
                  value={value}
                  onChange={(e) => handleChange(index, e)}
                  onKeyDown={handleKeyDown}
                  className="w-full text-center outline-none bg-gray-200"
                  maxLength={1}
                />
              </div>
            );
          })}
        </div>
      </div>
      {validationError && (
        <span className="w-full text-[12px] text-red-500 pt-1 pr-1">
          {typeof validationErrors === "string"
            ? validationError
            : JSON.stringify(validationError)}
        </span>
      )}
    </div>
  );
}

export default Input;
