import React from "react";
import { blog } from "../data";
import Common from "./common/Common";

const Blog = () => {
  return (
    <>
      <section className="blog">
        <div className="container">
          <div className="itemContent">
            <Common title="blog" />
            <div className="box">
              {blog.map((item, index) => {
                return (
                  <>
                    <div className="img">
                      <img src={item.cover} alt="" />
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
