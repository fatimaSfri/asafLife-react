
import Dashbord from "./Dashbord";



const Installments = () => {
 

  return (
    <>
      <Dashbord />
    
      <div className="w-full h-[802px] flex items-center justify-center bg-gray-200 ">
           
        <form  className="w-full md:mt-4  flex items-center justify-center ">
          <div className="lg:w-11/12 max-lg:w-[96%] h-[700px] flex flex-col items-center justify-around md:px-16">
            <h1 className="md:text-[28px] max-md:text-[20px] mb-8 font-bold text-[#213063] border lg:w-11/12 max-md:w-10/12">
                اقساط
            </h1>
            <div className="w-full h-full flex flex-col lg:gap-8 items-center mx-auto">
        <div className="lg:w-11/12 max-lg:w-full mx-auto bg-white p-6 rounded-lg shadow-md flex items-center justify-center flex-col max-sm:overflow-auto">
        <input
          type="text"
          placeholder="قسط را وارد کنید..."
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
       
      <table className=" h-1/3 w-full rounded-2xl overflow-hidden mx-auto sm:ml-96">
  
        <thead>
          <tr className="bg-gray-200 rounded-2xl h-14  ">
            <th className=" w-1/8 md:text-[16px] max-md:text-[12px] whitespace-nowrap px-1">شناسه واریز</th>
            <th className=" w-2/8 md:text-[16px] max-md:text-[12px] whitespace-nowrap px-1">تاریخ سررسید</th>
            <th className=" w-2/8  md:text-[16px] max-md:text-[12px] whitespace-nowrap px-1"> تاریخ پرداخت</th>
            <th className=" w-2/8 md:text-[16px] max-md:text-[12px] whitespace-nowrap px-1"> مبلغ</th>
          </tr>
        </thead>
  
        <tbody>
          <tr>
            <td className="border-b border-gray-200 sm:p-2 text-center md:text-[16px] max-md:text-[12px] ">1</td>
            <td className="border-b border-gray-200 sm:p-2 text-center md:text-[16px] max-md:text-[12px] ">قسط اول</td>
            <td className="border-b border-gray-300 sm:p-2 text-center md:text-[16px] max-md:text-[12px] ">1403/09/03</td>
            <td className="border-b border-gray-200 sm:p-2 text-center md:text-[16px] max-md:text-[12px] ">100,000 تومان</td>
          </tr>
          <tr>
            <td className="border-b border-gray-200 sm:p-2 text-center md:text-[16px] max-md:text-[12px] ">2</td>
            <td className="border-b border-gray-200 sm:p-2 text-center md:text-[16px] max-md:text-[12px] ">قسط دوم</td>
            <td className="border-b border-gray-300 sm:p-2 text-center md:text-[16px] max-md:text-[12px] ">1403/09/03</td>
            <td className="border-b border-gray-200 sm:p-2 text-center md:text-[16px] max-md:text-[12px] ">150,000 تومان</td>
          </tr>
          <tr>
            <td className="border-b border-gray-200 sm:p-2 text-center md:text-[16px] max-md:text-[12px] ">3</td>
            <td className="border-b border-gray-200 sm:p-2 text-center md:text-[16px] max-md:text-[12px] ">قسط سوم</td>
            <td className="border-b border-gray-300 sm:p-2 text-center md:text-[16px] max-md:text-[12px] ">1403/09/03</td>
            <td className="border-b border-gray-200 sm:p-2 text-center md:text-[16px] max-md:text-[12px] ">200,000 تومان</td>
          </tr>
        </tbody>
      </table>
    </div>

           
            </div> 
          </div>
        </form>
      </div>
    </>
  );
};

export default Installments;





