import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-16 container mx-auto px-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h3 className="text-2xl font-bold mb-6">About Me</h3>
      <p>
        I enjoy turning creative ideas into functional products that balance design
        and usability. With a commitment to clean code, problem-solving, and continuous
        learning, I aim to develop apps that create engaging digital experiences.
      </p>
    </motion.section>
  );
};

export default About;
