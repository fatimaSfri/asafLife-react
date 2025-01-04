// thirdSchema.js

import Joi from 'joi';


const ThirdSchema = Joi.object({
  owner_birthday: Joi.string()
    .pattern(/^\d{4}-\d{2}-\d{2}$/)
    .label('تاریخ تولد صاحب پلاک')
    .messages({
      'string.pattern.base': 'تاریخ تولد باید در فرمت YYYY-MM-DD باشد.'
    }),

  phone: Joi.string()
    .length(11)
    .regex(/^[0-9]+$/)
    .label('تلفن همراه')
    .messages({
      'string.length': 'شماره تلفن باید 11 رقم باشد.',
      'string.regex.base': 'شماره تلفن باید شامل فقط اعداد باشد.'
    }),

  address: Joi.string()
    .max(100)
    .label('آدرس دقیق')
    .messages({
      'string.max': 'آدرس نمی‌تواند بیشتر از 100 کاراکتر داشته باشد.'
    }),

  vehicle_cart_photos: Joi.array()
    .items(Joi.object({
      file: Joi.object({
        type: Joi.string().valid('image/jpeg', 'image/png').required(),
        size: Joi.number().integer().min(1).max(500000).required()
      }).required(),
      base64: Joi.string().required()
    }))
    .min(1)
    .label('تصاویر کارت ماشین')
    .messages({
      'array.min': 'حداقل یک تصویر باید انتخاب شود.',
      'array.items.file.type': 'فایل انتخاب شده باید یک تصویر باشد.',
      'array.items.file.size': 'حجم فایل نباید بیشتر از 500 کیلوبایت باشد.'
    }),

  certificate_photo: Joi.object({
    file: Joi.object({
      type: Joi.string().valid('image/jpeg', 'image/png').required(),
      size: Joi.number().integer().min(1).max(500000).required()
    }).required(),
    base64: Joi.string().required()
  })
    .label('تصویر گواهینامه')
    .messages({
      'object.required': 'تصویر گواهینامه الزامی است.',
      'object.file.type': 'فایل انتخاب شده باید یک تصویر باشد.',
      'object.file.size': 'حجم فایل نباید بیشتر از 500 کیلوبایت باشد.'
    })
});

export default ThirdSchema;