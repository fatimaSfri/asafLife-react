import  { useState } from "react";
// import { motion } from "framer-motion";
// import phoneIcon from "../media/icons/phone_6416393.png";
import joi from "joi"


// const phonePattern = /^09\d{9}$/;

// const schema = joi.object({
//   phone: joi.string()
//     .pattern(phonePattern)
//     .required()
//     .messages({
//       "any.required": "لطفا شماره تلفن را با 09 و درست وارد کنید",
//       "string.empty": "لطفا شماره تلفن را با 09 و درست وارد کنید",
//       "string.pattern.base": "لطفا شماره تلفن را با 09 و درست وارد کنید",
//     }),
// });

const NumericInput = () => {
// const [error,setError] = useState('')

  const [number, setNumber] = useState('');
  const phoneView = (phone) =>  phone.replaceAll(' ','').replace(/^(\d{4})(\d{0,3})(\d{0,4}).*/, "$1 $2 $3").trim();
  const onchangeInput = (e) => {
    return isNaN(e.target.value.replaceAll(' ',''))? number : setNumber(e.target.value.replaceAll(" ",''));}

  // const handleSubmit = () => {
  //   console.log(schema.validate({phone}))
  //   if(schema.validate({phone}).error){
  //       setError(schema.validate({phone})?.error?.details[0]?.message);
  //   }else{
  //     console.log("شماره تلفن ارسال شد:", phone);
  //   }
  //   console.log("X");
  // };


  return (
    <div className=" flex items-center justify-center">
      <div className="max-w-md sm:max-w-sm space-y-8">
        <div className="text-end">
          <h2 className="mt-6 text-3xl font-extrabold text-white font-kalameh">
            ورود/ثبت نام
          </h2>
        </div>
        <div className="sendPhone">
          <div className="w-full flex flex-row bg-white rounded-xl">
            <div className="flex justify-between items-center  pr-4 w-full rounded-xl md:w-[20rem]">
              <input
                type="text"
                value={phoneView(number)}
                onChange={onchangeInput}
                maxLength={13}
                className="h-12 w-full text-center appearance-none bg-transparent focus:outline-none text-[#a8a8a8] bg-[#dcddde] text-xl"
                placeholder="09** *** ****"
              />
              <div className="phoneContent w-[20%] rounded-md flex items-center justify-center ">
                <div className="w-8">
                  <img src="" alt="Phone icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-4">
          {/* <button
            onClick={handleSubmit}
            className={'group relative flex justify-center py-2 px-20 font-kalameh border border-gray-300 border-opacity-50 text-sm font-medium rounded-md text-white'}>
            ورود
          </button>
          <label>{error}</label> */}
        </div>
      </div>
    </div>
  );
};

export default NumericInput;