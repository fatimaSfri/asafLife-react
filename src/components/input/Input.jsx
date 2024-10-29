import { useEffect, useState } from "react"



function Input ({ initialValue, onChange, validationErrors , placeholder, name   }){

    const [value, setValue] = useState(initialValue);

    useEffect(() => {
      onChange( name , value );
      if(process.env.NODE_ENV === 'development'){
        console.log(name,value);
      }
    },[value]);
    
    
     return(

    <div className="w-full flex flex-col items-center justify-center">
    <input
      type = "text"
   className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:border-blue-400 placeholder-gray-500 "
      placeholder = {placeholder}
      value={value} 
      onChange={(e) => setValue(e.target.value)}>
      </input>
      
     {validationErrors &&
    <span
      className="w-full text-[12px] text-red-500 pt-1 pr-1"
      >{validationErrors}</span>}
      
  </div>

  )
}

export default Input