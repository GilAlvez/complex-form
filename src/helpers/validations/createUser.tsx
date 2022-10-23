import * as yup from "yup";

yup.setLocale({
  mixed: { required: "Required field" },
  string: {
    min: "Minimum characters allowed is ${min}",
    max: "Maximum characters allowed is ${max}",
    email: "Please use a valid e-mail",
    url: "Please use a valid URL, e.g. https://mysite.com",
  },
  date: { min: "Minimum date is ${min}", max: "Cannot be a date in the future" },
  array: {
    min: "Minimum number of items allowed is ${min}",
    max: "Maximum number of items allowed is ${max}",
  },
});

export const stepOneSchema = yup.object({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  genre: yup.string().required(),
  birthday: yup.date().min("2010-01-01").max(new Date()),
  phone: yup.string().required().min(9),
  description: yup.string().required().min(5).max(255),
  website: yup.string().required().url(),
  tags: yup.array().min(1).max(6),
});
export const stepTwoSchema = yup.object({
  city: yup.string().nullable().required(),
  country: yup.string().nullable().required(),
  postal_code: yup.string().nullable().required(),
  state: yup.string().nullable().required(),
  street: yup.string().nullable().required(),
});
export const stepThreeSchema = yup.object({
  plan_id: yup.string().required("Please select a plan").oneOf(["1", "2", "3"]),
});
export const stepFourSchema = yup.object({
  avatar: yup.mixed().required(),
  email: yup.string().email().required(),
  username: yup
    .string()
    .required()
    .matches(
      /^[A-Za-z][A-Za-z0-9-_.]+[A-Za-z0-9]$/,
      "Only letters in start, symbols(_ . -), no spaces and no symbols at the end"
    )
    .min(5)
    .max(18),
  password: yup
    .string()
    .required()
    .min(8)
    .matches(/[0-9]/, "A number required")
    .matches(/[a-z]/, "A lowercase letter required")
    .matches(/[A-Z]/, "A uppercase letter required")
    .matches(/[^\w]{1,4}/, "A symbol required, max 4")
    .max(25),
});
