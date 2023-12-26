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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userName, setUsername] = useState("");
  const [passWord, setPassword] = useState("");
  console.log(userName);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    console.log(userName, passWord);
    try {
      const body = {
        username: userName,
        password: passWord,
      };
      const res = await axios.post(LoginURL, body);
      console.log(res);
      if (res) {
        message.success("Đăng nhập thành công", 2.0);
        localStorage.setItem(
          "userInfo",
          JSON.stringify(res?.data?.results["object"])
        );
        setIsModalOpen(false);
      } else {
        message.error("Đăng nhập thất bại", 2.0);
      }
    } catch (error) {}
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSignUp = () => {
    setIsModalOpen(false);
  };
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
