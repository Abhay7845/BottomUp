import React from "react";
import "../Style/Title.css";
import logo from "../../src/Asset/Img/tanishq.svg";

export default function Header() {
  return (
    <>
      <nav className="navbar top_header">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            <img src={logo} alt="Logo" className="Logo" />
          </span>
          <div className="Top_heading mx-3">
            TANISHQ BOTTOM-UP FEEDBACK FORM
          </div>
        </div>
      </nav>
    </>
  );
}
