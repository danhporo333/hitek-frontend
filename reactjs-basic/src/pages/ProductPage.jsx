import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import HeaderComponent from "../components/Header";
import MainView from "../components/product-page/MainView";
import Sidebar from "../components/product-page/Sidebar";
const productURL = `https://tiki.loca.lt/api/v1/product?fields=["$all"]`;

const ProductPage = () => {
  return (
    <div>
      <HeaderComponent />
      <div className="productPageBody">
        <Sidebar />
        <MainView />       
      </div>
    </div>
  );
};

export default ProductPage;
