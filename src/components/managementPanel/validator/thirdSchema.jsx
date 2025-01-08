// thirdSchema.js

import Joi from "joi";

const ThirdSchema = Joi.object({
  address: Joi.string().trim().required().label("آدرس").messages({
    "string.empty": "آدرس الزامی است.",
    "string.base": "آدرس باید یک رشته باشد.",
    "any.required": "آدرس الزامی است.",
  }),

  phone: Joi.string()
    .trim()
    .pattern(/^09[0-9]{9}$/)
    .required()
    .label("شماره تلفن")
    .messages({
      "string.pattern.base": "شماره تلفن باید با ۰۹ شروع شده و دقیقاً ۱۱ رقم داشته باشد.",
      "string.empty": "شماره تلفن الزامی است.",
      "string.base": "شماره تلفن باید یک رشته باشد.",
      "any.required": "شماره تلفن الزامی است.",
    }),

  owner_birthday: Joi.string()
    .pattern(/^\d{4}\/\d{2}\/\d{2}$/)
    .required()
    .label("تاریخ تولد صاحب پلاک")
    .messages({
      "string.pattern.base": "تاریخ تولد باید در فرمت روز/ماه/سال باشد.",
      "string.empty": "تاریخ تولد الزامی است.",
      "string.base": "تاریخ تولد باید یک رشته باشد.",
      "any.required": "تاریخ تولد الزامی است.",
    }),

  vehicle_cart_photos: Joi.array()
    .items(
      Joi.object({
        type: Joi.string().valid("image/jpeg", "image/png").required(),
        size: Joi.number().integer().min(1).max(500000).required(),
      }).required()
    )
    .min(2)
    .label("تصاویر کارت ماشین")
    .messages({
      "array.min": "دو تصویر کارت ماشین الزامی هستند.",
      "array.items.type": "فایل انتخاب شده باید یک تصویر باشد با فرمت jpeg یا png.",
      "array.items.size": "حجم فایل نباید بیشتر از 500 کیلوبایت باشد.",
      "any.required": "تصاویر کارت ماشین الزامی هستند.",
    }),

  certificate_photo: Joi.object({
    type: Joi.string().valid("image/jpeg", "image/png").required(),
    size: Joi.number().integer().min(1).max(500000).required(),
  })
    .optional()
    .label("تصویر گواهینامه")
    .messages({
      "any.required": "تصاویر کارت ماشین الزامی هستند.",
      "any.size": "تصویر باید کمتر از 500 کیلوبایت باشد.",
    }),
});

export default ThirdSchema;