import ProfileCard from "./components/ProfileCard/ProfileCard";
import Projects from "./components/ProjectCard/Projects";
import SkillsCard from "./components/SkillsCard/SkillsCard";
import react from "./Assets/Images/skillsimages/react.png";
import django from "./Assets/Images/skillsimages/django.png";
import flutter from "./Assets/Images/skillsimages/flutter.png";
import java from "./Assets/Images/skillsimages/java.png";
import js from "./Assets/Images/skillsimages/js.png";
import mongo from "./Assets/Images/skillsimages/mongo.png";
import node from "./Assets/Images/skillsimages/node.png";
import python from "./Assets/Images/skillsimages/python.png";
import ContactCard from "./components/ContactCard/ContactCard";
import { EducationCard } from "./components/EducationCard/EducationCard";
import { AboutCard } from "./components/AboutCard/AboutCard";

function App() {
  const skills = [
    { logo: js, name: "JavaScript" },
    { logo: react, name: "React" },
    { logo: node, name: "Node.js" },
    { logo: mongo, name: "CSS" },
    { logo: python, name: "Python" },
    { logo: django, name: "Django" },
    { logo: flutter, name: "Flutter" },
    { logo: java, name: "Java" },
  ];
  return (
    <div className="App bg-yellow-50 flex flex-wrap p-6">
      <div className="flex flex-col w-full md:w-1/3 lg:w-1/4">
        <ProfileCard />
      </div>
      <div className="flex flex-col w-full md:w-2/3 lg:w-3/4">
        <Projects />
        <SkillsCard skills={skills} />
      </div>
      <div className="flex flex-col">
        <EducationCard />
        <ContactCard />
      </div>
      <div>
        <AboutCard />
      </div>
    </div>
  );
}

export default App;
