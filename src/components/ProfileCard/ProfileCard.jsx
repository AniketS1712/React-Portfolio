import React from "react";
import profileimage from "../../Assets/Images/profieImage.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import figma from "../../Assets/Images/softwareimages/figma.png";
import vscode from "../../Assets/Images/softwareimages/vscode.png";
import cursorai from "../../Assets/Images/softwareimages/cursorai.png";

function ProfileCard() {
  return (
    <div className="bg-[#e3ffd0] border-2 border-white flex flex-col flex-wrap rounded-2xl p-8 w-80 sm:w-80 md:w-100 [box-shadow:4px_4px_8px_#959595]">
      <div className="flex items-center justify-center sm:justify-between mb-6 flex-col sm:flex-row">
        <img
          src={profileimage}
          alt="ProfileImage"
          className="rounded-full w-16 h-16 mb-4 sm:mb-0"
        />
        <div className="text-center sm:text-left">
          <h1 className="text-xl font-semibold">AniketSinghal</h1>
          <h3 className="text-gray-700 text-sm">
            Web & Application <br /> Developer
          </h3>
        </div>
      </div>

      {/* Social Links as cards */}
      <div className="sociallinks flex justify-around mt-8 flex-wrap gap-4">
        <div className="social-card p-2 w-12 h-12 bg-gray-100 rounded-xl [box-shadow:2px_2px_2px_#9c9ea1,_-5px_-5px_10px_#ffffff] hover:scale-105 hover:[box-shadow:2px_2px_4px_#9c9ea1] transition-all duration-300 ease-in-out">
          <a href="https://github.com/AniketS1712">
            <FontAwesomeIcon
              icon={faGithub}
              size="2xl"
              style={{ color: "#000" }}
            />
          </a>
        </div>
        <div className="social-card p-2 w-12 h-12 bg-gray-100 rounded-xl [box-shadow:2px_2px_2px_#9c9ea1,_-5px_-5px_10px_#ffffff] hover:scale-105 hover:[box-shadow:2px_2px_4px_#9c9ea1] transition-all duration-300 ease-in-out">
          <a href="https://x.com/SAniket1712">
            <FontAwesomeIcon
              icon={faXTwitter}
              size="2xl"
              style={{ color: "#000" }}
            />
          </a>
        </div>
        <div className="social-card p-2 w-12 h-12 bg-gray-100 rounded-xl [box-shadow:2px_2px_2px_#9c9ea1,_-5px_-5px_10px_#ffffff] hover:scale-105 hover:[box-shadow:2px_2px_4px_#9c9ea1] transition-all duration-300 ease-in-out">
          <a href="www.linkedin.com/in/aniket-singhal-554b7a2b2">
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2xl"
              style={{ color: "#000" }}
            />
          </a>
        </div>
      </div>

      {/* Skills List */}
      <div className="skillslist mt-8">
        <h4 className="text-gray-800 text-lg font-bold pb-5">SKILLS</h4>
        <ul className="flex flex-wrap gap-2 justify-center sm:justify-start">
          <li className="bg-gray-100 text-black text-sm px-2 py-1 rounded-lg shadow-black shadow-sm">
            Git
          </li>
          <li className="bg-gray-100 text-black text-sm px-2 py-1 rounded-lg shadow-black shadow-sm">
            Github
          </li>
          <li className="bg-gray-100 text-black text-sm px-2 py-1 rounded-lg shadow-black shadow-sm">
            ReactJS
          </li>
          <li className="bg-gray-100 text-black text-sm px-2 py-1 rounded-lg shadow-black shadow-sm">
            Express
          </li>
          <li className="bg-gray-100 text-black text-sm px-2 py-1 rounded-lg shadow-black shadow-sm">
            Flutter
          </li>
          <li className="bg-gray-100 text-black text-sm px-2 py-1 rounded-lg shadow-black shadow-sm">
            Java
          </li>
          <li className="bg-gray-100 text-black text-sm px-2 py-1 rounded-lg shadow-black shadow-sm">
            C++
          </li>
        </ul>
      </div>

      {/* Software Knowledge */}
      <div className="softwareknowledge mt-8">
        <h4 className="text-gray-800 text-lg font-bold py-5">
          SOFTWARE KNOWLEDGE
        </h4>
        <div className="flex gap-3 justify-center sm:justify-start flex-wrap">
          <div className="software-card p-2 w-12 h-12 bg-gray-100 rounded-xl [box-shadow:2px_2px_2px_#9c9ea1,_-5px_-5px_10px_#ffffff] hover:scale-105 hover:[box-shadow:2px_2px_4px_#9c9ea1] transition-all duration-300 ease-in-out">
            <img src={figma} alt="figma" />
          </div>
          <div className="software-card p-2 w-12 h-12 bg-gray-100 rounded-xl [box-shadow:2px_2px_2px_#9c9ea1,_-5px_-5px_10px_#ffffff] hover:scale-105 hover:[box-shadow:2px_2px_4px_#9c9ea1] transition-all duration-300 ease-in-out">
            <img src={vscode} alt="VScode" />
          </div>
          <div className="software-card p-2 w-12 h-12 bg-gray-100 rounded-xl [box-shadow:2px_2px_2px_#9c9ea1,_-5px_-5px_10px_#9c9ea1] hover:scale-105 hover:[box-shadow:2px_2px_4px_#9c9ea1] transition-all duration-300 ease-in-out">
            <img src={cursorai} alt="Cursor AI" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
