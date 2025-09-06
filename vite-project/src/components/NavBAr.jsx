import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Areesha Aziz</h1>
        <div className="space-x-6">
          <a href="#about" className="hover:text-teal-400">About</a>
          <a href="#projects" className="hover:text-teal-400">Projects</a>
          <a href="#experience" className="hover:text-teal-400">Experience</a>
          <a href="#education" className="hover:text-teal-400">Education</a>
          <a href="#skills" className="hover:text-teal-400">Skills</a>
          <a href="#contact" className="hover:text-teal-400">Contact</a>
        </div>
      </div>
    </nav>
  );
}



export default Navbar