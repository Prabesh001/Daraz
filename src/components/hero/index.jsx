import React from "react";
import { data } from "../../data/MOCK_DATA";
import "./index.css";
import Star from "../Star-Rating";

const index = () => {
  return (
    <div className="hero-segment">
      <p style={{ fontSize: "22px" }}>Just For You</p>
      <div className="hero">
        <div className="items-list">
          {data.map((item) => (
            <div className="item" key={item.name}>
              <img src={item.image} alt={item.name} />
              <div className="item-info">
                <span>{item.name}</span>
                <div className="flex-css">
                  <span
                    style={{ color: "var(--theme-color)", fontSize: "21px" }}
                  >
                    Rs.{item.price}
                  </span>
                  <span style={{ color: "gray", fontSize: "15px" }}>
                    -{item.rating}%
                  </span>
                </div>
              </div>
              <div style={{display:"flex"}}>
                <Star noOfStars={5} />
                <span style={{ color: "gray", fontSize: "13px" }}>({item.rating})</span>
              </div>
            </div>
          ))}
        </div>
        <center>
          <button className="load-more">Load More</button>
        </center>
      </div>
    </div>
  );
};

export default index;
