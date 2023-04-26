import React, { useEffect } from "react";
import "../../Style/Title.css";
import logo from "../../../src/Asset/Img/tanishq.svg";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useNavigate } from "react-router-dom";

export default function Header() {
  let navigate = useNavigate();
  const UserRole = localStorage.getItem("UserRole").toLocaleUpperCase();
  const removeUserRole = () => {
    localStorage.removeItem("UserRole");
    navigate("/Bottom_Up");
  };
  useEffect(() => {}, [UserRole]);
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
          <b style={{ color: "#832729" }}>
            {UserRole}
            <ExitToAppIcon
              size={15}
              className="LogoutButton"
              onClick={removeUserRole}
            />
          </b>
        </div>
      </nav>
    </>
  );
}
