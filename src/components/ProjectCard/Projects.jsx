import { useNavigate } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { colors, shadows, border } from "../../constants/theme";
import { projects } from "../../constants/projects";

function Projects() {
  const navigate = useNavigate();
  const previewProjects = projects.slice(0, 1);

  return (
    <div
      className={`projects-preview bg-[${colors.cardBackground}] ${border.standard} rounded-3xl px-6 pt-6 pb-4 ${shadows.standard} w-full flex flex-col gap-4`}
    >
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-2xl font-semibold text-gray-800">Projects</h2>
        <button
          onClick={() => navigate("/projects")}
          className="text-blue-600 hover:underline text-sm font-medium"
        >
          See More →
        </button>
      </div>

      {previewProjects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}

export default Projects;
