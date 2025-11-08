import React from 'react';
import { Link } from 'react-router-dom';

const RBAC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      {/* <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div> */}

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Role-Based Access Control with OpenFGA
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 mb-8 font-medium">
            RBAC now as easy as checking a box
          </p>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
            Manage access using dynamic roles in seconds with a quick low-code interface
          </p>
          <a
            href="mailto:ravisvats@gmail.com"
            className="inline-block px-8 py-4 bg-blue-600 !text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Get Started →
          </a>
        </div>

        {/* Role Matrix Visual */}
        <div className="bg-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Role</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Join</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">View</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Manage</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-blue-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Player</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✗</td>
                </tr>
                <tr className="hover:bg-purple-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Admin</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                </tr>
                <tr className="hover:bg-green-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Moderator</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Comparison Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-12">
          <p className="text-center text-gray-700">
            Looking for a more granular authorization model? Try 
            <Link to="/blogs/rbac-vs-fga" className="text-blue-600 hover:text-blue-800 font-semibold mx-2 underline">
              ABAC or ReBAC
            </Link>
            or visit our
            <Link to="/rebac" className="text-blue-600 hover:text-blue-800 font-semibold ml-2 underline">
              ReBAC page →
            </Link>
          </p>
        </div>
      </section>

      {/* Author RBAC Policies Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Author RBAC policies with ease
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Effortless implementation and management
            </p>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Create and manage robust RBAC authorization policies in an easy-to-use, 
              fully customizable, no-code UI.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Create a Role</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Unlimited dynamic roles with a click in the UI, or a simple API call
              </p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 border border-purple-200">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Assign to User</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Each user can have multiple roles in multiple tenants
              </p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 border border-green-200">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Create Resource</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Connect roles to resources and easily map out your application's logic
              </p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 border border-orange-200">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                4
              </div>
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Set Permissions</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                It's literally ticking a box! Define what each role can do
              </p>
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
                Create, manage and automate your policies with our REST APIs. 
                Anything done via the UI can be done with our API as well!
              </p>
              <Link 
                to="/blogs/fine-grained-authorization" 
                className="inline-block px-6 py-3 bg-blue-600 !text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Check Out the API Docs →
              </Link>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
              <div className="mb-4 flex gap-2">
                <button className="px-3 py-1 bg-gray-700 text-white rounded text-xs">Create Role</button>
                <button className="px-3 py-1 bg-gray-700 text-white rounded text-xs">Sync User</button>
                <button className="px-3 py-1 bg-gray-700 text-white rounded text-xs">Create Resource</button>
              </div>
              <pre className="text-green-400 text-sm">
{`# Create Role
POST /api/v2/roles
{
  "key": "admin",
  "name": "Administrator",
  "permissions": [
    "read", "write", "delete"
  ]
}

# Assign Role to User
POST /api/v2/users/alice/assignments
{
  "role": "admin",
  "resource": "document:123"
}

# Check Permission
POST /api/v2/check
{
  "user": "alice",
  "resource": "document:123", 
  "action": "write"
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Policy-as-Code Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              RBAC Policy-as-code generator
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Anyone can use this - we generate RBAC policy-as-code so you don't have to
            </p>
            <p className="text-gray-700 max-w-3xl mx-auto mt-4">
              OpenFGA writes policy-as-code directly into Git. Add and edit more code via Gitops
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                📝 Cedar RBAC Example
              </h3>
              <pre className="text-sm text-gray-800 bg-white p-4 rounded-lg overflow-x-auto">
{`permit (
  principal in Role::'Admin',
  action in [
    Action::'View', 
    Action::'Create'
  ],
  resource == Repo::'repo.git'
);`}
              </pre>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                📝 Rego RBAC Example
              </h3>
              <pre className="text-sm text-gray-800 bg-white p-4 rounded-lg overflow-x-auto">
{`default allow = false

allow {
  input.user.role == "admin"
  input.action == "view"
  input.resource.type == "document"
}

allow {
  input.user.role == "editor"
  input.action == "edit"
  input.resource.owner == input.user.id
}`}
              </pre>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link 
              to="/blogs/fastapi-deployment" 
              className="inline-block px-6 py-3 bg-blue-600 !text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Gitops Docs →
            </Link>
          </div>
        </div>
      </section>

      {/* Multi-Tenancy Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Fully flexible policy modeling
          </h2>
          <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
            Projects, Environments and Multi-Tenancy - All out of the box.
          </p>
          <p className="text-gray-700 max-w-3xl mx-auto mb-12">
            Model RBAC permissions for multiple projects, environments and tenants in one unified interface.
            Roles, actions, resources and policies defined for each environment are unique, allowing 
            complete separation between each silo.
          </p>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Multi-Tenant</h3>
                <p className="text-sm text-gray-600">Isolated environments for each tenant</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Projects</h3>
                <p className="text-sm text-gray-600">Separate policies per project</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Environments</h3>
                <p className="text-sm text-gray-600">Dev, staging, and production ready</p>
              </div>
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
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            RBAC with OpenFGA scales effortlessly from startup to enterprise
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-bold text-gray-900 mb-3">Lightning Fast</h3>
              <p className="text-gray-700">Sub-millisecond role checks with caching</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 border border-green-200">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="font-bold text-gray-900 mb-3">Scalable</h3>
              <p className="text-gray-700">Handles millions of role assignments</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 border border-purple-200">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="font-bold text-gray-900 mb-3">Secure</h3>
              <p className="text-gray-700">Enterprise-grade security with audit trails</p>
            </div>
          </div>
          
          <Link 
            to="/blogs/rbac-vs-fga" 
            className="inline-block mt-12 px-8 py-4 bg-blue-600 !text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
          >
            Learn More →
          </Link>
        </div>
      </section>

      {/* Permission Check Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Zero latency permissions enforcement
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Adding OpenFGA to your app is as easy as calling a function
            </p>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Simply call <code className="bg-gray-200 px-2 py-1 rounded font-mono">permit.check(identity, resource, action)</code> in your app
            </p>
          </div>

          <div className="bg-white rounded-2xl p-12 shadow-xl max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-xl p-6 mb-6">
              <pre className="text-green-400 text-sm">
{`# Python Example
from openfga import OpenFGA

client = OpenFGA(api_url="...", api_token="...")

# Check if user has permission
response = client.check({
    "user": "user:alice",
    "relation": "admin",
    "object": "document:123"
})

if response.allowed:
    # User has admin role
    allow_access()
else:
    # Access denied
    deny_access()`}
              </pre>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">✨ Key Benefits</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Simple role-based permission checks</li>
                <li>• No need to manage complex access matrices</li>
                <li>• Real-time role updates without application restart</li>
                <li>• Seamlessly migrate from simple to complex authorization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Model your authorization layer
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Try it yourself. It's free. Test in minutes, go to prod in days.
          </p>
          
          <a
            href="mailto:ravisvats@gmail.com"
            className="inline-block px-8 py-4 !bg-white text-blue-600 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-xl"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* Footer Links */}
      <div className="bg-white py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-8 mb-6">
            <Link to="/rebac" className="text-blue-600 hover:text-blue-800 font-medium">
              ReBAC Page →
            </Link>
            <Link to="/blogs/rbac-vs-fga" className="text-blue-600 hover:text-blue-800 font-medium">
              RBAC vs FGA →
            </Link>
            <Link to="/blogs/fine-grained-authorization" className="text-blue-600 hover:text-blue-800 font-medium">
              Fine-Grained Auth →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RBAC;

