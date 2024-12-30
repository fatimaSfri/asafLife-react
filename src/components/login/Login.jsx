
// import Joi from "joi";
// import { useEffect, useState } from "react";
// import { Outlet, useLocation, useNavigate } from "react-router-dom";
// import axiosInstance from '../axiosConfig';
// import Cookies from "js-cookie";


// export default function Login() {
//   const initialTimeOut = 60; // 60 seconds
//   const [data, setData] = useState({ timeOut: null });
//   const [code, setCode] = useState({ code: "" });
//   const [isActive, setIsActive] = useState(false);
//   const [showLink, setShowLink] = useState(false);
//   const [phone, setPhone] = useState({ phone: "" });
//   const [password, setPassword] = useState({ password: "" });
//   const [validationErrors, setValidationErrors] = useState({});
//   const [validationErrorsPass, setValidationErrorsPass] = useState({});
//   const location = useLocation();
//   const isPassword = location.pathname.includes("login/password");
//   const navigate = useNavigate();

//   // Validation schemas (Joi)
//   const schema = Joi.object({
//     phone: Joi.string()
//       .pattern(new RegExp("^09[0-9]{9}$"))
//       .required()
//       .messages({
//         "any.required": "*تلفن الزامی است.",
//         "string.empty": "*تلفن الزامی است.",
//         "string.pattern.base": "لطفا شماره تلفن را با 09 و درست وارد کنید",
//       }),
//   });

//   const schemaPassword = Joi.object({
//     password: Joi.string()
//       .custom((value, helpers) => {
//         if (value !== code.code) {
//           return helpers.error("any.invalid");
//         }
//         return value;
//       })
//       .messages({
//         "string.empty": "*رمز عبور الزامی است.",
//         "any.invalid": "*رمز عبور اشتباه است.",
//       }),
//   });

//   // Check phone number when it changes
//   useEffect(() => {
//     if (!phone.phone) return;

//     const storedAuth = JSON.parse(localStorage.getItem("auth")) || {};
//     const phoneEntry = storedAuth[phone.phone];

//     if (phoneEntry) {
//       const createdAt = new Date(phoneEntry.created_at);
//       const now = new Date();
//       const timeDiff = (now - createdAt) / 1000;

//       if (timeDiff < initialTimeOut) {
//         const remainingTime = Math.floor(initialTimeOut - timeDiff);
//         setData({ timeOut: remainingTime });
//         setCode({ code: phoneEntry.password });
//         setIsActive(true);
//         setShowLink(false);
//       } else {
//         generateNewCode();
//       }
//     } else {
//       generateNewCode();
//     }
//   }, [phone.phone]);

//   // Timer logic
//   useEffect(() => {
//     let interval = null;

//     if (isActive && data.timeOut > 0) {
//       interval = setInterval(() => {
//         setData((prevData) => ({
//           ...prevData,
//           timeOut: prevData.timeOut - 1,
//         }));
//       }, 1000);
//     } else if (data.timeOut === 0) {
//       clearInterval(interval);
//       setShowLink(true);
//     }

//     return () => clearInterval(interval);
//   }, [isActive, data.timeOut]);

//   useEffect(() => {
//     const storedData = localStorage.getItem('timerData');
//     if (storedData) {
//       const { timeOut, isActive } = JSON.parse(storedData);
//       setData({ timeOut });
//       setIsActive(isActive);
//       setShowLink(timeOut === 0); 
//     }
//   }, []);

//   useEffect(() => {
//     if (isActive && data.timeOut > 0) {
//       const interval = setInterval(() => {
//         setData(prevData => ({
//           ...prevData,
//           timeOut: prevData.timeOut - 1
//         }));
//       }, 1000);
//       localStorage.setItem('timerData', JSON.stringify({ timeOut: data.timeOut, isActive }));

