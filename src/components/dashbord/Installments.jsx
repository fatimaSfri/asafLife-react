
import Dashbord from "./Dashbord";
import InputField from "./InputForDashbord";
import { useState, useEffect } from "react";
import Button from "../button/Button";


const Installments = () => {
  const [formData, setFormData] = useState({
    date_sar: "",
    ammount: "",
  });

  const [errors, setErrors] = useState({});
  const [backendErrors, setBackendErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchInsurance = async () => {
      try {
        const response = await axiosInstance.get("/insurance-user");
        console.log(response.data?.data);
        setInsurance(response.data?.data || []);
      } catch (error) {
        console.error("خطا در دریافت اطلاعات بیمه:", error);
      }
    };
    fetchInsurance();
  }, []);

  useEffect(() => {
    let timeout;
    if (showPopup) {
      timeout = setTimeout(() => setShowPopup(false), 7000);
    }
    return () => clearTimeout(timeout);
  }, [showPopup]);

  const convertToEnglishNumbers = (str) => {
    if (typeof str !== 'string') {
      str = String(str);
    }

    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    const englishDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    return str.split('').map(char => {
      const index = persianDigits.indexOf(char);
      return index !== -1 ? englishDigits[index] : char;
    }).join('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setBackendErrors({});
  };



  return (
    <>
      <Dashbord />

      <div className="w-full h-[802px] flex items-center justify-center bg-gray-200 ">

        <form   className="w-full md:mt-4 flex items-center justify-center ">
          <div className="lg:w-11/12 max-lg:w-[96%] h-[700px] flex flex-col items-center justify-around md:px-16">
            <h1 className="md:text-[28px] max-md:text-[20px] mb-8 font-bold text-[#213063] border lg:w-11/12 max-lg:w-10/12">
              اقساط
            </h1>
            <div className="w-full h-full flex flex-col lg:gap-8 items-center mx-auto">
              <div className="w-full flex flex-col md:flex-row items-center justify-center md:gap-16 ">
                <div className="w-full md:w-1/2 flex items-center justify-center  mb-4 md:mb-0 md:mr-4">
                  <div className="max-md:w-10/12 md:w-full flex items-center justify-center">
                    <InputField
                      label="تاریخ سر رسید"
                      items="items-end"
                      name="reshte"
                      value=""
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex items-center justify-center ">
                  <div className="max-md:w-10/12 md:w-full flex items-center justify-center">
                    <InputField
                      label="مبلغ"
                      items="items-start "
                      name="reshte"
                      value=""
                    />
                  </div>
                </div>
              </div>
              <div className="w-full ">
                <Button mt="mt-2.75" type="submit" width="w-8/12" />
              </div>
              <div className="lg:w-11/12 max-lg:w-full mx-auto bg-white p-6 rounded-lg shadow-md flex items-center justify-center flex-col max-sm:overflow-auto max-lg:mt-10">

                <table className=" h-1/3 w-full rounded-2xl overflow-hidden mx-auto sm:ml-96">

                  <thead>
                    <tr className="bg-gray-200 rounded-2xl h-14 ">
                      <th className=" w-1/8 md:text-[16px] max-md:text-[12px] whitespace-nowrap px-1 ">شناسه واریز</th>
                      <th className=" w-2/8 md:text-[16px] max-md:text-[12px] whitespace-nowrap px-1">تاریخ سررسید</th>
                      <th className=" w-2/8  md:text-[16px] max-md:text-[12px] whitespace-nowrap px-1"> تاریخ پرداخت</th>
                      <th className=" w-2/8 md:text-[16px] max-md:text-[12px] whitespace-nowrap px-1"> مبلغ</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td className="border-b border-gray-200 sm:p-2 text-center md:text-[16px] max-md:text-[12px] py-4">1</td>
                      <td className="border-b border-gray-200 sm:p-2 text-center md:text-[16px] max-md:text-[12px] py-4">قسط اول</td>
                      <td className="border-b border-gray-300 sm:p-2 text-center md:text-[16px] max-md:text-[12px] py-4">1403/09/03</td>
                      <td className="border-b border-gray-200 sm:p-2 text-center md:text-[16px] max-md:text-[12px] py-4">100,000 تومان</td>
                    </tr>
                    <tr>
                      <td className="border-b border-gray-200 sm:p-2 text-center md:text-[16px] max-md:text-[12px] py-4">2</td>
                      <td className="border-b border-gray-200 sm:p-2 text-center md:text-[16px] max-md:text-[12px] py-4">قسط دوم</td>
                      <td className="border-b border-gray-300 sm:p-2 text-center md:text-[16px] max-md:text-[12px] py-4">1403/09/03</td>
                      <td className="border-b border-gray-200 sm:p-2 text-center md:text-[16px] max-md:text-[12px] py-4">150,000 تومان</td>
                    </tr>
                    <tr>
                      <td className="border-b border-gray-200 sm:p-2 text-center md:text-[16px] max-md:text-[12px] py-4">3</td>
                      <td className="border-b border-gray-200 sm:p-2 text-center md:text-[16px] max-md:text-[12px] py-4">قسط سوم</td>
                      <td className="border-b border-gray-300 sm:p-2 text-center md:text-[16px] max-md:text-[12px] py-4">1403/09/03</td>
                      <td className="border-b border-gray-200 sm:p-2 text-center md:text-[16px] max-md:text-[12px] py-4">200,000 تومان</td>
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





