import checkup from '/src/assets/json/health-checkup.json';
import carBody from '/src/assets/json/car-body'
import life from '/src/assets/json/life'
import animal from '/src/assets/json/animal'
import mosque from '/src/assets/json/mosque'
import psychology from '/src/assets/json/psychology'
import legal from '/src/assets/json/legal'
import retirment from '/src/assets/json/retirement'
import Icon from './Icon';
import counseling from '/src/assets/json/counseling'
import household from '/src/assets/json/household'
import checkupHealth from '/src/assets/json/checkup'
import mentor from '/src/assets/json/mentorship'

export default function ServicesPanel() {
  return (

    <div className="w-full h-screen flex flex-col items-center justify-center ">
     
      <div className=" sm:w-10/12 max-sm:w-11/12 mt-20 border-[2px] rounded-2xl border-sky-900 flex flex-col justify-evenly  gap-10 max-xl:py-6 xl:py-8 ">
      <div>
      <div className="w-11/12 mx-auto flex  items-center">
        <div className=" w-20 h-20 flex items-center justify-center font-bold text-gray-700 whitespace-nowrap ">بیمــــه هـا</div>
        <div className="w-full h-[2px] bg-gray-400 mx-2"></div>
      </div>
      <div className="grid gap-6 lg:grid-cols-6 max-lg:grid-cols-3 justify-items-center xl:px-14">
    <div>
      <div className="sm:w-24 sm:h-24 max-sm:w-20 max-sm:h-20 bg-white rounded-3xl shadow-2xl m-2 flex items-center justify-center cursor-pointer">
        <Icon animationData={checkup}></Icon>
      </div>
       <p className="w-24 text-center mx-auto md:text-[14px] max-md:text-[12px] mt-4 text-gray-700 cursor-pointer">بیمه درمان</p>
    </div>
    <div>
      <div className="sm:w-24 sm:h-24 max-sm:w-20 max-sm:h-20 bg-white rounded-3xl shadow-2xl m-2 flex items-center justify-center cursor-pointer">
      <Icon animationData={carBody}></Icon>
      </div>
       <p className="w-24 text-center mx-auto md:text-[14px] max-md:text-[12px] mt-4 text-gray-700 cursor-pointer">بیمه ثالث بدنه</p>
    </div>
    <div>
      <div className="sm:w-24 sm:h-24 max-sm:w-20 max-sm:h-20 bg-white rounded-3xl shadow-2xl m-2 flex items-center justify-center cursor-pointer">
      <Icon animationData={life}></Icon>
      </div>
       <p className="w-24 text-center mx-auto md:text-[14px] max-md:text-[12px] mt-4 text-gray-700 cursor-pointer">بیمه زندگی</p>
    </div>
   
    <div>
      <div className="sm:w-24 sm:h-24 max-sm:w-20 max-sm:h-20 bg-white rounded-3xl shadow-2xl m-2 flex items-center justify-center cursor-pointer">
      <Icon animationData={mosque}></Icon>
      </div>
       <p className="w-24 text-center mx-auto md:text-[14px] max-md:text-[12px] mt-4 text-gray-700 cursor-pointer">بیمه قبر جا</p>
    </div>
    <div>
      <div className="sm:w-24 sm:h-24 max-sm:w-20 max-sm:h-20 bg-white rounded-3xl shadow-2xl m-2 flex items-center justify-center cursor-pointer">
      <Icon animationData={psychology}></Icon>
      </div>
       <p className="w-24 text-center mx-auto md:text-[14px] max-md:text-[12px] whitespace-nowrap mt-4 text-gray-700 cursor-pointer">مشاوره روانشناسی</p>
    </div>
    <div>
      <div className="sm:w-24 sm:h-24 max-sm:w-20 max-sm:h-20 bg-white rounded-3xl shadow-2xl m-2 flex items-center justify-center cursor-pointer">
      <Icon animationData={animal}></Icon>
      </div>
       <p className="w-24 text-center mx-auto md:text-[14px] max-md:text-[12px] whitespace-nowrap mt-4 text-gray-700 cursor-pointer">بیمه حیوانات خانگی</p>
    </div>

     </div>
     </div>

     <div>
      <div className="w-11/12 mx-auto flex items-center ">
        <div className="w-20 h-20 flex items-center justify-center font-bold text-gray-700 whitespace-nowrap cursor-pointer">مشـــاوره هـا</div>
        <div className="w-full h-[2px] bg-gray-400 mx-2"></div>
      </div>
      <div className="grid  gap-6 lg:grid-cols-6 max-lg:grid-cols-3 justify-items-center xl:px-14 cursor-pointer">
    <div>
      <div className="sm:w-24 sm:h-24 max-sm:w-20 max-sm:h-20 bg-white rounded-3xl shadow-2xl m-2 flex items-center justify-center cursor-pointer">
      <Icon animationData={mentor}></Icon>
      </div>
       <p className="w-24 text-center mx-auto md:text-[14px] max-md:text-[12px] mt-4 text-gray-700 cursor-pointer">سرمایه گذاری</p>
    </div>
    <div>
      <div className="sm:w-24 sm:h-24 max-sm:w-20 max-sm:h-20 bg-white rounded-3xl shadow-2xl m-2 flex items-center justify-center cursor-pointer">
      <Icon animationData={household}></Icon>
      </div>
       <p className="w-24 text-center mx-auto md:text-[14px] max-md:text-[12px] whitespace-nowrap mt-4 text-gray-700 cursor-pointer">نگهداری کودکان</p>
    </div>
    <div>
      <div className="sm:w-24 sm:h-24 max-sm:w-20 max-sm:h-20 bg-white rounded-3xl shadow-2xl m-2 flex items-center justify-center cursor-pointer">
      <Icon animationData={checkupHealth}></Icon>
      </div>
       <p className="w-24 text-center mx-auto md:text-[14px] max-md:text-[12px] mt-4 text-gray-700 cursor-pointer"> آزمایشگاه</p>
    </div>
    <div>
      <div className="sm:w-24 sm:h-24 max-sm:w-20 max-sm:h-20 bg-white rounded-3xl shadow-2xl m-2 flex items-center justify-center cursor-pointer">
      <Icon animationData={retirment}></Icon>
      </div>
       <p className="w-24 text-center mx-auto md:text-[14px] max-md:text-[12px] whitespace-nowrap mt-4 text-gray-700 cursor-pointer">نگهداری سالمندان</p>
    </div>
    <div>
      <div className="sm:w-24 sm:h-24 max-sm:w-20 max-sm:h-20 bg-white rounded-3xl shadow-2xl m-2 flex items-center justify-center cursor-pointer">
      <Icon animationData={counseling}></Icon>
      </div>
       <p className="w-24 text-center mx-auto md:text-[14px] max-md:text-[12px] whitespace-nowrap mt-4 text-gray-700 cursor-pointer">مشاوره خانواده</p>
    </div>
    <div>
      <div className="sm:w-24 sm:h-24 max-sm:w-20 max-sm:h-20 bg-white rounded-3xl shadow-2xl m-2 flex items-center justify-center cursor-pointer">
      <Icon animationData={legal}></Icon>
      </div>
       <p className="w-24 text-center mx-auto md:text-[14px] max-md:text-[12px] whitespace-nowrap mt-4 text-gray-700 cursor-pointer">مشاوره حقوقی</p>
    </div>

     </div>
     </div>

    </div>
    </div>

  )
}
 