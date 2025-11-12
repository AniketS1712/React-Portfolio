import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "About", path: "/#about", isHashLink: true },
    { name: "Skills", path: "/#skills", isHashLink: true },
    { name: "Education", path: "/#education", isHashLink: true },
    { name: "Projects", path: "/#projects", isHashLink: true },
    { name: "All Projects", path: "/projects", isHashLink: false },
  ];

  const handleLinkClick = (path, isHashLink) => {
    setIsMenuOpen(false);
    if (isHashLink) {
      const id = path.split("#")[1];
      if (location.pathname === "/") {
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 10);
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background-surface/80 border-b border-border-light shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* --- Logo / Name --- */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => handleLinkClick("/", false)}
        >
          <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-vibrant-text leading-none">
            SAniket
          </span>
        </Link>

        {/* --- Desktop Navigation --- */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const path = link.isHashLink ? link.path.split("#")[0] : link.path;
            const isActive =
              (!link.isHashLink && location.pathname === path) ||
              (link.isHashLink && location.pathname === "/");

            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => handleLinkClick(link.path, link.isHashLink)}
                className={`text-base font-medium relative transition-colors duration-300 group ${
                  isActive
                    ? "text-primary font-semibold"
                    : "text-text-secondary hover:text-primary"
                }`}
              >
                {link.name}
                {/* Active/Hover Underline Effect */}
                <span
                  className={`absolute bottom-[-5px] left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full ${
                    isActive ? "w-full" : ""
                  }`}
                ></span>
              </Link>
            );
          })}

          <a
            href="#contact"
            onClick={() => handleLinkClick("#contact", true)}
            className="group ml-4 flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-text-inverse bg-gradient-primary shadow-lg shadow-primary/40 hover:shadow-primary/60 transition-all duration-300 transform hover:scale-[1.02]"
          >
            Say Hello
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </nav>

        {/* --- Mobile Menu Button --- */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-text-primary p-2 rounded-lg hover:bg-background-light transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* --- Mobile Navigation --- */}
      {isMenuOpen && (
        <div className="md:hidden bg-background-surface border-t border-border-light shadow-inner pb-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => handleLinkClick(link.path, link.isHashLink)}
              className="block px-6 py-3 text-base font-medium text-text-secondary hover:text-primary hover:bg-background-light transition-colors"
            >
              {link.name}
            </Link>
          ))}

          <a
            href="#contact"
            onClick={() => handleLinkClick("#contact", true)}
            className="mx-6 my-2 flex items-center justify-center gap-2 px-6 py-3 font-semibold text-text-inverse rounded-full bg-gradient-accent shadow-lg shadow-accent/40 hover:shadow-accent/60 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
