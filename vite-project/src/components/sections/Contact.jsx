import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="py-16 bg-gray-100"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold mb-6">Contact Me</h3>
        <p>
          Email: <a href="mailto:areeshaaziz2023@gmail.com" className="text-teal-500">areeshaaziz2023@gmail.com</a>
        </p>
        <p>Phone: 0333-4096472</p>
        <div className="flex justify-center space-x-6 mt-4 text-2xl">
          <a href="mailto:areeshaaziz2023@gmail.com"><FaEnvelope /></a>
          <a href="https://github.com/Areeshaaziz"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/areesha-aziz-a84119308/"><FaLinkedin /></a>
          <FaPhone />
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
