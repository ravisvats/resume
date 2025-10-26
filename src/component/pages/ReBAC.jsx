import React from 'react';
import { Link } from 'react-router-dom';

const ReBAC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Relationship-Based Access Control with OpenFGA
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 mb-8 font-medium">
            Implementing ReBAC has never been easier
          </p>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
            Manage access in your app based on relationships between users and resources with an easy-to-use, 
            low-code interface powered by Google Zanzibar style authorization
          </p>
          <a
            href="mailto:ravisvats@gmail.com"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Get Started →
          </a>
        </div>
        
        {/* Comparison Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-16">
          <p className="text-center text-gray-700">
            Still deciding between RBAC, ABAC, and ReBAC? 
            <Link to="/blogs/rbac-vs-fga" className="text-blue-600 hover:text-blue-800 font-semibold ml-2 underline">
              Find the right authorization model for you →
            </Link>
          </p>
        </div>
      </section>

      {/* Author ReBAC Policies Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Author ReBAC policies with ease
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Effortless policy creation and management
            </p>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Create and manage complex Google Zanzibar style relationship graphs with the click of a button 
              in an easy-to-use, fully customizable, no-code UI or via API.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-5 gap-8 mt-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📁</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Create Resources</h3>
              <p className="text-sm text-gray-600">Define the resources you want to manage permissions for.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔗</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Create Relationships</h3>
              <p className="text-sm text-gray-600">Establish connections between resources and users.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Add Roles</h3>
              <p className="text-sm text-gray-600">Assign roles to resources dynamically.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔁</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Define Derivations</h3>
              <p className="text-sm text-gray-600">Set up role hierarchies and inheritance.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Assign Users</h3>
              <p className="text-sm text-gray-600">Grant access to specific resource instances.</p>
            </div>
          </div>
        </div>
      </section>

      {/* API Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                APIs for everything
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Create, manage and automate your policies with REST APIs. 
                Anything done via the UI can be done with our API as well!
              </p>
              <Link 
                to="/blogs/fine-grained-authorization" 
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View API Docs →
              </Link>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
              <pre className="text-green-400 text-sm">
{`# Create Resource Relationship
POST /api/v2/resources/folder
{
  "name": "Folder",
  "actions": ["view", "edit"]
}

# Create Resource
POST /api/v2/resources/file  
{
  "name": "File",
  "parent": "folder",
  "actions": ["view", "edit"]
}

# Assign Role to User
POST /api/v2/users/alice/assignments
{
  "role": "owner",
  "resource": "folder:123"
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* OPAL Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Zero latency, fine granularity
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Policy as a graph? Policy as code? Enjoy both with OPAL
            </p>
            <p className="text-gray-700 max-w-3xl mx-auto mt-4">
              Combine the power of Google Zanzibar style graph-based authorization in the cloud with 
              zero latency at the edge thanks to OpenFGA's OPAL (Open Policy Administration Layer)
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">How OPAL Works</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Policy data synchronized in real-time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Zero-latency permission checks at the edge</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Automatic policy updates without redeployment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Graph-based relationship traversal</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
              <pre className="text-green-400 text-sm">
{`# Permission Check Query
check(user: "alice", relation: "owner", object: "file:abc")
  → Returns: true/false

# Traverse Relationships
user("alice") 
  → member-of team("engineering")
    → owner-of folder("projects")
      → contains file("readme.md")

# Derive Permissions  
alice can: view file:readme.md
  because: 
    alice → member → engineering
      engineering → owner → projects
        projects → contains → readme.md`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Check Permission Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Zero latency permission enforcement
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Check permissions in your app with ease
            </p>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Adding permission checks to your app is as easy as calling a function
            </p>
          </div>

          <div className="bg-white rounded-2xl p-12 shadow-xl max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-xl p-6 mb-6">
              <pre className="text-green-400 text-sm">
{`# Python Example
from openfga import OpenFGA

client = OpenFGA(api_url="...", api_token="...")

# Check Permission
response = client.check({
    "user": "user:alice",
    "relation": "owner", 
    "object": "folder:projects"
})

if response.allowed:
    # User has permission
    allow_access()
else:
    # Access denied
    deny_access()`}
              </pre>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">✨ Key Features</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Effortlessly combine RBAC, ABAC, and ReBAC models</li>
                <li>• No need to change your code when switching models</li>
                <li>• Real-time permission updates without application restart</li>
                <li>• Graph-based relationship traversal for complex scenarios</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Scale Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Can OpenFGA handle your production scale?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            OpenFGA is built on Google's Zanzibar architecture, designed to handle billions of permission checks per day
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-bold text-gray-900 mb-3">Lightning Fast</h3>
              <p className="text-gray-700">Sub-millisecond permission checks with edge caching</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 border border-green-200">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="font-bold text-gray-900 mb-3">Scalable</h3>
              <p className="text-gray-700">Handles millions of relationships and complex policies</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 border border-purple-200">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="font-bold text-gray-900 mb-3">Secure</h3>
              <p className="text-gray-700">Enterprise-grade security with audit trails and compliance</p>
            </div>
          </div>
          
          <Link 
            to="/blogs/openfga-zanzibar-use-case" 
            className="inline-block mt-12 px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
          >
            Learn More →
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Fully flexible policy modeling
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Projects, Environments and Multi-Tenancy - All out of the box.
          </p>
          <p className="text-lg text-blue-100 mb-12 max-w-3xl mx-auto">
            Model ReBAC permissions for multiple projects, environments and tenants in one unified interface. 
            Relationships, role assignments and derivations defined for each environment are unique, allowing 
            complete policy separation between silos.
          </p>
          
          <div className="space-y-4">
            <a
              href="mailto:ravisvats@gmail.com"
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-xl mx-auto"
            >
              Get Started Now
            </a>
            <p className="text-blue-100 text-sm mt-4">
              Try it yourself. It's free. Test in minutes, go to prod in days.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <div className="bg-white py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-8 mb-6">
            <Link to="/blogs/openfga-zanzibar-use-case" className="text-blue-600 hover:text-blue-800 font-medium">
              OpenFGA Use Case →
            </Link>
            <Link to="/blogs/zanzibar-fga-explained" className="text-blue-600 hover:text-blue-800 font-medium">
              Zanzibar Explained →
            </Link>
            <Link to="/blogs/rbac-vs-fga" className="text-blue-600 hover:text-blue-800 font-medium">
              RBAC vs FGA →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReBAC;

