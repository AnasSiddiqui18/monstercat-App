import React from "react";
import Appwrapper from "./Components/Appwrapper";
import Stream from "./Components/Stream";
import Track from "./Components/Track";
import Music from "./Components/Music";
import Subfooter from "./Components/Subfooter";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Appwrapper />
      <Stream />
      <Track />
      <Music />
      <Subfooter />
      <Footer />
    </>
  );
};

export default App;
