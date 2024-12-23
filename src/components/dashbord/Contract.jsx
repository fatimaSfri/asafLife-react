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




import React, { useState, useEffect } from "react";
import axiosInstance from "../axiosConfig";
import contractValidation from "./validationInput/contractValidation";
import Dashbord from "./Dashbord";
import Button from "../button/Button";
import InputField from "./InputForDashbord.jsx";
import Dropdown from "./Dropdown";

export default function Contract() {
  const [formData, setFormData] = useState({
    insurance_code: "",
    computer_code: "",
    national_id: "",
    field: "",
    person_name: "",
    insurance_company: "",
  });

  const [errors, setErrors] = useState({});
  const [backendErrors, setBackendErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    let timeout;
    if (showPopup) {
      timeout = setTimeout(() => setShowPopup(false), 7000);
    }

    return () => clearTimeout(timeout);
  }, [showPopup]);

  const toEnglishNumbers = (str) => {
    return str.replace(/[۰-۹]/g, (d) => "0123456789"["۰۱۲۳۴۵۶۷۸۹".indexOf(d)]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const englishValue = toEnglishNumbers(value);
    setFormData((prev) => ({ ...prev, [name]: englishValue }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setBackendErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    try {
      await contractValidation.validate(formData, { abortEarly: false });
    } catch (error) {
      const validationErrors = {};
      error.details.forEach((detail) => {
        validationErrors[detail.path[0]] = detail.message;
      });
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    try {
      await axiosInstance.post("/contract", formData);
      setSubmitted(true);
      setShowPopup(true);
      setFormData({
        insurance_code: "",
        computer_code: "",
        national_id: "",
        field: "",
        person_name: "",
        insurance_company: "",
      });
    } catch (error) {
      const backendErrors = {};
      if (error.response && error.response.data) {
        const { message, errors } = error.response.data;
        if (errors) {
          Object.keys(errors).forEach((field) => {
            backendErrors[field] = Array.isArray(errors[field])
              ? errors[field].join(" ")
              : errors[field];
          });
        }
      } else {
        backendErrors.apiError = "یک خطای ناشانه رخ داده است.";
      }
      setBackendErrors(backendErrors);
    }
  };

  return (
    <>
      <Dashbord />
      <div className="w-full h-[802px] flex items-center justify-center bg-gray-200">
        {showPopup && submitted && (
          <div className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-4 rounded-xl shadow-lg">
            قرارداد با موفقیت ثبت شد.
          </div>
        )}

        {Object.keys(backendErrors).length > 0 && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 space-y-0" role="alert">
            <strong className="font-bold">خطاهای سرور:</strong>
            <ul className="list-none pl-0">
              {Object.entries(backendErrors).map(([key, value]) => (
                <li key={key}>
                  {value}
                </li>
              ))}
            </ul>
          </div>
        )}

        <form onSubmit={handleSubmit} className="w-full mt-4 flex items-center justify-center">
          <div className="lg:w-11/12 max-lg:w-[96%] h-[700px] flex flex-col items-center justify-around md:px-16">
            <h1 className="md:text-[28px] max-md:text-[20px] font-bold pt-8 text-[#213063] border md:w-11/12 lg:w-[69%] max-md:w-10/12">
              ثبت قرارداد
            </h1>

            <div className="max-md:w-10/12 md:w-full h-full flex flex-col lg:gap-8 items-center mx-auto">
              <div className="md:flex max-md:flex-col w-full lg:gap-16 gap-2 mx-auto">
                <InputField
                  label="کد بیمه‌گذار"
                  name="insurance_code"
                  value={formData.insurance_code}
                  onChange={handleInputChange}
                  error={errors.insurance_code || backendErrors.insurance_code}
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
                  label="کد ملی"
                  name="national_id"
                  value={formData.national_id}
                  onChange={handleInputChange}
                  error={errors.national_id || backendErrors.national_id}
                />
                <InputField
                  label="رشته"
                  name="field"
                  value={formData.field}
                  onChange={handleInputChange}
                  error={errors.field || backendErrors.field}
                />
              </div>

              <div className="md:flex max-md:flex-col w-full">
                <div className="w-full">
                  <label className="text-[16px] text-[#213063]">اسم فرد</label>
                  <Dropdown
                    size="w-full"
                    width="w-full"
                    mt="mt-2"
                    items={[
                      "حسن مومنی",
                      "آرش رستمی",
                      "لادن موسوی",
                    ]}
                    onSelect={(option) =>
                      setFormData((prev) => ({
                        ...prev,
                        person_name: option,
                      }))
                    }
                  />
                  {(errors.person_name || backendErrors.person_name) && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.person_name || backendErrors.person_name}
                    </p>
                  )}
                </div>

                <div className="w-full">
                  <label className="text-[16px] text-[#213063]">شرکت بیمه</label>
                  <Dropdown
                    size="w-full"
                    width="w-full"
                    mt="mt-2"
                    items={[
                      "بیمه حکمت",
                      "بیمه ایران",
                      "بیمه دانا",
                    ]}
                    onSelect={(option) =>
                      setFormData((prev) => ({
                        ...prev,
                        insurance_company: option,
                      }))
                    }
                  />
                  {(errors.insurance_company || backendErrors.insurance_company) && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.insurance_company || backendErrors.insurance_company}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="w-full">
              <Button mt="mt-10" type="submit" width="w-8/12">
                ثبت قرارداد
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
