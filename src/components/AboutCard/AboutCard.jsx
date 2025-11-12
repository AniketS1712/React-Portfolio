import achievements from "../../constants/achievementsData";
import "./AboutCard.css";

export const AboutCard = () => {
  return (
    <div
      className={`about-card rounded-2xl p-6 max-w-sm w-full mx-auto 
      ${border.standard} ${shadows.standard}`}
      style={{
        backgroundColor: colors.cardBackground,
        color: colors.textPrimary,
      }}
    >
      <div className="flex items-center gap-4 mb-48">
        <div>
          <h2 className="text-xl font-bold text-black">About Me</h2>
          <p className="text-base text-gray-800 mt-5 font-semibold tracking-wider">
            I'm a passionate app developer with strong roots in Flutter and MERN
            stack. While I enjoy full-stack web development, my current focus is
            on building intuitive, performant mobile apps that create real
            impact.
          </p>
        </div>
      </div>

      {/* Section Heading */}
      <div className="mb-4">
        <h3 className="text-md text-black font-medium">Some Glimpses On...</h3>
        <h1 className="text-2xl font-bold text-gray-800">My Achievements</h1>
      </div>

      {/* Achievements Marquee */}
      <div className="relative overflow-hidden min-h-[32rem] max-h-[36rem]">
        <div
          className="achievement-list absolute top-0 left-0 flex flex-col gap-6 animate-marquee"
          style={{ animationDuration: `${achievements.length * 4}s` }}
        >
          {achievements.concat(achievements).map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-3 shadow-sm border-l-4 border-blue-500"
            >
              <h2 className="text-md font-semibold text-gray-800 mb-1">
                {item.title}
              </h2>
              <p className="text-gray-600 text-sm mb-2">{item.description}</p>
              <p className="text-gray-400 text-xs">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
