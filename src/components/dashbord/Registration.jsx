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

// import { useState } from "react";
// import Dashbord from "./Dashbord";
// import Dropdown from "./Dropdown";
// import File from "./File";
// import Button from "../button/Button";

// export default function Registration() {
//   const items = ["بیمه حکمت", "بیمه ایران", "بیمه دانا"];
//   const [selectedOption, setSelectedOption] = useState("");
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [errors, setErrors] = useState({}); 

//   const handleDropdownSelect = (option) => {
//     setSelectedOption(option);
//     setErrors((prevErrors) => ({ ...prevErrors, selectedOption: "" })); 
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const validationErrors = {};

//     if (!selectedFile) {
//       validationErrors.selectedFile = "لطفا یک فایل انتخاب کنید.";
//     } else if (selectedFile.size > 500 * 1024) {
//       validationErrors.selectedFile = "حجم فایل نباید بیشتر از 500 کیلوبایت باشد.";
//     }


//     if (!selectedOption) {
//       validationErrors.selectedOption = "لطفا یک گزینه انتخاب کنید.";
//     }

//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length === 0) {
//       const formData = new FormData();
//       formData.append("image", selectedFile);
//       formData.append("selectedOption", selectedOption);

//       for (let [key, value] of formData.entries()) {
//         console.log(`${key}:`, value);
//       }

//       // ارسال به API (در صورت نیاز)
//       // fetch("API_ENDPOINT", {
//       //   method: "POST",
//       //   body: formData,
//       // })
//       //   .then((response) => response.json())
//       //   .then((data) => console.log("Data from API:", data))
//       //   .catch((error) => console.error("Error:", error));
//     }
//   };

//   return (
//     <>
//       <Dashbord />
//       <div className="w-full h-[802px] flex items-center justify-center bg-gray-200">
//         <div className="w-11/12 h-[700px] flex flex-col gap-10 md:px-16 max-md:px-8 -mt-40 h-fit">
//           <h1 className="md:text-[28px] max-md:text-[20px] font-bold pt-8 text-[#213063]">
//             ثبت شرکت بیمه
//           </h1>
//           <form onSubmit={handleSubmit} className="flex flex-col gap-10">
//             {/* Dropdown */}
//             <div>
//               <div className="flex">
//                 <p className="md:text-[20px] max-md:text-[16px] text-[#213063]">
//                   شرکت بیمه را انتخاب کنید
//                 </p>
//                 <p className="text-red-500 text-[20px]">*</p>
//               </div>
//               <div className="w-full flex justify-center relative">
//                 <Dropdown
//                   size="md:w-10/12 max-md:w-full"
//                   width="md:w-10/12 max-md:full"
//                   mt="m-12"
//                   items={items}
//                   onSelect={handleDropdownSelect}
//                 />
//               </div>
//               {errors.selectedOption && (
//                 <p className="text-red-500 text-sm mt-2">{errors.selectedOption}</p>
//               )}
//             </div>

//             {/* File */}
//             <div>
//               <div className="flex">
//                 <p className="md:text-[20px] max-md:text-[16px] text-[#213063]">
//                   آواتار بیمه را انتخاب کنید
//                 </p>
//                 <p className="text-red-500 text-[20px]">*</p>
//               </div>
//               <File setFile={setSelectedFile} />
//               {errors.selectedFile && (
//                 <p className="text-red-500 text-sm mt-2">{errors.selectedFile}</p>
//               )}
//             </div>

//             {/* Button */}
//             <Button mt="mt-10" type="submit" width="w-8/12" />
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }



import { useState } from "react";
import axiosInstance from "../axiosConfig";
import { registrationSchema } from "./validationInput/registrationSchema";
import Dashbord from "./Dashbord";
import Dropdown from "./Dropdown";
import File from "./File";
import Button from "../button/Button";

export default function Registration() {
  const items = ["بیمه حکمت", "بیمه ایران", "بیمه دانا"];

  const [state, setState] = useState({
    formData: { name: "", image: "" },
    selectedFile: null,
    errors: {},
    popup: {
      show: false,
      message: "",
      isError: false,
    },
  });

  const handleDropdownSelect = (option) => {
    setState((prevState) => ({
      ...prevState,
      formData: { ...prevState.formData, name: option },
      errors: { ...prevState.errors, name: "" },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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

      setState({
        formData: { name: "", image: "" },
        selectedFile: null,
        errors: {},
        popup: {
          show: true,
          message: "شرکت بیمه با موفقیت ثبت شد.",
          isError: false,
        },
      });

      setTimeout(() => {
        setState((prevState) => ({
          ...prevState,
          popup: { ...prevState.popup, show: false },
        }));
      }, 7000);
    } catch (error) {
      setState((prevState) => ({
        ...prevState,
        popup: {
          show: true,
          message: "مشکلی در ثبت اطلاعات رخ داد. لطفاً دوباره تلاش کنید.",
          isError: true,
        },
      }));

      setTimeout(() => {
        setState((prevState) => ({
          ...prevState,
          popup: { ...prevState.popup, show: false },
        }));
      }, 7000);
    }
  };

  return (
    <>
      <Dashbord />
      <div className="w-full h-[802px] flex items-center justify-center bg-gray-200">
        {state.popup.show && (
          <div
            className={`fixed top-0 left-1/2 transform -translate-x-1/2 p-4 rounded-xl shadow-lg ${
              state.popup.isError ? "bg-red-500" : "bg-green-500"
            } text-white`}
          >
            {state.popup.message}
          </div>
        )}
        <div className="w-11/12 h-[700px] flex flex-col gap-10 md:px-16 max-md:px-8 -mt-40 h-fit">
          <h1 className="md:text-[28px] max-md:text-[20px] font-bold pt-8 text-[#213063]">
            ثبت شرکت بیمه
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-10">
            {/* Dropdown */}
            <div>
              <div className="flex">
                <p className="md:text-[20px] max-md:text-[16px] text-[#213063]">
                  شرکت بیمه را انتخاب کنید
                </p>
                <p className="text-red-500 text-[20px]">*</p>
              </div>
              <div className="w-full flex justify-center relative">
                <Dropdown
                  size="md:w-10/12 max-md:w-full"
                  width="md:w-10/12 max-md:full"
                  mt="m-12"
                  items={items}
                  onSelect={handleDropdownSelect}
                />
              </div>
              {state.errors.name && (
                <p className="text-red-500 text-sm mt-2">{state.errors.name}</p>
              )}
            </div>

            {/* File */}
            <div>
              <div className="flex">
                <p className="md:text-[20px] max-md:text-[16px] text-[#213063]">
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
                <p className="text-red-500 text-sm mt-2">
                  {state.errors.selectedFile}
                </p>
              )}
              <p className="text-gray-500 text-sm mt-1">
                فرمت‌های مجاز: jpeg, png, jpg | حداکثر حجم: ۵۰۰ کیلوبایت
              </p>
            </div>

            {/* Button */}
            <Button mt="mt-10" type="submit" width="w-8/12" />
          </form>
        </div>
      </div>
    </>
  );
}


