import React from "react";
import Header from "./Common/Header";
import { Link } from "react-router-dom";

export const EditAdminReport = () => {
  return (
    <>
      <Header />
      <form className="row mx-0">
        <h5 className="text-center my-3">UPDATE YOUR DETAILS</h5>
        <div className="col-md-3 my-2">
          <label>DATE</label>
          <input type="Date" className="CCInput" />
        </div>
        <div className="col-md-3 my-2">
          <label>BTQ CODE</label>
          <input type="text" className="CCInput" placeholder="BTQ CODE" />
        </div>
        <div className="col-md-3 my-2">
          <label>RSO NAME</label>
          <input type="text" className="CCInput" placeholder="RSO NAME" />
        </div>
        <div className="col-md-3 my-2">
          <label>COLLECTION</label>
          <input type="text" className="CCInput" placeholder="COLLECTION" />
        </div>
        <div className="col-md-3 my-2">
          <label>NEED STATE</label>
          <input type="text" className="CCInput" placeholder="NEED STATE" />
        </div>
        <div className="col-md-3 my-2">
          <label>GROUP</label>
          <input type="text" className="CCInput" placeholder="GROUP" />
        </div>
        <div className="col-md-3 my-2">
          <label>CATEGORY</label>
          <input type="text" className="CCInput" placeholder="CATEGORY" />
        </div>
        <div className="col-md-3 my-2">
          <label>CAT PB</label>
          <input type="text" className="CCInput" placeholder="CAT PB" />
        </div>
        <div className="col-md-3 my-2">
          <label>LENGTH SIZE</label>
          <input type="text" className="CCInput" placeholder="LENGTH SIZE" />
        </div>
        <div className="col-md-3 my-2">
          <label>REQUIRED WEIGHT</label>
          <input
            type="text"
            className="CCInput"
            placeholder="REQUIRED WEIGHT"
          />
        </div>
        <div className="col-md-3 my-2">
          <label>RANGE</label>
          <input type="text" className="CCInput" placeholder="RANGE" />
        </div>
        <div className="col-md-3 my-2">
          <label>REGION</label>
          <input type="text" className="CCInput" placeholder="REGION" />
        </div>
        <div className="col-md-4 my-2">
          <label>CONCEPT</label>
          <input type="text" className="CCInput" placeholder="CONCEPT" />
        </div>
        <div className="col-md-4 my-2">
          <label>URL</label>
          <input type="file" className="CCInput" />
        </div>
        <div className="col-md-4 my-2">
          <label>REMARK</label>
          <input type="text" className="CCInput" placeholder="REMARK" />
        </div>
        <div className="d-flex justify-content-between my-4">
          <Link to="/bottom/up/admin">
            <button className="CButton">GO BACK</button>
          </Link>
          <button type="submit" className="CButton">
            UPDATE
          </button>
        </div>
      </form>
    </>
  );
};
