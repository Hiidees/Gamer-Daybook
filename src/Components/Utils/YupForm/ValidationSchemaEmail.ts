import * as Yup from "yup";

export const validationSchemaEmail = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Email is invalid"),
  message: Yup.string()
    .required("Message is required"),
});
