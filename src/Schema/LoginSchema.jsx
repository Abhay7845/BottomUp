/* eslint-disable no-useless-escape */
import * as yup from "yup";

export const LoginInitialValue = {
  userName: "",
  password: "",
  rsoName: "",
};

export const LoginSchema = yup.object({
  userName: yup.string().required("Username is required"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g,
      "Password should be strong"
    )
    .min(8, "Minimum 8 character"),
  rsoName: yup.string().required("RSO Name Is required"),
});
