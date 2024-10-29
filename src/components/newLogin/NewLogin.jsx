import Input from "../input/Input";
import Joi from "joi";
import { useEffect, useState } from "react";

export default function NewLogin() {
  const initialTimeOut = 60; 
  const [data, setData] = useState({ timeOut: null });
  const [code, setCode] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [showLink, setShowLink] = useState(false);
  const [phone, setPhone] = useState({ phone: "" });
  const [password, setPassword] = useState({ password: "" });
  const [navigate, setNavigate] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [validationErrorsPass, setValidationErrorsPass] = useState({});

  // ** validat by joi **
  const schema = Joi.object({
    phone: Joi.string()
      .pattern(new RegExp("^09[0|1|2|3][0-9]{8}$"))
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
        if (value != code) {
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
    // check date in localstorge
    const storedAuth = JSON.parse(localStorage.getItem("auth")) || {};
    const phoneEntry = storedAuth[phone.phone];
    // check exist phone
    if (phoneEntry) {
      // create Date
      const createdAt = new Date(phoneEntry.created_at);
      const now = new Date();
      const timeDiff = (now - createdAt) / 1000; // in seconds
       
      // check Time
      if (timeDiff < initialTimeOut) {
        const remainingTime = Math.floor(initialTimeOut - timeDiff);
        setData({ timeOut: remainingTime });
        setIsActive(true);
        setCode(phoneEntry.password); 
        setNavigate(true);
      } else {
        // more than 1 minutes have passed generate new code
        generateNewCode();
      }
    }
  }, [phone.phone]);

  //  timer
  useEffect(() => {
    let interval = null;
    if (isActive && data.timeOut > 0) {
      interval = setInterval(() => {
        setData(prevData => ({
          ...prevData,
          timeOut: prevData.timeOut - 1,
        }));
      }, 1000);
    } else if (data.timeOut === 0) {
      clearInterval(interval);
      setShowLink(true);
      localStorage.removeItem("data.timeout");
    }

    return () => {
      clearInterval(interval);
      if (data.timeOut > 0) {
        localStorage.setItem("data.timeout", data.timeOut);
      }
    };
  }, [isActive, data.timeOut]);

  // generateNewCode
  const generateNewCode = () => {
    const newCode = Math.floor(Math.random() * 10000);
    const auth = JSON.parse(localStorage.getItem("auth")) || {};
    auth[phone.phone] = { created_at: new Date().toISOString(), password: newCode };
    localStorage.setItem("auth", JSON.stringify(auth));
    setCode(newCode);
    setData({ timeOut: initialTimeOut });
    setIsActive(true);
    setNavigate(true);
    setShowLink(false);
  };
  // validate for input
  const validate = () => {
    const { value, error } = schema.validate(phone, { abortEarly: false });
    clearErrors();

    if (error && !navigate) {
      const errors = {};
      error.details.forEach(item => {
        errors[item.context.key] = item.message;
      });
      setValidationErrors(errors);
    } else {
      generateNewCode();
    }
  };

  const handleErrorPass = () => {
    const { value, error } = schemaPassword.validate(password, { abortEarly: false });
    clearErrors();

    if (error) {
      const errorsPass = {};
      error.details.forEach(item => {
        errorsPass[item.context.key] = item.message;
      });
      setValidationErrorsPass(errorsPass);
    }
  };

  const clearErrors = () => {
    setValidationErrors({});
    setValidationErrorsPass({});
  };

  // get phone & password of component Input
  const handleInputChange = (name, value) => setPhone({ [name]: value });
  const handleInputChangePass = (name, value) => setPassword({ [name]: value });

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="bg-white shadow-md rounded-lg w-full max-w-sm p-8 flex flex-col items-center">
          <div className="bg-blue-900 w-full flex items-center justify-center py-4 rounded-md mb-6">
            <h1 className="text-white text-xl font-bold">ASAFLIFE</h1>
          </div>
          <h2 className="text-lg font-semibold mb-4">ثبت‌ نام | ورود به حساب کاربری</h2>
          <div className="w-full mb-4">
            {!navigate && (
              <>
                <label className="sr-only">شماره موبایل</label>
                <Input
                  placeholder="شماره موبایل"
                  initialValue={phone.phone}
                  onChange={handleInputChange}
                  name={'phone'}
                  validationErrors={validationErrors.phone}
                />
              </>
            )}
            {navigate && (
              <>
                <label className="sr-only">رمز عبور</label>
                <Input
                  placeholder="رمزعبور"
                  initialValue={password.password}
                  onChange={handleInputChangePass}
                  name={'password'}
                  validationErrors={validationErrorsPass.password}
                />
                <div className="text-[14px] w-full h-7">
                  {data.timeOut !== null ? `00:${String(data.timeOut).padStart(2, '0')}` : ''}
                </div>
                {showLink && (
                  <p className="text-[14px] underline underline-offset-4 cursor-pointer" onClick={generateNewCode}>
                    ارسال دوباره کد
                  </p>
                )}
              </>
            )}
          </div>
          <button
            className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 focus:outline-none"
            type="button"
            onClick={navigate ? handleErrorPass : validate}
          >
            ادامه
          </button>
        </div>
      </div>
    </>
  );
}