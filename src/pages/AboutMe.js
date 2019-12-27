import React, { useState } from "react";
import "../css/aboutme.css";
import ContactModal from "../components/ContactModal";
import ftu from '../img/ftu.jpg'
import cdschool from '../img/cdschool.jpeg'
import google from '../img/google.jpg'
import ContactForm from "../components/ContactForm";

export default function AboutMe() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className="about-me">
     <div className=" container-fluid page-header">
        <h4 className="font-weight-light page-title">Some info about me</h4>
        <h1 className="page-description">ABOUT ME</h1>
      </div>
      <div className="container content">

        <div className="row text-center">
          <div className="info c0l-12 col-sm-12 col-md-4 col-lg-4">
            <h3 className="info-heading">I'm Phong Vu (agent P), a web developer.</h3>
            <p className="info-p">
              Since I start my carreer as an developer, I always dream of making
              products that make me proud.
            </p>
          </div>

          <div className="info c0l-12 col-sm-12 col-md-4 col-lg-4">
            <h3 className="info-heading">What I do</h3>
            <ul className="info-ul">
              <li>HTML5</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>ReactJs</li>
              <li>Python</li>
              <li>Flask</li>
              <li>SQL</li>
            </ul>
          </div>

          <div className="info c0l-12 col-sm-12 col-md-4 col-lg-4">
            <h3 className="info-heading">What I'm good at</h3>
            <ul className="info-ul">
              <li>Problem solving</li>
              <li>Critical Thinking</li>
              <li>Fast learning</li>
              <li>Communication</li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <ul className="timeline">
              <li>
                <div className="img-timeline">
                  <img className="rounded-circle img-fluid" src={ftu} alt="FTU2" />
                </div>

                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>08/2018</h4>
                    <h4 className="sub-heading">Graduated</h4>
                  </div>

                  <div className="timeline-body">
                    <p className="text-muted">Foreign trade university</p>
                  </div>
                </div>
              </li>

              <li className="timeline-inverted">
              <div className="img-timeline">
                  <img className="rounded-circle img-fluid" src={cdschool} alt="coderschool" />
                </div>

                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>12/2019</h4>
                    <h4 className="sub-heading">Graduated</h4>
                  </div>

                  <div className="timeline-body">
                    <p className="text-muted">Coder School</p>
                  </div>
                </div>
              </li>

              <li>
                <div className="img-timeline">
                  <img className="rounded-circle img-fluid" src={google} alt="FTU2" />
                </div>

                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>01/2020</h4>
                    <h4 className="sub-heading">Full stack web developer</h4>
                  </div>

                  <div className="timeline-body">
                    <p className="text-muted">Google</p>
                  </div>
                </div>
              </li>


            </ul>
          </div>
        </div>

        <hr />

        <ContactForm />
      </div>
    </div>
  );
}
