import React from "react";
import "./index.css";
import photo from "./../../assets/ss.png"

const footer = () => {
  const custCare = [
    "Help Center",
    "How to Buy",
    "Corporate & Bulk Purchasing",
    "Contact Us",
  ];
  const daraz = [
    "About Daraz",
    "Careers",
    "Daraz Stores",
    "Daraz Stores",
    "Daraz Donates",
    "Daraz Blog",
    "Terms & Conditions",
    "Privacy Policy",
    "Mobile App",
    "PayLater Edu",
    "Daraz University",
    "Sell on Daraz",
    "Code of Conduct",
    "Join the Daraz Affiliate Program",
  ];

  return (
    <div className="footer-box">
      <div className="flexbox">
        <p>Customer Care</p>
        {custCare.map((it) => (
          <a href="#">{it}</a>
        ))}
      </div>
      <div className="flexbox">
        <p>Daraz</p>
        {daraz.map((it) => (
          <a href="#">{it}</a>
        ))}
      </div>
      <div className="image-box">
        <img src={photo} alt="" />
      </div>
    </div>
  );
};

export default footer;
