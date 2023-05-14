import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  NotFound,
  Home,
  NavBar,
  Products,
  Dashboard,
  ProductDetail
} from "./components";

const App = () => {
  const [isTimeOut, setTimeOut] = useState(false);

  useEffect(() => {
    const timehandler = () => {
      setTimeout(() => setTimeOut(true), 5000);
    };
    timehandler();
  }, [isTimeOut]);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products/*" element={<Products />} />
        <Route path="products/:productId" element={<ProductDetail />} />
        <Route path="admin/*" element={<Dashboard />} />
        <Route
          path="*"
          element={isTimeOut ? <Navigate to="/" /> : <NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
