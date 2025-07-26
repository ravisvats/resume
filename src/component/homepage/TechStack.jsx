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
    <section className="py-12 bg-white text-left px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">My Tech Stack</h2>
        <p className="text-gray-600 mb-8">
          Technologies I've been working with recently
        </p>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-6 gap-4 justify-items-center items-center">
          {techStack.map((tech, index) => (
            <div 
              key={index} 
              className="relative group"
              onMouseEnter={() => setHoveredTech(index)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 hover:shadow-md cursor-pointer">
                <img
                  src={tech?.src}
                  alt={tech.name}
                  className="w-7 h-7 object-contain transition-transform hover:scale-110 duration-300"
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
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-2">Backend</h4>
            <p>Python, FastAPI, PHP, Django, Flask</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <h4 className="font-semibold text-green-800 mb-2">Database</h4>
            <p>MySQL, MongoDB, PostgreSQL, Redis</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <h4 className="font-semibold text-purple-800 mb-2">Cloud & Tools</h4>
            <p>AWS, Docker, Git, VS Code</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
