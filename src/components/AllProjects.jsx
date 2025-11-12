import ProjectCard from "./ProjectCard/ProjectCard";
import { projects } from "../constants/projects";
import { useNavigate } from "react-router-dom";

function AllProjects() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 font-baskerville">
          All Projects
        </h1>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition"
        >
          ⬅ Back Home
        </button>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            name={project.name}
            techStack={project.techStack}
            repoLink={project.repoLink}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </div>
  );
}

export default AllProjects;
