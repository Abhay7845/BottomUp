import React, { useState } from "react";
import Header from "./Common/Header";
import "../Style/Admin.css";
import { Field, Form, Formik } from "formik";
import { AdminInitialValue, AdminSchema } from "../Schema/AdminSchem";
import ShowError from "../Schema/ShowError";
import { BsCheckCircleFill, BsXCircleFill } from "react-icons/bs";
import { NeedSateValues, ReportHeaders } from "../Data/DataList";
import TablePagination from "@mui/material/TablePagination";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import axios from "axios";
import moment from "moment";

export const Admin = (props) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(50);
  const [ReportsData, setReportsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { showAlert } = props;

  const OnGenerateReports = (payload) => {
    setLoading(true);
    const { needState, fromDate, toDate } = payload;
    axios
      .get(
        `https://tanishqdigitalnpim.titan.in:8443/bottomUp/BottomUp/admin/report/${needState}/${fromDate}/${toDate}`
      )
      .then((res) => res)
      .then((response) => {
        if (response.data.code === "1000") {
          setReportsData(response.data.value);
          showAlert("Data Fetched Successfully", "success");
        }
        if (response.data.code === "1001") {
          showAlert("Data Not Found", "danger");
        }
        setLoading(false);
      })
      .catch((error) => console.log("error==>", error));
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
      <br />
      <Formik
        initialValues={AdminInitialValue}
        validationSchema={AdminSchema}
        onSubmit={(payload, { resetForm }) => {
          OnGenerateReports(payload);
          resetForm();
        }}
      >
        <Form className="row mx-0">
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
              {loading ? (
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                />
              ) : (
                <span className="sr-only">GENERATE</span>
              )}
            </button>
          </div>
        </Form>
      </Formik>
      {ReportsData.length > 0 && (
        <div className="table table-responsive p-1">
          <table
            className="table table-bordered text-center"
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
                    <td>{moment(item.date).format("DD/MM/YYYY")}</td>
                    <td>{item.btqCode}</td>
                    <td>{item.rsoName}</td>
                    <td>{item.collection}</td>
                    <td>{item.needState}</td>
                    <td>{item.group}</td>
                    <td>{item.category}</td>
                    <td>{item.catPB}</td>
                    <td>{item.lenghtSize}</td>
                    <td>{item.requiredWeight}</td>
                    <td>{item.range}</td>
                    <td>{item.concept}</td>
                    <td>{item.region}</td>
                    <td>{item.url}</td>
                    <td className="ActionStyle">
                      {item.action === "Accepted" ? (
                        <BsCheckCircleFill size={17} className="text-success" />
                      ) : (
                        <BsXCircleFill size={17} className="text-danger" />
                      )}
                    </td>
                    <td>{item.remark}</td>
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
      )}
    </>
  );
};
