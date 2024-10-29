import  Input  from "../input/Input"
import Joi from "joi";
import { useEffect, useState } from "react";


export default function Login(){

  const [user, setUser] = useState({
    phone : "",
    password: "",
  
 });


useEffect(() => {
  console.log(user);
  },[user]);
  const [validationErrors, setValidationErrors] = useState({});

  const schema = Joi.object({
  
    phone: Joi.string()
      .pattern(new RegExp("^09[0|1|2|3][0-9]{8}$"))
      .required()
      .messages({
        "any.required": "*تلفن الزامی است.",
        "string.empty": "*تلفن الزامی است.",
        "string.pattern.base": "لطفا شماره تلفن را با  09 و درست وارد کنید"
      }),

    password: Joi.string().min(3).max(30).required().messages({
      "any.required": "*رمز عبور الزامی است.",
      "string.empty": "*رمز عبور الزامی است.",
      "string.min": "رمز عبور باید حداقل ۳  کاراکتر باشد."
    }),

   });


  const clearErrors = () => {
    setValidationErrors({});
};

const validate = () => {

    const { value, error } = schema.validate(user, { abortEarly: false });
    clearErrors();

    if (error) {
        console.log(error.details);
        const errors = {};
        error.details.forEach(item => {
            errors[item.context.key] = item.message;
        });
        setValidationErrors(errors);
    } else {
        console.log("Validation successful", value);
       
    }
};

//  const handleInputChange = (name, value) => {
//     setUser({
//     [name]: value  
//   });
// };

const handleInputChange = (name, value) => {
  setUser(prevState => ({
    ...prevState,
    [name]: value  
  }));
  
};

  return (
    <div
    className="flex max-md:flex-wrap-reverse items-center justify-center h-screen w-full"
    dir="rtl"
  >
    <div
      className="flex flex-col items-center justify-between max-md:justify-start sm:min-w-96 md:h-[665px] max-md:h-[370px] max-sm:w-11/12 lg:w-4/12 shadow"
    >
      <div className="flex flex-col items-center justify-around">
        <img
          src="../img/icon/ASAF Life-01.svg"
          className="w-24 h-24 max-md:w-20 max-md:h-16 mt-[20px]"
        ></img>
        <h1 className="text-2xl mt-[5px] text-[#00c293] max-md:text-lg">
          ورود به حساب کاربری
        </h1>
      </div>

     
      <form
        className="flex flex-col justify-around h-3/6 w-full"
        onSubmit={(e) => { e.preventDefault(); validate(); }}
      >

        <div className="flex flex-col items-center h-[116px] justify-around">
         
          <Input placeholder= "شماره همراه/ کد ملی"  initialValue={user.phone} onChange={handleInputChange} name={'phone'}  validationErrors={validationErrors.phone}></Input>
          <Input placeholder= "رمز عبور"  initialValue={user.password}  
           onChange={handleInputChange}   name={'password'} validationErrors={validationErrors.password}></Input>
         
        </div>

        <div className="flex w-10/12 mx-auto">
         <button
            className="w-1/2 h-12 rounded-xl leading-10 max-sm:text-[14px] disabled:bg-[#bbbbbb] border text-center mx-1 bg-[#00c293] text-white text-[18px] hover:bg-[#008061]"  
          >
             ورود
          </button>
          
           <a className="w-1/2 h-12 rounded-xl border text-center max-sm:text-[12px] overflow-hidden leading-10 mx-2 border-[#ff033e] text-[#ff033e] hover:border-2 hover:font-bold"
            >فراموشی رمز عبور</a>
           </div>
      
        <a
           
          className="text-center underline text-[14px] underline-offset-8 max-md:mb-[-60px] text-[#008061] max-md:text-[12px]"
        >
          ثبت نام نکرده اید؟</a>


      </form>

      <div className="w-full h-4 mb-0 max-md:hidden flex items-end justify-center">
        <div className="w-10/12 text-center text-[12px] text-[#bbbbbb]">
          &#169; تمام حقوق مادی معنوی آساف لایف محفوظ میباشد
        </div>
      </div>
    </div>

    <div
      className="md:w-10/12 md:h-[660px] m-3 max-md:h-72 max-md:w-11/12 flex justify-center max-md:mb-[-20px] items-center"
    >
      <img
        src="/img/login/legalL.jpg"
        alt=""
        className="h-full w-full xl:object-center max-xl:object-cover max-md:w-full rounded"
      ></img>
    </div>
  </div>
  )
}
