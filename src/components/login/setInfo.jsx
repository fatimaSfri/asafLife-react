import Button from "./Button.jsx";
import axiosInstance from "../axiosConfig.js";
import { useState, useCallback } from "react";
import InputField from "./InputForDashbord.jsx";
import { useLocation } from "react-router-dom";
import CreateUserValidation from "./validator/CreateUserValidation.jsx"; 

export default function InsuredPerson() {
    const location = useLocation();
    const phoneFromState = location.state?.phone || "";
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        phone: phoneFromState,
        // password: "",
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const toEnglishNumbers = (str) => {
        return str.replace(/[۰-۹]/g, (d) => "0123456789"["۰۱۲۳۴۵۶۷۸۹".indexOf(d)]);
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
            
            console.log(formData)
            try {
                const res = await axiosInstance.post("/user/set-user-information", formData);
                console.log(res.data)
                localStorage.setItem("set-user-information", JSON.stringify(formData));
                setFormData({
                    first_name: "",
                    last_name: "",
                    // password: "",
                    phone: "",
                });

                setSubmitted(true);
                setShowPopup(true);
                setTimeout(() => setShowPopup(false), 7000);
                setTimeout(() => navigate("/dashboard") , 5000);
                
            } catch (error) {
                const backendErrors = {};

                if (error.response && error.response.data) {
                    const { message, errors } = error.response.data;

                    if (message?.includes(`شماره تلفن \"${formData.phone}\" قبلا ثبت شده است.`)) {
                        backendErrors.phone = "شماره تماس وارد شده قبلاً ثبت شده است.";
                    }

                    if (errors) {
                        for (const field in errors) {
                            backendErrors[field] = errors[field].join(" ");
                        }
                    }

                    if (message && !errors) {
                        backendErrors.apiError = message;
                    }
                } else {
                    backendErrors.apiError = "مشکلی در ارسال اطلاعات رخ داده است.";
                }

                setErrors(backendErrors);
            }
        },
        [formData, handleValidation]
    );

    return (
        <>
            <div className="w-full h-[802px] flex flex-col items-center justify-start bg-gray-200 ">
                {showPopup && (
                    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-4 rounded-xl shadow-lg">
                        کاربر با موفقیت ثبت شد.
                    </div>
                )}


                {errors.apiError && (
                    <div className="w-10/12 mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-lg shadow-md">
                        <p>{errors.apiError}</p>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="w-full mt-4 flex items-center justify-center">
                    <div className="lg:w-11/12 max-lg:w-[96%] h-[700px] flex flex-col items-center justify-around md:px-16">
                        <h1 className="md:text-[28px] max-md:text-[20px] font-bold pt-8 text-[#213063] border md:w-11/12 lg:w-[69%] max-md:w-10/12">
                            ثبت اطلاعات
                        </h1>
                        <div className="max-md:w-10/12 md:w-full h-full flex flex-col lg:gap-8 items-center mx-auto ">
                            <div className="md:flex max-md:flex-col w-full lg:gap-16 gap-2 mx-auto">
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
