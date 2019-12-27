import React, {useState} from "react";
import "../css/portfolio.css";
import { FaPlus, FaGithub } from "react-icons/fa";
import indeed from "../img/indeed.png";
import moviedb from "../img/moviedb.png"
import myblog from '../img/myblog.png'
import freshfarm from '../img/freshfarm.png'

export default function Portfolio() {

  return (
    <div className="container-fluid portfolio">
      <div className=" container-fluid page-header">
        <h4 className="font-weight-light page-title">You are here to see my product?</h4>
        <h1 className="page-description">PORTFOLIO</h1>
      </div>

      <div className="container portfolio-section">
        <div className="row justify-content-between portfolio-item-container">

          <div className="col-md-4 col-sm-6 col-6 col-lg-4 portfolio-item">
            <form
              className="portfolio-link"
              data-toggle="modal"
              action="https://objective-spence-5ad112.netlify.com/"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <button className="btn btn-light" action="https://objective-spence-5ad112.netlify.com/">View Live</button>
                </div>
              </div>

              <img className="img-fluid" src={indeed} alt="" />
            </form>

            <div className="portfolio-caption">
              <h4>InDeed</h4>
              <form className="portfolio-btn-container" action="https://github.com/phong10119/r-indeed">
                <button
                  className="portfolio-btn btn1"
                  data-text="View live"
                  type="submit"
                >
                  <span>
                    <FaGithub />
                  </span>
                </button>
              </form>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-6 col-lg-4 portfolio-item">
            <form
              className="portfolio-link"
              data-toggle="modal"
              action="https://pensive-poincare-aa6836.netlify.com"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <button className="btn btn-light">View Live</button>
                </div>
              </div>

              <img className="img-fluid" src={moviedb} alt="" />
            </form>

            <form action="https://github.com/phong10119/Moive-DB" className="portfolio-caption">
              <h4>Movie DB</h4>
              <div className="portfolio-btn-container">
                <button
                  className="portfolio-btn btn1"
                  data-text="View live"
                  type="submit"
                >
                  <span>
                    <FaGithub />
                  </span>
                </button>
              </div>
            </form>
          </div>

          <div className="col-md-4 col-sm-6 col-6 col-lg-4 portfolio-item">
            <form
              className="portfolio-link"
              data-toggle="modal"
              action="anoobcoder.com"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <button className="btn btn-light">View Live</button>
                </div>
              </div>

              <img className="img-fluid" src={myblog} alt="" />
            </form>

            <form action="https://github.com/phong10119/r-my-blog" className="portfolio-caption">
              <h4>A Noob Coder</h4>
              <div className="portfolio-btn-container">
                <button
                  className="portfolio-btn btn1"
                  data-text="View live"
                  type="submit"
                >
                  <span>
                    <FaGithub />
                  </span>
                </button>
              </div>
            </form>
          </div>

          <div className="col-md-4 col-sm-6 col-6 col-lg-4 portfolio-item">
            <form
              className="portfolio-link"
              data-toggle="modal"
              action="https://freshfarm-ecomerce.netlify.com"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <button className="btn btn-light" type="submit" action="https://freshfarm-ecomerce.netlify.com">View Live</button>
                </div>
              </div>

              <img className="img-fluid" src={freshfarm} alt="" />
            </form>

            <form action="https://github.com/phong10119/r-my-blog" className="portfolio-caption">
              <h4>Fresh Farm</h4>
              <div className="portfolio-btn-container">
                <button
                  className="portfolio-btn btn1"
                  data-text="View live"
                  type="submit"
                >
                  <span>
                    <FaGithub />
                  </span>
                </button>
              </div>
            </form>
          </div>

          {/* <div className="col-md-4 col-sm-6 col-6 col-lg-4 portfolio-item">
            <form
              className="portfolio-link"
              data-toggle="modal"
              href="#portfolioModal1"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <button className="btn btn-light">View Live</button>
                </div>
              </div>

              <img className="img-fluid" src={myblog} alt="" />
            </form>

            <form action="https://github.com/phong10119/r-my-blog" className="portfolio-caption">
              <h4>A Noob Coder</h4>
              <div className="portfolio-btn-container">
                <button
                  className="portfolio-btn btn1"
                  data-text="View live"
                  type="submit"
                >
                  <span>
                    <FaGithub />
                  </span>
                </button>
              </div>
            </form>
          </div>

          <div className="col-md-4 col-sm-6 col-6 col-lg-4 portfolio-item">
            <form
              className="portfolio-link"
              data-toggle="modal"
              href="#portfolioModal1"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <button className="btn btn-light">View Live</button>
                </div>
              </div>

              <img className="img-fluid" src={myblog} alt="" />
            </form>

            <form action="https://github.com/phong10119/r-my-blog" className="portfolio-caption">
              <h4>A Noob Coder</h4>
              <div className="portfolio-btn-container">
                <button
                  className="portfolio-btn btn1"
                  data-text="View live"
                  type="submit"
                >
                  <span>
                    <FaGithub />
                  </span>
                </button>
              </div>
            </form>
          </div> */}

        </div>
      </div>
    </div>
  );
}
