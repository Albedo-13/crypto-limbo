import * as yup from "yup";

export const validationSchema = yup
  .object({
    username: yup
      .string()
      .required("Field is required")
      .test('email_or_phone', 'Email / Phone is invalid', (value) => {
        return validateEmail(value) || validatePhone(value);
      }),

    password: yup
      .string()
      .required("Field is required")
      .min(8)
      .max(25),
  })
  .required();

const validateEmail = (email) => {
  return yup.string().email().isValidSync(email);
};

const validatePhone = (phone) => {
  return yup.string().matches(/^[+]?[(]?\d{3}\)?[-\s.]?\d{3}[-\s.]?\d{4,6}$/).isValidSync(phone);
};