//       return () => clearInterval(interval);
//     } else if (data.timeOut === 0) {
//       setShowLink(true);
//     }
//   }, [isActive, data.timeOut]);
//   // Generate new code
//   const generateNewCode = () => {
//     const newCode = Math.floor(1000 + Math.random() * 9000);
//     const auth = JSON.parse(localStorage.getItem("auth")) || {};
//     auth[phone.phone] = { created_at: new Date().toISOString(), password: newCode };
//     localStorage.setItem("auth", JSON.stringify(auth));
//     setCode({ code: String(newCode) });
//     setData({ timeOut: initialTimeOut });
//     setIsActive(true);
//     setShowLink(false);
//     console.log("New code generated:", newCode);
//   };

//   const sendSmsCode = async (phoneNumber) => {
//     try {
//       const response = await axiosInstance.post('user/send-sms-code', {
//         phone: phoneNumber,
//       });
//       console.log('SMS code sent successfully:', response.data);
//       return response.data;
//     } catch (error) {
//       console.error('Error sending SMS code:', error.response?.data || error.message);
//       throw error;
//     }
//   };

//   const verifyCode = async () => {
//     try {
//       const response = await axiosInstance.post('user/verify-code', {
//         phone: phone.phone,
//         code: code.code,
//       });

//       console.log('Code verified successfully:', response.data);

//       return response.data;
//     } catch (error) {
//       console.error('Error verifying code:', error.response?.data || error.message);
//     }
//   };


//   const validate = () => {
//     const { error } = schema.validate(phone, { abortEarly: false });
//     clearErrors();

//     if (error) {
//       const errors = {};
//       error.details.forEach((item) => {
//         errors[item.context.key] = item.message;
//       });
//       setValidationErrors(errors);
//       return false;
//     }
//     Cookies.set("phone", phone.phone, { expires: 7 });

//     return true;
//   };

//   const handleErrorPass = () => {
//     const { error } = schemaPassword.validate(password, { abortEarly: false });
//     clearErrors();

//     if (error) {
//       const errorsPass = {};
//       error.details.forEach((item) => {
//         errorsPass[item.context.key] = item.message;
//       });
//       setValidationErrorsPass(errorsPass);
//       return false;
//     }

//     verifyCode().then(() => {
//       navigate("/login/password");
//     }).catch((error) => {
//       console.error('Error sending verification:', error);
//     });

//     return true;
//   };

//   const clearErrors = () => {
//     setValidationErrors({});
//     setValidationErrorsPass({});
//   };

//   const handleInputChange = (name, value) => {
//     setPhone({ [name]: value });
//   };

//   const handleInputChangePass = (name, value) => {
//     setPassword({ [name]: value });
//     setCode({ code: value });
//   };

//   const inputProps = isPassword
//     ? {
//         placeholder: "****",
//         icon: "../img/login/key.png",
//         initialValue: password.password,
//         name: "password",
//         validationError: validationErrorsPass.password,
//         count: 4,
//         onChange: handleInputChangePass,
//       }
//     : {
//         icon: "../img/login/phone.png",
//         initialValue: phone.phone,
//         name: "phone",
//         validationError: validationErrors.phone,
//         count: 11,
//         onChange: handleInputChange,
//         placeholder: "09** *** ****",
//       };

//   return (
//     <div className="relative w-full h-screen overflow-hidden flex justify-center">
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover -z-10"
//         src="../img/video/bg-login.MP4"
//         preload="auto"
//         autoPlay
//         loop
//         muted
//       ></video>

//       <div className="h-full flex max-lg:flex-col-reverse items-center justify-evenly max-lg:gap-10 xl:w-10/12 max-xl:w-full">
//         <div className="w-1/2 max-lg:w-full h-4/5 flex flex-col items-center lg:justify-center max-lg:justify-start">
//           <h1 className="lg:w-[470px] max-lg:w-7/12 max-md:w-10/12 h-20 text-white text-lg font-bold flex items-center">
//             ورود/ثبت نام
//           </h1>

