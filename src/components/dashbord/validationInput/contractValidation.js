import Joi from 'joi';

const ContractValidation = Joi.object({
  insurance_code: Joi.string()
    .pattern(/^\d+$/) 
    .required()
    .messages({
      "string.empty": "کد بیمه‌گذار الزامی است.",
      "string.pattern.base": "کد بیمه‌گذار باید فقط شامل اعداد باشد.",
    }),

    computer_code: Joi.string()
    .length(6)
    .pattern(/^\d+$/) 
    .required()
    .messages({
      "string.empty": "کد رایانامه الزامی است.",
      "string.pattern.base": "کد رایانامه باید فرمت صحیحی داشته باشد.",
    }),

  national_id: Joi.string()
    .length(10)
    .pattern(/^\d+$/) 
    .required()
    .messages({
      "string.empty": "کد ملی الزامی است.",
      "string.length": "کد ملی باید ۱۰ رقم باشد.",
      "string.pattern.base": "کد ملی باید فقط شامل اعداد باشد.",
    }),

  field: Joi.string()
    .pattern(/^\d+$/) 
    .required()
    .messages({
      "string.empty": "رشته الزامی است.",
      "string.pattern.base": "رشته باید فقط شامل اعداد باشد.",
    }),

  person_name: Joi.string()
    .min(2)
    .max(50)
    .required()
    .messages({
      "string.empty": "اسم فرد الزامی است.",
      "any.required": "اسم فرد انتخاب‌شده معتبر نیست.",
    }),

  insurance_company: Joi.string()
    .required()
    .messages({
      "string.empty": "شرکت بیمه الزامی است.",
      "any.required": "شرکت بیمه انتخاب‌شده معتبر نیست.",
    }),
});

export default ContractValidation;
