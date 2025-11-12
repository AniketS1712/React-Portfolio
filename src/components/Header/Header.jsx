import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b bg-background-light border-border-light">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* --- Logo / Name --- */}
        <Link to="/" className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-vibrant-text-dark">
            Aniket Singhal
          </h1>
        </Link>

        {/* --- Desktop Navigation --- */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium relative group transition-all ${
                  isActive
                    ? "text-primary"
                    : "text-text-secondary hover:text-primary"
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full ${
                    isActive ? "w-full" : ""
                  }`}
                ></span>
              </Link>
            );
          })}

          <a
            href="#contact"
            className="px-5 py-2 rounded-lg font-semibold text-text-inverse bg-gradient-accent hover:scale-105 transition-transform shadow-lg shadow-accent/30"
          >
            Contact Me
          </a>
        </nav>

        {/* --- Mobile Menu Button --- */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-text-primary focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* --- Mobile Navigation --- */}
      {isMenuOpen && (
        <div className="md:hidden bg-background-surface border-t border-border-light">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-6 py-3 text-base font-medium transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-text-secondary hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="block text-center px-6 py-3 mt-2 font-semibold text-text-inverse rounded-lg bg-gradient-accent hover:scale-105 transition-transform shadow-lg shadow-accent/30"
          >
            Contact Me
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
