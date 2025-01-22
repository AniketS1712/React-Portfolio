import React from "react";

function ProjectCard({ image, name, techStack, repoLink, liveLink }) {
  return (
    <div className="bg-transparent border-gray-300 border-2 rounded-2xl w-60 shadow-md p-2 flex flex-col justify-between gap-3 h-80">
      {/* Project Image */}
      <div className="upperpart">
        <div className="w-full h-32 flex items-center justify-center">
          <img
            src={image}
            alt={`${name} Preview`}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Project Name */}
        <h3 className="text-lg text-start font-bold text-black mt-3">{name}</h3>
      </div>

      <div className="lowerpart">
        {/* Tech Stack */}
        <ul className="flex flex-wrap">
          {techStack.map((tech, index) => (
            <li
              key={index}
              className="bg-blue-50 border-2 border-gray-200 text-blue-600 px-3 py-1 rounded-full text-xs"
            >
              {tech}
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex gap-2 mt-3">
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white text-sm px-4 py-1 rounded-lg shadow hover:bg-blue-600 transition"
          >
            Repo
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 text-white text-sm px-4 py-1 rounded-lg shadow hover:bg-gray-800 transition"
          >
            Live View
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
