import React from "react";
import "../Style/App.css";

function TextFieldOfMUI(props) {
  const { label, type, textFieldHandlerChange, value, name } = props;

  return (
    <div className="w-100">
      <label>
        {label}
        <span className="text-danger"> *</span>
      </label>
      <input
        placeholder={label}
        type={type}
        onChange={textFieldHandlerChange}
        defaultValue={value}
        name={name}
        className="CCInput"
      />
    </div>
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
      <div className="w-100">
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
      </div>
    </>
  );
};

export { TextFieldOfMUI, SelectOfMUI };
