import Joi from 'joi';

const insurarValidation = Joi.object({
  insurer_code: Joi.string()
    .pattern(/^\d+$/)
    .required()
    .messages({
      "string.empty": "کد بیمه‌گذار الزامی است.",
      "string.pattern.base": "کد بیمه‌گذار باید فقط شامل اعداد باشد.",
    }),


  user_id: Joi.number()
    .integer()
    .positive()
    .required()
    .messages({
      "number.base": "ایدی کاربر باید یک عدد صحیح مثبت باشد.",
      "any.required": "ایدی کاربر الزامی است.",
    }),

  insurance_id: Joi.number()
    .integer()
    .positive()
    .required()
    .messages({
      "number.base": "ایدی بیمه باید یک عدد صحیح مثبت باشد.",
      "any.required": "ایدی بیمه الزامی است.",
    }),
    url: Joi.string().default("google.com")

});

export default insurarValidation;
