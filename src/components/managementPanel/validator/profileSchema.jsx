import Joi from "joi";

const profileSchema = Joi.object({
  first_name: Joi.string().min(2).max(50).required().messages({
    "string.empty": "نام نمی‌تواند خالی باشد.",
    "string.min": "نام باید حداقل ۲ کاراکتر باشد.",
    "string.max": "نام نمی‌تواند بیشتر از ۵۰ کاراکتر باشد.",
    "any.required": "نام الزامی است.",
  }),
  last_name: Joi.string().min(2).max(50).required().messages({
    "string.empty": "نام خانوادگی نمی‌تواند خالی باشد.",
    "string.min": "نام خانوادگی باید حداقل ۲ کاراکتر باشد.",
    "string.max": "نام خانوادگی نمی‌تواند بیشتر از ۵۰ کاراکتر باشد.",
    "any.required": "نام خانوادگی الزامی است.",
  }),
  national_id: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required()
    .messages({
      "string.empty": "کد ملی نمی‌تواند خالی باشد.",
      "string.pattern.base": "کد ملی باید ۱۰ رقم باشد.",
      "any.required": "کد ملی الزامی است.",
    }),
  address: Joi.string().max(250).required().messages({
    "string.empty": "آدرس نمی‌تواند خالی باشد.",
    "string.max": "آدرس نمی‌تواند بیشتر از ۲۵۰ کاراکتر باشد.",
    "any.required": "آدرس الزامی است.",
  }),
  phone: Joi.string()
    .pattern(/^[0-9]{11}$/)
    .required()
    .messages({
      "string.empty": "شماره تلفن نمی‌تواند خالی باشد.",
      "string.pattern.base": "شماره تلفن باید ۱۱ رقم باشد.",
      "any.required": "شماره تلفن الزامی است.",
    }),
});

export default profileSchema;