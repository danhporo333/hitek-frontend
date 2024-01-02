import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import axios from "axios";
import { useSearchParams, useLocation } from "react-router-dom";
const productURL = `https://tiki.loca.lt/api/v1/product?fields=["$all"]`;

const MainView = () => {
  const [products, setProducts] = useState([]);
  console.log("product", products);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedCategoryId = searchParams.get("category");
  console.log(selectedCategoryId)

  const getProductPage = async () => {
    try {
      const res = await axios.get(productURL);
      console.log("API Response:", res.data.results.objects.rows); // In ra cấu trúc dữ liệu từ API
      const arrayItem1 = res?.data?.results?.objects?.rows.map((value, index) => {
        return {
          categorisid: value?.categorisid, // Xác định tên thuộc tính chính xác từ cấu trúc dữ liệu API
          description: value?.description,
          image: value?.image,
          price: value?.price,
          discount: value?.percent_discount,
        };
      });
      
      const filteredProducts = arrayItem1.filter(
        (product) => product.categorisid === selectedCategoryId
      );
      console.log(filteredProducts,"filteredProducts")
      setProducts(filteredProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProductPage();
  }, [selectedCategoryId]);


  return (
    <div className="mainViewContainer">
      {/* phần trên */}
      <div className="mainViewSummary">
        <div className="summaryTitle">
          <h1>Điện Thoại - Máy Tính Bảng </h1>
        </div>

        <div className="summaryBanner">
          <img src="img/1-01.png" alt="" />
          <img src="img/banner2.jpg" alt="" />
          <img src="img/images.jpg" alt="" />
        </div>

        <div className="summaryActionBar">
          <div className="summarySortBar">
            <a className="sortItem">Phổ biến</a>
            <a className="sortItem">Bán chạy</a>
            <a className="sortItem">Hàng Mới</a>
            <a className="sortItem">Giá thấp</a>
            <a className="sortItem">Giá cao</a>
          </div>
          <div className="summaryFilterBar">
            <span>
              <img src="img/TikiNow.png" alt="" />
            </span>
            <span>
              <img src="img/free-ship-logo.png" alt="" />
            </span>
          </div>
        </div>
      </div>
      {/* phía dưới*/}
      <div className="mainViewProductList home">
        <div className="content">
          {products && products.length > 0 ? (
            products.map((item, index) => (
              <ProductItem data={item} key={index} />
            ))
          ) : (
            <div>Không có dữ liệu</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainView;