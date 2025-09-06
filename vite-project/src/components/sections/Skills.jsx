import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, 
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const technicalSkills = ["Flutter & Dart", "State Management", "UI/UX Development", "Version Control"];
  const softSkills = ["Time Management", "Communication", "Creativity"];

  return (
    <motion.section
      id="skills"
      className="py-16 container mx-auto px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
      <div className="flex flex-wrap gap-3 mb-10">
        {technicalSkills.map((skill) => (
          <motion.span
            key={skill}
            className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full"
            variants={skillVariants}
          >
            {skill}
          </motion.span>
        ))}
      </div>

      <h3 className="text-2xl font-bold mb-6">Soft Skills</h3>
      <div className="flex flex-wrap gap-3">
        {softSkills.map((skill) => (
          <motion.span
            key={skill}
            className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full"
            variants={skillVariants}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
