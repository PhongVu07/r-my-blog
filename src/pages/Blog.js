import React from "react";
import "../css/blog.css";
import SideBar from "../components/SideBar";

export default function Blog() {
  return (
    <div className="blog">
      <div className=" container-fluid page-header">
        <h4 className="font-weight-light page-title">Welcome to my blog</h4>
        <h1 className="page-description">BLOG</h1>
      </div>

      <div className="blog-section-container">
        <div className="blog-item container pt-5" id="page-wrap">
            <div className="text-center mb-5">
               <h1>This is blog title</h1>
               <h5>This is blog discription</h5>
            </div>

            <div className="blog-item-content pl-5">
                <p>This is blog content</p>
                <p>alo alo 1 2 3 4, cac dong chi co nghe thay toi noi gi khong?</p>
            </div>
        </div>
      </div>
    </div>
  );
}
