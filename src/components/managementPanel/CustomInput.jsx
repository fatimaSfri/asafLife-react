
export default function CustomInput({
    label,
    name,
    type = "text",
    required = true,
    items,
    width
    }){
    // const toPersianNumbers = (str) => str.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
    return (
      <>
      <div className={`w-full flex flex-col ${items}`}>
      <div className="flex lg:w-8/12 max-lg:w-full">
        <p className="text-[16px] text-[#213063] mt-4 b ">
          {label}
        </p>
      {required && <p className="text-red-500 text-[20px] pr-1 my-2">*</p>}
      </div>
      <input  className={` h-10 rounded-2xl px-5 ${width}`}
          type={type}
          name={name}
         ></input>
       <div className="self-items-start lg:w-8/12 max-lg:w-full">
       {/* error */}
     </div>
   </div>
   
    </>
    )
  }
  
  
  