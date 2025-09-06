import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="py-16 container mx-auto px-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h3 className="text-2xl font-bold mb-6">Experience</h3>
      <div className="bg-white shadow p-6 rounded-lg">
        <h4 className="font-semibold">Flutter Developer (Intern)</h4>
        <p className="text-sm text-gray-600">Elevatrix Solutions – June 2025 - Present</p>
        <ul className="list-disc ml-6 mt-2">
          <li>Developed cross-platform apps with clean architecture.</li>
          <li>Implemented responsive UIs and state management.</li>
          <li>Collaborated with design team for UI/UX consistency.</li>
        </ul>
      </div>
    </motion.section>
  );
}

export default Experience;
