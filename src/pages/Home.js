import React, { useState } from "react";
import "../css/home.css";
import { Carousel, Direction } from "react-bootstrap";
import indeed from "../img/indeed.png";
import moviedb from "../img/moviedb.png";
import ContactForm from '../components/ContactForm'
import myblog from '../img/myblog.png'
export default function Home() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <div className="home">
      <div className=" container-fluid page-header">
        <h4 className="font-weight-light page-title">Welcome to my site</h4>
        <h1 className="page-description">HOME</h1>
      </div>

      <div className="container">
        <div className="container home-section pt-5">
          <div className="row">
            <div className="home-section-item1 col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="home-link">
                <img className="img-fluid" src={indeed} alt="" />
              </div>
              <div className="home-section-info">
                <h4>How I decided to become a developer</h4>
                <p>This guy think he can change his career path, but who knows</p>
              </div>
            </div>

            <div className="home-section-item1 col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="home-sm-link row">
                <img className="img sm-home-img col-4 col-sm-4 col-md-4 col-lg-4" src="https://pbs.twimg.com/profile_images/378800000017423279/1a6d6f295da9f97bb576ff486ed81389_400x400.png" />
                <div className="home-section-info2 col-8 col-sm-8 col-md-8 col-lg-8">
                  <h5>CSS before after</h5>
                  <p>Lots of cool stuff here</p>
                </div>
              </div>

              <div className="home-sm-link row">
                <img
                  className="img  sm-home-img col-4 col-sm-4 col-md-4 col-lg-4"
                  src="https://pbs.twimg.com/profile_images/378800000017423279/1a6d6f295da9f97bb576ff486ed81389_400x400.png"
                />
                <div className="home-section-info2 col-8 col-sm-8 col-md-8 col-lg-8">
                  <h5>Learn React in 1 day</h5>
                  <p>No kidding!</p>
                </div>
              </div>

              <div className="home-sm-link row">
                <img
                  className="img sm-home-img col-4 col-sm-4 col-md-4 col-lg-4"
                  src="https://pbs.twimg.com/profile_images/378800000017423279/1a6d6f295da9f97bb576ff486ed81389_400x400.png"
                />
                <div className="home-section-info2 col-8 col-sm-8 col-md-8 col-lg-8">
                  <h5>Make love with Javascript</h5>
                  <p>Make love not war ;)</p>
                </div>
              </div>
            </div>

            <div className="home-section-item1 col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="home-link">
                <img className="img-fluid" src={indeed} alt="" />
              </div>
              <div className="home-section-info">
                <h4>Web developer road map</h4>
                <p>Skill you need to acquire</p>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="container home-body">
          <div className="row">
            <div className="home-body-item col-md-8">
              <div className="home-body-rank-head">
                <h3>Portfolio</h3>
              </div>
              <div className="portfolio-img-slider">
                <Carousel
                  activeIndex={index}
                  direction={direction}
                  onSelect={handleSelect}
                >
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={indeed}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>In-deed</h3>
                      <p>
                        I'm practicing Redux here! 
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={moviedb}
                      alt="Second slide"
                    />

                    <Carousel.Caption>
                      <h3>Movie DB</h3>
                      <p>
                        Training hard with React and API
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={myblog}
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3>A Noob Coder</h3>
                      <p>
                        This is my blog
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>

            <div className="home-body-rank col-md-4">
              <div className="home-body-rank-head">
                <h3>Most viewed content</h3>
              </div>
              <ol className="body-rank">
                <li>
                    <span>01</span>
                    <div>
                        <h5>Display Title</h5>
                        <p>Display description</p>    
                    </div>
                </li>
                <li>
                    <span>02</span>
                    <div>
                        <h5>Display Title</h5>
                        <p>Display description</p>    
                    </div>
                </li>
                <li>
                    <span>03</span>
                    <div>
                        <h5>Display Title</h5>
                        <p>Display description</p>    
                    </div>
                </li>
                <li>
                    <span>04</span>
                    <div>
                        <h5>Display Title</h5>
                        <p>Display description</p>    
                    </div>
                </li>
                <li>
                    <span>05</span>
                    <div>
                        <h5>Display Title</h5>
                        <p>Display description</p>    
                    </div>
                </li>
              </ol>
            </div>
          </div>
        </div>

        <hr />

        <ContactForm />
      </div>
    </div>
  );
}
