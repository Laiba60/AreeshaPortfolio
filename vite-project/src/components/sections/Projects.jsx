import React from 'react'

const Projects = () => {
  return (
 
    <section id="projects" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl font-bold mb-8">Projects</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-semibold">Lottery App</h4>
            <p>Random number generator with state management.</p>
            <a href="https://github.com/Areeshaaziz/lotteryapp" className="text-teal-500">GitHub</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-semibold">Calculator App</h4>
            <p>Fully functional calculator with basic arithmetic.</p>
            <a href="https://github.com/Areeshaaziz/calculatorapp" className="text-teal-500">GitHub</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-semibold">WhatsApp UI</h4>
            <p>Clone of WhatsApp’s main screens for UI practice.</p>
            <a href="https://github.com/Areeshaaziz/whatsappui" className="text-teal-500">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}



export default Projects