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

const services = [
  { icon: checkup, label: 'بیمه درمان' },
  { icon: carBody, label: 'بیمه ثالث بدنه' },
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
    <div className="grid gap-6 lg:grid-cols-6 max-lg:grid-cols-3 justify-items-center xl:px-14">
      {items.map(({ icon, label }) => (
        <div key={label}>
          <div className="sm:w-24 sm:h-24 max-sm:w-20 max-sm:h-20 bg-white rounded-3xl shadow-2xl m-2 flex items-center justify-center cursor-pointer">
            <Icon animationData={icon} />
          </div>
          <p className="w-24 text-center mx-auto md:text-[14px] max-md:text-[12px] mt-4 text-gray-700 cursor-pointer">{label}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="sm:w-10/12 max-sm:w-11/12 mt-20 border-2 rounded-2xl border-sky-900 flex flex-col justify-evenly xl:py-8">
        <div className="w-11/12 mx-auto flex items-center">
          <div className="w-20 h-20 flex items-center justify-center font-bold text-gray-700 whitespace-nowrap">بیمــــه هـا</div>
          <div className="w-full h-[2px] bg-gray-400 mx-2"></div>
        </div>
        {renderServices(services)}

        <div className="w-11/12 mx-auto flex items-center">
          <div className="w-20 h-20 flex items-center justify-center font-bold text-gray-700 whitespace-nowrap cursor-pointer">مشـــاوره هـا</div>
          <div className="w-full h-[2px] bg-gray-400 mx-2"></div>
        </div>
        {renderServices(consultations)}
      </div>
    </div>
  );
}