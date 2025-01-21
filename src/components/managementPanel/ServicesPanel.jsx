import checkup from '/src/assets/json/health-checkup.json';
import carBody from '/src/assets/json/car-body';
import life from '/src/assets/json/life';
import animal from '/src/assets/json/animal';
import mosque from '/src/assets/json/mosque';
import psychology from '/src/assets/json/psychology';
import legal from '/src/assets/json/legal';
import retirement from '/src/assets/json/retirement';
import Icon from './Icon';
import counseling from '/src/assets/json/counseling';
import household from '/src/assets/json/household';
import checkupHealth from '/src/assets/json/checkup';
import mentor from '/src/assets/json/mentorship';
import { Link } from 'react-router-dom';
import NavbarForPannel from './NavbarForPannel';

const services = [
  { icon: checkup, label: 'بیمه درمان' },
  { icon: carBody, label: 'بیمه ثالث بدنه' , link:'/dashbord/Third' },
  { icon: life, label: 'بیمه زندگی' },
  { icon: mosque, label: 'بیمه قبر جا' },
  { icon: psychology, label: 'مشاوره روانشناسی' },
  { icon: animal, label: 'بیمه حیوانات خانگی' },
];

const consultations = [
  { icon: mentor, label: 'سرمایه گذاری' },
  { icon: household, label: 'نگهداری کودکان' },
  { icon: checkupHealth, label: 'آزمایشگاه' },
  { icon: retirement, label: 'نگهداری سالمندان' },
  { icon: counseling, label: 'مشاوره خانواده' },
  { icon: legal, label: 'مشاوره حقوقی' },
];

export default function ServicesPanel() {
  const renderServices = (items) => (
 
    <div className="grid lg:grid-cols-6  max-lg:grid-cols-3 justify-items-center xl:px-14 ">
      {items.map(({ icon, label ,link },index) => {
         return (
        <div key={index}>
         <Link to={link}> <div className="lg:w-24 lg:h-24 max-lg:w-20 max-lg:h-20 bg-white rounded-3xl shadow-2xl m-2 flex items-center justify-center cursor-pointer">
            <Icon animationData={icon} />
          </div></Link>
          <p className="w-24 text-center mx-auto lg:text-[14px] max-lg:text-[12px] mt-4 text-gray-700 cursor-pointer">{label}</p>
        </div>
      )}
      )}
    </div>
  );

  return (
    <>
    <div className='w-full h-screen flex flex-col items-center gap-2 overflow-auto '>
    <div className="w-full">
          <NavbarForPannel width="sm:w-10/12 max-sm:w-11/12"></NavbarForPannel>
          </div>
    <div className='w-full lg:h-[250px] max-lg:h-[200px] sm:w-10/12 max-sm:w-11/12 rounded-2xl flex bg-gradient-circle-carBody'>
       <div className='w-1/2 h-full flex items-center justify-center'>
        {/* ******************************* */}
        <div className="w-full jump-to-left flex flex-col justify-center items-center z-20">
        <h1 className={`font-bold whitespace-nowrap font-KalamehBold cursor-pointer text-car text-center md:text-[36px] max-md:text-[20px] max-sm:text-[14px]`}>بیمــــه ثالـــث بـــدنـــه</h1>
         <p className={`whitespace-nowrap text-white cursor-pointer md:text-[22px] max-md:text-[12px] max-sm:text-[10px]`} >
         همگام با شما تا آینده ای مطمئن </p>
         <div className='md:w-[300px]  max-md:w-[150px] max-sm:w-[130px] lg:h-8 max-lg:h-6 rounded-2xl bg-white mt-2 flex'>
       <p className='w-full h-full flex justify-center items-center lg:text-[14px] max-lg:text-[14px] max-sm:text-[12px] font-bold text-[#213063] cursor-pointer'>صـــــدور بیمـــــه </p>
       </div>
      </div>
      {/* ******************************* */}
       </div>
       <div className='w-1/2 h-full flex items-center justify-center py-4'>
       <img src="../img/banner/car/01-obl.webp" alt="" className='object-cover sm:h-full max-sm:w-full mt-10 max-sm:mx-4 overflow-hidden whitespace-nowrap overflow-ellipsis'/>
       </div>
    </div>
    <div className="w-full flex flex-col items-center justify-center">
      <div className="sm:w-10/12 max-sm:w-11/12 lg:border-2 rounded-2xl lg:border-sky-900 flex flex-col justify-evenly pb-2">
        <div className="w-11/12 mx-auto flex items-center">
          <div className="w-20 lg:h-20 max-lg:py-3 flex items-center justify-center font-bold text-gray-700 whitespace-nowrap">بیمــــه هـا</div>
          <div className="w-full h-[2px] bg-gray-400 mx-2"></div>
        </div>
        {renderServices(services)}

        <div className="w-11/12 mx-auto flex items-center mb-2">
          <div className="w-20 lg:h-20 flex items-center justify-center font-bold text-gray-700 whitespace-nowrap cursor-pointer">مشـــاوره هـا</div>
          <div className="w-full h-[2px] bg-gray-400 mx-2"></div>
        </div>
        {renderServices(consultations)}
      </div>
    </div>
    </div>
    </>
  );
}