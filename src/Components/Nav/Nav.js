import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <div className="container">
        <a className="nav-logo" href="#">
          nazwa firmy
        </a>
        <div className="wrapper">
          <input type="checkbox" id="check-menu" />
          <label htmlFor="check-menu"></label>
          <div className="burger-line first"></div>
          <div className="burger-line second"></div>
          <div className="burger-line third"></div>
          <div className="burger-line fourth"></div>
          <nav className="main-menu">
            <a href="#about">o nas</a>
            <a href="#offer">oferta</a>
            <a className="blocked" href="#">
              kontakt
            </a>
          </nav>
        </div>

        <div className="nav-links">
          <a href="#about">o nas</a>
          <a href="#offer">oferta</a>
          <a className="blocked" href="#contact">
            kontakt
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
