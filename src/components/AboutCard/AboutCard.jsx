import React from "react";

export const AboutCard = () => {
  const achievements = [
    {
      title: "CODSOFT Front-End Internship",
      description: "Completed my first internship.",
      date: "June 2024",
    },
    {
      title: "IBM Front-End Intenship",
      description:
        "Completed my 3 months long IBM intenship to develop a website with good interface",
      date: "August 2024",
    },
    {
      title: "Participant in Exposure 2024",
      description:
        "Participated in a college fest named Exposure to build a website using a web framework and develop a website that can solve real world problems.",
      date: "September 2024",
    },
  ];

  return (
    <div className="bg-[#e3ffd0] border-2 h-auto border-white rounded-2xl p-8 w-96 [box-shadow:4px_4px_8px_#959595] mt-6 ml-6 ">
      <h3 className="text-lg text-gray-500 font-medium mb-2">
        Some Glimpses On...
      </h3>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Achievements</h1>
      <div className="relative h-96 overflow-hidden">
        <div
          className="achievement-list absolute top-0 left-0 flex flex-col gap-6 animate-marquee"
          style={{ animationDuration: `${achievements.length * 5}s` }}
        >
          {achievements.concat(achievements).map((achievement, index) => (
            <div
              key={index}
              className="achievement-item bg-white rounded-xl p-3 shadow-md border-l-4 border-blue-500"
            >
              <h2 className="text-md font-semibold text-gray-800 mb-1">
                {achievement.title}
              </h2>
              <p className="text-gray-600 text-sm mb-2">
                {achievement.description}
              </p>
              <p className="text-gray-400 text-xs">{achievement.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
