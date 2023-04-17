import React, { useState } from "react";
import "./Style/App.css";
import Login from "./Components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./Components/FeedbackForm";
import Alert from "./Components/Common/Alert";
import { Admin } from "./Components/Admin";

const App = () => {
  const [alert, setAlert] = useState(null);
  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 4000);
  };
  return (
    <>
      <BrowserRouter>
        <Alert alert={alert} />
        <Routes>
          <Route
            index
            path="/Bottom_Up"
            element={<Login showAlert={showAlert} />}
          />
          <Route
            path="/bottom/up/feedback/form"
            element={<FirstPage showAlert={showAlert} />}
          />
          <Route path="/bottom/up/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
