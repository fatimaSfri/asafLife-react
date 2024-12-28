import Dashbord from "./Dashbord";
import Button from "../button/Button";
import axiosInstance from "../axiosConfig";
import { useState, useCallback } from "react";
import CreateUserValidation from "./validationInput/createUserValidation";
import InputField from "./InputForDashbord.jsx";

export default function InsuredPerson() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    national_id: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [backendErrors, setBackendErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const toEnglishNumbers = (str) => {
    return str.replace(/[۰-۹]/g, (d) => "0123456789"["۰۱۲۳۴۵۶۷۸۹".indexOf(d)]);
  };

  const checkCodeMeli = (code) => {
    var L = code.length;
    if (L < 8 || parseInt(code, 10) === 0) return false;
    code = ("0000" + code).substr(L + 4 - 10);
    if (parseInt(code.substr(3, 6), 10) === 0) return false;
    var c = parseInt(code.substr(9, 1), 10);
    var s = 0;
    for (var i = 0; i < 9; i++) s += parseInt(code.substr(i, 1), 10) * (10 - i);
    s = s % 11;
    return (s < 2 && c === s) || (s >= 2 && c === 11 - s);
  };

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    const englishValue = toEnglishNumbers(value);
    setFormData((prev) => ({ ...prev, [name]: englishValue }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }, []);

  const handleValidation = useCallback(() => {
    const { error } = CreateUserValidation.validate(formData, {
      abortEarly: false,
    });

    const validationErrors = {};
    if (error) {
      error.details.forEach((detail) => {
        validationErrors[detail.path[0]] = detail.message;
      });
    }

    if (!checkCodeMeli(formData.national_id)) {
      validationErrors.national_id = "کد ملی وارد شده نامعتبر است.";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  }, [formData]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      if (!handleValidation()) {
        setSubmitted(false);
        return;
      }

      try {
        await axiosInstance.post("/user", formData);
        localStorage.setItem("insuredPersonData", JSON.stringify(formData));

        setFormData({
          first_name: "",
          last_name: "",
          national_id: "",
          phone: "",
        });

        setSubmitted(true);
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 7000);
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

        setErrors({}); // Clear the form errors before setting backend errors
        setBackendErrors(backendErrors); // Set backend errors to display on the UI
        setTimeout(() => setBackendErrors({}), 7000);
      }
    },
    [formData, handleValidation]
  );

  return (
    <>
      <Dashbord />
      <div className="w-full h-[802px] flex flex-col items-center justify-start bg-gray-200 ">
        {showPopup && (
          <div className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-4 rounded-xl shadow-lg">
            موقعیت کاربر با موفقیت ثبت شد.
          </div>
        )}

        {Object.keys(backendErrors).length > 0 && (
          <div className="bg-red-100 text-red-700 px-4 py-3 rounded absolute " role="alert">
            <strong className="font-bold">خطاهای سرور:</strong>
            <ul className="list-none pl-0">
              {Object.entries(backendErrors).map(([key, value]) => (
                <li key={key}>{value}</li>
              ))}
            </ul>
          </div>
        )}

        <form onSubmit={handleSubmit} className="w-full mt-4 flex items-center justify-center">
          <div className="lg:w-11/12 max-lg:w-[96%] h-[700px] flex flex-col items-center justify-around md:px-16">
            <h1 className="md:text-[28px] max-md:text-[20px] font-bold pt-8 text-[#213063] border md:w-11/12 lg:w-[69%] max-md:w-10/12">
              تعریف شخص بیمه گذار
            </h1>

            <div className="max-md:w-10/12 md:w-full h-full flex flex-col lg:gap-8 items-center  mx-auto ">
              <div className="md:flex max-md:flex-col w-full lg:gap-16 gap-2 mx-auto  ">
                <InputField
                  items="items-end"
                  label="نام"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleInputChange}
                  error={errors.first_name}
                />
                <InputField
                  items="items-start"
                  label="نام خانوادگی"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleInputChange}
                  error={errors.last_name}
                />
              </div>
              <div className="md:flex max-md:flex-col w-full lg:gap-16 gap-2">
                <InputField
                  items="items-end"
                  label="کد ملی"
                  name="national_id"
                  value={formData.national_id}
                  onChange={handleInputChange}
                  error={errors.national_id}
                />
                <InputField
                  items="items-start"
                  label="شماره تماس"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  error={errors.phone}
                />
              </div>
              <div className="w-full">
                <Button mt="mt-10" type="submit" width="w-8/12" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
