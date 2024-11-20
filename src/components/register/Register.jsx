import BtnSucsses from "../button/BtnSucsses"
import BtnFailure from  "../button/BtnFailure"
import  Input  from "../input/Input"
import Joi from "joi";
import { useEffect, useState } from "react";


function Register(){

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        national_id: "",
        phone: "",
        password: "",
        repeatP: ""
    });

  
    useEffect(() => {
      console.log(user);
    },[user]);
      const [validationErrors, setValidationErrors] = useState({});

      const schema = Joi.object({
        firstName: Joi.string().min(3).max(30).required().messages({
          "any.required": "*نام الزامی است .",
          "string.empty": "*نام الزامی است .",
          "string.min": "نام باید حداقل ۳ کاراکتر باشد."
        }),
        lastName: Joi.string().min(3).max(30).required().messages({
          "any.required": "*نام خانوادگی الزامی است.",
          "string.empty": "*نام خانوادگی الزامی است.",
          "string.min": "نام خانوادگی باید حداقل ۳ کاراکتر باشد."
        }),
        national_id: Joi.string().min(3).required().messages({
          "any.required": "*کد ملی الزامی است.",
          "string.empty": "*کد ملی الزامی است.",
          "string.min": "کد ملی باید حداقل ۳ کاراکتر باشد."
        }),
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
        repeatP: Joi.string().valid(Joi.ref("password")).required().messages({
          "any.only": "*تکرار پسورد باید با پسورد اصلی مطابقت داشته باشد.",
          "string.empty": "تکرار پسورد الزامی است."
        })
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
   

    const handleInputChange = (name, value) => {
      setUser(prevState => ({
        ...prevState,
        [name]: value  
      }));
      
    };
   
   
  



return( 

<div
    className="flex max-md:flex-col-reverse max-md:justify-around items-center md:w-full md:h-screen"
    dir="rtl"
  >
    <div
      className="flex flex-col items-center justify-between sm:min-w-96 h-[660px] md:my-5 max-md:h-auto max-sm:w-11/12 lg:w-4/12 shadow"
    >
      <div
        className="w-10/12 h-44 max-md:h-16 flex flex-col items-center justify-around"
      >
        <img
          src="./src/assets/img/icon/ASAF Life-01.svg"
          className="w-24 h-24 max-md:hidden"
        />
        <h1
          className="text-2xl mt-5 text-[#00c293] max-md:text-[18px] max-md:pb-16"
        >
          ثبت نام در سامانه
        </h1>
      </div>
      <form
        className="flex flex-col justify-evenly items-center h-full w-full boreder"
        onSubmit={(e) => { e.preventDefault(); validate(); }}
      >
        <div className="w-full h-80 flex flex-col items-center justify-evenly">
          <div
            className="md:w-10/12 max-md:w-full h-20 flex items-center justify-between"
          >
            <div className="w-10/12 flex flex-col max-md:items-end">

            <Input placeholder="نام" name="firstName" initialValue={user.firstName} onChange={handleInputChange} validationErrors={validationErrors.firstName}>
            </Input>

            </div>

            <div className="w-full flex flex-col  md:items-end ">
            <Input placeholder="نام خانوادگی"  name="lastName" initialValue={user.lastName} onChange={handleInputChange} validationErrors={validationErrors.lastName}>
            </Input>

           </div>
          </div>

          <Input placeholder="کد ملی"  name="national_id"  initialValue={user.national_id} onChange={handleInputChange} validationErrors={validationErrors.national_id}>
          </Input>
          <Input placeholder="شماره همراه"  name="phone"  initialValue={user.phone} onChange={handleInputChange} validationErrors={validationErrors.phone} >
          </Input>
          <Input placeholder="رمز عبور"  name="password"  initialValue={user.password} onChange={handleInputChange} validationErrors={validationErrors.password} >
          </Input>
          <Input placeholder="تکرار رمز عبور"  name="repeatP"  initialValue={user.repeatP} onChange={handleInputChange} validationErrors={validationErrors.repeatP} >
          </Input>

        
        </div>

        <div className="flex w-10/12 mx-auto max-md:w-full">
    

         <BtnSucsses text="ثبت نام" ></BtnSucsses>
         <BtnFailure text=" برگشت" > </BtnFailure>
          

        </div>
      </form>

      <div className="w-full h-4 mb-0 max-md:hidden flex items-end justify-center">
        <div className="w-10/12 text-center text-[12px] text-[#bbbbbb]">
          &#169; تمام حقوق مادی معنوی آساف لایف محفوظ میباشد
        </div>
      </div>
    </div>

    <div
      className="md:w-10/12 md:h-[660px] m-3 max-md:h-56 max-md:w-11/12 flex justify-between"
    >
      <img
        src="./src/assets/img/login/legalL.jpg"
        alt="not find"
        className="md:hidden max-md:mt-[-35px] max-md:w-full rounded"
      ></img>
      <img
        src="./src/assets/img/login/legalL.jpg"
        alt="not find"
        className="h-full w-full rounded xl:object-center max-xl:object-cover max-md:hidden"
      ></img>
    </div>
  </div>


)}

export default Register