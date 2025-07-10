import React from "react";

const projects = [
  {
    title: "Project Title goes here",
    description: "This is a sample project card with description of the project and the tech stack used.",
    image: "/images/project1.jpg",
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Project Title goes here",
    description: "A modern project made with React, TailwindCSS, Node.js, and MongoDB. Includes dark mode support.",
    image: "/images/project2.jpg",
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Project Title goes here",
    description: "This is an amazing full stack app for tracking habits and productivity.",
    image: "/images/project3.jpg",
    demoLink: "#",
    codeLink: "#",
  }
];

const Projects = () => {
  return (
    <div className="relative bg-gray-900 text-white">
    <div className="">
    <section className="bg-gray-900 py-16 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Projects</h2>
        <p className="text-gray-400 text-center mb-10">Things I’ve built so far</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition transform hover:-translate-y-1 hover:shadow-2xl">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />

              <div className="p-5 space-y-2">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                {/* <p className="text-gray-400 text-sm">{project.description}</p> */}
              </div>

              {/* <div className="px-5 pt-2 pb-4 flex justify-between text-sm text-gray-300">
                <a href={project.codeLink} className="hover:text-white" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-code mr-1" /> Code
                </a>
                <a href={project.demoLink} className="hover:text-white" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt mr-1" /> Live Demo
                </a>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
      </div>
</div>

  );
};

export default Projects;
