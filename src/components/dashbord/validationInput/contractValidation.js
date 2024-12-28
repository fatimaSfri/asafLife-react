import Joi from "joi";

const contractValidation = Joi.object({
    computer_code: Joi.string()
     .pattern(/^\d+$/)
     .required()
     .messages({
       "string.empty": "کد بیمه‌گذار الزامی است.",
       "string.pattern.base": "کد بیمه‌گذار باید فقط شامل اعداد باشد.",
     }),

     reshte: Joi.string()
     .pattern(/^\d+$/)
     .required()
     .messages({
       "string.empty": "فیلد رشته الزامی است.",
       "string.pattern.base": "فیلد رشته  باید فقط شامل اعداد باشد.",
     }),

     insurance_user_id: Joi.number()
      .integer()
      .positive()
      .required()
      .messages({
        "number.base": "لطفا نام کاربر و شرکت بیمه انتخاب شود",
        "any.required": "ایدی کاربر الزامی است.",
      }),

  

});

export default contractValidation;
