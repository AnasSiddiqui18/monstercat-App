import React from "react";
import Header from "./Header";
import Home from "./Home";

const AppWrapper = () => {
  return (
    <>
      <div className="app-wrapper">
        <div className="home-background"></div>
        <div className="overlay"></div>
        <div className="content">
          <Header />
          <Home />
        </div>
      </div>
    </>
  );
};

export default AppWrapper;
