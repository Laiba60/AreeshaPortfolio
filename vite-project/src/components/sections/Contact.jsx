import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold mb-6">Contact Me</h3>
        <p>Email: <a href="mailto:areeshaaziz2023@gmail.com" className="text-teal-500">areeshaaziz2023@gmail.com</a></p>
        <p>Phone: 0333-4096472</p>
        <div className="flex justify-center space-x-6 mt-4 text-2xl">
          <a href="mailto:areeshaaziz2023@gmail.com"><FaEnvelope /></a>
          <a href="https://github.com/Areeshaaziz"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/areesha-aziz-a84119308/"><FaLinkedin /></a>
          <FaPhone />
        </div>
      </div>
    </section>
  );
}



export default Contact