import profileImage from "../Assets/Images/profileImage.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialLinks } from "../constants/sociallinks";
import Aresume from "../Assets/static/Aniket_Resume.pdf";
import { ArrowRight, Download } from "lucide-react";

function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-8 lg:pt-16 bg-background-light overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Main Content Grid --- */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* --- Left: Text Content --- */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1 max-w-2xl">
            <h1 className="text-4xl md:text-4xl font-extrabold mb-4 leading-tight text-text-primary">
              Hi, I’m{" "}
              <span className=" bg-clip-text text-transparent bg-gradient-vibrant-text">
                Aniket Singhal
              </span>
            </h1>

            <p className="text-xl md:text-2xl font-semibold text-text-secondary mb-6">
              Full Stack Developer | Mobile Application Specialist
            </p>

            <p className="text-lg text-text-secondary leading-relaxed mb-10">
              I transform complex ideas into intuitive, high-performance digital
              products. My focus is delivering seamless, scalable, and
              beautifully engineered **mobile and web applications** that drive
              real-world value.
            </p>

            {/* --- CTA + Social Links in the same line --- */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              {/* Resume Button */}
              <a
                href={Aresume}
                download
                className="group flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-text-inverse bg-gradient-primary shadow-lg shadow-secondary/40 hover:scale-[1.03] transition-all duration-300 transform hover:shadow-secondary/60 hover:text-text-primary"
              >
                <Download className="w-5 h-5" />
                Resume
              </a>

              {/* Social Links */}
              {socialLinks.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="py-3 px-4 rounded-full bg-gradient-secondary border border-border-light hover:bg-background-light hover:scale-110 transition-transform duration-300 text-text-inverse hover:text-text-primary shadow-sm"
                >
                  <FontAwesomeIcon icon={icon} size="lg" />
                </a>
              ))}
            </div>
          </div>

          {/* --- Right: Profile Image --- */}
          <div className="relative flex-shrink-0 order-1 lg:order-2">
            <div
              className="relative w-72 h-96 md:w-72 md:h-96 rounded-3xl overflow-hidden 
                       p-1 border border-primary/50 transition-all duration-500 transform 
                       shadow-2xl shadow-accent/50 hover:shadow-primary/80 
                       hover:rotate-3 hover:scale-[1.1] hover:translate-y-[-8px]"
            >
              <img
                src={profileImage}
                alt="Aniket Singhal - Profile"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
