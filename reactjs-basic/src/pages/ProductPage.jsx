import React from "react";
import HeaderComponent from "../components/Header";

import MainView from "../components/product-page/MainView";
import Sidebar from "../components/product-page/Sidebar";
const ProductPage = () => {
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <div className="productPageBody">
        <Sidebar />
        <MainView />
      </div>
    </div>
  );
};

export default ProductPage;
