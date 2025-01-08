import InfoCard from "./InfoCard"
import carBody from '/src/assets/json/car-body.json';
import accident from '/src/assets/json/accident.json'

export const infoData = [
  {
    animation: carBody ,
    title: "بیمه ثالث بدنه ",
    description: "ثالث بدنه، برای روزای مبهمه",
  },
  {
    animation: accident,
    title: "بیمه بدنه ",
    description:"با ثالث بدنه،پشتت محکمه",
  },
  {
    animation: carBody,
    title: " خسارت",
    description: "اطمینان خاطر در هر لحظه",
  },
];

export default function InfoCarBody() {
  return (
        <div className="w-full flex justify-center items-center max-md:h-screen max-lg:flex-col-reverse my-32 py-8 bg-carBody" data-aos="fade-right" data-aos-duration="2000">
          {/* Information Section */}
          <div className="lg:w-1/2 max-lg:w-full flex lg:justify-end max-lg:justify-center items-end max-sm:-mt-16">
            <div className="w-11/12 max-sm:w-full flex lg:items-end max-lg:items-center justify-center min-h-[450px] flex-col max-lg:mt-14">
              <div className="w-10/12 max-lg:w-full flex flex-col gap-y-7 max-xl:mx-auto items-center">
                {infoData.map(info => (
                  <InfoCard key={info.title} {...info} />
                ))}
                <div className="w-[80%] h-[40px] lg:min-w-[350px] flex justify-end self-center">
                  <button className="text-[12px] w-24 rounded-lg bg-gray-100 font-bold text-[#213063]"> ادامه مطلب</button>
                </div>
              </div>
            </div>
          </div>
    
          {/* Image Section */}
       <div className="max-lg:w-full h-[400px] flex items-center justify-center overflow-hidden">
          <img src="./img/info/car-ob.webp" alt="" className= " md:object-cover md:h-full md:min-w-[750px] max-sm:min-w-[650px] max-xl:p-14 max-lg:p-4 xl:p-2 " />
        </div>
    </div>
    
  )
}
