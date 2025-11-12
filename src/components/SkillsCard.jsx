import { ArrowRight, Code, Server, HardHat } from "lucide-react";

const categorizedSkills = [
  {
    name: "Mobile, Tools & DevOps",
    icon: <HardHat className="w-6 h-6" />,
    items: [
      "Flutter",
      "Dart",
      "Git/Github",
      "VS Code",
      "Figma",
      "Android Studio",
      "Emulator",
    ],
    color: "text-accent",
  },
  {
    name: "Frontend Development",
    icon: <Code className="w-6 h-6" />,
    items: ["React", "JavaScript (ES6+)", "Tailwind CSS", "HTML5/CSS3"],
    color: "text-primary",
  },
  {
    name: "Backend & Databases",
    icon: <Server className="w-6 h-6" />,
    items: [
      "Node.js",
      "Express.js",
      "MongoDB (Mongoose)",
      "REST APIs",
      "Authentication (JWT)",
    ],
    color: "text-secondary",
  },
];

function SkillsCard() {
  const data = categorizedSkills;

  return (
    <div className="flex flex-col gap-10" id="skills">
      {/* --- Section Title --- */}
      <div className="flex justify-between items-end border-b border-border-light dark:border-background-dark pb-4">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-text-primary dark:text-text-dark-primary">
          My{" "}
          <span className="bg-clip-text text-transparent bg-gradient-vibrant-text">
            Expertise
          </span>
        </h2>
        <a
          href="/projects"
          className="hidden md:flex items-center text-primary dark:text-secondary font-semibold hover:text-state-hover dark:hover:text-primary transition-colors text-lg"
        >
          View Projects <ArrowRight className="w-5 h-5 ml-2" />
        </a>
      </div>

      {/* --- Categorized Skills Grid --- */}
      <div className="bg-background-surface dark:bg-background-dark-surface rounded-3xl p-8 shadow-2xl border border-border-light dark:border-background-dark">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.map((category, index) => (
            <div key={index} className="space-y-6">
              {/* Category Header */}
              <h3
                className={`flex items-center gap-2 text-xl font-extrabold ${category.color}`}
              >
                {category.icon}
                {category.name}
              </h3>

              {/* Skills Tag Cloud */}
              <div className="flex flex-wrap gap-3">
                {category.items.map((skillName, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full text-sm font-semibold
                                                   bg-background-light dark:bg-background-dark 
                                                   text-text-primary dark:text-text-dark-secondary 
                                                   border border-border-light dark:border-background-dark-surface 
                                                   hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary transition-colors"
                  >
                    {skillName}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsCard;
