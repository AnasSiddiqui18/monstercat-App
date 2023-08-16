import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <header className="header-section">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src="/images/monstercat-logo.webp" alt="" />
          </div>
          <div className="menu">
            <AiOutlineMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
