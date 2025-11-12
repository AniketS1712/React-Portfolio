import { Link } from "react-router-dom";
// Assuming these constants are accessible from the same locations as in Header/ContactCard
import { socialLinks } from "../constants/sociallinks"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Code, Heart } from "lucide-react"; // Using lucide-react for icons

// Defining quick links for the footer
const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/#about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/#contact" },
];

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background-surface border-t-2 border-primary/20 shadow-inner mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                
                {/* --- Top Section: Branding, Nav, Social (Grid Layout) --- */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-border-light pb-8">
                    
                    {/* 1. Branding / Logo */}
                    <div className="col-span-2 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-3">
                            <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-vibrant-text leading-none">
                                Aniket.dev
                            </span>
                        </Link>
                        <p className="text-sm text-text-secondary max-w-xs">
                            Dedicated to building elegant, high-performance applications with Flutter and the MERN stack.
                        </p>
                    </div>

                    {/* 2. Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold text-text-primary mb-4">Navigation</h4>
                        <ul className="space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <Link 
                                        to={link.path} 
                                        className="text-text-secondary hover:text-primary transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 3. Get in Touch (Direct Contact) */}
                    <div>
                        <h4 className="text-lg font-bold text-text-primary mb-4">Direct Contact</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="text-text-secondary hover:text-primary transition-colors">
                                <a href="mailto:ssinghalaniket@gmail.com">
                                    ssinghalaniket@gmail.com
                                </a>
                            </li>
                            <li className="text-text-secondary hover:text-primary transition-colors">
                                <a href="tel:+919311764547">
                                    +91 93117 64547
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                    {/* 4. Social Media */}
                    <div>
                        <h4 className="text-lg font-bold text-text-primary mb-4">Connect</h4>
                        <div className="flex gap-3">
                            {socialLinks.map(({ href, icon, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="p-3 rounded-full bg-background-light border border-border-light hover:scale-110 transition-transform duration-300 text-text-primary hover:text-primary shadow-sm"
                                >
                                    <FontAwesomeIcon icon={icon} size="lg" />
                                </a>
                            ))}
                        </div>
                    </div>

                </div>

                {/* --- Bottom Section: Copyright and Credits --- */}
                <div className="mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-text-secondary/70">
                    <p>
                        &copy; {currentYear} Aniket Singhal. All rights reserved.
                    </p>
                    <p className="flex items-center mt-3 md:mt-0">
                        <Code className="w-4 h-4 mr-1 text-accent" />
                        Built with <Heart className="w-4 h-4 mx-1 text-primary animate-pulse" /> and modern web technologies
                    </p>
                </div>

            </div>
        </footer>
    );
}

export default Footer;