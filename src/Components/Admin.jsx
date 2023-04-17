import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Header from "./Common/Header";
import "../Style/Admin.css";
import { Form, Formik } from "formik";

export const Admin = () => {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <Formik>
        <Form className="row mx-0 my-5">
          <div className="col-md-3">
            <FormControl className="w-100">
              <InputLabel>NeedSate</InputLabel>
              <Select label="NeedSate">
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="col-md-3 CInput">
            <TextField label="From Date" variant="outlined" className="w-100" />
          </div>
          <div className="col-md-3 CInput">
            <TextField label="To Date" variant="outlined" className="w-100" />
          </div>
          <div className="col-md-3 GButton">
            <Button variant="contained">Generate Reports</Button>
          </div>
        </Form>
      </Formik>
    </>
  );
};
