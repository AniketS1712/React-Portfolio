import {
  CollegeEducation,
  SchoolEducation,
} from "../../constants/SchoolEducation";
import { colors, shadows, border } from "../../constants/theme";

export function EducationCard() {
  return (
    <div
      className={`flex flex-wrap justify-center items-center gap-2 p-6 rounded-2xl ${border.standard} ${shadows.standard}`}
      style={{ backgroundColor: colors.cardBackground }}
    >
      {/* College Section */}
      {CollegeEducation.map((edu, index) => (
        <div
          key={`college-${index}`}
          className="bg-white w-auto h-auto flex flex-col justify-between shadow-md rounded-lg p-4 text-center"
        >
          <div>
            <h2 className="text-xl font-semibold text-black">{edu.name}</h2>
            <p className="text-sm text-gray-600">({edu.time})</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800">{edu.degree}</p>
            <p className="text-sm font-bold text-gray-800">{edu.stream}</p>
            <p className="text-gray-800">
              <span className="font-bold">CGPA: </span>
              {edu.cgpa}
            </p>
          </div>
        </div>
      ))}

      {/* School Section */}
      {SchoolEducation.map((edu, index) => (
        <div
          key={`school-${index}`}
          className="bg-white w-auto h-auto flex flex-col justify-between shadow-md rounded-lg p-4 text-center border border-gray-300"
        >
          <div>
            <h2 className="text-lg font-semibold text-black">{edu.name}</h2>
            <p className="text-xs text-gray-600">({edu.time})</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800">{edu.degree}</p>
            <p className="text-sm font-bold text-gray-800">{edu.stream}</p>
            <p className="text-gray-800">
              <span className="font-bold">Percentage: </span>
              {edu.percentage}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
