import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsTwitch } from "react-icons/bs";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLogoDiscord } from "react-icons/bi";

const Header = ({ showMenu }) => {
  return (
    <header className="header-section">
      <div className="header-container">
        <div className="header-content">
          <div className="logo">
            <img src="/images/monstercat-logo.webp" alt="" />
          </div>
          <div className="menu">
            <AiOutlineMenu onClick={showMenu} />
          </div>
          <div className="social-fixed">
            <AiOutlineInstagram className="icon-fixed" />
            <FaTiktok className="icon-fixed" />
            <AiOutlineTwitter className="icon-fixed" />
            <BsTwitch className="icon-fixed" />
            <BiLogoFacebookCircle className="icon-fixed" />
            <BiLogoDiscord className="icon-fixed" />
            <img
              src="/images/monster-footer.svg"
              alt=""
              className="icon-fixed"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
