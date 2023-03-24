import { FormControl, MenuItem, TextField } from "@material-ui/core";
import React from "react";
import "../Style/App.css";

function TextFieldOfMUI(props) {
  const { label, type, textFieldHandlerChange, value, name } = props;
  return (
    <>
      <TextField
        fullWidth
        id="outlined-basic"
        label={label}
        type={type}
        variant="outlined"
        onChange={textFieldHandlerChange}
        value={value}
        name={name}
        required
      />
    </>
  );
}

const SelectOfMUI = (props) => {
  const { optionList, selectHandleChange, value, name, placeholder, required } =
    props;
  console.log("required==>", required);

  return (
    <>
      <FormControl fullWidth variant="outlined">
        <TextField
          label={placeholder}
          value={value}
          onChange={selectHandleChange}
          name={name}
          variant="outlined"
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
