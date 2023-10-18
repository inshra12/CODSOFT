import React from "react";
import "./skill.css";
import uidesign from "../../images/ui-design.png";
import webdesign from "../../images/website-design.png";
import graphicdesign from "../../images/app-design.png";
const Skill = () => {
  return (
    <section className="about">
      <span className="about-title">What I do</span>
      <span className="about-desc">
        I specialize in creating visually captivating websites and user
        interfaces. As a Frontend Web Developer, I bring websites to life by
        crafting interactive and seamless user experiences. As a UI/UX Designer,
        I ensure that every design is not just visually appealing but also
        user-friendly, making it easy for people to navigate and enjoy.
        Additionally, as a Graphic Designer, I use my creativity to make
        graphics that enhance the overall aesthetics of digital projects. My
        passion lies in transforming ideas into engaging digital experiences.
      </span>
      <div className="aboutbars">
        <div className="aboutbar">
          <img src={uidesign} alt="" className="about-img" />
          <div className="aboutbar-text">
            <h2>UI/UX Design</h2>
            <p></p>
          </div>
        </div>

        <div className="aboutbar">
          <img src={webdesign} alt="" className="about-img" />
          <div className="aboutbar-text">
            <h2>Web Design</h2>
          </div>
        </div>

        <div className="aboutbar">
          <img src={graphicdesign} alt="" className="about-img" />
          <div className="aboutbar-text">
            <h2>Graphic Design</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
