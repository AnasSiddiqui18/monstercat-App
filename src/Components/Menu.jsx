import { RxCross2 } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsChevronUp, BsTwitch } from "react-icons/bs";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLogoDiscord } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";

const Menu = ({ menu, showMenu }) => {
  const [subMenu, showsubMenu] = useState(null);

  const bodyRef = useRef(document.body);

  useEffect(() => {
    if (menu) {
      bodyRef.current.style.overflow = "hidden";
    } else {
      bodyRef.current.style.overflow = "visible";
    }
  }, [menu]);

  const setShowSubMenu = (index) => {
    if (subMenu === index) {
      showsubMenu(null);
    } else {
      showsubMenu(index);
    }
  };

  return (
    <>
      {menu && (
        <div className="menuBar">
          <div className="top">
            <img src="/images/monstercat-logo-white.svg" alt="" />
            <RxCross2 className="icon crossIcon" onClick={showMenu} />
          </div>

          <div className="center">
            <ul>
              <li className="list-item">
                <a href="#" className="flex" onClick={() => setShowSubMenu(0)}>
                  MUSIC
                  {subMenu === 0 && subMenu !== null ? (
                    <BsChevronUp className="icon-up" />
                  ) : (
                    <IoIosArrowForward className="icon-up" />
                  )}
                </a>
                {subMenu === 0 && (
                  <ul className="drop-down">
                    <li onClick={showMenu}>OUR MUSIC</li>
                    <li onClick={showMenu}>INSTINCT</li>
                    <li onClick={showMenu}>UNCAGED</li>
                    <li onClick={showMenu}>SILK</li>
                  </ul>
                )}
              </li>
              <li className="list-item">
                <a href="#" className="flex">
                  ARTIST
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="flex" onClick={() => setShowSubMenu(1)}>
                  ABOUT
                  {subMenu === 1 && subMenu !== null ? (
                    <BsChevronUp className="icon-up" />
                  ) : (
                    <IoIosArrowForward className="icon-up" />
                  )}
                </a>
                {subMenu === 1 && (
                  <ul className="drop-down">
                    <li onClick={showMenu}>OUR MUSIC</li>
                    <li onClick={showMenu}>INSTINCT</li>
                    <li onClick={showMenu}>UNCAGED</li>
                    <li onClick={showMenu}>SILK</li>
                  </ul>
                )}
              </li>
              <li className="list-item">
                <a href="#" className="flex">
                  NEWS
                </a>
              </li>

              <li className="list-item">
                <a href="#" className="flex" onClick={() => setShowSubMenu(2)}>
                  EVENT
                  {subMenu === 2 && subMenu !== null ? (
                    <BsChevronUp className="icon-up" />
                  ) : (
                    <IoIosArrowForward className="icon-up" />
                  )}
                </a>
                {subMenu === 2 && (
                  <ul className="drop-down">
                    <li onClick={showMenu}>OUR MUSIC</li>
                    <li onClick={showMenu}>INSTINCT</li>
                    <li onClick={showMenu}>UNCAGED</li>
                    <li onClick={showMenu}>SILK</li>
                  </ul>
                )}
              </li>

              <li className="list-item">
                <a href="#" className="flex" onClick={() => setShowSubMenu(3)}>
                  PROGRAMMING
                  {subMenu === 3 && subMenu !== null ? (
                    <BsChevronUp className="icon-up" />
                  ) : (
                    <IoIosArrowForward className="icon-up" />
                  )}
                </a>
                {subMenu === 3 && (
                  <ul className="drop-down">
                    <li onClick={showMenu}>OUR MUSIC</li>
                    <li onClick={showMenu}>INSTINCT</li>
                    <li onClick={showMenu}>UNCAGED</li>
                    <li onClick={showMenu}>SILK</li>
                  </ul>
                )}
              </li>
              <li className="list-item">
                <a href="#" className="flex">
                  GOLD
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="flex">
                  PARTNERS
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="flex">
                  PRESS
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="flex">
                  PLAYER
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="flex">
                  SHOP
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="flex">
                  LOST CIVILIZATION
                </a>
              </li>
            </ul>
          </div>

          <div className="bottom">
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
      )}
    </>
  );
};

export default Menu;
