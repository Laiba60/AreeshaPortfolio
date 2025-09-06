import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
      
        <h1 className="text-xl font-bold">Areesha Aziz</h1>

      
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-teal-400">About</a>
          <a href="#projects" className="hover:text-teal-400">Projects</a>
          <a href="#experience" className="hover:text-teal-400">Experience</a>
          <a href="#education" className="hover:text-teal-400">Education</a>
          <a href="#skills" className="hover:text-teal-400">Skills</a>
          <a href="#contact" className="hover:text-teal-400">Contact</a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-center mt-2 py-4 space-y-3">
          <a href="#about" className="block hover:text-teal-400">About</a>
          <a href="#projects" className="block hover:text-teal-400">Projects</a>
          <a href="#experience" className="block hover:text-teal-400">Experience</a>
          <a href="#education" className="block hover:text-teal-400">Education</a>
          <a href="#skills" className="block hover:text-teal-400">Skills</a>
          <a href="#contact" className="block hover:text-teal-400">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
