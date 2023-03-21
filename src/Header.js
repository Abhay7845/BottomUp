import React from "react";
import "./Title.css";
import tanshiq from "./tanishq.svg";

export default function Header() {
  return (
    <div className="top_header">
      <img src={tanshiq} alt="tanishqLogo" height="30px" className="mx-5" />
      <div className="left my-3" style={{ color: "#832729" }}>
        <h4>TANISHQ BOTTOMUP FEEDBACK FORM</h4>
      </div>
    </div>
  );
}
