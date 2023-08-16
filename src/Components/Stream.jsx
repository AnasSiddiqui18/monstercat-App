import React, { useState } from "react";
import { FaBandcamp } from "react-icons/fa";
import { BiLogoSoundcloud } from "react-icons/bi";
import { BsApple } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { BsSpotify } from "react-icons/bs";

const Stream = () => {
  const [tool, setshowtool] = useState(null);

  const handleOnMouse = (index) => {
    setshowtool(index);
  };

  const handleMouseOut = () => {
    setshowtool(null);
  };

  return (
    <div className="container">
      <div className="stream-section">
        <h2>STREAM IT YOUR WAY</h2>

        <div className="logos">
          <div className="m-player">
            <img
              src="/images/monstercat-player.svg"
              onMouseEnter={() => handleOnMouse(1)}
              onMouseLeave={handleMouseOut}
              alt="#"
            />
            {tool === 1 && (
              <>
                <div className="toolkit">Stream on monstercat player</div>
              </>
            )}
          </div>
          <hr className="hr-line" />
          <div className="m-player">
            <FaBandcamp
              className="icon"
              onMouseEnter={() => handleOnMouse(2)}
              onMouseLeave={handleMouseOut}
            />
            {tool === 2 && (
              <div className="toolkit toolkit-second">Stream on bandcamp</div>
            )}
          </div>
          <hr className="hr-line" />
          <div className="m-player">
            <BiLogoSoundcloud
              className="icon"
              onMouseEnter={() => handleOnMouse(3)}
              onMouseLeave={handleMouseOut}
            />
            {tool === 3 && (
              <div className="toolkit toolkit-third ">
                Stream on sound cloud
              </div>
            )}
          </div>
          <hr className="hr-line" />
          <div className="m-player">
            <BsApple
              className="icon"
              onMouseEnter={() => handleOnMouse(4)}
              onMouseLeave={handleMouseOut}
            />
            {tool === 4 && (
              <div className="toolkit toolkit-fourth">
                Stream on apple music
              </div>
            )}
          </div>
          <hr className="hr-line" />
          <div className="m-player">
            <AiFillYoutube
              className="icon"
              onMouseEnter={() => handleOnMouse(5)}
              onMouseLeave={handleMouseOut}
            />
            {tool === 5 && (
              <div className="toolkit toolkit-fifth">Stream on youtube</div>
            )}
          </div>
          <hr className="hr-line" />
          <div className="m-player">
            <BsSpotify
              className="icon"
              onMouseEnter={() => handleOnMouse(6)}
              onMouseLeave={handleMouseOut}
            />
            {tool === 6 && (
              <div className="toolkit toolkit-sixth">Stream on spotify</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stream;
