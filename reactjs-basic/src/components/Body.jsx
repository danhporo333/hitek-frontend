import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "./product-page/ProductItem";
import Item from "antd/es/list/Item";
const productURL = `https://three-rats-fly.loca.lt/api/v1/product?fields=["$all"]`;

function App() {
  const Body = () => {
    const [products, setProducts] = useState("");
    console.log(products);
    const getProducts = async () => {
      try {
        const res = await axios.get(productURL);
        const arrayItem = res?.data?.results?.objects?.rows.map(
          (value, index) => {
            return {
              name: value?.name,
              price: value?.price,
              description: value?.description,
              image: value?.image,
            };
          }
        );
        // console.log(arrayItem, "First");
        setProducts(arrayItem);
      } catch (error) {}
    };
    useEffect(() => {
      getProducts();
    }, []);
    return (
      <div>
        <main>
          <div className="container-main">
            <div className="main">
              {/* header */}
              <div className="header-main">
                <h2 className="title">Gợi ý hôm nay</h2>
                {/* item */}
                <div className="menu">
                  {/* dành cho bạn */}
                  <div className="menu-item active">
                    <img src="img/user.png" alt="Tiki" />
                    <div className="tab-text">Dành cho bạn</div>
                  </div>
                  <div className="menu-item">
                    <img src="img/nano.jpg" alt="Salo sữa mát" />
                    <div className="tab-text">Bão Sale Sữa mát</div>
                  </div>
                  {/*  */}
                  <div className="menu-item">
                    <img src="img/Bán chạy.png" alt="Salo sữa mát" />
                    <div className="tab-text">Top Bán Chạy</div>
                  </div>
                  {/*  */}
                  <div className="menu-item">
                    <img src="img/hot.png" alt="Salo sữa mát" />
                    <div className="tab-text">Deal Siêu Hot</div>
                  </div>
                </div>
              </div>
              {/* header content*/}
              <div className="home">
                <div className="content">
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
            </div>
          </div>
        </main>
      </div>
    );
  };
  return <Body />;
}

export default App;

// const arrayItem = [
//   {
//     quantity: 1000,
//     discount: 1000,
//     nameItem: "iPhone 15 Pro Max",
//     image: "img/15prmax.png",
//     star: "img/star.svg",
//   },
//   {
//     quantity: 1000,
//     discount: 1000,
//     nameItem: "iPhone 15 Pro Max",
//     image: "img/15prmax.png",
//     star: "img/star.svg",
//   },
//   {
//     quantity: 1000,
//     discount: 1000,
//     nameItem: "iPhone 15 Pro Max",
//     image: "img/15prmax.png",
//     star: "img/star.svg",
//   },
//   {
//     quantity: 1000,
//     discount: 1000,
//     nameItem: "iPhone 15 Pro Max",
//     image: "img/15prmax.png",
//     star: "img/star.svg",
//   },
//   {
//     quantity: 1000,
//     discount: 1000,
//     nameItem: "iPhone 15 Pro Max",
//     image: "img/15prmax.png",
//     star: "img/star.svg",
//   },
//   {
//     quantity: 1000,
//     discount: 1000,
//     nameItem: "iPhone 15 Pro Max",
//     image: "img/15prmax.png",
//     star: "img/star.svg",
//   },
//   {
//     quantity: 1000,
//     discount: 1000,
//     nameItem: "iPhone 15 Pro Max",
//     image: "img/15prmax.png",
//     star: "img/star.svg",
//   },
//   {
//     quantity: 1000,
//     discount: 1000,
//     nameItem: "iPhone 15 Pro Max",
//     image: "img/15prmax.png",
//     star: "img/star.svg",
//   },
// ];
// console.log(arrayItem);
