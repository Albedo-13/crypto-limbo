import * as yup from "yup";

export const loginSchema = yup
  .object({
    username: yup
      .string()
      .required("Field is required")
      .test('emailOrPhoneValidation', 'Email / Phone is invalid', (value) => {
        return validateEmail(value) || validatePhone(value);
      }),
    password: yup
      .string()
      .required("Field is required")
      .min(8)
      .max(25),
  })
  .required();

export const signupSchema = yup
  .object({
    name: yup
      .string()
      .min(2, "Must be at least 2 characters")
      .max(25, "Must be max 25 characters"),
    fname: yup
      .string()
      .min(2, "Must be at least 2 characters")
      .max(25, "Must be max 25 characters"),
    phone: yup
      .string()
      .required("Phone is required")
      .test("phoneValidation", "Phone is invalid", (value) => validatePhone(value)),
    email: yup
      .string()
      .required("Email is required")
      .test("emailValidation", "Email is invalid", (value) => validateEmail(value)),
    password: yup
      .string()
      .required("Field is required")
      .min(8)
      .max(25),
  })
  .required();

export const forgotPasswordSchema = yup
  .object({
    username: yup
      .string()
      .required("Field is required")
      .test('emailOrPhoneValidation', 'Email / Phone is invalid', (value) => {
        return validateEmail(value) || validatePhone(value);
      }),
      oneTimeCode: yup
      .string()
      .min(6, "Must be at least 6 characters")
      .max(9, "Must be max 9 characters"),
  })
  .required();

const validateEmail = (email) => {
  return yup.string().email().isValidSync(email);
};

const validatePhone = (phone) => {
  return yup.string().matches(/^[+]?[(]?\d{3}\)?[-\s.]?\d{3}[-\s.]?\d{4,6}$/).isValidSync(phone);
};
