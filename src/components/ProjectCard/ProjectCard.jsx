function ProjectCard({ image, name, techStack = [], repoLink, liveLink }) {
  return (
    <div className="w-full max-w-md bg-white border-2 border-gray-300 rounded-2xl shadow-md p-4 flex flex-col mx-auto">
      {/* Image */}
      <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-lg border-b border-gray-300">
        <img
          src={image}
          alt={`${name} Preview`}
          className="object-contain w-full h-full"
        />
      </div>

      {/* Name */}
      <h3 className="text-xl font-bold text-black mt-4">{name}</h3>

      {/* Tech Stack */}
      <ul className="flex flex-wrap gap-2 mt-4">
        {techStack.map((tech, index) => (
          <li
            key={index}
            className="bg-blue-100 text-blue-700 border border-blue-300 px-3 py-1 rounded-full text-xs"
          >
            {tech}
          </li>
        ))}
      </ul>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-2 mt-6">
        {repoLink && (
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
          >
            Repo
          </a>
        )}
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-gray-700 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-800 transition"
          >
            Live View
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
