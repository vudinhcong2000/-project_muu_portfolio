import React from "react";
import { award } from "../data";
import Common from "./common/Common";

const Award = () => {
  return (
    <>
      <section className="award creative">
        <div className="container">
          <div className="itemContent">
            <Common title="award" />

            {award.map((item, index) => {
              return (
                <>
                  <div className="content flex">
                    <div className="contentLeft">
                      <h1>{item.title}</h1>
                      <p>{item.desc}</p>
                      <div className="box grid">
                        <div className="img">
                          <img src={item.img1} alt="" />
                        </div>
                        <div className="img">
                          <img src={item.img2} alt="" />
                        </div>
                        <div className="img">
                          <img src={item.img3} alt="" />
                        </div>
                        <div className="img">
                          <img src={item.img4} alt="" />
                        </div>
                      </div>
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

export default Award;
