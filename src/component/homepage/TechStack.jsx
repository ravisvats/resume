import React, { useState } from 'react';

const basePath = './icons/'
const techStack = [
    { name: "Python", src: basePath + "python-svgrepo-com.svg" },
    { name: "FastAPI", src: basePath + "fastapi-svgrepo-com.svg" },
    { name: "MySQL", src: basePath + "mysql-svgrepo-com.svg" },
    { name: "React", src: basePath + "react.svg" },
    { name: "LLM/AI", src: basePath + "ai-svgrepo-com.svg" },
    { name: "Solana", src: basePath + "solana-svgrepo-com.svg" },
    { name: "MongoDB", src: basePath + "mongodb-svgrepo-com.svg" },
    { name: "AWS EC2", src: basePath + "aws-ec2-svgrepo-com.svg" },
    { name: "Git", src: basePath + "git.svg" },
    { name: "PHP", src: basePath + "php-svgrepo-com.svg" },
    { name: "VS Code", src: basePath + "vscode-fill-svgrepo-com.svg" },
    { name: "GitHub", src: basePath + "github-svgrepo-com.svg" },
];

const TechStack = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <section className="py-8 sm:py-12 bg-white text-left px-4 sm:px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">My Tech Stack</h2>
        <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
          Technologies I've been working with recently
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-3 sm:gap-4 justify-items-center items-center">
          {techStack.map((tech, index) => (
            <div 
              key={index} 
              className="relative group"
              onMouseEnter={() => setHoveredTech(index)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 hover:shadow-md cursor-pointer">
                <img
                  src={tech?.src}
                  alt={tech.name}
                  className="w-6 h-6 sm:w-7 sm:h-7 object-contain transition-transform hover:scale-110 duration-300"
                />
              </div>
              
              {/* Custom Tooltip */}
              {hoveredTech === index && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap z-10 opacity-95">
                  {tech.name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Technology Categories */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600">
          <div className="bg-blue-50 rounded-lg p-3 sm:p-4">
            <h4 className="font-semibold text-blue-800 mb-1 sm:mb-2 text-sm sm:text-base">Backend</h4>
            <p className="text-xs sm:text-sm">Python, FastAPI, PHP, Django, Flask</p>
          </div>
          <div className="bg-green-50 rounded-lg p-3 sm:p-4">
            <h4 className="font-semibold text-green-800 mb-1 sm:mb-2 text-sm sm:text-base">Database</h4>
            <p className="text-xs sm:text-sm">MySQL, MongoDB, PostgreSQL, Redis</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-3 sm:p-4">
            <h4 className="font-semibold text-purple-800 mb-1 sm:mb-2 text-sm sm:text-base">Cloud & Tools</h4>
            <p className="text-xs sm:text-sm">AWS, Docker, Git, VS Code</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
