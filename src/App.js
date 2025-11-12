import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/ProjectCard/Projects";
import SkillsCard from "./components/SkillsCard";
import ContactCard from "./components/ContactCard";
import { EducationCard } from "./components/EducationCard";
import { AboutCard } from "./components/AboutCard";
import Footer from "./components/Footer";
import AllProjects from "./components/AllProjects";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className="App bg-background-light min-h-screen text-text-primary">
              <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Hero />
                <section id="about" className="py-16">
                  <AboutCard />
                </section>
                <section id="projects" className="py-16">
                  <Projects />
                </section>
                <section id="skills" className="py-16">
                  <SkillsCard />
                </section>
                <section id="education" className="py-16">
                  <EducationCard />
                </section>
                <section id="contact" className="py-16">
                  <ContactCard />
                </section>
              </main>
              <Footer />
            </div>
          }
        />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </Router>
  );
}

export default App;
