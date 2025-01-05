// BadanehSchemaValidator.jsx
import Joi from 'joi';

const convertDateToISO = (dateString) => {
  const date = new Date(dateString);
  return date.toISOString();
};

const BadanehSchema = Joi.object({
  insurer_code: Joi.string().required().label('شماره بیمه').messages({
    'any.required': 'شماره بیمه الزامی است.',
    'string.base': 'شماره بیمه باید یک رشته باشد.'
  }),
  expiration_insurer_date: Joi.string()
    .required()
    .pattern(/^\d{4}\/\d{2}\/\d{2}$/)
    .label('تاریخ انقضا')
    .custom((value, helpers) => {
      const date = new Date(value);
      if (isNaN(date.getTime())) {
        return helpers.message({ custom: 'تاریخ انقضا باید یک تاریخ معتبر باشد.' });
      }
      return value;
    })
    .messages({
      "string.pattern.base": "تاریخ تولد باید در فرمت YYYY/MM/DD باشد.",
      'any.required': 'تاریخ انقضا الزامی است.',
      'string.base': 'تاریخ انقضا باید یک رشته باشد.',
      'custom': 'تاریخ انقضا باید یک تاریخ معتبر باشد.'
    }),
  isDamaged: Joi.boolean().required().label('وضعیت خسارت').messages({
    'any.required': 'وضعیت خسارت الزامی است.',
    'boolean.base': 'وضعیت خسارت باید یک بولین معتبر باشد.'
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
    'any.required': 'تصاویر کارت ماشین الزامی هستند.',
    'array.min': 'حداقل یک تصویر باید انتخاب شود.',
    'array.items.file.type': 'فایل انتخاب شده باید یک تصویر باشد.',
    'array.items.file.size': 'حجم فایل نباید بیشتر از 500 کیلوبایت باشد.'
  })
});

export default BadanehSchema;