
import Joi from "joi";
import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../axiosConfig";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

export default function Login() {
  const initialTimeOut = 120;
  const [data, setData] = useState({ timeOut: null });
  const [code, setCode] = useState({ code: "" });
  const [isActive, setIsActive] = useState(false);
  const [showLink, setShowLink] = useState(false);
  const [phone, setPhone] = useState({ phone: "" });
  const [password, setPassword] = useState({ password: "" });
  const [validationErrors, setValidationErrors] = useState({});
  const [validationErrorsPass, setValidationErrorsPass] = useState({});
  const [apiError, setApiError] = useState("");
  const location = useLocation();
  const isPassword = location.pathname.includes("login/password");
  const navigate = useNavigate();
  Cookies.remove('phone');
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

  const resetTimer = () => {
    setData({ timeOut: initialTimeOut });
    setIsActive(true);
    setShowLink(false);
    localStorage.setItem('timerData', JSON.stringify({
      timeOut: initialTimeOut,
      isActive: true
    }));
  };


  useEffect(() => {
    let interval = null;

    if (isActive && data.timeOut > 0) {
      interval = setInterval(() => {
        setData((prevData) => {
          const updatedTimeOut = prevData.timeOut - 1;
          localStorage.setItem('timerData', JSON.stringify({
            timeOut: updatedTimeOut,
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
  // useEffect(() => {
  //   const isLogedIn = async (cookie) => {
  //     try {
  //       const response = await axiosInstance.get("user/dashbord");
  //       console.log("کوکی:", response);
  //       setApiError("");
  //       return response.data;
  //     } catch (error) {

  //       throw error;
  //     }
  //   }
  // })

  useEffect(() => {
        axiosInstance.get("user/dashbord").then(res => {
          console.log("کوکی:", res);
          setApiError("");
        });
  },[]);

useEffect(() => {
  const storedData = localStorage.getItem('timerData');
  if (storedData) {
    const { timeOut, isActive } = JSON.parse(storedData);
    setData({ timeOut });
    setIsActive(isActive);
    setShowLink(timeOut === 0);
  }

  const queryParams = new URLSearchParams(location.search);
  const phoneFromUrl = queryParams.get("phone");
  if (phoneFromUrl) {
    setPhone({ phone: phoneFromUrl });
  }
}, [location]);

const generateNewCode = () => {
  const newCode = Math.floor(1000 + Math.random() * 9000);
  const auth = JSON.parse(localStorage.getItem("auth")) || {};
  const userPhone = phone.phone || localStorage.getItem("userPhone");

  localStorage.setItem("userPhone", userPhone);

  auth[userPhone] = { created_at: new Date().toISOString(), password: newCode };
  localStorage.setItem("auth", JSON.stringify(auth));
  localStorage.setItem('timerData', JSON.stringify({
    timeOut: initialTimeOut,
    isActive: true
  }));
  setData({ timeOut: initialTimeOut });
  setIsActive(true);
  setShowLink(false);

  sendSmsCode(userPhone);
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
    console.log(error);
    console.error("Error sending SMS code:", error.response?.data['message']);

    setApiError(error.response?.data['message']);
    throw error;
  }
};

const verifyCode = async () => {
  try {
    const userPhone = phone.phone  || localStorage.getItem("userPhone");

    const response = await axiosInstance.post("user/verify-code", {
      phone: userPhone,
      code: code.code,
    });
    console.dir(response.data);
    console.log("Code verified successfully:", response.data);
    setApiError("");

    const { isInformationSet } = response.data;
    console.log("isInformationSet:", isInformationSet);

    // if (!isInformationSet) {
    //   navigate("/insured-person", { state: { phone: userPhone } });
    // } else {
    //   navigate("/dashbord");
    // }

    if (isInformationSet === undefined) {
      navigate("/dashbord");
    } else if (isInformationSet === false) {
      navigate("/insured-person", { state: { phone: userPhone } });
    }
    return response.data;
  } catch (error) {
    console.log("Code:", code.code);
    console.log("Phone:", phone.phone || localStorage.getItem("userPhone"));
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

  localStorage.setItem("userPhone", phone.phone);

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

  verifyCode();

  return true;
};

const clearErrors = () => {
  setValidationErrors({});
  setValidationErrorsPass({});
};

const handleInputChange = (name, value) => {
  setPhone({ [name]: value });
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
    maxLength: 4,
    onChange: handleInputChangePass,
  }
  : {
    icon: "../img/login/phone.png",
    initialValue: phone.phone,
    name: "phone",
    validationError: validationErrors.phone,
    maxLength: 13,
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
                className="sm:w-[250px] max-sm:w-[200px] h-10 text-white rounded-lg bg-gradient-to-r from-[#213063] via-[#213063] to-[#55c7e0]"
                onClick={() => {
                  if (validate()) {
                    localStorage.setItem("userPhone", phone.phone);
                    sendSmsCode(phone.phone).then(() => {
                      resetTimer();
                      navigate(`/login/password?phone=${phone.phone}`);
                    }).catch((error) => {
                      console.error("Error sending SMS code:", error);
                      setApiError(error.response?.data['message']);
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
            <div className="flex justify-around items-center md:w-[75%]">
              <div className="mt-4">
                <button
                  className="sm:w-[250px] max-sm:[100px] h-10 text-white rounded-lg bg-gradient-to-r from-[#213063] via-[#213063] to-[#55c7e0]"
                  onClick={handleErrorPass}
                >
                  ورود
                </button>
              </div>
              <div className="mt-4">
                <button
                  className="sm:w-[250px] max-sm:w-[100px] h-10 text-white rounded-lg bg-gradient-to-r from-[#213063] via-[#213063] to-[#55c7e0]"
                  onClick={() => {
                    navigate(`/login`);
                  }}
                >
                  تصحیح شماره همراه
                </button>
              </div>
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
      <Link to="/"  className="md:w-[300px] max-md:w-7/12 xl:w-[48%]">
        <img
          src="../img/icon/ASAF.svg"
          alt=""
         
        /></Link>
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



