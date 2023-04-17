import Content from "./Content";
import Header from "./Common/Header";
import React from "react";
import "../Style/App.css";
import Sidebar from "./Common/Sidebar";

export default function FirstPage(props) {
  const { showAlert } = props;
  const btqId = localStorage.getItem("btqId");
  const region = localStorage.getItem("region");
  const rsoName = localStorage.getItem("rsoName");
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <Sidebar />
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
