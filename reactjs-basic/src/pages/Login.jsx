import "../Login.css";
import React, { useState } from "react";
import { message } from "antd";
import axios from "axios";
import md5 from "md5";
import { useNavigate } from "react-router-dom";
const LoginURL = "https://three-rats-fly.loca.lt/api/v1/auth/login";

const userData = {
  userName: "dung",
  passWord: "123",
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userName, setUsername] = useState("");
  const [passWord, setPassword] = useState("");
  const navigate = useNavigate();
  console.log(userName);
  console.log(passWord);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    const body = {
      username: userName,
      password: passWord,
    };
    console.log(body);
    const res = await axios.post(LoginURL, body);
    if (res) {
      message.success("Đăng nhập thành công", 2.0);
      localStorage.setItem(
        "userInfo",
        JSON.stringify(res?.data?.results["object"])
      );
      setIsModalOpen(false);
      navigate("/");
    } else {
      message.error("Đăng nhập thất bại", 2.0);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSignUp = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="body">
      <div className="cotainer">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required="" />
          <i className="bx bxs-user" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required="" />
          <i className="bx bxs-lock-alt" />
        </div>
        <div className="remember-fogot">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit" className="btn">
          Login
        </button>
        <div className="register-link">
          <p>
            Don't have an account? <a href="http://localhost:3000/register">Register</a>
          </p>
        </div>
      </form>
    </div>
  </div>
  );
}
export default App;
