import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [activeSection, setActiveSection] = useState('All');

  // Real blog posts data matching our individual blog pages
  const blogPosts = [
    {
      id: 8,
      title: "OpenFGA & Zanzibar Use Case | How SASSY Moved from RBAC to ReBAC?",
      excerpt: "Learn how SaaS company SASSY solved access control challenges by adopting Relationship-Based Authorization (ReBAC) using OpenFGA.",
      date: "2024-01-15",
      readTime: "12 min read",
      tags: ["OpenFGA", "Zanzibar", "ReBAC", "SaaS"],
      views: 0,
      likes: 0,
      isPopular: true,
      isRecent: true,
      link: "/blogs/openfga-zanzibar-use-case",
      image: "/images/Zanzibar_fga.jpeg"
    },
    {
      id: 7,
      title: "Is RBAC Holding You Back? Zanzibar Fine-Grained Authorization Explained",
      excerpt: "Why RBAC fails at scale and how Zanzibar FGA fixes role explosion with relationship-based access.",
      date: "2025-03-10",
      readTime: "10 min read",
      tags: ["Authorization", "FGA", "Zanzibar"],
      views: 0,
      likes: 0,
      isPopular: true,
      isRecent: true,
      link: "/blogs/zanzibar-fga-explained",
      image: "/images/Zanzibar_fga.jpeg"
    },
    {
      id: 1,
      title: "What is Fine-Grained Authorization (FGA)?",
      excerpt: "A beginner-friendly guide to understanding Fine-Grained Authorization systems and why modern apps need them.",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["Authorization", "Security", "Backend"],
      views: 15200,
      likes: 312,
      isPopular: true,
      isRecent: true,
      link: "/blogs/fine-grained-authorization",
      image: "/images/fgablog.png"
    },
    {
      id: 2,
      title: "Building LLM-Powered Features in Your Backend",
      excerpt: "How to integrate Large Language Models into your backend systems using APIs and fine-tuning techniques.",
      date: "2024-01-10",
      readTime: "12 min read",
      tags: ["AI/ML", "Backend", "APIs"],
      views: 12800,
      likes: 289,
      isPopular: true,
      isRecent: true,
      link: "/blogs/llm-backend-integration",
      image: "/images/llmblog.png"
    },
    {
      id: 3,
      title: "Implementing SSO with OAuth2 and SAML",
      excerpt: "A practical walkthrough on integrating Single Sign-On in your app using providers like Google and Okta.",
      date: "2024-01-05",
      readTime: "10 min read",
      tags: ["Authentication", "OAuth2", "SAML"],
      views: 9800,
      likes: 195,
      isPopular: true,
      isRecent: true,
      link: "/blogs/sso-implementation",
      image: "/images/ssoblog.png"
    },
    {
      id: 4,
      title: "Role-Based vs Fine-Grained Access Control",
      excerpt: "Understand the difference between RBAC and FGA, and when to use each in your application.",
      date: "2023-12-28",
      readTime: "9 min read",
      tags: ["Authorization", "Security", "Architecture"],
      views: 11200,
      likes: 203,
      isPopular: true,
      isRecent: false,
      link: "/blogs/rbac-vs-fga",
      image: "/images/rbacblog.png"
    },
    {
      id: 5,
      title: "Deploying FastAPI Backend to EC2",
      excerpt: "Step-by-step guide to hosting your FastAPI backend on an AWS EC2 instance with NGINX and systemd.",
      date: "2023-12-20",
      readTime: "11 min read",
      tags: ["FastAPI", "AWS EC2", "Deployment"],
      views: 8900,
      likes: 167,
      isPopular: false,
      isRecent: false,
      link: "/blogs/fastapi-deployment",
      image: "/images/fastapiblog.png"
    },
    {
      id: 6,
      title: "Best Practices for Scalable Backend Development",
      excerpt: "Explore key architectural patterns and tools for building clean, modular, and production-ready backends.",
      date: "2023-12-15",
      readTime: "13 min read",
      tags: ["Architecture", "Backend", "Best Practices"],
      views: 7300,
      likes: 134,
      isPopular: false,
      isRecent: false,
      link: "/blogs/scalable-backend-development",
      image: "/images/scalableblog.png"
    }
  ];

  const popularPosts = blogPosts.filter(post => post.isPopular);
  const recentPosts = blogPosts.filter(post => post.isRecent);

  const getFilteredPosts = () => {
    switch (activeSection) {
      case 'Popular':
        return popularPosts;
      case 'Recent':
        return recentPosts;
      default:
        return blogPosts;
    }
  };

  const sections = ['All', 'Popular', 'Recent'];

  // Get all unique tags
  const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">My Blogs</h1>
              <p className="text-gray-600 mt-2 text-lg">Thoughts, tutorials, and insights on web development</p>
            </div>
            <Link 
              to="/" 
              className="px-6 py-3 bg-blue-600 !text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm font-medium">Total Posts</p>
                <p className="text-3xl font-bold">{blogPosts.length}</p>
              </div>
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📝</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm font-medium">Total Views</p>
                <p className="text-3xl font-bold">{(blogPosts.reduce((sum, post) => sum + post.views, 0) / 1000).toFixed(1)}K</p>
              </div>
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">👀</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm font-medium">Total Likes</p>
                <p className="text-3xl font-bold">{blogPosts.reduce((sum, post) => sum + post.likes, 0)}</p>
              </div>
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">❤️</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area with Sidebar */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content - Left Side */}
          <div className="lg:col-span-3 space-y-8">
            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-3">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activeSection === section
                      ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                      : 'bg-white text-[#777] hover:bg-gray-50 border border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {section}
                  <span className="ml-2 text-xs opacity-75">
                    ({section === 'All' ? blogPosts.length : 
                      section === 'Popular' ? popularPosts.length : recentPosts.length})
                  </span>
                </button>
              ))}
            </div>

            {/* Featured Post (for Popular and All sections) */}
            {(activeSection === 'Popular' || activeSection === 'All') && popularPosts.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">🌟 Featured Post</h2>
                  <div className="h-px bg-gradient-to-r from-gray-300 to-transparent flex-1"></div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
                  <div className="grid md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-2">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                        <span className="text-gray-500 text-sm">{popularPosts[0].views.toLocaleString()} views</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                        {popularPosts[0].title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {popularPosts[0].excerpt}
                      </p>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                        <span>{new Date(popularPosts[0].date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                        <span>•</span>
                        <span>{popularPosts[0].readTime}</span>
                        <span>•</span>
                        <span>❤️ {popularPosts[0].likes}</span>
                      </div>
                      
                      <Link 
                        to={popularPosts[0].link}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 !text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium inline-block"
                      >
                        Read Full Article →
                      </Link>
                    </div>
                    
                    <div className="hidden md:block">
                      <img 
                        src={popularPosts[0].image} 
                        alt={popularPosts[0].title}
                        className="w-full h-48 object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Blog Posts List */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {activeSection === 'All' ? '📚 All Posts' : 
                   activeSection === 'Popular' ? '🔥 Popular Posts' : '🆕 Recent Posts'}
                </h2>
                <div className="h-px bg-gradient-to-r from-gray-300 to-transparent flex-1"></div>
              </div>
              
              <div className="space-y-6">
                {getFilteredPosts().map((post, index) => (
                  <article 
                    key={post.id}
                    className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex gap-2">
                        {post.isPopular && (
                          <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium">
                            🔥 Popular
                          </span>
                        )}
                        {post.isRecent && (
                          <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                            🆕 New
                          </span>
                        )}
                      </div>
                      <span className="text-gray-400 text-sm">{post.views.toLocaleString()} views</span>
                    </div>
                    
                    <Link to={post.link} className="block">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors cursor-pointer">
                        {post.title}
                      </h3>
                    </Link>
                    
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3 text-sm text-gray-500">
                        <span>{new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric'
                        })}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          ❤️ {post.likes}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Link 
                        to={post.link}
                        className="text-blue-600 hover:text-blue-800 font-semibold transition-colors group-hover:translate-x-1 transform duration-200"
                      >
                        Read More →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Right Side */}
          <div className="lg:col-span-1 space-y-6">
            {/* Search Box */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">🔍 Search Posts</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="absolute right-3 top-3 text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">🏷️ Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-2 bg-blue-50 text-blue-700 text-sm rounded-lg hover:bg-blue-100 transition-colors cursor-pointer border border-blue-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Recent Posts Widget */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">📰 Recent Posts</h3>
              <div className="space-y-4">
                {recentPosts.slice(0, 4).map((post) => (
                  <Link to={post.link} key={post.id} className="group cursor-pointer block">
                    <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1 line-clamp-2">
                      {post.title}
                    </h4>
                    <div className="flex items-center text-xs text-gray-500 gap-2">
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Most Popular Widget */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">🔥 Most Popular</h3>
              <div className="space-y-4">
                {popularPosts.slice(0, 3).map((post, index) => (
                  <Link to={post.link} key={post.id} className="group cursor-pointer block">
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </span>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1 line-clamp-2">
                          {post.title}
                        </h4>
                        <div className="flex items-center text-xs text-gray-500 gap-2">
                          <span>👀 {post.views.toLocaleString()}</span>
                          <span>•</span>
                          <span>❤️ {post.likes}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-3">📧 Newsletter</h3>
              <p className="text-blue-100 text-sm mb-4">
                Get weekly updates with new posts and insights!
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-3 py-2 rounded-lg text-gray-900 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                />
                <button className="w-full bg-white text-white py-2 rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">🤝 Connect</h3>
              <div className="space-y-3">
                <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors">
                  <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">📘</span>
                  <span className="text-sm font-medium">Follow on Twitter</span>
                </a>
                <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors">
                  <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">💼</span>
                  <span className="text-sm font-medium">Connect on LinkedIn</span>
                </a>
                <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors">
                  <span className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">💻</span>
                  <span className="text-sm font-medium">GitHub Profile</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;