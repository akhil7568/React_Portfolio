import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";  // Import Icons

const NavbarSimple = () => {
  const [open, setOpen] = useState(false);

  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg text-white fixed w-full z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold tracking-wider font-mono">
          AKHILESH
        </Link>

        {/* Desktop Navbar */}
        <ul className="hidden lg:flex space-x-8 text-lg font-semibold">
          {["Home", "About", "Skills", "Contact"].map((item, index) => (
            <li key={index}>
              <Link to={`/${item.toLowerCase()}`} className="relative group">
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`lg:hidden flex flex-col absolute top-16 left-0 w-full bg-blue-700 text-center text-lg font-semibold py-4 space-y-4 transition-all duration-300 ${
          open ? "translate-y-0 opacity-100" : "-translate-y-96 opacity-0"
        }`}
      >
        {["Home", "About", "Skills", "Contact"].map((item, index) => (
          <Link
            key={index}
            to={`/${item.toLowerCase()}`}
            className="hover:bg-blue-600 py-2 transition-all duration-300"
            onClick={() => setOpen(false)}
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavbarSimple;
