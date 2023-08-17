import { RxCross2 } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsTwitch } from "react-icons/bs";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLogoDiscord } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";

import { useState } from "react";

const Menu = () => {
  const [subMenu, showsubMenu] = useState(null);

  const setShowSubMenu = (index) => {
    if (subMenu === index) {
      showsubMenu(null);
    } else {
      showsubMenu(index);
    }
  };

  return (
    <div className="menuBar">
      <div className="top">
        <img src="/images/monstercat-logo-white.svg" alt="" />
        <RxCross2 className="icon crossIcon" />
      </div>

      <div className="center">
        <ul>
          <li className="list-item">
            <a href="#" className="flex" onClick={() => setShowSubMenu(0)}>
              MUSIC
              {subMenu !== null ? (
                <BsChevronDown className="icon-forward" />
              ) : (
                <IoIosArrowForward className="icon-forward" />
              )}
            </a>
            {subMenu === 0 && (
              <ul className="drop-down">
                <li>OUR MUSIC</li>
                <li>INSTINCT</li>
                <li>UNCAGED</li>
                <li>SILK</li>
              </ul>
            )}
          </li>
          <li className="list-item">
            <a href="#" className="flex">
              ARTIST
            </a>
          </li>
          <li className="list-item">
            <a href="#" className="flex">
              ABOUT <IoIosArrowForward className="icon-forward" />
            </a>
            <ul className="drop-down">
              <li>OUR MUSIC</li>
              <li>INSTINCT</li>
              <li>UNCAGED</li>
              <li>SILK</li>
            </ul>
          </li>
          <li className="list-item">
            <a href="#" className="flex">
              NEWS
            </a>
          </li>

          <li className="list-item">
            <a href="#" className="flex">
              EVENT <IoIosArrowForward className="icon-forward" />
            </a>
            <ul className="drop-down">
              <li>OUR MUSIC</li>
              <li>INSTINCT</li>
              <li>UNCAGED</li>
              <li>SILK</li>
            </ul>
          </li>

          <li className="list-item">
            <a href="#" className="flex">
              PROGR <IoIosArrowForward className="icon-forward" />
            </a>
            <ul className="drop-down">
              <li>OUR MUSIC</li>
              <li>INSTINCT</li>
              <li>UNCAGED</li>
              <li>SILK</li>
            </ul>
          </li>
          <li className="list-item">
            <a href="#" className="flex">
              GOLD
            </a>
          </li>
          <li className="list-item">
            <a href="#" className="flex">
              PARTN
            </a>
          </li>
          <li className="list-item">
            <a href="#" className="flex">
              PRESS
            </a>
          </li>
          <li className="list-item">
            <a href="#" className="flex">
              PLAYE
            </a>
          </li>
          <li className="list-item">
            <a href="#" className="flex">
              SHOP
            </a>
          </li>
          <li className="list-item">
            <a href="#" className="flex">
              LOST
            </a>
          </li>
        </ul>
      </div>

      <div className="bottom">
        <div className="social-fixed">
          <AiOutlineInstagram classNam className="flex" e="icon-fixed" />
          <FaTiktok className="icon-fixed" />
          <AiOutlineTwitter classNam className="flex" e="icon-fixed" />
          <BsTwitch className="icon-fixed" />
          <BiLogoFacebookCircle className="icon-fixed" />
          <BiLogoDiscord className="icon-fixed" />
          <img src="/images/monster-footer.svg" alt="" className="icon-fixed" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
