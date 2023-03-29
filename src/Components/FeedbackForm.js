import Content from "./Content";
import Header from "./Header";
import React, { useState } from "react";
import "../Style/App.css";
import { TextField } from "@material-ui/core";

export default function FirstPage(props) {
  const { showAlert } = props;
  const [rsoName, setRsoName] = useState("");
  function handlerName(e) {
    setRsoName(e.target.value);
  }
  const btqId = localStorage.getItem("btqId");
  const region = localStorage.getItem("region");
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="sideBar">
        <div className="SideBarInput">
          <TextField variant="filled" label="BTQ ID" value={btqId} />
          <TextField
            variant="filled"
            label="REGION"
            value={region}
            className="my-2"
          />
          <TextField
            variant="filled"
            label="RSO Name"
            value={rsoName}
            onChange={handlerName}
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
        <Content
          btqId={btqId}
          region={region}
          rsoName={rsoName}
          showAlert={showAlert}
        />
      </div>
    </div>
  );
}
