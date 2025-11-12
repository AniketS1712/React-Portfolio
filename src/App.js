import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Masonry from "react-masonry-css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
// import Projects from "./components/ProjectCard/Projects";
// import SkillsCard from "./components/SkillsCard/SkillsCard";
// import ContactCard from "./components/ContactCard/ContactCard";
// import { EducationCard } from "./components/EducationCard/EducationCard";
// import { AboutCard } from "./components/AboutCard/AboutCard";

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
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className="App bg-gradient-to-br from-green-50 via-blue-50 to-teal-50 min-h-screen">
              {/* Hero Section */}
              <Hero />
              
              {/* Rest of Content */}
              {/* <div className="p-6">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="masonry-grid"
                  columnClassName="masonry-column"
                >
                  <AboutCard />
                  <EducationCard />
                  <Projects />
                  <SkillsCard skills={skills} />
                </Masonry>
                <div id="contact">
                  <ContactCard />
                </div>
              </div> */}
            </div>
          }
        />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </Router>
  );
}

export default App;