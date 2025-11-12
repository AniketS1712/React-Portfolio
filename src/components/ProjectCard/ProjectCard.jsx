import { Github, Eye } from "lucide-react"; // Using lucide-react for clean icons

function ProjectCard({ image, name, techStack = [], repoLink, liveLink }) {
  // A simple mechanism to cycle through theme colors for the tech stack badges
  const tagColorClasses = [
    "bg-primary/10 text-primary border-primary/30",
    "bg-secondary/10 text-secondary border-secondary/30",
    "bg-accent/10 text-accent border-accent/30",
  ];

  return (
    <div 
      className="w-full h-full bg-background-surface border border-border-light rounded-2xl shadow-xl 
                 p-5 flex flex-col transition-all duration-300 transform 
                 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10"
    >
      
      {/* Image */}
      <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-xl border border-border-light bg-background-light">
        <img
          src={image}
          alt={`${name} Preview`}
          className="object-contain w-full h-full p-2" 
        />
      </div>

      {/* Name */}
      <h3 className="text-2xl font-bold text-text-primary mt-4 mb-2">{name}</h3>

      {/* Tech Stack (Pushed to the bottom) */}
      <div className="mt-auto pt-4">
        <p className="text-sm font-semibold text-text-secondary mb-3">Tech Stack:</p>
        <ul className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <li
              key={index}
              className={`px-3 py-1 rounded-full text-xs font-medium border ${tagColorClasses[index % tagColorClasses.length]}`}
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mt-6 pt-4 border-t border-border-light">
        {repoLink && (
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-1 flex items-center justify-center gap-2 text-center 
                       px-4 py-2 rounded-full font-semibold text-text-inverse 
                       bg-gradient-primary shadow-lg shadow-primary/30 hover:shadow-primary/50 
                       transition-all duration-300 hover:scale-[1.03]"
          >
            <Github className="w-5 h-5" />
            Repository
          </a>
        )}
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-1 flex items-center justify-center gap-2 text-center 
                       px-4 py-2 rounded-full font-semibold text-text-primary 
                       bg-gradient-accent shadow-lg shadow-accent/30 hover:shadow-accent/50
                       transition-all duration-300 hover:scale-[1.03]"
          >
            <Eye className="w-5 h-5" />
            Live View
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;