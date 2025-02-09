import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import image from "../assets/image/image.jpg";
import Akhilesh from "../assets/image/Akhilesh.pdf"

const Home = () => {
  const text = "Full Stack Developer";
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("I am a ");

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText(`I am a ${text.substring(0, index + 1)}|`);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        setTimeout(() => {
          setIndex(0);
          setDisplayText("I am a ");
        }, 2000);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [index, text]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-6">
      {/* Profile Image - Full Height */}
      <div className="flex justify-center items-center aline-center md:w-1/2 h-screen">
        <img
          className="w-auto h-4/6 object-cover shadow-lg border-4 border-gray-700"
          src={image}
          alt="Profile"
        />
      </div>

      {/* Content Section */}
      <div className="text-center md:text-left md:w-1/2 p-6">
        <h1 className="text-4xl font-bold">
          Hi, it's <span className="text-red-400">Akhilesh</span>
        </h1>
        <h2 className="text-2xl font-semibold text-gray-300 mt-2">{displayText}</h2>
        <p className="text-lg text-gray-300 max-w-xl mt-3 leading-relaxed">
          I am a frontend developer from Sikar, Rajasthan, currently in my third year
          of pursuing a Bachelor of Science (BSc). I am passionate about web
          development and always eager to explore and learn new technologies.
        </p>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start gap-x-6 text-white p-4 mt-6">
          <a href="https://www.linkedin.com/in/akhilesh-kumawat-269343333" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl hover:text-blue-500 transition transform hover:scale-110" />
          </a>
          <a href="https://github.com/akhil7568" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl hover:text-gray-500 transition transform hover:scale-110" />
          </a>
          <a href="https://twitter.com/@akhileshkuw9" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-3xl hover:text-blue-400 transition transform hover:scale-110" />
          </a>
          <a href="https://instagram.com/akhileshkumawat9" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-3xl hover:text-pink-500 transition transform hover:scale-110" />
          </a>
        </div>

    {/* {Download CV} */}
        <a href={Akhilesh} download="Akhilesh.pdf">
          <button className="bg-red-500 text-white text-lg font-semibold px-6 py-3 rounded-full mt-6 shadow-md hover:bg-red-600 hover:shadow-lg transition transform hover:scale-105">
            Download CV
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
