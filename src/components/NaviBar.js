import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../css/navibar.css";
import { Link } from "react-router-dom";
import {logo} from '../img/logo.png'

export default function NaviBar() {
  const [scroll, setScroll] = useState(0);
  const [navClassName, setNavClassName] = useState("navbar navbar-expand-lg");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY < 50;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
      if (scroll) {
        return setNavClassName("navbar navbar-expand-lg navOnTop");
      }
      return setNavClassName("navbar navbar-expand-lg navMoved");
    });
  });

  return (
    <nav className={navClassName}>
      {/* <Link to="/">Newbie Dev</Link> */}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <img className="logo-nav" src={logo} />
        {/* <span class="navbar-toggler-icon"></span> */}
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <img className="img" src={logo} />
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/blog">
              Blog
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/portfolio">
              Portfolio
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/aboutme">
              About me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
