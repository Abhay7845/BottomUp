import React from "react";
import ReactDOM from "react-dom";

import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: 200,
    "& .MuiOutlinedInput-input": {
      color: "green",
    },
    "& .MuiInputLabel-root": {
      color: "green",
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "green",
    },
    "&:hover .MuiOutlinedInput-input": {
      color: "red",
    },
    "&:hover .MuiInputLabel-root": {
      color: "red",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "red",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "purple",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "purple",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "purple",
    },
  },
});

function App() {
  const [age, setAge] = React.useState("");
  const classes = useStyles();
  return (
    <div className="App">
      <TextField
        className={classes.root}
        value={age}
        onChange={(e) => setAge(e.target.value)}
        variant="outlined"
        label="My Label"
        select
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </TextField>
    </div>
  );
}
