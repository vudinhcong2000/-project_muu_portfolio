import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { homedata } from "../data";

const Home = () => {
  const settings = {
    dots: true, // show dots
    infinite: true, // infinite loop
    speed: 500, // speed of the transition between slides
    slidesToShow: 1, // number of slides to show at once
    slidesToScroll: 1, // this is the number of slides to scroll at a time
    arrows: false, // remove the arrows
  };
  return (
    <>
      <section className="home">
        <div className="container">
          <Slider {...settings}>
            {homedata.map((item, index) => {
              const { name, desc, signature, cover } = item;
              return (
                <>
                  <div className="itemContent flexSB" key={index}>
                    <div className="left">
                      <h1>{name}</h1>
                      <p>{desc}</p>
                      <img src={signature} alt="" />
                    </div>

                    <div className="right">
                      <img src={cover} alt="" />
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

export default Home;
