import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsSpotify } from "react-icons/bs";
import { BsApple } from "react-icons/bs";
import { BsTwitch } from "react-icons/bs";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLogoDiscord } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer-content">
        <p>2011 - 2023 © Monstercat, All Rights Reserved</p>

        <div className="foooter-social">
          <AiFillYoutube />
          <AiOutlineInstagram />
          <FaTiktok />
          <AiOutlineTwitter />
          <BsSpotify />
          <BsApple />
          <BsTwitch />
          <BiLogoFacebookCircle />
          <BiLogoDiscord />
          <img src="/images/monster-footer.svg" alt="" />
        </div>
      </div>
      <div className="end-para">
        <p>
          We acknowledge with gratitude the traditional, ancestral and unceded
          land of the Coast Salish peoples, including the territories of the
          Sḵwx̱wú7mesh (Squamish), Stó:lō and Səl̓ílwətaʔ/Selilwitulh
          (Tsleil-Waututh) and xʷməθkʷəy̓əm (Musqueam) Nations, on which
          Monstercat's Vancouver HQ stands.
        </p>
        <p>
          We acknowledge the unceded and ancestral territories of the
          Gabrielino/Tongva peoples on which our LA team live and work.
        </p>
      </div>
    </div>
  );
};

export default Footer;
