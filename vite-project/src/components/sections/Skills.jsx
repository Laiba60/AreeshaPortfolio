import React from 'react'

const Skills = () => {
  return (

    <section id="skills" className="py-16 container mx-auto px-6">
      <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
      <div className="flex flex-wrap gap-3">
        {["Flutter & Dart", "State Management", "UI/UX Development", "Version Control"].map((skill) => (
          <span key={skill} className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full">
            {skill}
          </span>
        ))}
      </div>

      <h3 className="text-2xl font-bold mt-10 mb-6">Soft Skills</h3>
      <div className="flex flex-wrap gap-3">
        {["Time Management", "Communication", "Creativity"].map((skill) => (
          <span key={skill} className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}


export default Skills