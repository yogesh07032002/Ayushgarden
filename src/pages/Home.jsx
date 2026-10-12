import React from "react";

import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection";
import AboutSection from "../components/home/AboutSection";
import ServicesSection from "../components/home/ServicesSection";
import StatsSection from "../components/home/StatsSection";
import FruitPlantationSection from "../components/home/FruitPlantationSection";
import LandscapingSolutions from "../components/home/LandscapingSolutions";
import HowWeWork from "../components/home/HowWeWork";
import WhyChooseUs from "../components/home/WhyChooseUs";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <FruitPlantationSection />
      <LandscapingSolutions />
      <HowWeWork />
      <WhyChooseUs />
    </main>
  );
};

export default Home;