import React from "react";
import "./Style/App.css";
import Login from "./Components/GoogleLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./Components/FirstPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/bottom/up/login" element={<Login />} />
          <Route path="/bottom/up/feedback/form" element={<FirstPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
