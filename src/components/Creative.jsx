import React from "react";
import { creative } from "../data";
import Common from "./common/Common";

const Creative = () => {
  return (
    <>
      <section className="creative">
        <div className="container">
          <div className="itemContent">
            <Common title="creative" />
            {creative.map((item, index) => {
              return (
                <>
                  <div className="content flex">
                    <div className="contentLeft">
                      <i className="fa fa-quote-left quote"></i>
                      <h1>{item.heading}</h1>
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                      <button className="primary-btn">
                        DOWNLOAD RESUME{" "}
                        <i className="fa fa-long-arrow-alt-right"></i>
                      </button>
                    </div>
                    <div className="contentRight">
                      <img src={item.cover} alt="" />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Creative;
