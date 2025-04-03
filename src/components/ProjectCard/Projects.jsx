import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import collegeportal from "../../Assets/Images/projectimages/collegeportal.png";
import samanvaya from "../../Assets/Images/projectimages/samanvaya.jpg";
import portfolio from "../../Assets/Images/projectimages/Portfolio.png";
import businessgame from "../../Assets/Images/projectimages/businessgame.PNG";

function Projects() {
  const projects = [
    {
      image: portfolio,
      name: "React Portfolio Website",
      techStack: ["React JS", "Tailwind CSS", "JSX"],
      repoLink: "https://github.com/AniketS1712/Samanvaya/tree/master",
      liveLink: "https://saniket.vercel.app/",
    },
    {
      image: samanvaya,
      name: "Samanvaya - A real time whiteboard",
      techStack: ["React JS", "Express", "NodeJS", "MongoDB"],
      repoLink: "https://github.com/AniketS1712/Samanvaya/tree/master",
      liveLink: "https://example.com/",
    },
    {
      image: businessgame,
      name: "Business Game",
      techStack: ["Flutter", "Firebase"],
      repoLink: "https://github.com/AniketS1712/BusinessGame",
      liveLink:
        "https://1drv.ms/u/c/4e46ae5a28a8b6c9/EeC9mQk6j4tEmMhoL_Jm_jgBt3Q74ZgJ2kVT0_J7ASh3xA?e=koRlzA",
    },
    {
      image: collegeportal,
      name: "College Portal",
      techStack: ["Python", "Django", "SqLite"],
      repoLink: "https://github.com/AniketS1712/College_portal_django",
      liveLink: "https://example.com/",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < projects.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="bg-[#e3ffd0] border-2 border-white rounded-3xl px-4 pt-4 [box-shadow:4px_4px_8px_#959595] ml-6 relative overflow-hidden flex-1 w-full sm:w-[97%] md:w-[97%] lg:w-[97%] xl:w-[97%] max-sm:mt-6 max-sm:ml-0">
      {/* Left Arrow */}
      {currentIndex > 0 && (
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full z-10 shadow-md hover:bg-gray-400 transition"
        >
          &#8592;
        </button>
      )}

      {/* Projects - Updated layout for responsiveness */}
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateX(-${
            currentIndex *
            (window.innerWidth < 640 ? 16 : window.innerWidth < 768 ? 14 : 18)
          }rem)`,
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="min-w-[16rem] sm:min-w-[16rem] md:min-w-[16rem] lg:min-w-[16rem] w-full"
          >
            <ProjectCard
              image={project.image}
              name={project.name}
              techStack={project.techStack}
              repoLink={project.repoLink}
              liveLink={project.liveLink}
            />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      {currentIndex < projects.length - 1 && (
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-md hover:bg-gray-400 transition"
        >
          &#8594;
        </button>
      )}
    </div>
  );
}

export default Projects;
