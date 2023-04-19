import React, { useState } from "react";
import Header from "./Common/Header";
import "../Style/Admin.css";
import { Field, Form, Formik } from "formik";
import { AdminInitialValue, AdminSchema } from "../Schema/AdminSchem";
import ShowError from "../Schema/ShowError";
import { BsCheckCircleFill, BsXCircleFill } from "react-icons/bs";
import { NeedSateValues, ReportHeaders, ReportsData } from "../Data/DataList";
import TablePagination from "@mui/material/TablePagination";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

export const Admin = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(50);
  const OnGenerateReports = (payload) => {
    console.log("payload==>", payload);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <Formik
        initialValues={AdminInitialValue}
        validationSchema={AdminSchema}
        onSubmit={(payload, { resetForm }) => {
          OnGenerateReports(payload);
          resetForm();
        }}
      >
        <Form className="row mx-0 my-4">
          <div className="col-md-4">
            <label className="my-1">
              NEED STATE <span className="text-danger">*</span>
            </label>
            <Field as="select" className="CSelect" name="needState">
              <option value="">Select</option>
              {NeedSateValues.map((item, i) => {
                return (
                  <option key={i} value={item.value}>
                    {item.name}
                  </option>
                );
              })}
            </Field>
            <ShowError name="needState" />
          </div>
          <div className="col-md-4 CInput">
            <label className="my-1">
              FROM DATE <span className="text-danger">*</span>
            </label>
            <Field type="Date" className="CSelect" name="fromDate" />
            <ShowError name="fromDate" />
          </div>
          <div className="col-md-4 CInput">
            <label className="my-1">
              TO DATE <span className="text-danger">*</span>
            </label>
            <Field type="Date" className="CSelect" name="toDate" />
            <ShowError name="toDate" />
          </div>
          <div className="d-flex justify-content-end GButton my-4">
            <button type="submit" className="CButton">
              GENERATE
            </button>
          </div>
        </Form>
      </Formik>
      <div className="table table-responsive p-1">
        <table
          className="table table-bordered"
          id="table-to-xls"
          style={{ border: "1px solid black" }}
        >
          <thead>
            <tr>
              {ReportHeaders.map((item, i) => {
                return <th key={i}>{item.Headers}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {ReportsData.slice(
              page * rowsPerPage,
              page * rowsPerPage + rowsPerPage
            ).map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item.date}</td>
                  <td>{item.name}</td>
                  <td>{item.name}</td>
                  <td>{item.name}</td>
                  <td>{item.name}</td>
                  <td>{item.name}</td>
                  <td>{item.name}</td>
                  <td>{item.name}</td>
                  <td>{item.name}</td>
                  <td>{item.name}</td>
                  <td>{item.name}</td>
                  <td>{item.name}</td>
                  <td>{item.name}</td>
                  <td>{item.name}</td>
                  <td className="d-flex justify-content-evenly">
                    <BsCheckCircleFill size={17} className="text-success" />
                    <BsXCircleFill size={17} className="text-danger" />
                  </td>
                  <td>{item.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="d-flex justify-content-end my-2">
          <ReactHTMLTableToExcel
            id="test-table-xls-button"
            className="excelButton"
            table="table-to-xls"
            filename="reports"
            sheet="tablexls"
            buttonText="DOWNLOAD"
          />
          <TablePagination
            rowsPerPageOptions={[50, 100, 150, ReportsData.length]}
            component="div"
            count={ReportsData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      </div>
    </>
  );
};
