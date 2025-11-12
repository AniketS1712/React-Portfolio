import profileImage from "../../Assets/Images/profileImage.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { skills } from "../../constants/skills";
import { tools } from "../../constants/tools";
import { socialLinks } from "../../constants/sociallinks";
import Aresume from "../../Assets/static/Aniket_Resume.pdf"

function Hero() {
  return (
    <section className="relative overflow-hidden bg-background-light py-20">
      {/* --- Main Container --- */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 px-6">
        {/* --- Left: Profile Image --- */}
        <div className="relative flex-shrink-0">
          <div className="relative rounded-2xl overflow-hidden border-4 border-accent">
            <img
              src={profileImage}
              alt="Aniket Singhal"
              className="w-64 h-80 md:w-72 md:h-96 object-cover rounded-2xl transition-transform duration-300 hover:-translate-y-1"
            />
          </div>
        </div>

        {/* --- Right: Text Content --- */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl font-bold mb-4 text-text-primary">
            Hi, I’m{" "}
            <span className="bg-clip-text text-transparent bg-gradient-vibrant-text-dark">
              Aniket Singhal
            </span>
          </h1>

          <p className="text-2xl font-semibold text-text-secondary mb-6">
            Mobile Application Developer & Web Developer
          </p>

          <p className="text-lg text-text-primary leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
            I’m a passionate developer specializing in Flutter and the MERN
            stack. I create intuitive, high-performance applications that blend
            elegant design with smooth user experience — currently focused on
            crafting seamless, mobile-first digital products.
          </p>

          {/* --- Social Links --- */}
          <div className="flex justify-center lg:justify-start gap-4 mb-10">
            {socialLinks.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-4 rounded-xl bg-gradient-primary hover:scale-105 transition-transform duration-300 shadow-md shadow-primary/30"
              >
                <FontAwesomeIcon icon={icon} size="xl" color="white" />
              </a>
            ))}
          </div>

          {/* --- CTA Buttons --- */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-5">
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-md shadow-primary/20"
            >
              Get In Touch
            </a>

            <a
              href="/projects"
              className="px-6 py-3 rounded-lg font-semibold border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 shadow-md shadow-accent/20"
            >
              View Projects
            </a>
            <a
              href={Aresume}
              download
              className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-secondary hover:scale-105 transition-all duration-300 shadow-md shadow-secondary/20"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* --- Skills & Tools Section --- */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 mt-20 px-6">
        {/* --- Skills --- */}
        <div className="bg-background-surface border border-border-light rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-bold text-text-primary mb-5">
            Technical Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full text-sm text-white bg-gradient-primary hover:scale-105 transition-transform duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* --- Tools --- */}
        <div className="bg-background-surface border border-border-light rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-bold text-text-primary mb-5">
            Development Tools
          </h3>
          <div className="flex flex-wrap gap-6">
            {tools.map((icon, index) => (
              <div
                key={index}
                className="w-14 h-14 p-3 rounded-xl flex items-center justify-center bg-gradient-accent hover:scale-105 transition-transform duration-300 shadow-md shadow-accent/30"
              >
                <img
                  src={icon}
                  alt="Development tool"
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
