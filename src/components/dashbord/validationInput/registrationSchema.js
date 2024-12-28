import Joi from "joi";

export const registrationSchema = Joi.object({
  name: Joi.string()
    .regex(/^[\u0600-\u06FF\s]+$/)
    .max(50)
    .required()
    .messages({
      "string.empty": "لطفا نام شرکت بیمه را وارد کنید.",
      "string.pattern.base": "نام شرکت بیمه باید فقط شامل حروف فارسی باشد.",
      "string.max": "نام شرکت بیمه نمی‌تواند بیش از ۵۰ کاراکتر باشد.",
      "any.required": "فیلد نام الزامی است.",
    }),

  selectedFile: Joi.any()
    .required()
    .custom((file, helpers) => {
      if (!file || !(file instanceof File)) {
        return helpers.error("file.required");
      }

      const validFormats = ["image/jpeg", "image/png", "image/jpg" , "image/webp"];
      if (!validFormats.includes(file.type)) {
        return helpers.error("file.invalidFormat");
      }

      if (file.size > 500 * 1024) {
        return helpers.error("file.maxSize");
      }

      return file;
    })
    .messages({
      "file.required": "انتخاب آواتار الزامی است.",
      "file.invalidFormat": "فرمت فایل باید یکی از jpeg, png یا jpg باشد.",
      "file.maxSize": "حجم فایل نباید بیشتر از ۵۰۰ کیلوبایت باشد.",
    }),
});
