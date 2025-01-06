

export default function InsuranceCard({bgColor , textColor , title , number }) {
  return (
   
    <div className='lg:w-1/4 max-lg:w-[200px] max-sm:w-[100px] lg:h-40 max-lg:h-28  rounded-2xl flex flex-col items-center justify-between shadow-lg ' >
      <h1 className={`pt-6 font-KalamehBold lg:text-[20px] px-1 whitespace-nowrap max-sm:text-[12px] ${textColor}`}>{title}</h1>
      <p className={`font-KalamehBold lg:text-[20px] ${textColor}`}>{number} عدد</p>
     <div className={`h-1/3  rounded-b-2xl w-full flex items-center justify-center font-KalamehBold ${bgColor}`}>
      <p className="text-white max-sm:text-[14px]">اطلاعات بیشتر </p>

     </div>
    </div>


  )
}
