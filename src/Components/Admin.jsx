import React from "react";
import Header from "./Common/Header";
import "../Style/Admin.css";
import { Field, Form, Formik } from "formik";
import { AdminInitialValue, AdminSchema } from "../Schema/AdminSchem";
import ShowError from "../Schema/ShowError";

export const Admin = () => {
  const OnGenerateReports = (payload) => {
    console.log("payload==>", payload);
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
              <option>NeedState</option>
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
          style={{ border: "1px solid black" }}
        >
          <thead>
            <tr>
              <th>Date</th>
              <th>BTQCode</th>
              <th>RSOName</th>
              <th>Collection</th>
              <th>NeedState</th>
              <th>Group</th>
              <th>Category</th>
              <th>CatPB</th>
              <th>LengthSize</th>
              <th>RequiredWeight</th>
              <th>Range</th>
              <th>Concept</th>
              <th>Region</th>
              <th>URL</th>
              <th>Action</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
