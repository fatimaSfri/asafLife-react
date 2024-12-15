
export default function InputForDashbord(props) {
  return (
    <div className={` w-full flex flex-col justify-center ${props.items}`}>
    <div className="flex lg:w-8/12 max-lg:w-full">
      <p className="text-[16px] text-[#213063] mt-4 ">
        {props.lable}
      </p>
      <p className="text-red-500 text-[20px] pr-1 my-2">*</p>
    </div>
    <input type="text" className="lg:w-8/12 max-lg:w-full h-10 rounded-2xl px-5"></input>
 </div>
  )
}
