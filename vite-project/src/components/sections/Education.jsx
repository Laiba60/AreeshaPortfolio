import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <motion.section
      id="education"
      className="py-16 bg-gray-100"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-6">
        <h3 className="text-2xl font-bold mb-6">Education</h3>
        <ul className="space-y-4">
          <li>
            <b>BS Computer Science</b> – Fatima Jinnah Women University (2022-2026) | GPA: 3.32/4.0
          </li>
          <li>
            <b>Intermediate (Pre-Engineering)</b> – Milestone College Rawalpindi | 966/1100
          </li>
          <li>
            <b>Matric</b> – Aviation Army Public School | 927/1100
          </li>
        </ul>
      </div>
    </motion.section>
  );
}

export default Education;
