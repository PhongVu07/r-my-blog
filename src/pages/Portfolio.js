import React, {useState} from "react";
import "../css/portfolio.css";
import { FaPlus, FaGithub } from "react-icons/fa";
import indeed from "../img/indeed.png";
import moviedb from "../img/moviedb.png"
import myblog from '../img/myblog.png'

export default function Portfolio() {
  const [isDisplayed, setIsDisplayed] = useState("none")

  return (
    <div className="container-fluid portfolio">
      <div className=" container-fluid page-header">
        <h4 className="font-weight-light page-title">You are here to see my product?</h4>
        <h1 className="page-description">PORTFOLIO</h1>
      </div>

      <div className="container portfolio-section">
        <div className="row justify-content-between portfolio-item-container">

          <div className="col-md-4 col-sm-6 col-6 col-lg-4 portfolio-item">
            <a
              className="portfolio-link"
              data-toggle="modal"
              href="#portfolioModal1"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <FaPlus />
                </div>
              </div>

              <img className="img-fluid" src={indeed} alt="" />
            </a>

            {/* <div className="portfolio-description" style={{display:{isDisplayed}}}>
                <h1>asefwe</h1>
            </div> */}


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
            <a
              className="portfolio-link"
              data-toggle="modal"
              href="#portfolioModal1"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <FaPlus />
                </div>
              </div>

              <img className="img-fluid" src={moviedb} alt="" />
            </a>

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
            <a
              className="portfolio-link"
              data-toggle="modal"
              href="#portfolioModal1"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <FaPlus />
                </div>
              </div>

              <img className="img-fluid" src={myblog} alt="" />
            </a>

            <form action="anoobcoder.com" className="portfolio-caption">
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

        </div>
      </div>
    </div>
  );
}
