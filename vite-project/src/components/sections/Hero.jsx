import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../../assets/images/beautiful-woman-avatar.jpg';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-teal-500 to-blue-600 text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 px-6">
        
      
        <motion.div
          className="md:w-5/12 text-center md:text-left mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Flutter Developer</h2>
          <p className="text-lg md:text-xl max-w-lg mx-auto md:mx-0">
            Passionate Flutter Developer with a strong focus on crafting seamless,
            cross-platform mobile applications. Skilled in UI/UX development, API integration,
            and state management to build smooth, high-performance apps.
          </p>
        </motion.div>

        
        <motion.div
          className="md:w-5/12 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <img 
            src={heroImg} 
            alt="Flutter Developer" 
            className="w-60 md:w-80 h-auto rounded-full shadow-lg border-4 border-white"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
