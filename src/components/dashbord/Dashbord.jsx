

export default function Dashbord() {
  return (
    <div className="w-full h-[1000px] bg-gray-200 flex items-center flex-col -z-20 absolute">
        {/* header */}
      <div className="flex items-center gap-8 w-10/12 justify-between pt-10">
      <img src="./img/icon/bars-solid.svg" alt=""  className=" lg:w-[50px] max-lg:w-[35px] max-md:w-[30px]"/>
      <div className="flex items-center gap-4 ">
      <p className=' lg:text-[20px] max-lg:text-[14px] font-bold text-[#213063] mb-1'> آینــده ســازان آسایــش فـردا</p>
      <img src="./img/menu/ASAFLogo.svg" className=" lg:w-[150px] max-lg:w-[120px] max-md:w-[95px] "></img> </div> 
      </div>
      <div className='h-[2px] w-11/12 bg-[#55c7e0] mt-4'></div>



    </div>
   
  )
}
