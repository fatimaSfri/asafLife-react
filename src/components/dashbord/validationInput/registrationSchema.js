import Joi from "joi";

export const registrationSchema = Joi.object({
  name: Joi.string()
    .required()
    .messages({
      "string.empty": "لطفا یک گزینه انتخاب کنید.",
      "any.required": "انتخاب شرکت بیمه الزامی است.",
    }),
  selectedFile: Joi.any()
    .required()
    .custom((file, helpers) => {
      if (!file || !(file instanceof File)) {
        return helpers.error("file.required");
      }

      const validFormats = ["image/jpeg", "image/png", "image/jpg"];
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
