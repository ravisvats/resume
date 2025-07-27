import React from 'react';
import { Link } from 'react-router-dom';

const Resume = () => {
  const topSkills = ["Python", "FastAPI", "AWS", "Microservices", "PostgreSQL", "Docker"];

  return (
    <section className="py-8 bg-white text-left px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Resume Highlights</h2>
        
        {/* Compact Info Card */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            {/* Personal Info */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Ravi Shankar Vats</h3>
              <p className="text-blue-600 font-medium text-sm mb-2">Technical Lead & Solution Architect</p>
              <div className="space-y-1 text-xs text-gray-600">
                <div className="flex items-center gap-2">
                  <span>📍</span><span>Gurugram, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📧</span>
                  <a href="mailto:ravisvats@gmail.com" className="hover:text-blue-600">ravisvats@gmail.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <span>💼</span>
                  <a href="https://linkedin.com/in/ravisvats" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">LinkedIn</a>
                </div>
              </div>
            </div>
            
            {/* Current Role & Experience */}
            <div className="text-center">
              <div className="mb-3">
                <div className="text-xl font-bold text-blue-600">5+</div>
                <div className="text-xs text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <div className="text-sm font-bold text-gray-900">Zenarate</div>
                <div className="text-xs text-blue-600">SDE III / Technical Lead</div>
                <div className="text-xs text-gray-500 mt-1">2023 - Present</div>
              </div>
            </div>

            {/* Skills & Action */}
            <div>
              <h4 className="text-sm font-semibold text-gray-800 mb-2">Top Skills</h4>
              <div className="flex flex-wrap gap-1 mb-4">
                {topSkills.map((skill, index) => (
                  <span 
                    key={index}
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <Link 
                to="/resume"
                className="inline-flex items-center gap-2 bg-blue-600 !text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium w-full justify-center"
              >
                <span>📄</span>
                View Full Resume
              </Link>
            </div>
          </div>
          
          {/* Brief Summary */}
          <div className="mt-4 pt-4 border-t border-blue-200">
            <p className="text-sm text-gray-700 text-center">
              <strong>5+ years</strong> building scalable systems • <strong>Microservices Architecture</strong> • <strong>Fine-Grained Authorization</strong> • <strong>Event-Driven Systems</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume; 