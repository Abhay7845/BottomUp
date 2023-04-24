import React from "react";
import { FormControl } from "@material-ui/core";
import "../Style/App.css";

function TextFieldOfMUI(props) {
  const { label, type, textFieldHandlerChange, value, name } = props;
  console.log("value==>", value);

  return (
    <FormControl>
      <label>
        {label}
        <span className="text-danger"> *</span>
      </label>
      <input
        placeholder={label}
        type={type}
        onChange={textFieldHandlerChange}
        value={value}
        name={name}
        className="CCInput"
      />
    </FormControl>
  );
}

const SelectOfMUI = (props) => {
  const {
    optionList,
    selectHandleChange,
    value,
    name,
    placeholder,
    handleChange,
  } = props;

  return (
    <>
      <FormControl>
        <label>
          {placeholder}
          <span className="text-danger"> *</span>
        </label>
        <select
          label={placeholder}
          value={value}
          onChange={selectHandleChange}
          name={name}
          onSelect={handleChange}
          className="CSelect"
        >
          <option value="">Select</option>
          {optionList.map((element) => {
            return (
              <option key={element} value={element}>
                {element}
              </option>
            );
          })}
        </select>
      </FormControl>
    </>
  );
};

export { TextFieldOfMUI, SelectOfMUI };
