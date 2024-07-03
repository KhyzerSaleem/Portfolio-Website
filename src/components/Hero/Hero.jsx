import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

export default function Hero() {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Unleash the Power of MERN </h1>
        <p>
          "MERN Stack: Powering Seamless Web Experiences with MongoDB, Express,
          React, and Node.js. Your Gateway to Agile, Scalable Web Solutions."
        </p>
        <button className="btn">
          Explore More <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
}
