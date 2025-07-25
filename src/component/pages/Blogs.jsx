import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  // Sample blog posts data - replace with your actual blog data
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React and Modern Web Development",
      excerpt: "Learn the fundamentals of React and how to build modern web applications with the latest tools and best practices.",
      date: "2024-01-15",
      readTime: "5 min read",
      tags: ["React", "JavaScript", "Web Development"]
    },
    {
      id: 2,
      title: "Building Scalable APIs with Node.js and Express",
      excerpt: "A comprehensive guide to creating robust and scalable backend APIs using Node.js, Express, and modern development practices.",
      date: "2024-01-10",
      readTime: "8 min read",
      tags: ["Node.js", "Express", "API", "Backend"]
    },
    {
      id: 3,
      title: "CSS Grid vs Flexbox: When to Use Which",
      excerpt: "Understanding the differences between CSS Grid and Flexbox, and knowing when to use each layout method for optimal results.",
      date: "2024-01-05",
      readTime: "6 min read",
      tags: ["CSS", "Layout", "Frontend"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Blogs</h1>
              <p className="text-gray-600 mt-2">Thoughts, tutorials, and insights on web development</p>
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

      {/* Blog Posts */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8 border border-gray-100"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>{new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-6">
                <button className="text-blue-600 hover:text-blue-800 font-semibold transition-colors">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors">
            Load More Posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;