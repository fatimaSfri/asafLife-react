import { useEffect, useState } from "react"



function Input ({ initialValue, onChange, validationErrors , placeholder, name ,icon  }){

    const [value, setValue] = useState(initialValue);

    useEffect(() => {
      onChange( name , value );
      if(process.env.NODE_ENV === 'development'){
        console.log(name,value);
      }
    },[value]);
    
    
     return(
  
    <div className="lg:w-[470px] max-lg:w-7/12 max-md:w-10/12 h-20  flex flex-col items-center">
     <div className='bg-white w-full rounded-xl h-4/5 flex items-center justify-between'>
     <img src={icon} alt=""  className='h-10 w-10 mx-auto'/>
    <input
      type = "text"
   className="bg-gray-200 rounded-xl w-10/12 h-full px-4 focus:outline-none"
      placeholder = {placeholder}
      value={value} 
      onChange={(e) => setValue(e.target.value)}>
      </input>
      </div>
     {validationErrors &&
    <span
      className="w-full text-[12px] text-red-500 pt-1 pr-1"
      >{validationErrors}</span>}
      
  </div>

  )
}

export default Input