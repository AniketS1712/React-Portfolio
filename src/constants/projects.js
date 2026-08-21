import portfolio from "../Assets/Images/projectimages/Portfolio.png";
import businessgame from "../Assets/Images/projectimages/businessgame.PNG";
import patienceVoid from "../Assets/Images/projectimages/Patience_Void.png";
import eagleEsports from "../Assets/Images/projectimages/eage_esports.png";

export const projects = [
  {
    image: eagleEsports,
    name: "Eagle Esports",
    description:
      "A full esports tournament platform with a feature-based clean architecture (auth, teams, wallet, merch, leaderboard, organiser dashboard), backed by a Node/Express API with Supabase and integrated Razorpay payments for tournament entry fees and wallet top-ups.",
    techStack: ["Flutter", "Node.js", "Supabase", "Razorpay"],
    repoLink: "https://github.com/AniketS1712/Eagle_Esports",
  },
  {
    image: patienceVoid,
    name: "Patience Void",
    description:
      "A minimalist focus and patience game where the entire mechanic is resisting on-screen distractions — screen glitches, fake taps, vibration, and reversed countdowns — built and published solo on the Google Play Store using Flutter, Firebase, and AdMob.",
    techStack: ["Flutter", "Firebase"],
    repoLink: "https://github.com/AniketS1712/Void-Quest",
  },
  {
    image: businessgame,
    name: "Business Game",
    description:
      "An interactive multiplayer business strategy game built with Flutter and Firebase, featuring real-time state synchronization, player trading, and dynamic asset management.",
    techStack: ["Flutter", "Firebase"],
    repoLink: "https://github.com/AniketS1712/BusinessGame",
  },
  {
    image: portfolio,
    name: "React Portfolio Website",
    description:
      "A modern, responsive personal portfolio website built using React JS and Tailwind CSS, featuring glassmorphism elements, clean layout structure, and dynamic component routing.",
    techStack: ["React JS", "Tailwind CSS", "JSX"],
    repoLink: "https://github.com/AniketS1712/React-Portfolio",
    liveLink: "https://saniket.vercel.app/",
  },
];
