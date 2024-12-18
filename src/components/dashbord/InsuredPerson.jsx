import Dashbord from "./Dashbord";
import Button from "../button/Button";
import axios from "axios";
import { useState, useCallback } from "react";
import CreateUserValidation from "./validationInput/createUserValidation";
// import { useNavigate } from "react-router-dom";

export default function InsuredPerson() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    nationalId: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  // const navigate = useNavigate();

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

    if (!checkCodeMeli(formData.nationalId)) {
      validationErrors.nationalId = "کد ملی وارد شده نامعتبر است.";
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
  
      console.log(formData);
      try {
        await axios.post("https://asaflife.com/api/user", formData, {
          headers: { "Content-Type": "application/json" },
        });
        
        localStorage.setItem("insuredPersonData", JSON.stringify(formData));
        
        setSubmitted(true);
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
      } catch (error) {
        setErrors({ apiError: "مشکلی در ارسال اطلاعات رخ داده است." });
      }
    },
    [formData, handleValidation]
  );
  

  return (
    <>
      <Dashbord />
      <div className="w-full h-[802px] flex items-center justify-center bg-gray-200">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="lg:w-11/12 max-lg:w-[96%] h-[700px] flex flex-col gap-10 md:px-16 -mt-40">
            <h1 className="md:text-[28px] max-md:text-[20px] font-bold pt-8 text-[#213063]">
              تعریف شخص بیمه گذار
            </h1>
            <div className="max-md:w-10/12 md:w-full h-full flex flex-col lg:gap-8 items-center max-lg:gap-20 mx-auto">
              <div className="md:flex max-md:flex-col w-full gap-2">
                <InputField
                  label="نام"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  error={errors.firstName}
                />
                <InputField
                  label="نام خانوادگی"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  error={errors.lastName}
                />
              </div>
              <div className="md:flex max-md:flex-col w-full gap-2">
                <InputField
                  label="کد ملی"
                  name="nationalId"
                  value={formData.nationalId}
                  onChange={handleInputChange}
                  error={errors.nationalId}
                />
                <InputField
                  label="شماره تماس"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  error={errors.phone}
                />
              </div>
              <div className="w-full">
                <Button mt="mt-10" type="submit" />
              </div>
            </div>
          </div>
        </form>
      </div>
      {showPopup && (
        <div className="fixed top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white p-4 rounded-xl shadow-lg animate-bounce">
          کاربر با موفقیت ثبت شد
        </div>
      )}
    </>
  );
}

function InputField({ label, name, value, onChange, error, type = "text", required = true }) {
  const toPersianNumbers = (str) => str.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <label className="flex lg:w-8/12 max-lg:w-full">
        <p className="text-[16px] text-[#213063]">{label}</p>
        {required && <p className="text-red-500 text-[20px] pr-1">*</p>}
      </label>
      <input
        type={type}
        name={name}
        value={toPersianNumbers(value)}
        onChange={onChange}
        className="lg:w-8/12 max-lg:w-full h-10 rounded-2xl px-5"
      />
      {error && <p className="text-red-500 lg:w-8/12 max-lg:w-full text-[14px]">{error}</p>}
    </div>
  );
}
