import Home from "./pages/Home";
import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-page" element={<ProductPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  );
}
export default App;
