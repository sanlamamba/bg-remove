import React from "react";
import MainHero from "../components/Hero/MainHero";
import Steps from "../components/Home/Steps";
import BgSlider from "../components/Home/BgSlider";
import Testimonials from "../components/Home/Testimonials";

const Home = () => {
  return (
    <div>
      <MainHero />
      <Steps />
      <BgSlider />
      <Testimonials />
    </div>
  );
};

export default Home;
