import { React, useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
const productURL = `https://tiki.loca.lt/api/v1/product?fields=["$all"]`;

const MainView = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState("");
  const [subcategoriesId, setSubcategoriesId] = useState("");
  console.log(products);
  // console.log("searchParams", searchParams);
  const getProducts = async () => {
    try {
      const res = await axios.get(productURL);
      console.log("danh", res);
      const arrayItem1 = res?.data?.results?.objects?.rows;
      console.log("danha", arrayItem1);
      setProducts(arrayItem1);

      const subcategoriesIdArray = arrayItem1.map(
        (product) => product.subcategoriesid || ""
      );
      setSubcategoriesId(subcategoriesIdArray);
      console.log("1111111", subcategoriesIdArray);

      const filteredProducts = products.filter((product) =>
        subcategoriesId.includes(product.subcategoriesid)
      );
      console.log(filteredProducts, "2222222");
    } catch (error) {
      console.log("ko gọi được");
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="mainViewContainer">
      {/* bên trên  */}
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
            products.map((item, index) => {
              return <ProductItem data={item} key={index} />;
            })
          ) : (
            <div>Không có dữ liệu</div>
          )}
        </div>
      </div>
    </div>
  );
};