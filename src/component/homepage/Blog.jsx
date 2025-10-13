import React from "react";
import { Link } from "react-router-dom";

const blogs = [
  {
    title: "OpenFGA & Zanzibar Use Case | How SASSY Moved from RBAC to ReBAC?",
    description: "Learn how SaaS company SASSY solved access control challenges by adopting Relationship-Based Authorization (ReBAC) using OpenFGA.",
    image: "/images/sassy_rbac_rebac.png",
    link: "/blogs/openfga-zanzibar-use-case",
  },
  {
    title: "Is RBAC Holding You Back? Zanzibar Fine-Grained Authorization Explained",
    description: "Why RBAC fails at scale and how Zanzibar FGA fixes role explosion with relationship-based access.",
    image: "/images/Zanzibar_fga.jpeg",
    link: "/blogs/zanzibar-fga-explained",
  },
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
    <section className="py-16 px-4 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-gray-900">Blogs</h2>
        <p className="text-gray-600 text-center mb-10">Things I've written and shared</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />

              <div className="p-5 space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">{blog.title}</h3>
                <p className="text-gray-600 text-sm">{blog.description}</p>
              </div>

              <div className="px-5 pb-4 pt-2 text-right">
                <Link
                  to={blog.link}
                  className="text-indigo-700 hover:underline hover:text-indigo-600 text-sm"
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