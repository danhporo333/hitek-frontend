import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const categoryURL = `https://tiki.loca.lt/api/v1/categoris?fields=["$all"]`;

const CategoryBar = () => {
  const [caTegory, setCaTegory] = useState([]);
  // console.log(caTegory, "caTegory");

  const getCategory = async () => {
    try {
      const res = await axios.get(categoryURL);
      const arryCategory = res?.data?.results?.objects?.rows?.map((value, index) => {
        return {
          id: value?.id,
          name: value?.name,
        };
      });
      setCaTegory(arryCategory);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div className="categoryBarContainer">
      <div className="categoryBarContent">
        {caTegory.map((category, index) => (
          <Link key={index} to={`/product-page?category=${category.id}`} className="item">
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;

