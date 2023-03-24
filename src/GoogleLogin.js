/*global google*/
import React, { useState, useEffect } from "react";
import FirstPage from "./FirstPage";
import axios from "axios";
import jwt_decode from "jwt-decode";

export default function Login() {
  const [user, setUser] = useState("");
  const [checkMail, setCheckMail] = useState();
  const [btqId, setBtqId] = useState("");
  const [region, setRegion] = useState("");
  const [availableCount, setAvailableCount] = useState("");

  function handleCallbackResponse(response) {
    var userObject = jwt_decode(response.credential);
    setUser(userObject);
  }
  console.log("user==>", user);
  console.log("email==>", user.email);
  console.log("google==>", google.accounts);
  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "957490624222-3qff6c9c7l2nm2inrerd7ge27otke5ok.apps.googleusercontent.com",
      callback: handleCallbackResponse,
      auto_select: false,
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      width: "250",
    });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://tanishqdigitalnpim.titan.in:8443/bottomUp/BottomUp//getRegion/${user.email}`
      )
      .then((response) => {
        console.log("response==>", response.data);
        setBtqId(response.data.value.btqCode);
        setRegion(response.data.value.region);
        setAvailableCount(response.data.value.availableCount);
        setCheckMail(response.data.status);
      })
      .catch((error) => console.log("error=>", error));
  }, [user.email]);

  console.log("availableCount==>", availableCount);

  return (
    <>
      {checkMail === true ? (
        <FirstPage btqId={btqId} region={region} />
      ) : (
        <center>
          <header className="LoginPage shadow">
            <br />
            <h2>Welcome to Bottom UP</h2>
            <br />
            <br />
            <h4 className="my-3">Continue with Your Email</h4>
            <button id="signInDiv" className="LoginButton" />
          </header>
        </center>
      )}
    </>
  );
}
