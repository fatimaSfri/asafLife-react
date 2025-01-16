// // BadanehSchemaValidator.jsx
// import Joi from 'joi';

// const BadanehSchema = Joi.object({
//   insurer_code: Joi.string().required().label('شماره بیمه').messages({
//     'any.required': 'شماره بیمه الزامی است.',
//     'string.base': 'شماره بیمه باید یک رشته باشد.'
//   }),
//   expiration_insurer_date: Joi.string()
//     .required()
//     .pattern(/^\d{4}\/\d{2}\/\d{2}$/)
//     .label('تاریخ انقضا')
//     .custom((value, helpers) => {
//       const date = new Date(value);
//       if (isNaN(date.getTime())) {
//         return helpers.message({ custom: 'تاریخ انقضا باید یک تاریخ معتبر باشد.' });
//       }
//       return value;
//     })
//     .messages({
//       "string.pattern.base": "تاریخ تولد ب��ید در فرمت YYYY/MM/DD باشد.",
//       'any.required': 'تاریخ انقضا الزامی است.',
//       'string.base': 'تاریخ انقضا باید یک رشته باشد.',
//       'custom': 'تاریخ انقضا باید یک تاریخ معتبر باشد.'
//     }),
//   isDamaged: Joi.boolean().required().label('وضعیت خسارت').messages({
//     'any.required': 'وضعیت خسارت الزامی است.',
//     'boolean.base': 'وضعیت خسارت باید یک بولین معتبر باشد.'
//   }),
//   vehicle_cart_photos: Joi.array()
//   .items(Joi.object({
//     file: Joi.object({
//       type: Joi.string().valid('image/jpeg', 'image/png').required(),
//       size: Joi.number().integer().min(1).max(500000).required()
//     }).required(),
//     base64: Joi.string().required()
//   }))
//   .min(1)
//   .label('تصاویر کارت ماشین')
//   .messages({
//     'any.required': 'تصاویر کارت ماشین الزامی هستند.',
//     'array.min': 'حداقل یک تصویر باید انتخاب شود.',
//     'array.items.file.type': 'فایل انتخاب شده باید یک تصویر باشد.',
//     'array.items.file.size': 'حجم فایل نباید بیشتر از 500 کیلوبایت باشد.'
//   })
// });

// export default BadanehSchema;

// badanehSchema.jsx

import Joi, { types } from "joi";

const BadanehSchema = Joi.object({
  address: Joi.string().trim().required().label("آدرس").messages({
    "string.empty": "آدرس الزامی است.",
    "string.base": "آدرس باید یک رشته باشد.",
    "any.required": "آدرس الزامی است.",
  }),
  phone: Joi.string()
    .trim()
    .pattern(/^\d{11}$/)
    .label("شماره تلفن")
    .required()
    .messages({
      "string.pattern.base": "شماره تلفن باید با ۰۹ شروع شده و دقیقاً ۱۱ رقم داشته باشد.",
      "string.empty": "شماره تلفن الزامی است.",
      "string.base": "شماره تلفن باید یک رشته باشد.",
      "any.required": "شماره تلفن الزامی است.",
    })
  .required(),
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
  national_cart_photo: Joi.object({
    type: Joi.string().valid("image/jpeg", "image/png").required(),
    size: Joi.number().integer().min(1).max(500000).required(),
  })
    .required()
    .label("تصویر کارت ملی")
    .messages({
      "any.required": "تصویر کارت ملی الزامی است.",
      "any.size": "تصویر باید کمتر از 500 کیلوبایت باشد.",
    }),
  insurer_photo: Joi.object({
    type: Joi.string().valid("image/jpeg", "image/png").required(),
    size: Joi.number().integer().min(1).max(500000).required(),
  })
    .required()
    .label("تصویر بیمه‌نامه")
    .messages({
      "any.required": "تصاویر بیمه نامه الزامی هستند.",
      "any.size": "تصویر باید کمتر از 500 کیلوبایت باشد.",
    }),
});

export default BadanehSchema;
