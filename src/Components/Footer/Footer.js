import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <p>Nazwa firmy - wszelkie prawa zastrzeżone, 2020</p>
        <div className="footer-links">
          <i>
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </i>
          <i>
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </i>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
