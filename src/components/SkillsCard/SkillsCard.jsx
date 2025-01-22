import React from "react";

function SkillsCard({ skills }) {
  return (
    <div className="bg-[#e3ffd0] border-2 border-white rounded-3xl p-6 h-30 [box-shadow:4px_4px_8px_#959595] ml-6 mt-4 relative overflow-hidden max-sm:ml-0">
      <h3 className="text-lg text-start font-bold text-black">Skills</h3>
      <ul className="flex flex-wrap gap-8">
        {skills.map((skill, index) => (
          <li key={index} className="flex flex-col items-center gap-2">
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-10 h-10 object-contain"
            />
            <span className="text-sm text-gray-800">{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillsCard;
