import Content from "./Content";
import Header from "./Header";
import React, { useState } from "react";
import "../Style/App.css";
import { TextField } from "@material-ui/core";

export default function FirstPage(props) {
  const { btqId, region } = props;
  const [rsoName, setRsoName] = useState("");
  function handlerName(e) {
    setRsoName(e.target.value);
  }

  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="sideBar">
        <div className="SideBarInput">
          <TextField
            variant="filled"
            className="inputRounded"
            style={{
              padding: "5px",
              left: "10px",
            }}
            label="BTQ ID"
            value={btqId}
          />
          <TextField
            variant="filled"
            style={{
              padding: "5px",
              left: "10px",
            }}
            label="REGION"
            value={region}
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
        <div className="reportLast">
          <hr style={{ width: "300%", marginLeft: "8px" }} />
          <button
            className="ReportButton"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/10/29232033/report.jpg";
            }}
          >
            REPORT
          </button>
        </div>
      </div>
      <div className="main">
        <Content btqId={btqId} region={region} rsoName={rsoName} />
      </div>
    </div>
  );
}
