import React, { useState } from "react";
import HeaderComponent from "../components/Header";
import BodyComponent from "../components/Body";
import FooterComponent from "../components/Footer";
import BannerComponent from "../components/Banner";
import CategoryComponent from "../components/Category";
import CategoryBar from "../components/CategoryBar";
import {
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import { Button, Modal, Input, Space, message } from "antd";
import axios from "axios";
import md5 from "md5";
const LoginURL = "https://tiki.loca.lt/api/v1/auth/login";



// const userData = {
//   userName: "dung",
//   passWord: "123",
// };

const Home = () => {
  return (
    <>
      {/* Phần Header */}
      <HeaderComponent /> 
  {/* isModalOpen={showModal} */}
      <CategoryBar />

      {/* Phần banner */}
      <BannerComponent />

      {/* Phần Main */}
      <BodyComponent />

      {/* phần danh mục */}
      <CategoryComponent />

      {/* Phần Footer */}
      <FooterComponent />

    </>
  );
};

export default Home;
