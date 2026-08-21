import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ProjectCard from "./ProjectCard/ProjectCard";
import { projects } from "../constants/projects";
import Footer from "./Footer";

function AllProjects() {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light min-h-screen text-text-primary flex flex-col justify-between pt-8 sm:pt-12">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header Section */}
        <div className="flex justify-between items-center border-b border-border-light pb-6 mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary">
            All <span className="bg-clip-text text-transparent bg-gradient-accent">Projects</span>
          </h1>

          <button
            onClick={() => navigate("/")}
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-text-inverse bg-gradient-primary shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 transform hover:scale-[1.03]"
          >
            <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
            Back Home
          </button>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              name={project.name}
              description={project.description}
              techStack={project.techStack}
              repoLink={project.repoLink}
              liveLink={project.liveLink}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default AllProjects;
