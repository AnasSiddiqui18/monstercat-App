import React, { useState } from "react";
import Header from "./Header";
import Home from "./Home";
import Menu from "./Menu";

const AppWrapper = () => {
  const [menu, showmenu] = useState(false);

  const showMenu = () => {
    showmenu(!menu);
  };

  return (
    <>
      <div className="app-wrapper">
        <div className="home-background"></div>
        <div className="overlay"></div>
        <div className="content">
          <Menu menu={menu} showMenu={showMenu} />
          {menu && <div className="menuOverlay" onClick={showMenu}></div>}

          <Header showMenu={showMenu} />
          <Home />
        </div>
      </div>
    </>
  );
};

export default AppWrapper;
