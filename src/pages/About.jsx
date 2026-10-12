import AboutCTA from "../components/about/AboutCTA";
import AboutHero from "../components/about/AboutHero";
import OurApproach from "../components/about/OurApproach";
import OurExpertise from "../components/about/OurExpertise";
import React from "react";
import SmartFarmHighlight from "../components/about/SmartFarmHighlight";
import VisionMission from "../components/about/VisionMission";
import WhatMakesUsDifferent from "../components/about/WhatMakesUsDifferent";
import WhoWeAre from "../components/about/WhoWeAre";

const About = () => {
  return (
    <main>
      <AboutHero />
      <WhoWeAre />
      <VisionMission />
      <OurApproach />
      <SmartFarmHighlight />
      <OurExpertise />
      <WhatMakesUsDifferent />
      <AboutCTA />
    </main>
  );
};

export default About;