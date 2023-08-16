import React from "react";

const Music = () => {
  return (
    <div className="container">
      <div className="music-section">
        <h2>MUSIC VIDEO</h2>
        <div className="video-container">
          <iframe
            className="video-iframe"
            src="https://www.youtube.com/embed/7nObtWENgxA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Music;
