import Home from "./pages/Home";
import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-page" element={<ProductPage />} />
      </Routes>
    </div>
  );
}
export default App;
