// import Dashbord from "./Dashbord"
// import Button from "../button/Button";
// import Dropdown from "./Dropdown";

// export default function Contract() {

//   const items = ["بیمه حکمت", "بیمه ایران", "بیمه دانا"]
//   const itemsPrson = [" حسن مومنی", "آرش رستمی", "لادن موسوی "]
//   return (
//     <>

//   <Dashbord></Dashbord>
//         <div className="w-full h-[802px] flex items-center justify-center bg-gray-200">
//           <div className="lg:w-11/12 max-lg:w-[96%] h-[700px]  flex flex-col gap-10 md:px-16 -mt-40 ">
//             <h1 className="md:text-[28px] max-md:text-[20px] font-bold pt-8 text-[#213063] px-4">
//              ثبت قرار داد  
//           </h1>
          
//         <div className=" max-md:w-10/12 md:w-full mx-auto h-full flex flex-col gap-8 items-center max-lg:justify-evenly"> 
//         <div className="md:flex max-md:flex-col w-full gap-2">

//        <div className=" w-full flex flex-col items-center justify-center">
//           <div className="flex lg:w-8/12 max-lg:w-full">
//             <p className="text-[16px] text-[#213063]">
//               کد بیمه گذار
//             </p>
//             <p className="text-red-500 text-[20px] pr-1">*</p>
//           </div>

//         <input type="text" className="lg:w-8/12 max-lg:w-full h-10 rounded-2xl px-5"></input>
//        </div>

//        <div className="w-full flex flex-col items-center justify-center">
//           <div className="flex lg:w-8/12 max-lg:w-full">
//             <p className="text-[16px] text-[#213063]">
//               کد رایانامه
//             </p>
//             <p className="text-red-500 text-[20px] pr-1">*</p>
//           </div>

//         <input type="text" className="lg:w-8/12 max-lg:w-full h-10 rounded-2xl px-5"></input>
//        </div>


//        </div>

//        <div className="md:flex max-md:flex-col w-full gap-2">

//        <div className=" w-full flex flex-col items-center justify-center">
//           <div className="flex lg:w-8/12 max-lg:w-full">
//             <p className="text-[16px] text-[#213063]">
//               کد ملی
//             </p>
//             <p className="text-red-500 text-[20px] pr-1">*</p>
//           </div>
//            <input type="text" className="lg:w-8/12 max-lg:w-full h-10 rounded-2xl px-5"></input>
//        </div>

//        <div className=" w-full flex flex-col items-center justify-center">
//           <div className="flex lg:w-8/12 max-lg:w-full">
//             <p className="text-[16px] text-[#213063]">
//               رشته
//             </p>
//             <p className="text-red-500 text-[20px] pr-1">*</p>
//           </div>
//            <input type="text" className="lg:w-8/12 max-lg:w-full h-10 rounded-2xl px-5"></input>
//        </div>

//        </div>

//         <div className="md:flex max-md:flex-col w-full">

//        <div className=" w-full flex flex-col items-center justify-center">
//        <div className="flex lg:w-8/12 max-lg:w-full">
//             <p className="text-[16px] text-[#213063]">
//               اسم فرد
//             </p>
//             <p className="text-red-500 text-[20px] pr-1">*</p>
//           </div>
//         <Dropdown size="w-8/12" width="w-[28%] max-lg:w-[80%]" mt="mt-[13.5rem]" items={itemsPrson}></Dropdown>
//        </div>

//        <div className=" w-full flex flex-col items-center justify-center">
//          <div className="flex lg:w-8/12 max-lg:w-full">
//             <p className="text-[16px] text-[#213063]">
//               شرکت بیمه
//             </p>
//             <p className="text-red-500 text-[20px] pr-1">*</p>
//           </div>
//         <Dropdown size="w-8/12" width="lg:w-[28%] max-lg:w-[80%]" mt="mt-[13.5rem]" items={items} ></Dropdown>
//        </div>

//        </div>
//        <Button mt="mt-10"></Button>

//        </div>
        
//        </div>
//        </div>

//   </>
//   )
// }


/*************************************************************** */

import  { useState, useEffect } from "react";
import axiosInstance from "../axiosConfig";
import contractValidation from "./validationInput/contractValidation";
import Dashbord from "./Dashbord";
import Button from "../button/Button";
import InputField from "./InputForDashbord.jsx";
import Dropdown from "./Dropdown";

