import React from "react";
import { Link } from "react-router-dom";

const blogs = [
  {
    title: "What is Fine-Grained Authorization (FGA)?",
    description: "A beginner-friendly guide to understanding Fine-Grained Authorization systems and why modern apps need them.",
    image: "/images/fgablog.png",
    link: "/blogs/fine-grained-authorization",
  },
  {
    title: "Building LLM-Powered Features in Your Backend",
    description: "How to integrate Large Language Models into your backend systems using APIs and fine-tuning techniques.",
    image: "/images/llmblog.png",
    link: "/blogs/llm-backend-integration",
  },
  {
    title: "Implementing SSO with OAuth2 and SAML",
    description: "A practical walkthrough on integrating Single Sign-On in your app using providers like Google and Okta.",
    image: "/images/ssoblog.png",
    link: "/blogs/sso-implementation",
  },
  {
    title: "Role-Based vs Fine-Grained Access Control",
    description: "Understand the difference between RBAC and FGA, and when to use each in your application.",
    image: "/images/rbacblog.png",
    link: "/blogs/rbac-vs-fga",
  },
  {
    title: "Deploying FastAPI Backend to EC2",
    description: "Step-by-step guide to hosting your FastAPI backend on an AWS EC2 instance with NGINX and systemd.",
    image: "/images/fastapiblog.png",
    link: "/blogs/fastapi-deployment",
  },
  {
    title: "Best Practices for Scalable Backend Development",
    description: "Explore key architectural patterns and tools for building clean, modular, and production-ready backends.",
    image: "/images/scalableblog.png",
    link: "/blogs/scalable-backend-development",
  },
];

const Blogs = () => {
  return (
    <section className="bg-gray-900 py-16 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Blogs</h2>
        <p className="text-gray-400 text-center mb-10">Things I've written and shared</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <div key={idx} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />

              <div className="p-5 space-y-2">
                <h3 className="text-xl font-semibold">{blog.title}</h3>
                <p className="text-gray-400 text-sm">{blog.description}</p>
              </div>

              <div className="px-5 pb-4 pt-2 text-right">
                <Link
                  to={blog.link}
                  className="text-blue-400 hover:underline hover:text-blue-300 text-sm"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
