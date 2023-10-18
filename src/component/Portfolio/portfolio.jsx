import React from "react";
import "./portfolio.css";
import p1 from "../../images/portfolio-1.png"
import p2 from "../../images/portfolio-2.png"
import p3 from "../../images/portfolio-3.png"
import p4 from "../../images/portfolio-4.png"
import p5 from "../../images/portfolio-5.png"
import p6 from "../../images/portfolio-6.png"
const Portfolio = () => {
  return (
    <section className="portfolio">
      <span className="portfolio-title">My Portfolio</span>
      <span className="portfolio-desc">
     
      </span>
      <div className="portfolio-imgs">
        <img src={p1} className="portfolio-img" alt="" />
        <img src={p2}  className="portfolio-img" alt="" />
      
      </div>
    </section>
  );
};

export default Portfolio;
