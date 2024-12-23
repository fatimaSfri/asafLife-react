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
      "string.length": "کد رایانامه باید دقیقاً ۶ رقم باشد.",
      "string.pattern.base": "کد رایانامه باید فقط شامل اعداد باشد.",
    }),

  national_id: Joi.string()
    .length(10)
    .pattern(/^\d+$/)
    .required()
    .messages({
      "string.empty": "کد ملی الزامی است.",
      "string.length": "کد ملی باید دقیقاً ۱۰ رقم باشد.",
      "string.pattern.base": "کد ملی باید فقط شامل اعداد باشد.",
    }),

  field: Joi.string()
    .min(3)
    .max(50)
    .required()
    .messages({
      "string.empty": "رشته الزامی است.",
      "string.min": "رشته باید حداقل ۳ کاراکتر باشد.",
      "string.max": "رشته نباید بیشتر از ۵۰ کاراکتر باشد.",
      "string.pattern.base": "رشته باید فقط شامل حروف و اعداد باشد.",
    }),

  person_name: Joi.string()
    .min(2)
    .max(50)
    .required()
    .messages({
      "string.empty": "اسم فرد الزامی است.",
      "string.min": "اسم فرد باید حداقل ۲ کاراکتر باشد.",
      "string.max": "اسم فرد نباید بیشتر از ۵۰ کاراکتر باشد.",
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
