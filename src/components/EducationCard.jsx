import { SchoolEducation, CollegeEducation } from "../constants/SchoolEducation";
import { GraduationCap, BookOpen, Calendar } from "lucide-react"; 

const educationData = [
  ...CollegeEducation.map(edu => ({ 
    ...edu, 
    type: 'college', 
    mainDetail: `${edu.degree}`, 
    subDetail: `CGPA: ${edu.cgpa}` 
  })),
  ...SchoolEducation.map(edu => ({ 
    ...edu, 
    type: 'school', 
    mainDetail: edu.degree, 
    subDetail: `Percentage: ${edu.percentage}` 
  })),
].sort((a, b) => {
  return 0; 
});

const TimelineItem = ({ edu }) => {
    const Icon = edu.type === 'college' ? GraduationCap : BookOpen;
    const dotColor = edu.type === 'college' ? 'bg-primary' : 'bg-secondary';
    const borderColor = edu.type === 'college' ? 'border-primary' : 'border-secondary';

    return (
        <div className="flex flex-col items-center flex-shrink-0 w-80 sm:w-96">
            <div className={`p-3 rounded-full z-10 text-text-inverse ${dotColor} shadow-lg transition-all duration-300 hover:scale-110`}>
                <Icon className="w-6 h-6" />
            </div>
            <div className="w-full h-0.5 bg-border-light dark:bg-background-dark -mt-5 mb-5 z-0"></div>
            <div className={`bg-background-surface dark:bg-background-dark-surface rounded-xl p-6 shadow-xl w-full h-full 
                            border-t-4 ${borderColor} transition-transform duration-300 hover:scale-[1.01] hover:shadow-2xl`}>
                
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-text-primary dark:text-text-dark-primary leading-snug">{edu.name}</h3>
                </div>
                
                <div className="space-y-2">
                    <div className="flex items-center text-sm font-medium text-text-secondary dark:text-text-dark-secondary">
                        <Calendar className="w-4 h-4 mr-2 text-accent" />
                        {edu.time}
                    </div>
                    
                    <p className={`text-lg font-semibold ${edu.type === 'college' ? 'text-primary' : 'text-secondary'} mt-2`}>
                        {edu.mainDetail}
                    </p>
                    
                    <p className="text-sm font-medium text-text-secondary dark:text-text-dark-secondary">
                        {edu.subDetail}
                    </p>
                </div>
            </div>
        </div>
    );
};


export function EducationCard() {
  return (
    <div className="flex flex-col gap-10 pt-10" id="education">
      
      {/* --- Section Title --- */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-text-primary dark:text-text-dark-primary">
        Academic <span className="bg-clip-text text-transparent bg-gradient-secondary">Journey</span>
      </h2>

      {/* --- Horizontal Timeline Container --- */}
      <div className="max-w-7xl mx-auto w-full px-4">
        <div className="flex overflow-x-auto pb-6 space-x-8 lg:space-x-12 scrollbar-hide">
          {educationData.map((edu, index) => (
            <TimelineItem 
              key={index} 
              edu={edu} 
            />
          ))}
        </div>
      </div>
      
    </div>
  );
}