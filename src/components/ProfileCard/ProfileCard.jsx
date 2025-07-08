import profileImage from "../../Assets/Images/profileImage.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { border, colors, gradients, shadows } from "../../constants/theme";
import { skills } from "../../constants/skills";
import { tools } from "../../constants/tools";
import { socialLinks } from "../../constants/sociallinks";

function ProfileCard() {
  return (
    <div
      className={`bg-[${colors.cardBackground}] ${border.standard} text-${colors.textPrimary} rounded-xl p-6 ${shadows.standard} break-inside-avoid`}
    >
      {/* Profile Info */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
        <img
          src={profileImage}
          alt="Aniket Singhal"
          className="w-32 h-32 rounded-full border-2 border-white mb-4 sm:mb-0 shadow-md shadow-black"
        />
        <div className="text-center sm:text-left self-center">
          <h1 className="text-2xl font-bold">Aniket Singhal</h1>
          <p className="text-sm text-gray-700 font-medium">
            Web & Android Developer
          </p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-6 flex justify-center sm:justify-start gap-4">
        {socialLinks.map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`${gradients.tealDark} px-4 py-3 rounded-lg ${shadows.hoverable}`}
          >
            <FontAwesomeIcon icon={icon} size="xl" color="white" />
          </a>
        ))}
      </div>

      {/* Skills */}
      <div className="mt-6">
        <h4 className="font-bold mb-2 tracking-wide">Skills</h4>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className={`${gradients.tealDark} text-${colors.textSecondary} text-sm px-2 py-1 rounded shadow-md shadow-black`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="mt-7">
        <h4 className="font-bold mb-3 text-l tracking-normal">
          Software Knowledge
        </h4>
        <div className="flex flex-wrap gap-5">
          {tools.map((icon, index) => (
            <div
              key={index}
              className={`w-12 h-12 ${gradients.tealDark} p-2 rounded-xl shadow hover:scale-110 transition-transform`}
            >
              <img
                src={icon}
                alt="Software tool"
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
