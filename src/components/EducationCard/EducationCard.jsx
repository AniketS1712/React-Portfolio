import React from "react";

export function EducationCard() {
  const SchoolEducation = [
    {
      name: "Rukmani Devi Jaipuria Public School",
      time: "2020-2022",
      degree: "12th Grade",
      stream: "Commerce",
      percentage: "70.6%",
    },
    {
      name: "Swami Hariharanand Public School",
      time: "2019-2020",
      degree: "10th Grade",
      stream: "ICSE",
      percentage: "71.8%",
    },
  ];
  const CollegeEducation = [
    {
      name: "Banarsidas Chandiwala Institute of Information Technology",
      time: "2020-2022",
      degree: "Bachelor of Computer Application",
      stream: "Information Technology",
      cgpa: "70.6%",
    },
  ];

  return (
    <div className="flex flex-row flex-wrap justify-center items-center gap-4 p-8 bg-[#e3ffd0] my-6 rounded-2xl border-2 border-white [box-shadow:4px_4px_8px_#959595]">
      {/* College Section */}
      <div className="college-education flex flex-col items-center text-center">
        {CollegeEducation.map((edu, index) => (
          <div
            key={index}
            className="bg-white w-80 h-52 flex flex-col justify-between shadow-md rounded-lg p-3"
          >
            <div>
              <h2 className="text-xl font-semibold mb-2">{edu.name}</h2>
              <p className="text-gray-600 text-sm">({edu.time})</p>
            </div>
            <div>
              <p className="text-gray-800 font-semibold">{edu.degree}</p>
              <p className="text-gray-800 text-sm font-bold">{edu.stream}</p>
              <p className="text-gray-800">
                <span className="font-bold">CGPA: </span>
                {edu.cgpa}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* School Section */}
      <div className="school-education flex flex-wrap gap-4 justify-center">
        {SchoolEducation.map((edu, index) => (
          <div
            key={index}
            className="bg-white w-52 h-52 flex flex-col justify-between shadow-md rounded-lg p-3 border-gray-300 border-2 text-center"
          >
            <div>
              <h2 className="text-lg font-semibold mb-2">{edu.name}</h2>
              <p className="text-gray-600 text-xs">({edu.time})</p>
            </div>
            <div>
              <p className="text-gray-800 font-semibold">{edu.degree}</p>
              <p className="text-gray-800 text-sm font-bold">{edu.stream}</p>
              <p className="text-gray-800">
                <span className="font-bold">Percentage: </span>
                {edu.percentage}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
