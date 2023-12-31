import * as yup from "yup";

export const loginSchema = yup
  .object({
    username: yup
      .string()
      .required("Field is required")
      .test("emailOrPhoneValidation", "Email / Phone is invalid", (value) => {
        return validateEmail(value) || validatePhone(value);
      }),
    password: yup
      .string()
      .required("Field is required")
      .min(8)
      .max(32),
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
      .max(32, "Must be max 32 characters"),
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
      .max(25)
      .test("isContainLettersValidation", "Requires both lower & upper case letter", (value) => {
        return validatePasswordLetters(value);
      })
      .test("isContainDigitValidation", "Requires at least 1 digit", (value) => {
        return validatePasswordDigits(value);
      }),
  })
  .required();

export const forgotPasswordSchema = yup
  .object({
    username: yup
      .string()
      .required("Field is required")
      .test("emailOrPhoneValidation", "Email / Phone is invalid", (value) => {
        return validateEmail(value) || validatePhone(value);
      }),
    oneTimeCode: yup
      .string()
      .min(6, "Must be at least 6 characters")
      .max(9, "Must be max 9 characters"),
  })
  .required();

export const newPasswordSchema = yup
  .object({
    newPassword: yup
      .string()
      .required("Field is required")
      .min(8, "At least 8 characters")
      .max(32, "Must be max 32 characters")
      .test("isContainLettersValidation", "Requires lower & upper case letters", (value) => {
        return validatePasswordLetters(value);
      })
      .test("isContainDigitValidation", "Requires at least 1 digit", (value) => {
        return validatePasswordDigits(value);
      }),
    confirmPassword: yup
      .string()
      .required("Field is required")
      .test("isPasswordsEqualValidation", "Passwords don't match", (value, context) => {
        return value === context.parent.newPassword;
      }),
  })
  .required();

export const buySellSchema = yup.object({
  price: yup
    .number()
    .typeError("Amount must be a number")
    .required("Field is required")
    .min(1, "1$ min")
    .max(100000, "100,000$ max")
    .test("floatPriceValidation", "Max 2 symbols of decimal (.xx)", (value) => {
      return validateFloatPrice(value);
    }),

  quantity: yup
    .number()
    .typeError("Amount must be a number")
    .required("Field is required")
    .min(0.01, "0.01$ min")
    .test("floatCoinQuantityValidation", "Max 6 symbols of decimal (.xxxxxx)", (value) => {
      return validateFloatCoinQuantity(value);
    }),
});

const validateEmail = (email) => {
  return yup.string().email().isValidSync(email);
};

const validatePhone = (phone) => {
  return yup
    .string()
    .matches(/^[+]?[(]?\d{3}\)?[-\s.]?\d{3}[-\s.]?\d{4,6}$/)
    .isValidSync(phone);
};

const validatePasswordLetters = (password) => {
  return yup
    .string()
    .matches(/[A-Z]+/)
    .matches(/[a-z]+/)
    .isValidSync(password);
}

const validatePasswordDigits = (password) => {
  return yup
    .string()
    .matches(/[0-9]+/)
    .isValidSync(password);
}

const validateFloatPrice = (number) => {
  return yup
    .string()
    .matches(/^[+]?[0-9]*([.,][0-9]{1,2})?$/)
    .isValidSync(number);
}

const validateFloatCoinQuantity = (number) => {
  return yup
    .string()
    .matches(/^[+]?[0-9]*([.,][0-9]{1,6})?$/)
    .isValidSync(number);
}
