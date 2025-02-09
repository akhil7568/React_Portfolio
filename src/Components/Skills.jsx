import React from "react";
import css from "../assets/image/css.png";
import html from "../assets/image/html.png";
import clogo from "../assets/image/clogo.png";
import cpp from "../assets/image/c++.png";
import python from "../assets/image/python.png";
import mongoDB from "../assets/image/mongoDB.png";
import nodejs from "../assets/image/nodejs.png";
import javascript from "../assets/image/javascript.png";
import github from "../assets/image/github.png";
import TailWind from "../assets/image/TailWind.png";
import ReactImage from "../assets/image/ReactImage.png";

const Skills = () => {
  const skills = [
    { img: css, name: "CSS" },
    { img: html, name: "HTML" },
    { img: clogo, name: "C" },
    { img: cpp, name: "C++" },
    { img: python, name: "Python" },
    { img: mongoDB, name: "MongoDB" },
    { img: nodejs, name: "NodeJS" },
    { img: javascript, name: "JavaScript" },
    { img: github, name: "GitHub" },
    { img: TailWind, name: "TailWind" },
    { img: ReactImage, name: "React" },
  ];

  return (
    <div className="flex flex-col items-center bg-gray-900 min-h-screen text-white py-10">
      <h2 className="text-3xl font-bold mb-6 underline decoration-red-500 mt-7">My Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 border border-gray-700 rounded-lg bg-gray-800 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img src={skill.img} alt={skill.name} className="w-20 h-20 object-contain" />
            <p className="mt-2 text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
