import React, { useState } from "react";

// const imageArray = [
//   {
//     image: `https://honest-streets-live.loca.lt/api/v1/image/get/image-1703056446910.webp`,
//   },
// ];

// const getImageUrl = "https://warm-walls-work.loca.lt/api/v1/image/get";

const ProductItem = (props) => {
  const data = props?.data;
  // const images = props?.images;
  console.log(data, "productItem");
  const formatCurrency = (price) =>
    new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  // const imageSrc = `${getImageUrl}/${data?.image}`;
  // const imageSrcAlt = `${getImageUrl}/image-1703067361701.png`;
  return (
    <div className="item">
      <div className="item1">
        <div className="thumbnail">
          {/* {images.map((image, index) => (
            <img
              key={index}
              style={{ width: "100%" }}
              src={image.image}
              alt={`product-${index}`}
            />
          ))} */}
          <img
            // src={`${
            //   data?.image === "image-1702891374122.webp"
            //     ? imageSrc
            //     : imageSrcAlt
            // }`}
            src="https://weak-paws-smash.lo ca.lt/api/v1/image/get/image-1703067361701.png"
            alt="No Image"
          />
          <img src="img/Chính hãng.png" alt="real" className="img-child" />
        </div>
        <div className="body-info">
          <div className="name">
            <h5>{data?.description}</h5>
          </div>
          <div className="rating">
            <div className="star">
              <img
                src={`https://weak-paws-smash.lo ca.lt/api/v1/image/get/image-1703043325304.svg`}
                alt="start"
              />
              <img
                src={`https://weak-paws-smash.lo ca.lt/api/v1/image/get/image-1703043325304.svg`}
                alt="start"
              />
              <img
                src={`https://weak-paws-smash.lo ca.lt/api/v1/image/get/image-1703043325304.svg`}
                alt="start"
              />
              <img
                src={`https://weak-paws-smash.lo ca.lt/api/v1/image/get/image-1703043325304.svg`}
                alt="start"
              />
              <img
                src={`https://weak-paws-smash.lo ca.lt/api/v1/image/get/image-1703043325304.svg`}
                alt="start"
              />
            </div>
            <p>|</p>
            <div className="quantity-sold">đã bán 1000</div>
          </div>
          <div className="sell">
            <div className="discount">{formatCurrency(data?.price)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductItem;
