import React, { useState } from "react";
import "./Style/App.css";
import Login from "./Components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./Components/FeedbackForm";
import Alert from "./Components/Alert";

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
            path="/bottom/up/login"
            element={<Login showAlert={showAlert} />}
          />
          <Route path="/bottom/up/feedback/form" element={<FirstPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
