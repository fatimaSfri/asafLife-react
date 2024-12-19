import LifeBanner from "../newbanner/LifeBanner.jsx"
export default function ServicesPanel() {
  return (

    <div className="w-full h-full border-4 border-red-600 flex flex-col items-center justify-center ">
      <div className=" sm:w-10/12 max-sm:w-11/12 h-60 rounded-xl border-4 border-blue-400 flex flex-col items-center mt-20 ">
        <div className='bg-gradient-circle-life back_medium_01  bg-[length:100%_100%] bg-no-repeat shadow-md
          h-full w-full flex justify-center max-md:flex-col items-center px-4 '>
        </div>
      </div>

      <div className=" sm:w-10/12 max-sm:w-11/12 h-[600px] border-4 border-sky-900 ">
      <div className="grid  gap-4 lg:grid-cols-6 max-lg:grid-cols-3 justify-items-center ">
      <div className="sm:w-24 sm:h-24 max-sm:w-20 max-sm:h-20 bg-white rounded-3xl shadow-2xl m-2 flex items-center justify-center "></div>
      <div className="sm:w-24 sm:h-24 max-sm:w-20 max-sm:h-20 bg-white rounded-3xl shadow-2xl m-2"></div>
      <div className="sm:w-24 sm:h-24 max-sm:w-20 max-sm:h-20 bg-white rounded-3xl shadow-2xl m-2"></div>
      <div className="sm:w-24 sm:h-24 max-sm:w-20 max-sm:h-20 bg-white rounded-3xl shadow-2xl m-2"></div>
      <div className="sm:w-24 sm:h-24 max-sm:w-20 max-sm:h-20 bg-white rounded-3xl shadow-2xl m-2"></div>
       <div className="sm:w-24 sm:h-24 max-sm:w-20 max-sm:h-20 bg-white rounded-3xl shadow-2xl m-2"></div>
     </div>
      <div className="w-full h-1/2 border-4"></div>
    </div>




    </div>

  )
}
 