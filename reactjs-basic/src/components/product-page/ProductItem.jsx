import React from "react";

const ProductItem = (props) => {
  const arrStar = [
    {
      img: "https://tiki.loca.lt/api/v1/image/get/image-1703043325304.svg",
    },
    {
      img: "https://tiki.loca.lt/api/v1/image/get/image-1703043325304.svg",
    },
    {
      img: "https://tiki.loca.lt/api/v1/image/get/image-1703043325304.svg",
    },
    {
      img: "https://tiki.loca.lt/api/v1/image/get/image-1703043325304.svg",
    },
    {
      img: "https://tiki.loca.lt/api/v1/image/get/image-1703043325304.svg",
    },
  ];

  const data = props?.data;
  // console.log(data,"Data")
  const formatCurrency = (price) =>
    new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);

    //giảm giá
    const calculateDiscountedPrice = () => {
      const originalPrice = parseFloat(data.price); // Chuyển đổi sang số
      const discountPercent = parseFloat(data.discount); // Chuyển đổi sang số
  
      if (!isNaN(originalPrice) && !isNaN(discountPercent)) {
        const discountedPrice = originalPrice - (originalPrice * discountPercent) / 100;
        // console.log("Discounted Price:", discountedPrice);
        return discountedPrice;
      }
      return null;
    };


  return (
    <div className="product-item">
      <div className="item1">
        <div className="thumbnail">
          <img
            className="thumbnail-image"
            src={`https://tiki.loca.lt/api/v1/image/get/${data.image}`}
            alt="No Image"
          />
          <img src="img/Chính hãng.png" alt="real" className="img-child" />
        </div>
        <div className="body-info">
          <div className="name">
            <h5>{data?.description}</h5>
          </div>
          <div className="rating">
            {arrStar.map((item, index) => (
              <div className="star" key={index}>
                <img src={item.img} alt={`star-${index + 1}`} />
              </div>
            ))}
            <p>|</p>
            <div className="quantity-sold">đã bán {data?.quantity}</div>
          </div>
          <div className="sell">
            {data.discount ? (
              <>
                <span className="discount">
                  {formatCurrency(calculateDiscountedPrice())}
                </span>
                <span style={{ marginLeft: "10px", color: "gray" }}>
                  {data?.discount}
                </span>
              </>
            ) : (
              <span className="discount">{formatCurrency(data?.price)}</span>
            )}
            <span onClick={() => data.addToCart}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
