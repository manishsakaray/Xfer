import React from "react";
import "./Navbar.css";
import logo from "../assets/pngegg.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-main">
        <div className="navbar-logo">
          <a href="#">
            <img src={logo} alt="website logo" />
          </a>
        </div>
        <div className="navlinks">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="emptyspace"></div>
      <div className="login-div">
        <ul>
          <li>
            <a href="">
              Login<i class="uil uil-user-circle"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
