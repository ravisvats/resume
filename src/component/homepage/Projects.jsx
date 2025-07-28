import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "CommentaryGPT : Live Sports updates",
    description: "Trained on sports commentary transcripts to generate live-style commentary.",
    image: "/images/commentarygpt_app.jpeg",
    link: "/projects/commentarygpt",
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
  }
];

const Projects = () => {
  return (
    <div className="relative bg-gray-900 text-white">
    <div className="">
    <section className="bg-gray-900 py-16 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Projects</h2>
        <p className="text-gray-400 text-center mb-10">Things I've built so far</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition transform hover:-translate-y-1 hover:shadow-2xl">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />

              <div className="p-5 space-y-2">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </div>

              <div className="px-5 pb-4 pt-2 text-right">
                <Link
                  to={project.link}
                  className="text-blue-400 hover:underline hover:text-blue-300 text-sm"
                >
                  View Project →
                </Link>
              </div>
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
