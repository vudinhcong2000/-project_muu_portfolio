import React from "react";
import Common from "./common/Common";

const Contact = () => {
  return (
    <>
      <section className="contact creative">
        <div className="container">
          <div className="itemContent">
            <Common title="contact" />

            <div className="content flex">
              <div className="contentRight">
                <img src="./images/contact-bg.jpg" alt="" />
              </div>
              <div className="contentLeft">
                <span>
                  <i className="fa fa-map-marker-alt"></i>
                  401 Boradway, 24th Floor, NY 10013, USA
                </span>
                <br />
                <br />
                <span>
                  <i className="fa fa-envelope"></i>
                  dales@domain.com
                </span>
                <br />
                <br />
                <span>
                  <i className="fa fa-phone"></i>
                  d+123 456 7889
                </span>

                <form action="">
                  <input type="text" placeholder="* YOUR NAME" />
                  <input type="text" placeholder="* YOUR EMAIL" />
                  <input
                    type="text"
                    placeholder="* WHAT ARE YOR INTERSETED IN?"
                  />
                  <textarea cols="30" rows="10">
                    YOUR MESSAGE
                  </textarea>
                  <button className="primary-btn">
                    SUBMIT <i className="fa fa-long-arrow-alt-right"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
