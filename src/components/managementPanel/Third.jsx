
import "../newbanner/NewBanner.css";
import MultiFile from "./MultiFile.jsx";
import CustomInput from './CustomInput';
import axiosInstance from "../axiosConfig";
import { useState, useEffect } from "react";
import ThirdSchema from "./validator/thirdSchema.jsx";
import moment from 'moment-jalaali';
import Rules from "../rules/Rules.jsx";

export default function Third() {
  const [formData, setFormData] = useState({
    owner_birthday: "",
    phone: "",
    address: "",
  });

  const [selectedFiles, setSelectedFiles] = useState({
    vehicle_cart_photos: [],
    certificate_photo: null,
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

  const toEnglishDigits = (str) => {
    return str.replace(/[۰-۹]/g, (digit) => "۰۱۲۳۴۵۶۷۸۹".indexOf(digit));
  };
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

    try {
      const dataToValidate = {
        owner_birthday: formData.owner_birthday,
        phone: toEnglishDigits(formData.phone),
        address: formData.address,
        vehicle_cart_photos: selectedFiles.vehicle_cart_photos.map((file) => ({
          type: file.type,
          size: file.size,
        })),
        certificate_photo: selectedFiles.certificate_photo
          ? {
              type: selectedFiles.certificate_photo.type,
              size: selectedFiles.certificate_photo.size,
            }
          : undefined,
      };

      const { error } = ThirdSchema.validate(dataToValidate, { abortEarly: false });
      
      if (error) {
        console.log(error)
        const validationErrors = {};
        error.details.forEach((detail) => {
          console.log(detail)
          validationErrors[detail.context.key] = detail.message;
        });
        setErrors(validationErrors);
        return;
      }

      const uploadData = new FormData();
      const miladiDate = convertShamsiToMiladi(formData.owner_birthday);
      console.log(selectedFiles.vehicle_cart_photos);
      console.log(selectedFiles.certificate_photo);
      uploadData.append("owner_birthday", miladiDate);
      uploadData.append("phone", toEnglishDigits(formData.phone));
      uploadData.append("address", formData.address);

      selectedFiles.vehicle_cart_photos.forEach((file) => {
        uploadData.append("vehicle_cart_photos", file.raw || file);
      });

      if (selectedFiles.certificate_photo) {
        uploadData.append("certificate_photo", selectedFiles.certificate_photo.raw || selectedFiles.certificate_photo);
      }

      const response = await axiosInstance.post("/thaleth", uploadData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log('Response:', response.data);
      
      setFormData({ owner_birthday: "", phone: "", address: "" });
      setSelectedFiles({ vehicle_cart_photos: [], certificate_photo: null });
      setErrors({});
      setBackendErrors({});

      setSuccessPopup(true);
      setSuccessMessage("اطلاعات با موفقیت ارسال شد.");
      setTimeout(() => {
        setFormData({ owner_birthday: "", phone: "", address: "" });
        setSelectedFiles({ vehicle_cart_photos: [], certificate_photo: null });
      }, 5000);

    } catch (error) {
      console.error('Error sending data:', error.response ? error.response.data : error.message);
      setPopup({
        show: true,
        message: error.response ? error.response.data : "خطایی در ارسال اطلاعات رخ داد.",
        isError: true,
      });
      if (error.response && error.response.data) {
        const backendErrors = {};
        Object.keys(error.response.data).forEach((key) => {
          backendErrors[key] = Array.isArray(error.response.data[key])
            ? error.response.data[key].join(", ")
            : error.response.data[key];
        });
        setBackendErrors(backendErrors);
        setTimeout(() => {
          setBackendErrors({});
        }, 3000);
      }
    }
  };

  const handleInputChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    setErrors((prevState) => ({ ...prevState, [e.target.name]: "" }));
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      setSelectedFiles((prevState) => ({
        ...prevState,
        vehicle_cart_photos: Array.from(files).slice(0, 2),
        certificate_photo: files[2],
      }));
      setErrors((prevState) => ({
        ...prevState,
        vehicle_cart_photos: "",
        certificate_photo: "",
      }));
    }
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckChange = (checked) => {
    setIsChecked(checked);
    console.log('چک باکس تغییر کرد:', checked);
  };

  return (
    <div className="w-full h-[100vh] bg-[#e9e9e9] overflow-auto">
      {!isChecked && <Rules onChange={handleCheckChange}></Rules>}
      {isChecked && (
        <>
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
                src="../img/ten-ten/img-ob.png"
                alt=""
                className="object-cover lg:h-[400px]"
              />
            </div>
          </div>
          {/* form */}
          <div className="w-full  flex flex-col items-center justify-center">
            <div className=" w-full h-[130px] max-xl:w-11/12 xl:w-8/12 flex flex-col">
              <div className=" flex justify-end">
                <img src="../img/logo/tavon.webp" alt="" className="h-20" />
              </div>
              <div className="w-full flex items-center justify-center relative">
                <div className="bg-[#55c7e0] w-4 h-4 rounded-full"></div>
                <div className="w-full h-[1.5px] bg-[#55c7e0] mx-1"></div>
                <p className="absolute bg-[#e9e9e9] px-6 lg:text-[20px] font-KalamehBold text-[#213063]">ثالث بدنه</p>
              </div>
            </div>
            <div className="flex max-xl:w-[98%] xl:w-9/12 ">
              <MultiFile
                onChange={handleFileChange}
                setFiles={(files) =>
                  setSelectedFiles((prevState) => ({
                    ...prevState,
                    vehicle_cart_photos: files.slice(0, 2),
                    certificate_photo: files[2],
                  }))
                }
                textbox1="لطفاً تصویر رو کارت ماشین خود را بارگذاری کنید"
                textbox2="لطفاً تصویر پشت کارت ماشین خود را بارگذاری کنید"
                textbox3="لطفاً تصویر گواهینامه خود را بارگذاری کنید"
                count={3}
              />
            </div>
            {errors.vehicle_cart_photos && (
              <p className="text-red-500 text-sm mt-2 max-xl:w-[98%] xl:w-9/12 mx-auto">
                {errors.vehicle_cart_photos}
              </p>
            )}
            {errors.certificate_photo && (
              <p className="text-red-500 text-sm mt-2 max-xl:w-[98%] xl:w-9/12 mx-auto ">
                {errors.certificate_photo}
              </p>
            )}
            <div className="max-xl:w-[98%] xl:w-9/12 mt-10 rounded-lg flex flex-col items-center justify-center flex-wrap ">
              <div className="lg:grid lg:grid-cols-2 max-lg:grid-cols-1 w-full gap-2 ">
                <CustomInput
                  label="تاریخ تولد صاحب پلاک"
                  items="items-center"
                  name="owner_birthday"
                  value={formData.owner_birthday}
                  onChange={handleInputChange}
                  width="w-[95%]"
                  error={errors.owner_birthday || backendErrors.owner_birthday}
                />
                <CustomInput
                  label="تلفن همراه"
                  items="items-center"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  width="w-[95%]"
                  error={errors.phone || backendErrors.phone}
                />
             
                <CustomInput
                  label="آدرس دقیق"
                  items="items-center"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                 width="w-[95%]"
                  error={errors.address || backendErrors.address}
                />
             
              </div>
            </div>
           
            <div className="xl:w-[75%] max-xl:w-[95%] max-lg:w-[99%] max-lg:items-end px-2 h-16 flex justify-end lg:mt-10 max-lg:mb-6 ">
              <button
                onClick={handleSubmit}
                className="w-[150px] h-10 rounded-full custom-bg custom-shadow flex items-center justify-center text-white gap-2"
                style={{
                  background: 'linear-gradient(to bottom, #dbf7ff 0.2%, #7fe2ff ,#0096e3 50%)',
                }}
              >
                تایید
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}