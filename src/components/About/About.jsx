import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
export default function About({ setPlayState }) {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>About Me</h3>
        <h2>MERN Stack Developer</h2>
        <p>
          In today's digital age, crafting compelling web content is crucial for
          capturing and retaining your audience's attention. Unlike traditional
          print media, web content demands brevity, clarity, and engagement.
        </p>
        <p>
          Therefore, when developing your website, prioritize breaking down
          lengthy paragraphs into shorter, digestible chunks. Paragraphs of
          40-70 words to ensure your message is quickly absorbed.
        </p>
        <p>
          Remember, the goal is to make your content accessible and engaging,
          encouraging visitors to explore further.
        </p>
      </div>
    </div>
  );
}
