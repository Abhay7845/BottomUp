import Content from "./Content";
import Header from "./Header";
import React, { useState } from "react";
import "./App.css";
import { TextField } from "@material-ui/core";

export default function FirstPage(props) {
  const [rsoName, setRsoName] = useState("");
  function handlerName(e) {
    setRsoName(e.target.value);
  }
  const btqId = props.btqId;
  const region = props.region;
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="sideBar">
        <div className="e-input">
          <TextField
            variant="filled"
            className="inputRounded"
            style={{
              padding: "5px",
              left: "10px",
            }}
            label="BTQ ID"
            value={props.btqId}
          />
          <TextField
            variant="filled"
            style={{
              padding: "5px",
              left: "10px",
            }}
            label="REGION"
            value={props.region}
          />
          <TextField
            variant="filled"
            style={{
              padding: "5px",
              left: "10px",
            }}
            label="RSOName"
            value={rsoName}
            onChange={handlerName}
            required
          />
        </div>
        <div className="reprotlast">
          <hr />
          <button
            style={{
              backgroundColor: "#F0E9E9",
              width: "199.59px",
              height: "45px",
            }}
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/10/29232033/report.jpg";
            }}
          >
            Report
          </button>
        </div>
      </div>

      <div className="main">
        <Content btqId={btqId} region={region} rsoName={rsoName} />
      </div>
    </div>
  );
}
