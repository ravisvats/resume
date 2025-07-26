import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Real projects data matching our individual project pages
  const projects = [
    {
      id: 1,
      title: "CommentaryGPT: Live Sports Updates",
      description: "An AI-powered sports commentary system that generates real-time, engaging commentary for live sports events using advanced natural language processing.",
      image: "/images/commentarygpt_app.jpeg",
      technologies: ["Python", "FastAPI", "OpenAI GPT", "WebSocket", "React"],
      category: "AI/ML",
      link: "/projects/project1",
      featured: true
    },
    {
      id: 2,
      title: "User Authorization System Using FGA",
      description: "A fine-grained access control system that dynamically manages user permissions based on roles, relationships, and contextual attributes using Google Zanzibar-style FGA.",
      image: "/images/fga.jpeg",
      technologies: ["Go", "PostgreSQL", "Neo4j", "gRPC", "Kubernetes"],
      category: "Backend",
      link: "/projects/project2",
      featured: true
    },
    {
      id: 3,
      title: "AuthPilot – Identity & Access Management",
      description: "Comprehensive Identity and Access Management platform that provides Single Sign-On, SCIM provisioning, and Fine-Grained Authorization via REST APIs.",
      image: "/images/authpilot2.png",
      technologies: ["Node.js", "React", "PostgreSQL", "Kafka", "Docker"],
      category: "Full-Stack",
      link: "/projects/project3",
      featured: true
    }
  ];

  const categories = ['All', 'Full-Stack', 'Backend', 'AI/ML'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Projects</h1>
              <p className="text-gray-600 mt-2">A showcase of my development work and technical expertise</p>
            </div>
            <Link 
              to="/" 
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <div 
                  key={project.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <Link to={project.link} className="block">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <Link 
                        to={project.link}
                        className="flex-1 bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        View Details
                      </Link>
                      <a 
                        href="#"
                        className="flex-1 bg-gray-800 text-white text-center py-2 rounded-lg hover:bg-gray-900 transition-colors"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category}
              <span className="ml-2 text-xs opacity-75">
                ({category === 'All' ? projects.length : 
                  projects.filter(p => p.category === category).length})
              </span>
            </button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="h-40 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3">
                  <span className="bg-white bg-opacity-90 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-5">
                <Link to={project.link} className="block">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                </Link>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex gap-2">
                  <Link 
                    to={project.link}
                    className="flex-1 bg-blue-600 text-white text-center py-2 text-sm rounded hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </Link>
                  <a 
                    href="#"
                    className="flex-1 bg-gray-800 text-white text-center py-2 text-sm rounded hover:bg-gray-900 transition-colors"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;