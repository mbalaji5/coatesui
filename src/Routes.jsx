import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ConfirmationContainer } from "./container/confirmation";
import { EmailContainer } from "./container/email";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmailContainer />}></Route>
        <Route path="/email" element={<EmailContainer />}></Route>
        <Route path="/confirmation" element={<ConfirmationContainer />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
