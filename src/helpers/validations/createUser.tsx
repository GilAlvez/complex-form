import * as yup from "yup";

export const stepOneValidation = yup.object({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  genre: yup.string().required(),
  birthday: yup.date().max(new Date()).required(),
  phone: yup.string().required(), // Has Dynamic Input Mask
  description: yup.string().required().min(5).max(255),
  website: yup.string().url().required(),
  tags: yup.array().min(1).max(6),
});
export const stepTwoValidation = yup.object({
  email: yup.string().required(),
});
export const stepThreeValidation = yup.object({
  email: yup.string().required(),
});
export const stepFourValidation = yup.object({
  email: yup.string().required(),
});
