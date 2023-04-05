// /*global google*/
import React, { useState } from "react";
import axios from "axios";
import "../Style/Login.css";
// import jwt_decode from "jwt-decode";
import "../Style/index.css";
import { useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { LoginInitialValue, LoginSchema } from "../Schema/LoginSchema";
import ShowError from "../Schema/ShowError";
import image from "../Asset/Img/Tanishq_Logo1.png";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

export default function Login(props) {
  const { showAlert } = props;
  const [passwordShown, setPasswordShown] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // function handleCallbackResponse(response) {
  //   var userObject = jwt_decode(response.credential);
  //   setUser(userObject);
  // }
  // useEffect(() => {
  //   google.accounts.id.initialize({
  //     client_id:
  //       "957490624222-3qff6c9c7l2nm2inrerd7ge27otke5ok.apps.googleusercontent.com",
  //     callback: handleCallbackResponse,
  //     auto_select: false,
  //   });
  //   google.accounts.id.renderButton(document.getElementById("signInDiv"), {
  //     width: "250",
  //   });
  // }, []);

  const onLogin = (payload) => {
    setLoading(true);
    const { userName, password, rsoName } = payload;
    localStorage.setItem("rsoName", rsoName);
    const inputData = {
      userName,
      password,
    };
    axios
      .post(
        "https://tanishqdigitalnpim.titan.in:8443/bottomUp/BottomUp/bottomUp/user/login",
        inputData
      )
      .then((response) => {
        console.log("response==>", response);
        localStorage.setItem("btqId", response.data.value.userName);
        localStorage.setItem("region", response.data.value.region);
        if (response.data.code === "1000") {
          navigate("/bottom/up/feedback/form");
          showAlert("Logged in Successfully", "success");
        }
        if (response.data.code === "1001") {
          showAlert("Please enter valid Username and Password!", "danger");
        }
        setLoading(false);
      })
      .catch((error) => console.log("error=>", error));
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <>
      {/* <center>
        <header className="LoginPage shadow">
          <br />
          <h2>Welcome to Bottom UP</h2>
          <br />
          <br />
          <h4 className="my-3">Continue with Your Email</h4>
          <button id="signInDiv" className="LoginButton" />
        </header>
      </center> */}
      <div className="col RegisterLeftRight">
        <div className="Form_style">
          <div className="text-center" style={{ color: "#832729" }}>
            <img src={image} alt="tanishq" height="60" width="70" />
          </div>
          <Formik
            initialValues={LoginInitialValue}
            validationSchema={LoginSchema}
            onSubmit={(payload) => onLogin(payload)}
          >
            <Form>
              <div className="my-1">
                <b>
                  Username <span className="text-danger"> *</span>
                </b>
                <Field
                  placeholder="Username"
                  name="userName"
                  className="GInput"
                />
                <ShowError name="userName" />
              </div>
              <div className="my-2">
                <b>
                  Password <span className="text-danger"> *</span>
                </b>
                <div className="d-flex ">
                  <Field
                    type={passwordShown ? "text" : "password"}
                    placeholder="Password"
                    className="GInput"
                    name="password"
                  />
                  <span className="border-bottom">
                    {passwordShown ? (
                      <FaRegEye
                        size={20}
                        or="pointer"
                        onClick={togglePassword}
                        style={{ marginTop: 15 }}
                      />
                    ) : (
                      <FaRegEyeSlash
                        size={20}
                        cursor="pointer"
                        onClick={togglePassword}
                        style={{ marginTop: 15 }}
                      />
                    )}
                  </span>
                </div>
                <ShowError name="password" />
              </div>
              <div className="my-2">
                <b>
                  RSO Name <span className="text-danger"> *</span>
                </b>
                <Field
                  placeholder="RSO Name"
                  className="GInput"
                  name="rsoName"
                />
                <ShowError name="rsoName" />
              </div>
              <div className="d-flex justify-content-end">
                <button type="submit" className="CButton">
                  {loading ? (
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    />
                  ) : (
                    <span className="sr-only">LOGIN</span>
                  )}
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}
