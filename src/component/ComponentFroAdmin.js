import { FormControl, MenuItem, TextField } from "@material-ui/core";
import React from "react";
import "./index.css";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-input": {
      color: "#83272980",
    },
    "& .MuiInputLabel-root": {
      color: "#83272980",
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#83272980",
    },
    "&:hover .MuiOutlinedInput-input": {
      color: "#bd2632",
    },
    "&:hover .MuiInputLabel-root": {
      color: "#bd2632",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#bd2632",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "#bd2632",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#bd2632",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#bd2632",
    },
  },
});

function TextFieldOfMUI(props) {
  const classes = useStyles();
  const { label, type, textFieldHandlerChange, value, name } = props;
  return (
    <>
      <TextField
        className={classes.root}
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
  const classes = useStyles();
  const { optionList, selectHandleChange, value, name, placeholder } = props;
  return (
    <>
      <FormControl fullWidth variant="outlined" required>
        <TextField
          label={placeholder}
          className={classes.root}
          value={value}
          onChange={selectHandleChange}
          name={name}
          variant="outlined"
          required
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
