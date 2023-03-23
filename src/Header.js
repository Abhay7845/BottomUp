import React from "react";
import "./Title.css";
import tanshiq from "./tanishq.svg";

export default function Header() {
  return (
    // <div className="top_header">
    //   <div>
    //     <img src={tanshiq} alt="tanishqLogo" className="Logo" />
    //   </div>
    //   <div className="Top_heading mx-3">TANISHQ BOTTOMUP FEEDBACK FORM</div>
    // </div>
    <>
      <nav className="navbar top_header">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            <img src={tanshiq} alt="tanishqLogo" className="Logo" />
          </span>
          <div className="Top_heading mx-3">
            TANISHQ BOTTOM-UP FEEDBACK FORM
          </div>
        </div>
      </nav>
    </>
  );
}
