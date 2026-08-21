import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { SiLeetcode } from "react-icons/si";

export const socialLinks = [
  {
    href: "https://www.linkedin.com/in/aniket-singhal-554b7a2b2",
    icon: <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/AniketS1712",
    icon: <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />,
    label: "GitHub",
  },
  {
    href: "https://leetcode.com/u/Aniket_Singhal/",
    icon: <SiLeetcode className="w-5 h-5" />,
    label: "LeetCode",
  },
  {
    href: "mailto:ssinghalaniket@gmail.com",
    icon: <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />,
    label: "Email",
  },
];
