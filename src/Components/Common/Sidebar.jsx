import React from "react";
import { TextField } from "@material-ui/core";

const Sidebar = () => {
  const btqId = localStorage.getItem("btqId");
  const region = localStorage.getItem("region");
  const rsoName = localStorage.getItem("rsoName");
  return (
    <>
      <div className="sideBar">
        <div className="SideBarInput">
          <TextField variant="filled" label="BTQ ID" value={btqId} />
          <TextField
            variant="filled"
            label="REGION"
            value={region}
            className="my-2"
          />
          <TextField variant="filled" label="RSO Name" value={rsoName} />
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
    </>
  );
};

export default Sidebar;