//           {!isPassword && (
//             <>
//               <Outlet context={{ inputProps }} />
//               <div className="mt-4">
//                 <button
//                   className="sm:w-[250px] max-sm:w-1/2 h-10 text-white rounded-lg bg-gradient-to-r from-[#213063] via-[#213063] to-[#55c7e0]"
//                   onClick={() => {
//                     if (validate()) {
//                       sendSmsCode(phone.phone);
//                       navigate("/login/password");
//                     }
//                   }}
//                 >
//                   ثبت نام
//                 </button>

//               </div>
//             </>
//           )}
//           {isPassword && (
//             <>
//               <Outlet context={{ inputProps }} />
//               <div className="mt-4">
//                 <button
//                   className="sm:w-[250px] max-sm:w-1/2 h-10 text-white rounded-lg bg-gradient-to-r from-[#213063] via-[#213063] to-[#55c7e0]"
//                   onClick={() => {
//                     if (handleErrorPass()) {

//                       verifyCode()
//                     }
//                   }}
//                 >
//                   ورود
//                 </button>

//               </div>
//             </>
//           )}
//           <div className="md:w-[400px] max-md:w-10/12 h-20 flex items-center justify-center gap-5">
//             {/* <button
//               className="sm:w-[250px] max-sm:w-1/2 h-10 text-white rounded-lg bg-gradient-to-r from-[#213063] via-[#213063] to-[#55c7e0]"
//               onClick={isPassword ? handleErrorPass : validate}
//             >
//               ورود
//             </button> */}
//             {isPassword && (
//               <div
//                 className="text-[14px] h-10 bg-gray-200 flex flex-row-reverse items-center justify-center 
//                 max-sm:w-1/2 sm:w-[250px] rounded-lg text-bold md:text-[18px] gap-2"
//               >
//                 {data.timeOut !== null ? `00:${String(data.timeOut).padStart(2, "0")}` : ""}
//                 {showLink && (
//                   <>
//                     <div className="w-[3px] rounded-2xl h-5 bg-[#55c7e0]"></div>
//                     <p
//                       className="text-[14px] cursor-pointer max-sm:text-[12px]"
//                       onClick={() => {if (validate()) {
//                         sendSmsCode(phone.phone);
//                         navigate("/login/password");
//                       }}}
//                     >
//                       ارسال دوباره کد
//                     </p>
//                   </>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//         <div className="w-1/2 h-4/5 max-lg:w-full bo flex flex-col items-center lg:justify-center max-lg:justify-end">
//           <img src="../img/icon/Asaflogo.png" alt="" className="md:w-[300px] max-md:w-7/12 xl:w-[48%]" />
//           <p className="text-white md:text-[38px] max-md:text-[30px]">آینده سازان آسایش فردا</p>
//           <p className="text-white md:text-[24px] max-md:text-[16px]">
//             Future builders of  comfort
//           </p>
//         </div>
//       </div>
//     </div>

//   );
// }








import Joi from "joi";
import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../axiosConfig";
import Cookies from "js-cookie";

