import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Masonry from "react-masonry-css";

import ProfileCard from "./components/ProfileCard/ProfileCard";
import Projects from "./components/ProjectCard/Projects";
import SkillsCard from "./components/SkillsCard/SkillsCard";
import ContactCard from "./components/ContactCard/ContactCard";
import { EducationCard } from "./components/EducationCard/EducationCard";
import { AboutCard } from "./components/AboutCard/AboutCard";

import react from "./Assets/Images/skillsimages/react.png";
import django from "./Assets/Images/skillsimages/django.png";
import flutter from "./Assets/Images/skillsimages/flutter.png";
import java from "./Assets/Images/skillsimages/java.png";
import js from "./Assets/Images/skillsimages/js.png";
import mongo from "./Assets/Images/skillsimages/mongo.png";
import node from "./Assets/Images/skillsimages/node.png";
import python from "./Assets/Images/skillsimages/python.png";

import "./App.css";
import AllProjects from "./components/allproducts/AllProjects";
import EmptySlot from "./components/EmptySlot";

function App() {
  const skills = [
    { logo: flutter, name: "Flutter" },
    { logo: react, name: "React" },
    { logo: js, name: "JavaScript" },
    { logo: node, name: "Node.js" },
    { logo: mongo, name: "Mongo" },
    { logo: python, name: "Python" },
    { logo: django, name: "Django" },
    { logo: java, name: "Java" },
  ];

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App bg-green-50 min-h-screen p-6 overflow-hidden">
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="masonry-grid"
                columnClassName="masonry-column"
              >
                <ProfileCard />
                <AboutCard />
                <EducationCard />
                <Projects />
                <EmptySlot />
                <SkillsCard skills={skills} />
              </Masonry>
              <ContactCard />
            </div>
          }
        />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </Router>
  );
}

export default App;
