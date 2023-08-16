import React from "react";
import { CiPlay1 } from "react-icons/ci";
const Home = () => {
  return (
    <div className="container">
      <div className="home-content">
        <div className="left relative">
          <img src="/images/hero.png" alt="" />
          <p className="home-para">
            <span>Instinct</span> — Released May 22, 2020
          </p>
        </div>
        <div className="right">
          <p className="home-para home-para-below">
            <span>Instinct</span> — Released May 22, 2020
          </p>

          <h3>level days</h3>
          <h4>Conro</h4>

          <div className="buttons">
            <button className="listen-btn">
              <CiPlay1 className="icon" /> Listen Now
            </button>
            <a href="#" className="share">
              Share
            </a>
          </div>
        </div>
      </div>
      {/* <div className="dark"></div> */}
    </div>
  );
};

export default Home;
