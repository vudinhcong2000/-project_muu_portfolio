import React from "react";
import { education } from "../data";
import Common from "./common/Common";

const Education = () => {
  return (
    <>
      <section className="education creative">
        <div className="container">
          <div className="itemContent">
            <Common title="education" />
            <div className="content flex">
              <div className="contentRight">
                <img src="./images/education-bg.jpg" alt="" />
              </div>
              <div className="contentLeft">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi iure, corporis qui laboriosam doloremque, ab nostrum
                  aspernatur nam possimus enim autem dolor dolorum error iste
                  explicabo quis! Perferendis, delectus quis?
                </p>
                {education.map((item, index) => {
                  return (
                    <>
                      <div className="box flex">
                        <h1>{item.id}</h1>
                        <h2>
                          {item.name} <br />
                          <span>{item.program}</span> <br />
                          <span>{item.year}</span>
                        </h2>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
