// import Dashbord from "./Dashbord";
// import Dropdown from "./Dropdown";
// import File from "./File";
// import Button from "../button/Button";

// export default function Registration() {
//   const items = ["بیمه حکمت", "بیمه ایران", "بیمه دانا"]

//   return (
//     <>
//       <Dashbord></Dashbord>
//       <div className="w-full h-[802px] flex items-center justify-center bg-gray-200 ">
//         <div className="w-11/12 h-[700px]  flex flex-col gap-10 md:px-16 max-md:px-8 -mt-40">
//           <h1 className="md:text-[28px] max-md:text-[20px] font-bold pt-8 text-[#213063]">
//             ثبت شرکت بیمه
//           </h1>
//           <div className="flex">
//             <p className="md:text-[20px] max-md:text-[16px] text-[#213063]">
//               شرکت بیمه را انتخاب کنید
//             </p>
//             <p className="text-red-500 text-[20px]">*</p>
//           </div>
//           <div className="w-full flex justify-center relative">
//           <Dropdown size="md:w-10/12 max-md:w-full" width="md:w-10/12 max-md:full" mt="m-12" items={items} ></Dropdown>
//           </div>
//           <div className="flex">
//             <p className="md:text-[20px] max-md:text-[16px] text-[#213063]">
//               آواتار بیمه را انتخاب کنید
//             </p>
//             <p className="text-red-500 text-[20px]">*</p>
//           </div>
//             <File></File>
//             <Button width="lg:w-10/12" ></Button>
//          </div>
//         </div>

//     </>
//   );
// }





import React, { useState, useEffect } from "react";
import axiosInstance from "../axiosConfig";
import { registrationSchema } from "./validationInput/registrationSchema";
import Dashbord from "./Dashbord";
import File from "./File";
import Button from "../button/Button";
import InputForDashbord from "./InputForDashbord";

export default function Registration() {
  const [state, setState] = useState({
    formData: { name: "", image: "" },
    selectedFile: null,
    errors: {},
    backendErrors: {},
    popup: {
      show: false,
      message: "",
      isError: false,
    },
  });

  useEffect(() => {
    let timeout;
    if (state.popup.show) {
      timeout = setTimeout(() => {
        setState((prevState) => ({
          ...prevState,
          popup: { ...prevState.popup, show: false },
        }));
      }, 7000);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [state.popup.show]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!state.formData.name || !state.selectedFile) {
      setState((prevState) => ({
        ...prevState,
        errors: {
          name: !state.formData.name ? "نام الزامی است." : "",
          selectedFile: !state.selectedFile ? "تصویر الزامی است." : "",
        },
      }));
      return;
    }

    const validationResult = registrationSchema.validate(
      { name: state.formData.name, selectedFile: state.selectedFile },
      { abortEarly: false }
    );

    if (validationResult.error) {
      const validationErrors = {};
      validationResult.error.details.forEach((detail) => {
        validationErrors[detail.path[0]] = detail.message;
      });
      setState((prevState) => ({
        ...prevState,
        errors: validationErrors,
      }));
      return;
    }

    try {
      const uploadData = new FormData();
      uploadData.append("name", state.formData.name);
      uploadData.append("image", state.selectedFile);
    
      await axiosInstance.post("/insurance", uploadData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    
      setState((prevState) => ({
        ...prevState,
        formData: { name: "", image: "" },
        selectedFile: null,
        errors: {},
        backendErrors: {},
        popup: {
          show: true,
          message: "شرکت بیمه با موفقیت ثبت شد.",
          isError: false,
        },
      }));
    
      setTimeout(() => {
        setState((prevState) => ({
          ...prevState,
          popup: {
            ...prevState.popup,
            show: false,
          },
        }));
      }, 7000); 
    
    } catch (error) {
      const backendErrors = {};
      const { message, errors } = error.response?.data || {};
    
      if (errors) {
        Object.keys(errors).forEach((field) => {
          backendErrors[field] = Array.isArray(errors[field])
            ? errors[field].join(" ")
            : errors[field];
        });
      } else if (message) {
        backendErrors.general = message;
      }
    
      setState((prevState) => ({
        ...prevState,
        errors: {},
        backendErrors: backendErrors,
      }));
    
      setTimeout(() => {
        setState((prevState) => ({
          ...prevState,
          backendErrors: {}, 
        }));
      }, 7000); 
    }
    
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      formData: { ...prevState.formData, [name]: value },
      errors: { ...prevState.errors, [name]: "" },
    }));
  };

  return (
    <>
      <Dashbord />
      {Object.keys(state.backendErrors).length > 0 && (
            <div className="bg-red-100 text-red-700 px-4 py-3 rounded absolute mb-4 " role="alert">
              <strong className="font-bold">خطاهای سرور:</strong>
              <ul className="list-none pl-0">
                {Object.entries(state.backendErrors).map(([key, value]) => (
                  <li key={key}>{value}</li>
                ))}
              </ul>
            </div>
          )}
      <div className="w-full h-[802px] flex items-center justify-center bg-gray-200">
      
        {state.popup.show && (
          <div
            className={`fixed top-0 left-1/2 transform -translate-x-1/2 p-4 rounded-xl shadow-lg ${state.popup.isError ? "bg-red-500" : "bg-green-500"
              } text-white`}
          >
            {state.popup.message}
          </div>
        )}
        

        <div className="w-11/12  flex flex-col gap-10 md:px-16 max-md:px-8 -mt-40 h-fit">
          <h1 className="md:text-[28px] max-md:text-[20px] font-bold pt-8 text-[#213063]  md:w-8/12 max-md:w-full mx-auto">
            ثبت شرکت بیمه
          </h1>

          

          <form onSubmit={handleSubmit} className="flex flex-col gap-10 lg:w-8/12 max-lg:w-full mx-auto ">
            {/* Input برای نام شرکت بیمه */}
            <InputForDashbord
              label="نام شرکت بیمه را وارد کنید"
              name="name"
              value={state.formData.name}
              onChange={handleInputChange}
              error={state.errors.name}
              required={true}
              items="mb-4  flex items-center justify-center"

            />

            {/* File */}
            <div>
              <div className="flex md:w-10/12 max-md:w-full  mx-auto">
                <p className="md:text-[20px] max-md:text-[16px] text-[#213063] ">
                  آواتار بیمه را انتخاب کنید
                </p>
                <p className="text-red-500 text-[20px]">*</p>
              </div>
              <File
                setFile={(file) =>
                  setState((prevState) => ({
                    ...prevState,
                    selectedFile: file,
                    errors: { ...prevState.errors, selectedFile: "" },
                  }))
                }
              />
              {state.errors.selectedFile && (
                <p className="text-red-500 text-sm mt-2  md:w-10/12 max-md:w-full mx-auto">
                  {state.errors.selectedFile}
                </p>
              )}
              <p className="text-gray-500 text-sm mt-1 md:w-10/12 max-md:w-full mx-auto">
                فرمت‌های مجاز: jpeg, png, jpg | حداکثر حجم: ۵00 کیلوبایت
              </p>
            </div>

            {/* Button */}
            <Button mt="mt-10" type="submit" width="w-10/12" />
          </form>
        </div>
      </div>
    </>
  );
}





