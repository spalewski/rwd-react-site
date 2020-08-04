import React from "react";
import "./Offer.css";

function Offer() {
  return (
    <section className="offer" id="offer">
      <div className="container">
        <h1>Czym zajmuje się nasza firma</h1>
        <div className="offer-description">
          <div className="grid-item">
            <div className="offer-boxes-item-dot"></div>
            <h3>Usługa 1</h3>
            <p>(nowość)</p>
            <div className="offer-boxes-item-dot"></div>
          </div>
          <div className="grid-item">
            <h3>Usługa 2</h3>
          </div>
          <div className="grid-item">
            <h3>Usługa 3</h3>
          </div>
          <div className="grid-item">
            <h3>Usługa 4</h3>
          </div>
          <div className="grid-item">
            <h3>Usługa 5</h3>
          </div>
          <div className="grid-item">
            <h3>Usługa 6</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offer;
