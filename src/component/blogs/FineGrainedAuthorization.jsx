import React from 'react';
import { Link } from 'react-router-dom';

const Blog1 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      {/* <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link 
              to="/blogs" 
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2"
            >
              ← Back to Blogs
            </Link>
            <Link 
              to="/" 
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Home
            </Link>
          </div>
        </div>
      </div> */}

      {/* Blog Content */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Blog Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
              Authorization
            </span>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
              Security
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            What is Fine-Grained Authorization (FGA)?
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            A beginner-friendly guide to understanding Fine-Grained Authorization systems and why modern apps need them.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
            <span>January 15, 2024</span>
            <span>•</span>
            <span>8 min read</span>
            <span>•</span>
            <span>By Ravi Vats</span>
          </div>
          
          <img 
            src="/images/fgablog.png" 
            alt="Fine-Grained Authorization" 
            className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
          />
        </header>

        {/* Blog Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Introduction</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            As applications grow in complexity, so do their authorization requirements. Traditional role-based access control (RBAC) 
            often falls short when you need to implement nuanced permissions that depend on context, relationships, and dynamic conditions. 
            This is where Fine-Grained Authorization (FGA) comes into play.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">What is Fine-Grained Authorization?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Fine-Grained Authorization is an access control approach that allows you to define permissions at a very detailed level. 
            Instead of simply asking "Does this user have the 'admin' role?", FGA systems can answer complex questions like:
          </p>
          
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Can Alice edit the document she created?</li>
            <li>Can Bob view reports from his own department?</li>
            <li>Can Carol approve expenses under $1000 for her team?</li>
            <li>Can Dave delete comments on posts he moderates?</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Key Concepts</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Resources</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Resources are the objects in your system that need protection - documents, users, projects, orders, etc. 
            Each resource has attributes that can be used in authorization decisions.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Relations</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Relations define how users are connected to resources. Common relations include owner, member, viewer, editor, etc. 
            These relations form the foundation of your authorization logic.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Permissions</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Permissions are actions that can be performed on resources - read, write, delete, share, etc. 
            Permissions are typically derived from relations through authorization policies.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">FGA vs Traditional RBAC</h2>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h4 className="font-semibold text-gray-900 mb-3">Traditional RBAC:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
              <li>Static role assignments</li>
              <li>Broad permissions</li>
              <li>Limited context awareness</li>
              <li>Difficult to handle exceptions</li>
            </ul>
            
            <h4 className="font-semibold text-gray-900 mb-3">Fine-Grained Authorization:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Dynamic relationship-based permissions</li>
              <li>Contextual decision making</li>
              <li>Granular control</li>
              <li>Flexible policy definition</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Implementation Approaches</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Policy-Based Systems</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Use declarative policies (like ABAC - Attribute-Based Access Control) to define complex authorization rules 
            based on user attributes, resource attributes, and environmental conditions.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Relationship-Based Systems</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Model authorization as a graph of relationships between users and resources. Popular systems like 
            Zanzibar, Auth0 FGA, and Ory Keto follow this approach.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Benefits of FGA</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-3">🔒 Enhanced Security</h4>
              <p className="text-blue-800 text-sm">
                Principle of least privilege - users only get access to what they specifically need.
              </p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-semibold text-green-900 mb-3">⚡ Flexibility</h4>
              <p className="text-green-800 text-sm">
                Easily adapt to changing business requirements without code changes.
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <h4 className="font-semibold text-purple-900 mb-3">📊 Auditability</h4>
              <p className="text-purple-800 text-sm">
                Clear trail of who can access what and why, essential for compliance.
              </p>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-6">
              <h4 className="font-semibold text-orange-900 mb-3">🎯 Precision</h4>
              <p className="text-orange-800 text-sm">
                Handle complex scenarios that traditional RBAC can't manage effectively.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Getting Started</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            If you're considering implementing FGA in your application, start by mapping out your resources, 
            identifying the relationships between users and resources, and defining the permissions you need to control. 
            Consider using established solutions like Auth0 FGA, Ory Keto, or building on top of Google's Zanzibar model.
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mt-8">
            <p className="text-gray-700 italic">
              "The future of authorization is fine-grained, contextual, and relationship-aware. 
              Start planning your transition today to build more secure and flexible applications."
            </p>
          </div>
        </div>

        {/* Author Section */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex items-center gap-4">
            <img 
              src="/src/assets/ravi_passport.jpeg" 
              alt="Ravi Vats" 
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold text-gray-900">Ravi Vats</h4>
              <p className="text-gray-600 text-sm">Full-stack developer passionate about building secure and scalable applications.</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link 
            to="/blogs" 
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2"
          >
            ← All Blogs
          </Link>
          <Link 
            to="/blogs/openfga-zanzibar-use-case" 
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2"
          >
            Next Article →
          </Link>
        </div>
      </article>
    </div>
  );
};

export default Blog1; 