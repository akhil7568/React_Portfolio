import React from "react";

const About = () => {
  return (
    <div className="text-white px-8 py-12 flex flex-col items-center bg-gray-900 ">
      {/* About me section */}
      <h1 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 shadow-lg mt-6">
        About Me
      </h1>
      <div className="after:content-[''] after:block after:w-24 after:h-1 after:bg-red-500 after:mx-auto mt-2"></div>

      <div className="mt-6 max-w-2xl text-center text-lg leading-relaxed text-gray-300">
        <p>A result-focused professional, seeking an opportunity to utilize</p>
        <p>career experience, skills, and education to contribute to employer</p>
        <p>objectives, profitability, and success with a company offering</p>
        <p>potential for challenge and growth.</p>
      </div>

      {/* Get to know me section */}
      <h1 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 shadow-lg mt-12">
        Get to Know Me!
      </h1>
      <div className="after:content-[''] after:block after:w-24 after:h-1 after:bg-red-500 after:mx-auto mt-2"></div>

      <div className="mt-6 max-w-2xl text-center text-lg leading-relaxed text-gray-300">
        <p>Hey! It's Akhilesh, and I'm a Frontend Web Developer located in Sikar (Rajasthan).</p>
        <p>
          I'm a bit of a digital product junky.. Over the years, I've used
          hundreds of web and mobile apps in different industries and verticals.
        </p>
        <p>Feel free to contact me here.</p>
      </div>
    </div>
  );
};

export default About;
