import React from "react";
import { work } from "../data";
import Common from "./common/Common";

const Work = () => {
  return (
    <>
      <section className="work education creative">
        <div className="container">
          <div className="itemContent">
            <Common title="empolye" />
            <div className="content flex">
              <div className="contentLeft">
                {work.map((item, index) => {
                  return (
                    <>
                      <div className="box flex">
                        <button className="primary-btn">{item.years}</button>
                        <h2>
                          {item.compnay}
                          <p>{item.desc}</p>
                        </h2>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="contentRight">
                <img src="./images/employment-bg.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
