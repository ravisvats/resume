import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Outsourcing Client-Side Setup — FGA User Authorization from Scratch",
    description: "Complete end-to-end setup of Fine-Grained Authorization (FGA) for a client application, enabling scalable, secure, and compliant user access control.",
    image: "/images/outsourcing_fga_auth.png",
    link: "/projects/fga-user-authorization",
  },
  {
    title: "User authorization System Using FGA",
    description: "A fine-grained access control system that dynamically manages user permissions based on roles, relationships, and contextual attributes using Google Zanzibar-style FGA (Fine-Grained Authorization).",
    image: "/images/fga.jpeg",
    link: "/projects/user-authorization-system",
  },
  {
    title: "AuthPilot – Identity & Access Management",
    description: "Identity and Access Management (IAM) platform that provides SSO, SCIM provisioning, and Fine-Grained Authorization via REST APIs and event-driven architecture",
    image: "/images/authpilot2.png",
    link: "/projects/authpilot",
  },
  {
    title: "CommentaryGPT : Live Sports updates",
    description: "Trained on sports commentary transcripts to generate live-style commentary.",
    image: "/images/commentarygpt_app.jpeg",
    link: "/projects/commentarygpt",
  }
];

const Projects = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-gray-900">Projects</h2>
        <p className="text-gray-600 text-center mb-10">Things I've built so far</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
              <Link to={project.link} className="block">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer" />
              </Link>

              <div className="p-5 space-y-2">
                <Link to={project.link} className="block">
                  <h3 className="text-xl font-semibold text-gray-900 hover:text-indigo-600 transition-colors cursor-pointer">{project.title}</h3>
                </Link>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>

              <div className="px-5 pb-4 pt-2 text-right">
                <Link
                  to={project.link}
                  className="text-indigo-700 hover:underline hover:text-indigo-600 text-sm"
                >
                  View Project →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;