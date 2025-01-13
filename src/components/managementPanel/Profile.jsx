import CustomInput from "./CustomInput";
import { useState, useEffect } from "react";
import axiosInstance from "../axiosConfig";
import profileSchema from "./validator/profileSchema";
import {  useNavigate } from "react-router-dom";



export default function Profile() {
  const [currentUser, setCurrentUser] = useState(null);
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    national_id: "",
    address: "",
    phone: "",
  });
  const navigate = useNavigate();

  

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosInstance.get("/user/dashbord");
        if (response.data) {
          const currentUserData = response.data.data;
          if (currentUserData) {
            setCurrentUser(currentUserData);
            setFormData({
              first_name: currentUserData.first_name || "",
              last_name: currentUserData.last_name || "",
              national_id: currentUserData.national_id || "",
              address: currentUserData.address || "",
              phone: currentUserData.phone || "",
            });
          }
        }
      } catch (error) {
        console.error("خطا در دریافت اطلاعات کاربران:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveChanges = async () => {
    const { error, value } = profileSchema.validate(formData, { abortEarly: false });

    if (error) {
      const validationErrors = error.details.reduce((acc, curr) => {
        acc[curr.path[0]] = curr.message;
        return acc;
      }, {});
      setErrors(validationErrors);
      return;
    }

    setErrors({}); 

    try {
      const response = await axiosInstance.patch("user/dashboard/update", value);
      if (response.status === 200) {
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false)
          navigate("/dashbord/services")
        } , 1500);
        
      }
    } catch (error) {
      console.error("خطا در ارسال اطلاعات:", error);
    }
  };

  return (
    
    <div className="w-full h-full flex items-center justify-center bg-[#e7e7e7]">
      {showPopup && (
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-4 rounded-xl shadow-lg">
          اطلاعات با موفقیت به‌روزرسانی شد!
        </div>
      )}
      <div className="w-10/12 grid lg:grid-cols-2 max-lg:grid-cols-1 gap-4">
        <CustomInput
          label="نام"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          error={errors.first_name}
        />
        <CustomInput
          label="نام خانوادگی"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          error={errors.last_name}
        />
        <CustomInput
          label="کدملی"
          name="national_id"
          value={formData.national_id}
          onChange={handleChange}
          error={errors.national_id}
        />
        <div className="flex items-end justify-end flex-col">
          <div className="flex w-full">
            <p className="text-[16px] text-[#213063] mt-4">آدرس</p>
            <p className="text-red-500 text-[20px] pr-1 my-2">*</p>
          </div>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="h-10 rounded-2xl px-5 w-full pt-2"
          />
          {errors.address && <p className="text-red-500 text-sm w-full">{errors.address}</p>}
        </div>
        <CustomInput
          label="شماره تلفن"
          name="phone"
          value={formData.phone}
          readOnly={true}
          error={errors.phone}
        />
        <div className="h-10 mt-10 flex justify-end">
          <button
            onClick={handleSaveChanges}
            className="md:w-[150px] max-md:w-[100px] h-10 rounded-2xl custom-shadow flex items-center justify-center text-white gap-2 "
            style={{
              background: "linear-gradient(to bottom, #dbf7ff 0.2%, #7fe2ff ,#0096e3 30%)",
            }}
          >
            ذخیره تغییرات
          </button>
        </div>
      </div>
    </div>
  );
}
