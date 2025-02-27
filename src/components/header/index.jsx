import React, { useState } from "react";
import "./index.css";
import logo from "../../assets/logo.png";
import { CiSearch } from "react-icons/ci";

const index = () => {
  const links = [
    "SAVE MORE ON APP",
    "BECOME A SELLER",
    "HELP & SUPPORT",
    "LOGIN",
    "SIGN UP",
  ];

  return (
    <div className="header-bar">
      <div className="link-segment">
        <ul>
          {links.map((link) => (
            <li key={link}>
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="search-segment">
        <div className="logo-segment">
          <img src={logo} alt="Logo" />
        </div>
        <form action="#" className="head-form">
          <input type="text" placeholder="Search in Daraz" className="inp-text"/>
          <div className="searchbar"><CiSearch size={20} color="var(--theme-color)"/></div>
        </form>
        <div className="cart-segment">
          <svg
            width="30"
            height="30"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.51345 5H1.33325V3H6.15306L7.21972 8.33333H30.5315L27.5012 25H8.51345L4.51345 5ZM7.61972 10.3333L10.1531 23H25.832L28.135 10.3333H7.61972Z"
              fill="white"
            ></path>
            <path
              d="M11.9999 28C11.9999 28.7364 11.403 29.3333 10.6666 29.3333C9.93021 29.3333 9.33325 28.7364 9.33325 28C9.33325 27.2636 9.93021 26.6667 10.6666 26.6667C11.403 26.6667 11.9999 27.2636 11.9999 28Z"
              fill="white"
            ></path>
            <path
              d="M25.3333 29.3333C26.0696 29.3333 26.6666 28.7364 26.6666 28C26.6666 27.2636 26.0696 26.6667 25.3333 26.6667C24.5969 26.6667 23.9999 27.2636 23.9999 28C23.9999 28.7364 24.5969 29.3333 25.3333 29.3333Z"
              fill="white"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default index;
