import Joi from "joi";


const CreateUserValidation = Joi.object({
  first_name: Joi.string()
    .trim()
    .min(2)
    .max(50)
    .pattern(/^[آ-یa-zA-Z\s]+$/)
    .required()
    .messages({
      "string.empty": "نام نمی‌تواند خالی باشد.",
      "string.min": "نام باید حداقل ۲ کاراکتر باشد.",
      "string.max": "نام نمی‌تواند بیشتر از ۵۰ کاراکتر باشد.",
      "string.pattern.base": "نام فقط می‌تواند شامل حروف فارسی و انگلیسی باشد.",
    }),

  last_name: Joi.string()
    .trim()
    .min(2)
    .max(50)
    .pattern(/^[آ-یa-zA-Z\s]+$/)
    .required()
    .messages({
      "string.empty": "نام خانوادگی نمی‌تواند خالی باشد.",
      "string.min": "نام خانوادگی باید حداقل ۲ کاراکتر باشد.",
      "string.max": "نام خانوادگی نمی‌تواند بیشتر از ۵۰ کاراکتر باشد.",
      "string.pattern.base": "نام خانوادگی فقط می‌تواند شامل حروف فارسی و انگلیسی باشد.",
    }),

  phone: Joi.string()
    .pattern(/^09[0-9]{9}$/)
    .required()
    .messages({
      "string.empty": "شماره تماس نمی‌تواند خالی باشد.",
      "string.pattern.base": "شماره تماس باید با ۰۹ شروع شده و شامل ۱۱ رقم باشد.",
    }),

});

export default CreateUserValidation;
