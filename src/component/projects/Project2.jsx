import React from 'react';
import { Link } from 'react-router-dom';

const Project2 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link to="/projects" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
              ← Back to Projects
            </Link>
            <Link to="/" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              Home
            </Link>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Project Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">Authorization</span>
            <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">Security</span>
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">Backend</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            User Authorization System Using FGA
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            A fine-grained access control system that dynamically manages user permissions based on roles, relationships, 
            and contextual attributes using Google Zanzibar-style FGA architecture.
          </p>
          
          <img 
            src="/images/fga.jpeg" 
            alt="Fine-Grained Authorization System" 
            className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
          />
        </header>

        {/* Project Details */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Project Overview</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            This advanced authorization system implements Fine-Grained Authorization (FGA) principles inspired by Google's Zanzibar, 
            providing a scalable, flexible, and secure way to manage complex permission structures. The system supports 
            relationship-based access control, contextual permissions, and real-time authorization decisions.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Core Features</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-3">🔐 Relationship-Based Access</h4>
              <p className="text-blue-800 text-sm">
                Define permissions through user-resource relationships like owner, editor, viewer with inheritance.
              </p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-semibold text-green-900 mb-3">⚡ Real-Time Evaluation</h4>
              <p className="text-green-800 text-sm">
                Sub-millisecond permission checks with intelligent caching and optimized graph traversal.
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <h4 className="font-semibold text-purple-900 mb-3">🎯 Contextual Permissions</h4>
              <p className="text-purple-800 text-sm">
                Support for time-based, location-based, and attribute-based access control policies.
              </p>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-6">
              <h4 className="font-semibold text-orange-900 mb-3">📊 Multi-Tenant Support</h4>
              <p className="text-orange-800 text-sm">
                Built-in multi-tenancy with isolated permission namespaces and cross-tenant sharing.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Technical Architecture</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Zanzibar-Inspired Design</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            The system follows Google Zanzibar's proven architecture for global-scale authorization, adapted for 
            general-purpose applications with enhanced flexibility and easier deployment.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">Architecture Components:</h4>
            <ul className="text-gray-700 space-y-2">
              <li><strong>Relation Engine:</strong> Manages user-resource relationships and inheritance</li>
              <li><strong>Policy Engine:</strong> Evaluates complex authorization rules and conditions</li>
              <li><strong>Graph Database:</strong> Stores relationship data with optimized traversal</li>
              <li><strong>Cache Layer:</strong> Redis-based caching for frequently accessed permissions</li>
              <li><strong>API Gateway:</strong> RESTful and GraphQL APIs for permission management</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Permission Model</h3>
          
          <div className="bg-gray-900 text-green-400 rounded-lg p-6 mb-6 text-sm">
            <pre>{`// Example Permission Model Configuration
{
  "document": {
    "relations": {
      "owner": {
        "this": {}
      },
      "editor": {
        "this": {},
        "computedUserset": {
          "object": ".",
          "relation": "owner"
        }
      },
      "viewer": {
        "this": {},
        "computedUserset": {
          "object": ".",
          "relation": "editor"
        }
      }
    },
    "permissions": {
      "read": {
        "computedUserset": {
          "object": ".",
          "relation": "viewer"
        }
      },
      "write": {
        "computedUserset": {
          "object": ".",
          "relation": "editor"
        }
      },
      "delete": {
        "computedUserset": {
          "object": ".",
          "relation": "owner"
        }
      }
    }
  }
}`}</pre>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Key Capabilities</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Dynamic Relationship Management</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Create, modify, and delete user-resource relationships in real-time with automatic permission propagation 
            and consistency maintenance across the entire system.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Advanced Policy Language</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Define complex authorization policies using a declarative language that supports conditions, 
            attribute-based rules, and temporal constraints.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Audit and Compliance</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Comprehensive audit logging of all authorization decisions with detailed reasoning trails for 
            compliance reporting and security analysis.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Technology Stack</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Backend</h4>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>Go (Fiber Framework)</li>
                <li>PostgreSQL + Neo4j</li>
                <li>Redis (Caching)</li>
                <li>gRPC APIs</li>
                <li>Jaeger (Tracing)</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Security</h4>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>OAuth2 / OIDC</li>
                <li>JWT with RSA256</li>
                <li>mTLS Encryption</li>
                <li>Rate Limiting</li>
                <li>Audit Logging</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Infrastructure</h4>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>Kubernetes</li>
                <li>Docker</li>
                <li>Prometheus</li>
                <li>Grafana</li>
                <li>Helm Charts</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Implementation Examples</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Permission Check API</h3>
          <div className="bg-gray-900 text-green-400 rounded-lg p-6 mb-6 text-sm">
            <pre>{`// Check Permission API Call
POST /v1/authz/check
{
  "subject": "user:alice",
  "permission": "write", 
  "object": "document:123",
  "context": {
    "ip": "192.168.1.1",
    "time": "2024-01-15T10:00:00Z",
    "device": "mobile"
  }
}

// Response
{
  "allowed": true,
  "reason": "user:alice has editor relation on document:123",
  "decision_time": "2ms",
  "trace_id": "abc123"
}`}</pre>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Relationship Management</h3>
          <div className="bg-gray-900 text-green-400 rounded-lg p-6 mb-6 text-sm">
            <pre>{`// Create Relationship
POST /v1/authz/relationships
{
  "subject": "user:bob",
  "relation": "editor",
  "object": "document:456"
}

// Bulk Relationship Query
POST /v1/authz/relationships/query
{
  "object_type": "document",
  "permission": "read",
  "subject": "user:alice"
}

// Returns all documents user:alice can read`}</pre>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Performance & Scalability</h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">⚡ Performance Metrics</h4>
                <ul className="text-gray-700 space-y-2">
                                     <li>• Sub-2ms average permission check latency</li>
                  <li>• 100,000+ RPS throughput capability</li>
                  <li>• 99.99% availability SLA</li>
                  <li>• Horizontal scaling support</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">📊 Scale Achievements</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• 10M+ relationships managed</li>
                  <li>• 1B+ authorization decisions/day</li>
                  <li>• 1000+ concurrent tenants</li>
                  <li>• Multi-region deployment</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Security Features</h2>
          
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li><strong>Zero-Trust Architecture:</strong> Every request is authenticated and authorized</li>
            <li><strong>Principle of Least Privilege:</strong> Users get minimal necessary permissions</li>
            <li><strong>Defense in Depth:</strong> Multiple security layers and validation points</li>
            <li><strong>Threat Detection:</strong> Anomaly detection for suspicious access patterns</li>
            <li><strong>Compliance Ready:</strong> SOC2, GDPR, and HIPAA compliance features</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Use Cases</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Enterprise SaaS</h4>
              <p className="text-gray-700 text-sm">
                Multi-tenant applications with complex organizational hierarchies and shared resources.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Document Management</h4>
              <p className="text-gray-700 text-sm">
                File sharing platforms with granular permissions and collaborative features.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Healthcare Systems</h4>
              <p className="text-gray-700 text-sm">
                Patient data access with strict compliance and audit requirements.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Financial Services</h4>
              <p className="text-gray-700 text-sm">
                Trading platforms with role-based access and regulatory compliance needs.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 mt-8">
            <p className="text-gray-700 italic">
              "This FGA system demonstrates how modern authorization can be both powerful and performant. 
              By implementing Zanzibar's proven concepts with contemporary tools, we achieve enterprise-grade 
              security without sacrificing developer experience."
            </p>
          </div>
        </div>

        {/* Project Links */}
        <div className="mt-12 flex flex-wrap gap-4">
          <a 
            href="#" 
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium flex items-center gap-2"
          >
            🔐 Live Demo
          </a>
          <a 
            href="#" 
            className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-medium flex items-center gap-2"
          >
            📱 GitHub Repository
          </a>
          <a 
            href="#" 
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center gap-2"
          >
            📄 API Documentation
          </a>
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
              <p className="text-gray-600 text-sm">Security engineer and backend developer with expertise in authorization systems.</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link to="/projects/project1" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
            ← Previous Project
          </Link>
          <Link to="/projects/project3" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
            Next Project →
          </Link>
        </div>
      </article>
    </div>
  );
};

export default Project2; 