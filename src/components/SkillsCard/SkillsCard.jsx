import { colors, shadows, border } from "../../constants/theme";

function SkillsCard({ skills }) {
  return (
    <div
      className={`rounded-3xl p-6 relative overflow-hidden mt-4 max-sm:ml-0 ${border.standard} ${shadows.standard}`}
      style={{ backgroundColor: colors.cardBackground }}
    >
      <h3
        className="text-lg font-bold mb-4"
        style={{ color: colors.textPrimary }}
      >
        My Skills
      </h3>
      <ul className="flex flex-wrap gap-x-8 gap-y-6">
        {skills.map((skill, index) => (
          <li key={index} className="flex flex-col items-center gap-2">
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-10 h-10 object-contain"
            />
            <span className="text-sm" style={{ color: colors.textPrimary }}>
              {skill.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillsCard;
