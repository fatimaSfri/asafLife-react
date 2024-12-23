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
import Dropdown from "./Dropdown";
import File from "./File";
import Button from "../button/Button";

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

  const [insuranceItems, setInsuranceItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
 
    const fetchInsuranceCompanies = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get("/insurance");
        if (response.data && response.data.data) {
          const items = response.data.data.map((item) => ({
            id: item.id,
            name: item.name,
          }));

          
          const uniqueItems = [
            ...new Map(items.map((item) => [item.name, item])).values(),
          ];

          setInsuranceItems(uniqueItems);
        }
      } catch (error) {
        console.error("Error fetching insurance companies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInsuranceCompanies();
  }, []);

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

  const handleDropdownSelect = (option) => {
    setState((prevState) => ({
      ...prevState,
      formData: { ...prevState.formData, name: option },
      errors: { ...prevState.errors, name: "" },
    }));
  };

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
    } catch (error) {
      const backendErrors = {};
      if (error.response && error.response.data) {
        const { message, errors } = error.response.data;

        if (message?.includes(`فیلد نام نباید خالی باشد.`)) {
          backendErrors.name = "فیلد نام نباید خالی باشد.";
        }

        if (message?.includes(`property image should not exist`)) {
          backendErrors.image = "تصویر نباید خالی باشد";
        }

        if (errors) {
          Object.keys(errors).forEach((field) => {
            backendErrors[field] = Array.isArray(errors[field])
              ? errors[field].join(" ")
              : errors[field];
          });
        }
      } else if (error.request) {
        backendErrors.apiError = "مشکلی در ارتباط با سرور رخ داده است.";
      } else {
        backendErrors.apiError = "یک خطای رخ داده است.";
      }

      setState((prevState) => ({
        ...prevState,
        errors: {},
        backendErrors: backendErrors,
      }));
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
          {Object.keys(state.backendErrors).length > 0 && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-0 rounded relative mb-4 space-y-0"
              role="alert"
            >
              <strong className="font-bold">خطاهای سرور:</strong>
              <ul className="list-none pl-0">
                {Object.entries(state.backendErrors).map(([key, value]) => (
                  <li key={key}>{value}</li>
                ))}
              </ul>
            </div>
          )}
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
                {loading ? (
                  <p>در حال بارگذاری...</p>
                ) : (
                  <Dropdown
                    size="md:w-10/12 max-md:w-full"
                    width="md:w-10/12 max-md:full"
                    mt="m-12"
                    items={insuranceItems.map((item) => item.name)} // Pass unique data
                    onSelect={handleDropdownSelect}
                  />
                )}
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
                فرمت‌های مجاز: jpeg, png, jpg | حداکثر حجم: ۵00 کیلوبایت
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





