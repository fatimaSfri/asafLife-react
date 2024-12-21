import Joi from "joi";

const CreateUserValidation = Joi.object({
  first_name: Joi.string()
    .min(2)
    .max(50)
    .regex(/^[\u0600-\u06FF\s]+$/)
    .required()
    .messages({
      "string.empty": "نام الزامی است.",
      "string.min": "نام باید حداقل ۲ کاراکتر باشد.",
      "string.max": "نام نمی‌تواند بیشتر از ۵۰ کاراکتر باشد.",
      "string.pattern.base": "نام فقط می‌تواند شامل حروف فارسی باشد.",
    }),

  last_name: Joi.string()
    .min(2)
    .max(50)
    .regex(/^[\u0600-\u06FF\s]+$/)
    .required()
    .messages({
      "string.empty": "نام خانوادگی الزامی است.",
      "string.min": "نام خانوادگی باید حداقل ۲ کاراکتر باشد.",
      "string.max": "نام خانوادگی نمی‌تواند بیشتر از ۵۰ کاراکتر باشد.",
      "string.pattern.base": "نام خانوادگی فقط می‌تواند شامل حروف فارسی باشد.",
    }),

  national_id: Joi.string()
    .length(10)
    .regex(/^\d+$/)
    .required()
    .messages({
      "string.empty": "کد ملی الزامی است.",
      "string.length": "کد ملی باید ۱۰ رقم باشد.",
      "string.pattern.base": "کد ملی باید فقط شامل اعداد باشد.",
    }),

  phone: Joi.string()
    .regex(/^(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}$/)
    .required()
    .messages({
      "string.empty": "شماره تماس الزامی است.",
      "string.pattern.base": "شماره تماس وارد شده معتبر نیست. لطفاً شماره‌ای با فرمت صحیح وارد کنید.",
    }),

});

export default CreateUserValidation;
