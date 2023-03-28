// /*global google*/
import React, { useState } from "react";
import axios from "axios";
import "../Style/Login.css";
// import jwt_decode from "jwt-decode";
import { FaLock } from "react-icons/fa";
import "../Style/index.css";
import { useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { LoginInitialValue, LoginSchema } from "../Schema/LoginSchema";
import ShowError from "../Schema/ShowError";

export default function Login() {
  const [availableCount, setAvailableCount] = useState("");
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
    const { username, password, rsoName } = payload;
    console.log(username, password, rsoName);
    axios
      .get(
        `https://tanishqdigitalnpim.titan.in:8443/bottomUp/BottomUp//getRegion/`
      )
      .then((response) => {
        setLoading(true);
        console.log("response==>", response.data);
        setAvailableCount(response.data.value.availableCount);
        localStorage.setItem("btqId", response.data.value.btqCode);
        localStorage.setItem("region", response.data.value.region);
        if (response.data.status === true) {
          navigate("/bottom/up/feedback/form");
        }
        setLoading(false);
      })
      .catch((error) => console.log("error=>", error));
  };

  console.log("availableCount==>", availableCount);

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
      <div className="row mx-0">
        <div className="col RegisterLeftStyle"></div>
        <div className="col RegisterLeftRight">
          <div className="text-center my-4" style={{ color: "#832729" }}>
            <FaLock size={30} />
            <h4>BOTTOM UP LOGIN</h4>
          </div>
          <Formik
            initialValues={LoginInitialValue}
            validationSchema={LoginSchema}
            onSubmit={(payload) => onLogin(payload)}
          >
            <Form>
              <div className="my-2">
                <b>
                  Username <span className="text-danger"> *</span>
                </b>
                <Field
                  placeholder="Username"
                  name="username"
                  className="GInput"
                />
                <ShowError name="username" />
              </div>
              <div className="my-2">
                <b>
                  Password <span className="text-danger"> *</span>
                </b>
                <Field
                  type={passwordShown ? "text" : "password"}
                  placeholder="Password"
                  className="GInput"
                  name="password"
                />
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
              <div className="d-flex justify-content-between mx-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    onClick={togglePassword}
                  />
                  <span style={{ color: "#832729" }}>Show Password</span>
                </div>
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
