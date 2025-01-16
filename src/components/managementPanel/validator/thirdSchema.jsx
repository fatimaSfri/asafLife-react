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

  vehicle_cart_photo_behind: Joi.object({
      type: Joi.string().valid("image/jpeg", "image/png").required(),
      size: Joi.number().integer().min(1).max(500000).required(),
    })
    .required()
    .label("تصویر پشت کارت ماشین")
    .messages({
      "any.required": "تصاویر پشت کارت ماشین الزامی هستند.",
      "any.size": "تصویر باید کمتر از 500 کیلوبایت باشد.",
    }),
    vehicle_cart_photo_front: Joi.object({
      type: Joi.string().valid("image/jpeg", "image/png").required(),
      size: Joi.number().integer().min(1).max(500000).required(),
    })
    .required()
    .label("تصویر روی کارت ماشین")
    .messages({
      "any.required": "تصاویر روی کارت ماشین الزامی هستند.",
      "any.size": "تصویر باید کمتر از 500 کیلوبایت باشد.",
    }),

  certificate_photo: Joi.object({
    type: Joi.string().valid("image/jpeg", "image/png").required(),
    size: Joi.number().integer().min(1).max(500000).required(),
  })
    .required()
    .label("تصویر گواهینامه")
    .messages({
      "any.required": "تصویر گواهینامه الزامی هستند.",
      "any.size": "تصویر باید کمتر از 500 کیلوبایت باشد.",
    }),
});

export default ThirdSchema;