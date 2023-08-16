import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Subfooter = () => {
  return (
    <div className="container">
      <div className="sub-section">
        <div className="sub-line"></div>
        <div className="sub-content">
          <div className="sub-links">
            <ul>
              <div className="first-links">
                <li>ABOUT MONSTERCAT</li>
                <li>CONTACT US</li>
                <li>CAREERS</li>
                <li>NEWS</li>
                <li>PRESS</li>
              </div>
              <div className="second-links">
                <li>TERMS OF SERVICE</li>
                <li>PRIVACY POLICY</li>
              </div>
            </ul>

            <div className="news">
              <h3>MONSTERCAT NEWS</h3>
              <p>
                Don't miss a thing, stay up to date with the latest news from
                us.
              </p>
              <div className="input-field">
                <input type="text" placeholder="Enter Email" />
                <div className="icon-container">
                  <BsArrowRight className="icon icon-arrow" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sub-line"></div>
      </div>
    </div>
  );
};

export default Subfooter;
