import MaintenanceCTA from "../components/maintenance/MaintenanceCTA";
import MaintenanceFor from "../components/maintenance/MaintenanceFor";
import MaintenanceHero from "../components/maintenance/MaintenanceHero";
import MaintenanceIntro from "../components/maintenance/MaintenanceIntro";
import MaintenanceProcess from "../components/maintenance/MaintenanceProcess";
import MaintenanceServices from "../components/maintenance/MaintenanceServices";
import MaintenanceWhyNeeded from "../components/maintenance/MaintenanceWhyNeeded";
import React from "react";
import YearlyMaintenance from "../components/maintenance/YearlyMaintenance";

const GardenMaintenance = () => {
  return (
    <main>
      <MaintenanceHero />
      <MaintenanceIntro />
      <MaintenanceServices />
      <MaintenanceWhyNeeded />
      <MaintenanceProcess />
      <YearlyMaintenance />
      <MaintenanceFor />
      <MaintenanceCTA />
    </main>
  );
};

export default GardenMaintenance;