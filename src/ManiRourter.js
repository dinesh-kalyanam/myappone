import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./Home";
import DashBoard from "./DashBoard";

import Container from "./Quiz";

const Header = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<App/>} />
      <Route path="/a" element={<DashBoard/>}/>
        <Route path="/b" element={< Container />} />
      </Routes>
    </BrowserRouter>
  );
};


export default Header;