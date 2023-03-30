import React from "react";
import { FormControl, MenuItem, TextField } from "@material-ui/core";
import "../Style/App.css";

function TextFieldOfMUI(props) {
  const { label, type, textFieldHandlerChange, value, name } = props;

  return (
    <>
      <TextField
        fullWidth
        label={label}
        type={type}
        variant="standard"
        onChange={textFieldHandlerChange}
        value={value}
        name={name}
      />
    </>
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
      <FormControl fullWidth variant="standard">
        <TextField
          label={placeholder}
          value={value}
          onChange={selectHandleChange}
          name={name}
          variant="standard"
          onSelect={handleChange}
          select
        >
          {optionList.map((element) => {
            return (
              <MenuItem key={element} value={element}>
                {element}
              </MenuItem>
            );
          })}
        </TextField>
      </FormControl>
    </>
  );
};

export { TextFieldOfMUI, SelectOfMUI };
