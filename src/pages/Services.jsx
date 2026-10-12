import AutomationService from "../components/services/AutomationService";
import FarmDevelopmentService from "../components/services/FarmDevelopmentService";
import FruitPlantationService from "../components/services/FruitPlantationService";
import GardenLawnService from "../components/services/GardenLawnService";
import LandscapingService from "../components/services/LandscapingService";
import MaintenanceService from "../components/services/MaintenanceService";
import React from "react";
import ServiceProcess from "../components/services/ServiceProcess";
import ServicesCTA from "../components/services/ServicesCTA";
import ServicesHero from "../components/services/ServicesHero";
import ServicesOverview from "../components/services/ServicesOverview";

const Services = () => {
  return (
    <main>
      <ServicesHero />
      <ServicesOverview />
      <LandscapingService />
      <GardenLawnService />
      <FarmDevelopmentService />
      <FruitPlantationService />
      <AutomationService />
      <MaintenanceService />
      <ServiceProcess />
      <ServicesCTA />
    </main>
  );
};

export default Services;