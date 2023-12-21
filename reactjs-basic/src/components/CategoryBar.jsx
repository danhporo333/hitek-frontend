import React from "react";
import { Link } from "react-router-dom";
// mock data danh mục sản phẩm
const categories = [
  { url: "/product-page?category=bach-hoa", title: "Thịt, Rau củ" },
  { url: "/product-page?category=bach-hoa", title: "Bách Hóa" },
  { url: "/product-page?category=nha-cua", title: "Nhà Cửa" },
  { url: "/product-page?category=dien-tu", title: "Điện Tử" },
  { url: "/product-page?category=thiet-bi-so", title: "Thiết Bị Số" },
  { url: "/product-page?category=dien-thoai", title: "Điện thoại" },
  { url: "/product-page?category=me-va-be", title: "Mẹ & Bé" },
  { url: "/product-page?category=lam-dep", title: "Làm Đẹp" },
  { url: "/product-page?category=Gia-dung", title: "Gia Dụng" },
  { url: "/product-page?category=Thoi-trang-nu", title: "Thời Trang nữ" },
  { url: "/product-page?category=Thoi-trang-nam", title: "Thời Trang nam" },
  { url: "/product-page?category=Giay-nu", title: "Giày Nữ" },
  // { url: "/product-page", title: "Túi Nữ" },
];

const CategoryBar = () => {
  return (
    <div className="categoryBarContainer">
      <div className="categoryBarContent">
        {categories.map((category) => (
          <Link to={category.url} className="item">
            {category.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;
