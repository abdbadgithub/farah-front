import React from "react";
import "./styles/Header.css";
import diamondBacks from "../images/diamondBacks.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container">
      <nav
        className="navbar navbar-expand-md bg-white navbar-light fixed-top "
        id="header-container"
      >
        <Link className="navbar-brand" to="http://www.google.com">
          <img src={diamondBacks} width="120" height="50" alt="diamondBacks" />
        </Link>
        <button
          className="navbar-toggler bg-light "
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="collapsibleNavbar"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="https://www.linkedin.com/in/farah-haddar/">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/Skills">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/testimonials">
                Testimonials
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/Blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/Footer">
                Contact Me
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/Panel">
                Panel
              </Link>
            </li>
            <li className="nav-item log">
              <Link
                className="nav-link text-light"
                style={{ color: "#FF1CD2" }}
                to="http://www.google.com"
              >
                LOGIN
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
