import React from 'react';
import { Link } from 'react-router-dom';

const Blog4 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      {/* <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link to="/blogs" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">← Back to Blogs</Link>
            <Link to="/" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">Home</Link>
          </div>
        </div>
      </div> */}

      {/* Blog Content */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Blog Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">Authorization</span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Security</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Role-Based vs Fine-Grained Access Control
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Understand the difference between RBAC and FGA, and when to use each in your application.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
            <span>December 28, 2023</span>
            <span>•</span>
            <span>9 min read</span>
            <span>•</span>
            <span>By Ravi Vats</span>
          </div>
          
          <img src="/images/rbacblog.png" alt="RBAC vs Fine-Grained Access Control" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
        </header>

        {/* Blog Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Introduction</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Access control is fundamental to application security. Two popular models—Role-Based Access Control (RBAC) and Fine-Grained Authorization (FGA)—serve different needs and scale differently. Understanding when to use each can save you from costly refactoring.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Role-Based Access Control (RBAC)</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            RBAC assigns users to roles, and roles are granted permissions. It's simple, well-understood, and works excellently for many applications with hierarchical organizations.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-semibold text-green-900 mb-3">✅ RBAC Advantages</h4>
              <ul className="text-green-800 text-sm space-y-2">
                <li>Simple to understand and implement</li>
                <li>Easy to audit and manage</li>
                <li>Performance-friendly</li>
                <li>Good for compliance</li>
              </ul>
            </div>
            
            <div className="bg-red-50 rounded-lg p-6">
              <h4 className="font-semibold text-red-900 mb-3">❌ RBAC Limitations</h4>
              <ul className="text-red-800 text-sm space-y-2">
                <li>Limited contextual awareness</li>
                <li>Role explosion as complexity grows</li>
                <li>Difficult to handle exceptions</li>
                <li>Poor support for dynamic relationships</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Fine-Grained Authorization (FGA)</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            FGA models authorization as relationships between users and resources. Instead of static roles, permissions are derived dynamically based on context and relationships.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-semibold text-green-900 mb-3">✅ FGA Advantages</h4>
              <ul className="text-green-800 text-sm space-y-2">
                <li>Highly flexible and contextual</li>
                <li>Supports complex business logic</li>
                <li>Natural fit for multi-tenant systems</li>
                <li>Precise permission control</li>
              </ul>
            </div>
            
            <div className="bg-red-50 rounded-lg p-6">
              <h4 className="font-semibold text-red-900 mb-3">❌ FGA Challenges</h4>
              <ul className="text-red-800 text-sm space-y-2">
                <li>Higher complexity to implement</li>
                <li>Performance overhead</li>
                <li>Harder to audit and debug</li>
                <li>Steeper learning curve</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">When to Use Each Approach</h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Choose RBAC When:</h3>
            <ul className="text-blue-800 space-y-2">
              <li>Simple, hierarchical permissions</li>
              <li>Static permission requirements</li>
              <li>Small to medium teams</li>
              <li>Performance is critical</li>
            </ul>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-purple-900 mb-4">Choose FGA When:</h3>
            <ul className="text-purple-800 space-y-2">
              <li>Complex relationships between users and resources</li>
              <li>Multi-tenancy requirements</li>
              <li>Dynamic permissions based on context</li>
              <li>Collaborative platforms with sharing</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Implementation Examples</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">RBAC Example</h3>
          <div className="bg-gray-900 text-green-400 rounded-lg p-6 mb-6 text-sm">
            <pre>{`const userRoles = {
  'alice@company.com': ['admin', 'editor'],
  'bob@company.com': ['editor'],
  'carol@company.com': ['viewer']
};

const rolePermissions = {
  'admin': ['read', 'write', 'delete'],
  'editor': ['read', 'write'],
  'viewer': ['read']
};

function hasPermission(user, permission) {
  const roles = userRoles[user] || [];
  return roles.some(role => 
    rolePermissions[role]?.includes(permission)
  );
}`}</pre>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">FGA Example</h3>
          <div className="bg-gray-900 text-green-400 rounded-lg p-6 mb-6 text-sm">
            <pre>{`const relationships = [
  { user: 'alice', relation: 'owner', object: 'document:1' },
  { user: 'bob', relation: 'editor', object: 'document:1' },
  { user: 'carol', relation: 'viewer', object: 'document:1' }
];

const authModel = {
  document: {
    permissions: {
      read: ['owner', 'editor', 'viewer'],
      write: ['owner', 'editor'],
      delete: ['owner']
    }
  }
};

async function check(user, permission, object) {
  const userRelations = relationships
    .filter(r => r.user === user && r.object === object)
    .map(r => r.relation);
  
  const allowedRelations = authModel.document.permissions[permission] || [];
  return userRelations.some(relation => allowedRelations.includes(relation));
}`}</pre>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Tools and Technologies</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">RBAC Tools</h4>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>Spring Security, Django Auth</li>
                <li>Active Directory, LDAP</li>
                <li>Casbin, AccessControl.js</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">FGA Tools</h4>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>Auth0 FGA, AWS Verified Permissions</li>
                <li>Ory Keto, OpenFGA, SpiceDB</li>
                <li>Open Policy Agent (OPA)</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mt-8">
            <p className="text-gray-700 italic">
              "The best authorization system is the one that grows with your application. Start simple with RBAC, but don't be afraid to evolve to FGA when your users and use cases demand it."
            </p>
          </div>
        </div>

        {/* Author Section */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex items-center gap-4">
            <img src="/src/assets/ravi_passport.jpeg" alt="Ravi Vats" className="w-16 h-16 rounded-full object-cover" />
            <div>
              <h4 className="font-semibold text-gray-900">Ravi Vats</h4>
              <p className="text-gray-600 text-sm">Full-stack developer with expertise in authorization systems and security architecture.</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link to="/blogs/blog3" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">← Previous Article</Link>
          <Link to="/blogs/blog5" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">Next Article →</Link>
        </div>
      </article>
    </div>
  );
};

export default Blog4; 