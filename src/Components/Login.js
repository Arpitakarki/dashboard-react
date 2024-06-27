import React, { useState } from "react";
import "./Login.css";
import { FaUser, FaEyeSlash } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Home from "./Home";

export default function Login() {
  const [action, setAction] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("isLogin") === "true"
  );

  const admin_username = "arpita_karki";
  const admin_password = "arpita@1234";

  const registration = () => {
    setAction("active");
  };

  const loginAction = () => {
    setAction("");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginUsername === admin_username && loginPassword === admin_password) {
      setIsLogin(true);
      localStorage.setItem("isLogin", "true");
      console.log("Login successful");
    } else {
      setIsLogin(false);
      console.log("Login failed");
    }
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    // Registration logic here
    // Assuming successful registration
    setIsLogin(true);
    localStorage.setItem("isLogin", "true");
    console.log("Registration successful");
  };

  return (
    <>
      {isLogin ? (
        <Home />
      ) : (
        <div className="main">
          <div className={`react ${action}`}>
            <div className="div-1 login">
              <form onSubmit={handleLogin}>
                <h1>Login</h1>
                <div className="input-box">
                  <input
                    type="text"
                    placeholder="Username"
                    required
                    value={loginUsername}
                    onChange={(e) => setLoginUsername(e.target.value)}
                  />
                  <FaUser className="icon" />
                </div>
                <div className="input-box">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                  <FaEyeSlash className="icon" />
                </div>
                <div className="remember-forgot">
                  <label>
                    <input type="checkbox" />
                    Remember me
                  </label>
                  <a href="#">Forgot Password?</a>
                </div>
                <button type="submit">Login</button>

                <div className="register-link">
                  <p>
                    Don't have an account?{" "}
                    <a href="#" onClick={registration}>
                      Register
                    </a>
                  </p>
                </div>
              </form>
            </div>
            <div className="div-1 registration">
              <form onSubmit={handleRegistration}>
                <h1>Registration</h1>
                <div className="input-box">
                  <input
                    type="text"
                    placeholder="Username"
                    required
                    value={registerUsername}
                    onChange={(e) => setRegisterUsername(e.target.value)}
                  />
                  <FaUser className="icon" />
                </div>
                <div className="input-box">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={registerEmail}
                    onChange={(e) => setRegisterEmail(e.target.value)}
                  />
                  <IoIosMail className="icon" />
                </div>
                <div className="input-box">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={registerPassword}
                    onChange={(e) => setRegisterPassword(e.target.value)}
                  />
                  <FaEyeSlash className="icon" />
                </div>
                <div className="remember-forgot">
                  <label>
                    <input type="checkbox" />I agree to the terms & conditions
                  </label>
                </div>
                <button type="submit">Register</button>

                <div className="register-link">
                  <p>
                    Already have an account?{" "}
                    <a href="#" onClick={loginAction}>
                      Login
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
