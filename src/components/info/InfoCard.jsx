import Lottie from "lottie-react";
import './Informathion.css';


 export default function InfoCard({ animation, title, description }) {
    
  return (
    <div className="h-[70px] w-11/12 flex justify-center">
      <div className="rounded-full border-2 border-[#55c7e0] w-16 h-16 z-10 -mt-5 flex justify-center items-center bg-gray-200">
        <div className="w-14">
          <Lottie animationData={animation} loop={true} />
        </div>
      </div>
      <div className="w-10/12 rounded-xl h-full -mr-10 shadow-custom lg:min-w-[350px] bg-white">
        <h1 className="md:pr-16 max-md:pr-14 max-md:text-[14px] pt-3 font-bold text-[#213063]">{title}</h1>
        <p className="md:pr-16 max-md:pr-12 max-md:text-[12px]">{description}</p>
      </div>
    </div>
  );
}