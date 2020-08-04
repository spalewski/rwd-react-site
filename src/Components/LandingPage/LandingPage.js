import React from "react";
import "./LandingPage.css";

function LandingPage() {
  return (
    <section className="landing-page">
      <div className="landing-page-shadow">
        <div className="container">
          <h1>Nasza firma oferuje najwyższej jakości produkty</h1>
          <p>Nie wierz nam na słowo - sprawdź</p>
          <a className="landing-page-btn" href="#offer">
            oferta
          </a>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
