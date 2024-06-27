import React from "react";
import logo from "./images/logo.png";
import icon from "./images/icon-femal.png";

function Header() {
  const logout = () => {
    localStorage.removeItem("isLogin");
    window.location.reload();
  };

  return (
    <div className="header">
      <div className="main-head">
        <div className="Logo">
          <img src={logo} alt="logo" className="logo" />
          <h3>Dashboard</h3>
        </div>
        <div className="profile">
          <h3>Arpita Karki</h3>
          <img src={icon} alt="icon" className="icon" />
          <a href="#" onClick={logout}>Log out</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
