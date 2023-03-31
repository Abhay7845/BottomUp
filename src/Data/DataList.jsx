import * as yup from "yup";

export const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "x",
  "Y",
  "Z",
];

export const formInitialValue = {
  collection: "",
  needState: "",
  group: "",
  category: "",
  catPB: "",
  desiredLength: "",
  weight: "",
  range: "",
};

export const formSchema = yup.object({
  collection: yup.string().required("Collection is required"),
  needState: yup.string().required("NeedState is required"),
  group: yup.string().required("Group is required"),
  category: yup.string().required("Category is required"),
  catPB: yup.string().required("Cat PB is required"),
  desiredLength: yup.string().required("dDesired Length is required"),
  weight: yup.string().required("Weight is required"),
  range: yup.string().required("Range is required"),
});
