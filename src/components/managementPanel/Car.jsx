import "../newbanner/NewBanner.css";
import MultiFile from "./MultiFile.jsx";
import CustomInput from "./CustomInput";
import { useState, useEffect } from "react";
import axiosInstance from "../axiosConfig";
import BadanehSchema from "./validator/badanehSchema.jsx";
import moment from 'moment-jalaali';


export default function Car() {
  const [formData, setFormData] = useState({
    insurer_code: "",
    expiration_insurer_date: "",
    isDamaged: "",
  });
  const [selectedFiles, setSelectedFiles] = useState({
    vehicle_cart_photos: [],
  });
  const [errors, setErrors] = useState({});
  const [backendErrors, setBackendErrors] = useState({});
  const [popup, setPopup] = useState({
    show: false,
    message: "",
    isError: false,
  });
  const [successPopup, setSuccessPopup] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    let timeout;
    if (popup.show) {
      timeout = setTimeout(() => {
        setPopup({ ...popup, show: false });
      }, 7000);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [popup.show]);
  const convertShamsiToMiladi = (shamsiDate) => {
    return moment(shamsiDate, 'jYYYY/jMM/jDD').format('YYYY-MM-DD');
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log("Form Data before submission:", formData);
    console.log("Selected Files:", selectedFiles);
    const { vehicle_cart_photos } = selectedFiles;
  
    if (
      !formData.insurer_code ||
      !formData.expiration_insurer_date ||
      !formData.isDamaged ||
      !vehicle_cart_photos.length
    ) {
      setErrors({
        insurer_code: !formData.insurer_code ? "شماره بیمه نامه الزامی است." : "",
        expiration_insurer_date: !formData.expiration_insurer_date ? "تاریخ انقضا بیمه نامه الزامی است." : "",
        isDamaged: !formData.isDamaged ? "وضعیت خسارت الزامی است." : "",
        vehicle_cart_photos: !vehicle_cart_photos.length ? "تصاویر کارت ماشین الزامی هستند." : "",
      });
      return;
    }
  
    try {
      const uploadData = new FormData();
  
   
      const miladiDate = convertShamsiToMiladi(formData.expiration_insurer_date);
  
      uploadData.append("insurer_code", formData.insurer_code);
      uploadData.append("expiration_insurer_date", miladiDate); 
      uploadData.append("isDamaged", formData.isDamaged);
  
      vehicle_cart_photos.forEach((file) => {
        uploadData.append("vehicle_cart_photos", file);
      });
  
      const { error } = BadanehSchema.validate(formData, { abortEarly: false });
  
      if (error) {
        console.error('Validation errors:', error.details);
        setErrors(error.details[0].message);
        return;
      }
  
      const response = await axiosInstance.post(
        "/badane",
        uploadData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
  
      console.log("Response:", response.data);
      setFormData({
        insurer_code: "",
        expiration_insurer_date: "",
        isDamaged: "",
      });
      setSelectedFiles({ vehicle_cart_photos: [] });
      setErrors({});
      setBackendErrors({});
  
      setSuccessPopup(true);
      setSuccessMessage("اطلاعات با موفقیت ارسال شد.");
  
      setTimeout(() => {
        setFormData({
          insurer_code: "",
          expiration_insurer_date: "",
          isDamaged: "",
        });
        setSelectedFiles({ vehicle_cart_photos: [] });
      }, 5000);
    } catch (error) {
      console.error(
        "Error sending data:",
        error.response ? error.response.data : error.message
      );
      setPopup({
        show: true,
        message: error.response
          ? error.response.data
          : "خطایی در ارسال اطلاعات رخ داد.",
        isError: true,
      });
      if (error.response && error.response.data) {
        const backendErrors = {};
        Object.keys(error.response.data).forEach(key => {
          backendErrors[key] = Array.isArray(error.response.data[key])
            ? error.response.data[key].join(", ")
            : error.response.data[key];
        });
        setBackendErrors(backendErrors);
      }
    }
  };
  

  const handleInputChange = (e) => {
    console.log("Input changed:", e.target.name, e.target.value);
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    setErrors((prevState) => ({ ...prevState, [e.target.name]: "" }));
  };

  const handleFileChange = (e) => {
    console.log("File change event:", e.target.files);
    const files = e.target.files;
    if (files.length > 0) {
      setSelectedFiles((prevState) => ({
        ...prevState,
        vehicle_cart_photos: Array.from(files),
      }));
      setErrors((prevState) => ({ ...prevState, vehicle_cart_photos: "" }));
    }
  };

  return (
    <div className="w-full md:h-[150vh] max-md:h-[200vh] bg-[#e9e9e9]">
      {Object.keys(backendErrors).length > 0 && (
        <div className="bg-red-100 text-red-700 px-4 py-2 rounded relative mb-4 space-y-1 w-full max-w-lg mx-auto">
          <strong className="font-bold">خطاهای سرور:</strong>
          <ul className="list-none pl-0">
            {Object.entries(backendErrors).map(([key, value]) => (
              <li key={key}>{value}</li>
            ))}
          </ul>
        </div>
      )}
      
      {successPopup && (
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-4 rounded-xl shadow-lg">
          {successMessage}
        </div>
      )}
  
      <div className="w-full h-[400px]  flex justify-center items-end">
        <div className="max-xl:w-11/12 xl:w-8/12 h-5/6 flex items-center justify-center rounded-2xl bg-gradient-circle-carBody">
          <img
            src="./img/ten-ten/img-ob.png"
            alt=""
            className="object-cover lg:h-[400px]"
          />
        </div>
      </div>
      {/* form */}
      <div className="w-full  flex flex-col items-center justify-center">
        <div className=" w-full h-[130px] max-xl:w-11/12 xl:w-8/12 flex flex-col">
          <div className=" flex justify-end">
            <img src="./img/logo/tavon.webp" alt="" className="h-20" />
          </div>
          <div className="w-full flex items-center justify-center relative">
            <div className="bg-[#55c7e0] w-4 h-4 rounded-full"></div>
            <div className="w-full h-[1.5px] bg-[#55c7e0] mx-1"></div>
            <p className="absolute bg-[#e9e9e9] px-6 lg:text-[20px] font-KalamehBold text-[#213063]">
            
              بدنه
            </p>
          </div>
        </div>
        <div className=" flex max-xl:w-11/12 xl:w-8/12 ">
          <MultiFile
            onChange={handleFileChange}
            setFiles={(files) => setSelectedFiles(prevState => ({
              ...prevState,
              vehicle_cart_photos: files.slice(0, 2),
            }))}
            textbox1="لطفاً تصویر رو کارت ماشین خود را بارگذاری کنید"
            textbox2="لطفاً تصویر پشت کارت ماشین خود را بارگذاری کنید"
            textbox3="لطفاً تصویر گواهینامه خود را بارگذاری کنید"
          />
        </div>
        {(errors.vehicle_cart_photos || backendErrors.vehicle_cart_photos) && (
          <p className="text-red-500 text-sm mt-2 max-lg:w-11/12 xl:w-8/12 mx-auto">
            {errors.vehicle_cart_photos || backendErrors.vehicle_cart_photos}
          </p>
        )}
        <div className="max-lg:w-11/12 lg:w-11/12 mt-10 rounded-lg flex flex-col items-center justify-center ">
          <div className="md:flex max-md:flex-col w-full gap-4 ">
            <CustomInput
              label="شماره بیمه نامه سال قبل"
              items="items-end"
              name="insurer_code"
              value={formData.insurer_code}
              onChange={handleInputChange}
              width="lg:w-8/12 max-lg:w-full"
              error={errors.insurer_code || backendErrors.insurer_code}
            />
            <CustomInput
              label="تاریخ انقضا بیمه نامه"
              items="items-start"
              name="expiration_insurer_date"
              value={formData.expiration_insurer_date}
              onChange={handleInputChange}
              width="lg:w-8/12 max-lg:w-full"
              error={errors.expiration_insurer_date || backendErrors.expiration_insurer_date}
            />
          </div>
        </div>
        <div className="max-md:w-10/12 md:w-full h-full flex flex-col items-center mx-auto">
          <div className="md:flex max-md:flex-col lg:w-8/12 max-lg:w-full gap-4 h-32 items-center  max-md:pt-4">
            <div className="flex items-center gap-6 py-6">
              <h2 className="mr-4 text-[#213063]">تا حالا خسارت داشتی؟</h2>
              <label className="flex items-center cursor-pointer mr-4 text-[#213063]">
                <input
                  type="radio"
                  value="true"
                  checked={formData.isDamaged === "true"}
                  onChange={handleInputChange}
                  name="isDamaged"
                  className="hidden"
                />
                <span className="w-5 h-5 border-2 border-[#55c7e0] rounded-full flex items-center justify-center mr-2 relative mx-1">
                  {formData.isDamaged === "true" && (
                    <span className="w-3 h-3 bg-[#55c7e0] rounded-full"></span>
                  )}
                </span>
                بله
              </label>
              <label className="flex items-center cursor-pointer text-[#213063]">
                <input
                  type="radio"
                  value="false"
                  checked={formData.isDamaged === "false"}
                  onChange={handleInputChange}
                  name="isDamaged"
                  className="hidden"
                />
                <span className="w-5 h-5 border-2 border-[#55c7e0] rounded-full flex items-center justify-center mr-2 relative mx-1">
                  {formData.isDamaged === "false" && (
                    <span className="w-3 h-3 bg-[#55c7e0] rounded-full "></span>
                  )}
                </span>
                خیر
              </label>
            </div>
          </div>
        </div>
        <div className="lg:w-8/12 max-lg:w-full max-lg:items-end max-sm:px-8 h-16 flex justify-end">
          <button
            onClick={handleSubmit}
            className="w-[150px] h-10 rounded-full custom-bg custom-shadow flex items-center justify-center text-white gap-2"
            style={{
              background:
                "linear-gradient(to bottom, #dbf7ff 0.2%, #7fe2ff ,#0096e3 50%)",
            }}
          >
            تایید
          </button>
        </div>
      </div>
    </div>
  );
}