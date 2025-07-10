import React from "react";

const blogs = [
  {
    title: "Understanding JavaScript Closures",
    description: "A deep dive into closures in JavaScript — what they are, how they work, and why they matter.",
    image: "/images/blog1.jpg",
    link: "#",
  },
  {
    title: "Demystifying React Hooks",
    description: "Confused about useEffect, useState, and other hooks? This guide simplifies them for you.",
    image: "/images/blog2.jpg",
    link: "#",
  },
  {
    title: "CSS Grid vs Flexbox",
    description: "Wondering when to use Grid or Flexbox? This comparison will help you choose the right tool.",
    image: "/images/blog3.jpg",
    link: "#",
  },
  {
    title: "Why TailwindCSS is a Game Changer",
    description: "An honest review of TailwindCSS — utility-first CSS framework that's reshaping front-end dev.",
    image: "/images/blog4.jpg",
    link: "#",
  },
  {
    title: "Backend APIs with FastAPI",
    description: "FastAPI is fast, simple, and production-ready. Here's why it’s loved by backend devs.",
    image: "/images/blog5.jpg",
    link: "#",
  },
  {
    title: "Understanding Tokenization in LLMs",
    description: "Learn how Large Language Models like ChatGPT break text into tokens — the building blocks of NLP.",
    image: "/images/blog6.jpg",
    link: "#",
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
                <a
                  href={blog.link}
                  className="text-blue-400 hover:underline hover:text-blue-300 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
