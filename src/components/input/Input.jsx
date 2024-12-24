import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

function Input() {
  const { inputProps } = useOutletContext();
 
  const {
    icon,
    onChange,
    name,
    validationError,
    placeholder
  } = inputProps;

  const [value, setValue] = useState(''); 
  const phoneView = (phone) =>  phone.replaceAll(' ','').replace(/^(\d{4})(\d{0,3})(\d{0,4}).*/, "$1 $2 $3").trim();
    // console.log(phone)
  
  

     const handleChange = (event) => {
     onChange(name,value); 
     isNaN(event.target.value.replaceAll(' ',''))? value : setValue(event.target.value.replaceAll(" ",''));
    }
 
 
  return (
    <div className="lg:w-[470px] max-lg:w-7/12 max-md:w-10/12 h-20 flex flex-col items-center">
      <div className="bg-white w-full rounded-xl h-4/5 flex items-center justify-end" dir="ltr">
       <input
                type="text"
                value={phoneView(value)}
                onChange={(e) => handleChange(e)}
                maxLength={13}
                className="h-12 w-full text-center appearance-none bg-transparent focus:outline-none text-[#a8a8a8] bg-[#dcddde] text-xl"
                placeholder={placeholder}
              />
               { icon && <img src={icon} alt="icon" className="h-10 w-10 mx-auto "  /> }    
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
