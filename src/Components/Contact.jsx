import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-900 text-white px-6 py-12">
      {/* Contact Heading */}
      <h1 className="text-4xl font-bold mb-2">Contact Me</h1>
      <div className="w-24 h-1 bg-red-500 mb-8"></div> {/* Underline */}

      {/* Main Container for Two Sections */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-10 bg-gray-800 p-10 rounded-lg shadow-lg w-full max-w-5xl">
        
        {/* Left Div - Contact Info */}
        <div className="flex-1 flex flex-col space-y-5">
          <h3 className="text-2xl font-semibold">Get in Touch</h3>
          <h4>Email: <span className="text-red-400">akhileshkuw9@gmail.com</span></h4>
          <h4>Phone: <span className="text-red-400">7568613743</span></h4>
          <p className="text-gray-300">
            Got a question, want to collab on a project, or just want to say hello? Go ahead.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-6 mt-4 text-2xl">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <FaTwitter />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right Div - Contact Form */}
        <div className="flex-1 flex flex-col space-y-5">
          <div className="flex flex-col md:flex-row gap-5">
            <input type="text" placeholder="Name" className="flex-1 p-3 rounded bg-gray-700 text-white border border-gray-600"/>
            <input type="email" placeholder="Email" className="flex-1 p-3 rounded bg-gray-700 text-white border border-gray-600"/>
          </div>

          <textarea placeholder="Message" className="p-3 h-32 rounded bg-gray-700 text-white border border-gray-600"></textarea>

          {/* Centered Button with Hover Effect */}
          <button className="bg-red-500 px-6 py-3 rounded font-bold hover:bg-red-600 transition duration-300 self-center w-full md:w-auto">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