export default function Login() {
  const initialTimeOut = 125;
  const [data, setData] = useState({ timeOut: null });
  const [code, setCode] = useState({ code: "" });
  const [isActive, setIsActive] = useState(false);
  const [showLink, setShowLink] = useState(false);
  const [phone, setPhone] = useState({ phone: "" });
  const [password, setPassword] = useState({ password: "" });
  const [validationErrors, setValidationErrors] = useState({});
  const [validationErrorsPass, setValidationErrorsPass] = useState({});
  const [apiError, setApiError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const isPassword = location.pathname.includes("login/password");
  const navigate = useNavigate();

  const schema = Joi.object({
    phone: Joi.string()
      .pattern(new RegExp("^09[0-9]{9}$"))
      .required()
      .messages({
        "any.required": "*تلفن الزامی است.",
        "string.empty": "*تلفن الزامی است.",
        "string.pattern.base": "لطفا شماره تلفن را با 09 و درست وارد کنید",
      }),
  });

  const schemaPassword = Joi.object({
    password: Joi.string()
      .custom((value, helpers) => {
        if (value !== code.code) {
          return helpers.error("any.invalid");
        }
        return value;
      })
      .messages({
        "string.empty": "*رمز عبور الزامی است.",
        "any.invalid": "*رمز عبور اشتباه است.",
      }),
  });

  useEffect(() => {
    let interval = null;

    if (isActive && data.timeOut > 0) {
      interval = setInterval(() => {
        setData((prevData) => {
          const updatedTimeOut = prevData.timeOut - 1;
          localStorage.setItem('timerData', JSON.stringify({
            timeOut: initialTimeOut,
            isActive: true
          }));
          return {
            ...prevData,
            timeOut: updatedTimeOut,
          };
        });
      }, 1000);
    }

    if (data.timeOut === 0) {
      clearInterval(interval);
      setShowLink(true);
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, data.timeOut]);

  useEffect(() => {
    const storedData = localStorage.getItem('timerData');
    if (storedData) {
      const { timeOut, isActive } = JSON.parse(storedData);
      setData({ timeOut });
      setIsActive(isActive);
      setShowLink(timeOut === 0);
    }
  }, []);

  const generateNewCode = () => {
    const newCode = Math.floor(1000 + Math.random() * 9000);
    const auth = JSON.parse(localStorage.getItem("auth")) || {};
    const userPhone = phone.phone || Cookies.get("phone");
    auth[userPhone] = { created_at: new Date().toISOString(), password: newCode };
    localStorage.setItem("auth", JSON.stringify(auth));
    localStorage.setItem('timerData', JSON.stringify({
      timeOut: initialTimeOut,
      isActive: true
    }));
    setData((prevData) => ({
      ...prevData,
      timeOut: initialTimeOut,
    }));
    sendSmsCode(userPhone);
    setIsActive(true);
    setShowLink(false);
    console.log("New code generated:", newCode);
  };

  const sendSmsCode = async (phoneNumber) => {
    try {
      const response = await axiosInstance.post("user/send-sms-code", {
        phone: phoneNumber,
      });
      console.log("SMS code sent successfully:", response.data);
      setApiError("");

      return response.data;
    } catch (error) {
      console.error("Error sending SMS code:", error.response?.data || error.message);
      console.log(error.response)
      setApiError(error.response?.data.message || "خطایی در ارسال کد رخ داده است.");
      throw error;
    }
  };

  const verifyCode = async () => {
    try {
      const response = await axiosInstance.post("user/verify-code", {
        phone: phone.phone,
        code: code.code,
      });
      console.log("Code verified successfully:", response.data);
      setApiError("");
      navigate("/dashboard");

      return response.data;
    } catch (error) {
      console.log(`code:${code.code} and phone ${phone.phone}`)
      console.error("Error verifying code:", error.response?.data || error.message);

      setApiError(error.response?.data?.message || "کد وارد شده صحیح نیست.");
    }
  };


  const validate = () => {
    const { error } = schema.validate(phone, { abortEarly: false });
    clearErrors();

    if (error) {
      const errors = {};
      error.details.forEach((item) => {
        errors[item.context.key] = item.message;
      });
      setValidationErrors(errors);
      return false;
    }
    Cookies.set("phone", phone.phone, { expires: 7 });

    return true;
  };

  const handleErrorPass = () => {
    const { error } = schemaPassword.validate(password, { abortEarly: false });
    clearErrors();

    if (error) {
      const errorsPass = {};
      error.details.forEach((item) => {
        errorsPass[item.context.key] = item.message;
      });
      setValidationErrorsPass(errorsPass);
      return false;
    }
    verifyCode()
    return true;
  };

  const clearErrors = () => {
    setValidationErrors({});
    setValidationErrorsPass({});
  };

  const handleInputChange = (name, value) => {
    setPhone({ [name]: value });
    Cookies.set("phone", value, { expires: 7 });
    setApiError("");
  };

  const handleInputChangePass = (name, value) => {
    setPassword({ [name]: value });
    setCode({ code: value });
    setApiError("");
  };

  const inputProps = isPassword
    ? {
      placeholder: "****",
      icon: "../img/login/key.png",
      initialValue: password.password,
      name: "password",
      validationError: validationErrorsPass.password,
      count: 4,
      onChange: handleInputChangePass,
      type: showPassword ? "text" : "password",
      maxLength: 4,
      showToggle: true,
    }
    : {
      icon: "../img/login/phone.png",
      initialValue: phone.phone,
      name: "phone",
      validationError: validationErrors.phone,
      count: 11,
      onChange: handleInputChange,
      placeholder: "09** *** ****",
    };

  return (
    <div className="relative w-full h-screen overflow-hidden flex justify-center">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="../img/video/bg-login.MP4"
        preload="auto"
        autoPlay
        loop
        muted
      ></video>
      <div className="h-full flex max-lg:flex-col-reverse items-center justify-evenly max-lg:gap-10 xl:w-10/12 max-xl:w-full">
        <div className="w-1/2 max-lg:w-full h-4/5 flex flex-col items-center lg:justify-center max-lg:justify-start">
          <div>
            {apiError && (
              <div className="text-red-500 bg-red-100 border border-red-400 rounded-md p-2 mt-2">
                {apiError}
              </div>
            )}
          </div>
          <h1 className="lg:w-[470px] max-lg:w-7/12 max-md:w-10/12 h-20 text-white text-lg font-bold flex items-center">
            ورود/ثبت نام
          </h1>

          {!isPassword && (
            <>
              <Outlet context={{ inputProps }} />
              <div className="mt-4">
                <button
                  className="sm:w-[250px] max-sm:w-1/2 h-10 text-white rounded-lg bg-gradient-to-r from-[#213063] via-[#213063] to-[#55c7e0]"
                  onClick={() => {
                    if (validate()) {
                      // generateNewCode();
                      sendSmsCode(phone.phone).then(() => {
                        navigate("/login/password");
                      }).catch((error) => {
                        console.error("Error sending SMS code:", error);
                        setApiError("خطایی در ارسال کد رخ داد.");
                      });
                    }
                  }}
                >
                  ثبت نام
                </button>
              </div>
            </>
          )}
          {isPassword && (
            <>
              <Outlet context={{ inputProps }} />
              <div className="mt-4">
                <button
                  className="sm:w-[250px] max-sm:w-1/2 h-10 text-white rounded-lg bg-gradient-to-r from-[#213063] via-[#213063] to-[#55c7e0]"
                  onClick={handleErrorPass}
                >
                  ورود
                </button>
              </div>
            </>
          )}

          <div className="md:w-[400px] max-md:w-10/12 h-20 flex items-center justify-center gap-5">
            {isPassword && (
              <div className="text-[14px] h-10 bg-gray-200 flex flex-row-reverse items-center justify-center max-sm:w-1/2 sm:w-[250px] rounded-lg text-bold md:text-[18px] gap-2">
                {data.timeOut !== null
                  ? `${String(Math.floor(data.timeOut / 60)).padStart(2, "0")}:${String(data.timeOut % 60).padStart(2, "0")}`
                  : ""}


                {showLink && (
                  <>
                    <div className="w-[3px] rounded-2xl h-5 bg-[#55c7e0]"></div>
                    <p
                      className="text-[14px] cursor-pointer max-sm:text-[12px]"
                      onClick={generateNewCode}
                    >
                      ارسال دوباره کد
                    </p>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="w-1/2 h-4/5 max-lg:w-full bo flex flex-col items-center lg:justify-center max-lg:justify-end">
          <img
            src="../img/icon/Asaflogo.png"
            alt=""
            className="md:w-[300px] max-md:w-7/12 xl:w-[48%]"
          />
          <p className="text-white md:text-[38px] max-md:text-[30px]">
            آینده سازان آسایش فردا
          </p>
          <p className="text-white md:text-[24px] max-md:text-[16px]">
            Future builders of comfort
          </p>
        </div>
      </div>
    </div>
  );
}

