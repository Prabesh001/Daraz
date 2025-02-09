import React, { useState } from "react";
import "./index.css";
import { IoIosArrowUp } from "react-icons/io";
import { FaFire } from "react-icons/fa";
import { PiGridNineFill } from "react-icons/pi";
import { BsPersonFillDown } from "react-icons/bs";

const Index = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
      label: "Profile",
      icon: <BsPersonFillDown />,
    },
  ];

  return (
    <div className="nav-bar">
      {items.map((item, index) => (
        <div
          key={index}
          style={{ display: "flex", alignItems: "center", gap: "8px", padding: "5px" }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <a href="#top">{item.icon}</a>
          {hoveredIndex === index && <div style={{fontSize:"13px", backgroundColor:"white", whiteSpace:"nowrap"}}>{item.label}</div>}
        </div>
      ))}
    </div>
  );
};

export default Index;
