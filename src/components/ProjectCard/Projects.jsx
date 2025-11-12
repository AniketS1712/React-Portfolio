import { useNavigate } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { projects } from "../../constants/projects";
import { ArrowRight } from "lucide-react";

function Projects() {
  const navigate = useNavigate();
  // Changed to show up to 3 featured projects for a better preview
  const previewProjects = projects.slice(0, 3); 

  return (
    <div className="flex flex-col gap-10">
      
      {/* --- Section Title and CTA --- */}
      <div className="flex justify-between items-end border-b border-border-light pb-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary">
          Featured <span className="bg-clip-text text-transparent bg-gradient-accent">Projects</span>
        </h2>
        
        <button
          onClick={() => navigate("/projects")}
          className="group flex items-center gap-1 text-lg font-semibold text-accent hover:text-state-focus transition-colors"
        >
          View All Projects
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>

      {/* --- Featured Projects Grid --- */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {/* We assume ProjectCard will be redesigned next */}
        {previewProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;