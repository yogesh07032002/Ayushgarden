import ProjectCategories from "../components/projects/ProjectCategories";
import ProjectGallery from "../components/projects/ProjectGallery";
import ProjectsHero from "../components/projects/ProjectsHero";
import ProjectsIntro from "../components/projects/ProjectsIntro";
import React from "react";

const Projects = () => {
  return (
    <main>
      <ProjectsHero />
      <ProjectsIntro />
      <ProjectGallery />
      <ProjectCategories />
    </main>
  );
};

export default Projects;