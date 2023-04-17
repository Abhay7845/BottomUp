import * as yup from "yup";

export const AdminInitialValue = {
  needState: "",
  fromDate: "",
  toDate: "",
};

export const AdminSchema = yup.object({
  needState: yup.string().required("Please Select Need State"),
  fromDate: yup.string().required("Please Select From Date"),
  toDate: yup.string().required("Please Select To Date"),
});
