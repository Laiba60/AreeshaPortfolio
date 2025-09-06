import React from 'react';
import heroImg from '../../assets/images/beautiful-woman-avatar.jpg';


const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-teal-500 to-blue-600 text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 px-6">
        
        {/* Left side: Text */}
        <div className="md:w-5/12 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Flutter Developer</h2>
          <p className="text-lg md:text-xl max-w-lg mx-auto md:mx-0">
            Passionate Flutter Developer with a strong focus on crafting seamless,
            cross-platform mobile applications. Skilled in UI/UX development, API integration,
            and state management to build smooth, high-performance apps.
          </p>
        </div>

        {/* Right side: Image */}
        <div className="md:w-5/12 flex justify-center md:justify-end">
          <img 
            src={heroImg} 
            alt="Flutter Developer" 
            className="w-60 md:w-80 h-auto rounded-full shadow-lg border-4 border-white"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
