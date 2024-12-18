
export default function border({background}) {
  return (
    <>
    <div className={`absolute left-0 top-96 transform -translate-y-1/2 transition-transform duration-300 h-[43%] xl:w-7 lg:w-6 max-lg:w-4 rounded-s-full p-2 bg-[#f6f462] `}   >
    </div>
    <div className={`absolute right-0 top-96 transform -translate-y-1/2 transition-transform duration-300 h-[43%]  xl:w-7 lg:w-6 max-lg:w-4 rounded-e-full -mr-[0.5px] bg-[#f6f462] p-2`}>
     </div>  
    </>
  )
}
