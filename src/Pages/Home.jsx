import React from "react";
import Banner from "../component/Banner/Banner";
import About from "../component/About_me/About";
import Work from "../component/Works/Work";
import Skills from "../component/Skills/Skills";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Work />
      <Skills />
    </div>
  );
};

export default Home;