const Contract = () => {
  const [formData, setFormData] = useState({
    insurer_code: "",
    computer_code: "",
    reshte: "",
    user_id: "",
    insurance_id: "",
  });

  const [errors, setErrors] = useState({});
  const [backendErrors, setBackendErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [users, setUsers] = useState([]);
  const [insurance, setInsurance] = useState([]);
  const lastTenUsers = users.slice(-10);
  const lastTenInsurance = insurance.slice(-10);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosInstance.get("/user");
        setUsers(response.data?.data || []);
      } catch (error) {
        console.error("خطا در دریافت اطلاعات کاربران:", error);
      }
    };

    fetchUsers();
  }, []);
  
  useEffect(() => {
    const fetchInsurance = async () => {
      try {
        const response = await axiosInstance.get("/insurance");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formDataInEnglish = {
      ...formData,
      insurer_code: convertToEnglishNumbers(formData.insurer_code),
      computer_code: convertToEnglishNumbers(formData.computer_code),
      reshte: convertToEnglishNumbers(formData.reshte),
      user_id: convertToEnglishNumbers(formData.user_id),
      insurance_id: convertToEnglishNumbers(formData.insurance_id),
    };
    console.log(formDataInEnglish);

    const { error } = contractValidation.validate(formDataInEnglish, { abortEarly: false });
    console.log(error);
    if (error) {
      const validationErrors = {};
      error.details.forEach((detail) => {
        console.log(detail.message);  
        validationErrors[detail.path[0]] = detail.message;
      });
      setErrors(validationErrors); 
    } else {
      setErrors({});
      try {
        await axiosInstance.post("/contract", formDataInEnglish);
        setSubmitted(true);
        setShowPopup(true);
        setFormData({
          insurer_code: "",
          computer_code: "",
          reshte: "",
          user_id: "",
          insurance_id: "",
        });
      } catch (error) {
        const backendErrors = {};
        const { message, errors } = error.response?.data || {};
        if (errors) {
          Object.keys(errors).forEach((field) => {
            backendErrors[field] = Array.isArray(errors[field])
              ? errors[field].join(" ")
              : errors[field];
          });
        }
        setBackendErrors(backendErrors);
      }
    }
  };
  
  

  return (
    <>
      <Dashbord />
      {Object.keys(backendErrors).length > 0 && (
        <div className="bg-red-100  text-red-700 px-4 py-3 rounded absolute mb-4 " role="alert">
          <strong className="font-bold">خطاهای سرور:</strong>
          <ul className="list-none pl-0">
            {Object.entries(backendErrors).map(([key, value]) => (
              <li key={key}>{value}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="w-full h-[802px] flex items-center justify-center bg-gray-200 ">
        {showPopup && submitted && (
          <div className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-4 rounded-xl shadow-lg">
            قرارداد با موفقیت ثبت شد.
          </div>
        )}
        <form onSubmit={handleSubmit} className="w-full md:mt-4  flex items-center justify-center ">
          <div className="lg:w-11/12 max-lg:w-[96%] h-[700px] flex flex-col items-center justify-around md:px-16">
            <h1 className="md:text-[28px] max-md:text-[20px] mb-8 font-bold  text-[#213063] border md:w-11/12 lg:w-[70%] max-md:w-10/12">
              ثبت قرارداد
            </h1>
            <div className="max-md:w-10/12 md:w-full h-full flex flex-col lg:gap-8 items-center mx-auto">
              <div className="md:flex max-md:flex-col w-full gap-4 mx-auto">
                <InputField
                  label="کد بیمه‌گذار"
                  items="items-end"
                  name="insurer_code"
                  value={formData.insurer_code}
                  onChange={handleInputChange}
                  error={errors.insurer_code || backendErrors.insurer_code}
                />
                <InputField
                  label="کد رایانامه"
                  name="computer_code"
                  value={formData.computer_code}
                  onChange={handleInputChange}
                  error={errors.computer_code || backendErrors.computer_code}
                />
              </div>
              <div className="md:flex max-md:flex-col w-full lg:gap-16 gap-2">
                <InputField
                  label="رشته"
                  items="items-center"
                  name="reshte"
                  value={formData.reshte}
                  onChange={handleInputChange}
                  error={errors.reshte || backendErrors.reshte}
                />
              </div>
              <div className="md:flex max-md:flex-col w-full ">
              
                <div className="w-full xl:mx-2">
                  <Dropdown
                    size="w-8/12"
                    name="نام فرد"
                    width="lg:w-[27.5%] max-lg:w-[80%]"
                    labelW="lg:w-8/12 max-lg:w-full"
                    mt="mt-[5.5rem]"
                    flex="items-end flex flex-col"
                    items={lastTenUsers}
                    type="user"
                    onSelect={(user) => {
                      setFormData((prev) => ({
                        ...prev,
                        user_id: user.id,
                      }));
                    }}
                  />
                  {(errors.user_id || backendErrors.user_id) && (
                  <div className="w-full flex justify-end">
                    <p className="text-red-500 text-sm mt-2 lg:w-8/12 max-lg:w-full">{errors.user_id || backendErrors.user_id}</p></div>
                  )}
                </div>
                <div className="w-full xl:mx-2">
                  
                  <Dropdown
                    size="w-8/12"
                    width="lg:w-[27.5%] max-lg:w-[80%]"
                    name="شرکت بیمه"
                    flex="flex flex-col"
                    mt="mt-[5.5rem]"
                    type="insurance"
                    items={lastTenInsurance}
                    onSelect={(insurance) => {
                      setFormData((prev) => ({
                        ...prev,
                        insurance_id: insurance.id,
                      }));
                    }}
                  />
                  {(errors.insurance_id || backendErrors.insurance_id) && (
                    <p className="text-red-500 text-sm mt-2 ">{errors.insurance_id || backendErrors.insurance_id}</p>
                  )}
                </div>
               </div>
                <div className="w-full ">
              <Button mt="mt-10" type="submit" width="w-8/12 " />
              </div>
            </div>
          
          </div>
        </form>
      </div>
    </>
  );
};

export default Contract;





