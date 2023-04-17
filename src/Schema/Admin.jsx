import * as yup from "yup";

export const AdminInitialValue = {
  needSate: "",
  fromDate: "",
  toDate: "",
};

export const AdminSchema = yup.object({
  needSate: yup.string().required("Please Select Need Sate"),
  fromDate: yup.string().required("Please Select From Date"),
  toDate: yup.string().required("Please Select To Date"),
});
