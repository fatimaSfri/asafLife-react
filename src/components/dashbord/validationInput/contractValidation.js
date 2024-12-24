import Joi from 'joi';

const ContractValidation = Joi.object({
  insurer_code: Joi.string()
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

  reshte: Joi.string()
    .min(3)
    .max(50)
    .required()
    .messages({
      "string.empty": "رشته الزامی است.",
      "string.min": "رشته باید حداقل ۳ کاراکتر باشد.",
      "string.max": "رشته نباید بیشتر از ۵۰ کاراکتر باشد.",
    }),

  user_id: Joi.string()
    .required()
    .messages({
      "string.empty": "اسم فرد الزامی است.",
      "any.required": "اسم فرد انتخاب‌شده معتبر نیست.",
    }),

  insurance_id: Joi.string()
    .required()
    .messages({
      "string.empty": "شرکت بیمه الزامی است.",
      "any.required": "شرکت بیمه انتخاب‌شده معتبر نیست.",
    }),
});

export default ContractValidation;
