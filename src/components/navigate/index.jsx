import React, { useState } from "react";
import "./index.css";
import { IoIosArrowUp } from "react-icons/io";
import { FaFire } from "react-icons/fa";
import { PiGridNineFill } from "react-icons/pi";
import { BsPersonFillDown } from "react-icons/bs";

const index = () => {
  const [showHover, setShowHover] = useState(false)
  const items = [
    {
      label: "",
      icon: <IoIosArrowUp />,
    },
    {
      label: "Flash Sale",
      icon: <FaFire size={17} />,
    },
    {
      label: "Categories",
      icon: <PiGridNineFill />,
    },
    {
      label: "Flash Sale",
      icon: <BsPersonFillDown/>,
    }
  ];
  return (
    <div className="nav-bar">
      {items.map((item) => (
        <div
          style={{ display: "flex", alignItems: "center" }}
          onMouseEnter={() => setShowHover(true)}
          onMouseLeave={() => setShowHover(false)}
        >
          <span><a href="#top">{item.icon}</a></span>
        </div>
      ))}
    </div>
  );
};

export default index;
