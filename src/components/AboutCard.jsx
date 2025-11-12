import achievements from "../constants/achievementsData";
import { Award, User, Target } from "lucide-react"; 

export const AboutCard = () => {
  return (
    <div className="flex flex-col gap-12">
      {/* --- Section Title --- */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-text-primary">
        <span className="bg-clip-text text-transparent bg-gradient-vibrant-text pr-2">
          My Story
        </span>
        , Goals, and Achievements
      </h2>

      {/* --- Main About & Goals Content Card --- */}
      <div className="bg-background-surface rounded-3xl p-8 lg:p-12 border border-border-light shadow-xl">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* 1. Who I Am (Summary) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center text-xl font-bold text-primary mb-4">
              <User className="w-6 h-6 mr-2" />
              Who I Am
            </div>
            <p className="text-lg text-text-secondary leading-relaxed">
              I'm a passionate application developer with strong roots in **Flutter** for cross-platform mobile development and the **MERN stack** (MongoDB, Express, React, Node.js) for robust web solutions.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              I thrive on solving complex problems and turning innovative ideas into deployed products, focusing on building **intuitive, performant mobile apps** that create real impact and deliver seamless user experiences.
            </p>
          </div>

          {/* 2. Career Goals/Focus */}
          <div className="lg:col-span-1 border-t lg:border-t-0 lg:border-l border-black pt-8 lg:pt-0 lg:pl-12">
            <div className="flex items-center text-xl font-bold text-accent mb-4">
              <Target className="w-6 h-6 mr-2" />
              My Current Focus
            </div>
            <ul className="space-y-3 text-text-primary">
              <li className="flex items-start">
                <span className="text-accent text-2xl mr-2 leading-none">•</span>
                <span className="text-md font-medium">Mastering state management (e.g., Riverpod/Redux) for large-scale applications.</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent text-2xl mr-2 leading-none">•</span>
                <span className="text-md font-medium">Exploring serverless architectures for backend efficiency and scalability.</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent text-2xl mr-2 leading-none">•</span>
                <span className="text-md font-medium">Contributing to open-source developer tools.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* --- Achievements List --- */}
      <div className="pt-8">
        <div className="flex items-center justify-center text-xl font-bold text-secondary mb-8">
          <Award className="w-6 h-6 mr-2" />
          Key Achievements & Milestones
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.slice(0, 6).map((item, index) => (
            <div
              key={index}
              className="bg-background-surface rounded-xl p-5 shadow-lg border-l-4 border-primary/50 transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-l-primary"
            >
              <h3 className="text-lg font-bold text-text-primary mb-1">
                {item.title}
              </h3>
              <p className="text-text-secondary text-sm mb-2">{item.description}</p>
              <p className="text-text-secondary/60 text-xs mt-2 italic">{item.date}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-text-secondary/80 mt-8 text-sm">
          ... and many more learning moments along the way!
        </p>
      </div>
    </div>
  );
};

export default AboutCard;