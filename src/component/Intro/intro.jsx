import React from "react";
import "./intro.css";
import bg from "../../images/bg1.jpg";

import resume from "../../images/resume.jpg"

const Intro = () => {
  return (
    <section className="intro">
      <div className="content">
        <span className="hello">Hello,</span>
        <span className="introText">I'm  <span className="introName">Inshara Liaquat</span><br/> Frontend Web Developer</span>
        <p className="introPara">I am a Skilled web designer</p>
        <a href={resume}><button className="btn">Resume</button></a>
        
      </div>
      <img src={bg} alt="Profile" className="bg"/>
    </section>
  );
};

export default Intro;
