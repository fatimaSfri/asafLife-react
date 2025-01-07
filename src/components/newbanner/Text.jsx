
export default function Text({colorText , title , subTitle , icon , sizeTitle , sizeSubTitle ,colorSubTitle }) {
  return (
    <div className= " xl:max-w-[550px] max-xl:max-w-[400px] max-sm:min-w-[250px] jump-to-left flex flex-col md:justify-center items-center md:mt-20 z-20  ">
    <h1 className={` font-bold  whitespace-nowrap font-KalamehBold cursor-pointer ${sizeTitle} ${colorText}`}>{title}</h1>
   <p  className={` whitespace-nowrap text-white cursor-pointer ${sizeSubTitle} ${colorSubTitle} `} >
     {subTitle}</p>
   <div className='w-[95%] h-10 rounded-2xl bg-white mt-4 flex'>
     <img src={icon} alt="" className=' absolute lg:-mt-5 md:-mt-3 max-md:-mt-2 -mr-3 lg:h-16 md:h-14 max-md:h-12'/>
     <p className='w-full h-full flex justify-center items-center lg:text-[24px] max-lg:text-[20px] font-bold text-[#213063] cursor-pointer'>صـــــدور بیمـــــه </p>
   </div>
   <img src="./img/banner/arrow.svg" alt="" className="max-md:hidden mt-5 -mr-20 image w-4/12 "></img>
  </div>
 
  )
}