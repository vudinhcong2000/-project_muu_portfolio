import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { portfolio } from "../data";
import Common from "./common/Common";

const Portfolio = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <>
      <section className="portfolio creative">
        <div className="container">
          <Slider {...settings}>
            {portfolio.map((item, index) => {
              return (
                <>
                  <div className="itemContent flex">
                    <Common title="portfolio" />
                    <div className="contentRight">
                      <img src={item.cover} alt="" />
                    </div>
                    <div className="contentLeft">
                      <h1>{item.title}</h1>
                      <p>{item.desc}</p>
                      <ul>
                        <li>
                          <i className="fa fa-minus"></i>
                          {item.p1}
                        </li>
                        <li>
                          <i className="fa fa-minus"></i>
                          {item.p2}
                        </li>
                        <li>
                          <i className="fa fa-minus"></i>
                          {item.p3}
                        </li>
                        <li>
                          <i className="fa fa-minus"></i>
                          {item.p4}
                        </li>
                        <li>
                          <i className="fa fa-minus"></i>
                          {item.p5}
                        </li>
                      </ul>
                      <button className="primary-btn">
                        WIEW WEBSITE{" "}
                        <i className="fa fa-long-arrow-alt-right"></i>
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
