import React from 'react';
import { Link } from 'react-router-dom';

const FGAUserAuthorization = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      {/* <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <Link to="/projects" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
                ← Back to Projects
              </Link>
            </div>
            <Link to="/" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              Home
            </Link>
          </div>
        </div>
      </div> */}

      {/* Project Header */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="mb-6">
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              3 Months • AWS • Python
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Outsourcing Client-Side Setup — FGA User Authorization from Scratch
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            A complete end-to-end setup of Fine-Grained Authorization (FGA) for a client application, 
            built from scratch to enable scalable, secure, and compliant user access control.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Overview</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This project involved designing and implementing a complete Fine-Grained Authorization (FGA) system 
              for a client application from ground up. Over 3 months, I built a comprehensive authorization infrastructure 
              that enables scalable, secure, and compliant user access control using modern FGA principles.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The solution included authorization modeling, validation libraries, automated schema synchronization, 
              data migration pipelines, and a complete management UI for roles and permissions.
            </p>
            
            {/* Project Image */}
            <div className="flex justify-center mt-8">
              <img 
                src="/images/outsourcing_fga_auth.png" 
                alt="FGA User Authorization System" 
                className="max-w-3xl mx-auto rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Built Components Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Built Components</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
              <div className="text-4xl mb-4">🧩</div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl">Authorization Model</h3>
              <p className="text-gray-700 leading-relaxed">
                Designed a fine-grained ReBAC model for dynamic access control that supports complex 
                relationship-based permissions and scales with business growth.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl">Authorization Validation Library</h3>
              <p className="text-gray-700 leading-relaxed">
                Developed a reusable library to validate authorization logic across services, ensuring 
                consistent security checks throughout the application.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl">Lambda for Schema Sync</h3>
              <p className="text-gray-700 leading-relaxed">
                Built AWS Lambda functions to automatically synchronize schema updates with the FGA server, 
                eliminating manual intervention and ensuring consistency.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
              <div className="text-4xl mb-4">🔁</div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl">CDC & Data Migration Pipeline</h3>
              <p className="text-gray-700 leading-relaxed">
                Implemented a robust Change Data Capture and migration system for continuous data updates, 
                enabling real-time synchronization with minimal latency.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl">Data Migrations</h3>
              <p className="text-gray-700 leading-relaxed">
                Executed and automated migrations for existing datasets, ensuring seamless transition 
                from legacy systems to the new FGA architecture.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl">Roles & Permissions Schema</h3>
              <p className="text-gray-700 leading-relaxed">
                Created a scalable mapping schema for roles, permissions, and hierarchies that supports 
                complex organizational structures.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
              <div className="text-4xl mb-4">✏️</div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl">CRUD Operations</h3>
              <p className="text-gray-700 leading-relaxed">
                Implemented full CRUD APIs for managing roles and permissions, providing programmatic 
                control over authorization policies.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
              <div className="text-4xl mb-4">🖥️</div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl">Roles & Permissions UI</h3>
              <p className="text-gray-700 leading-relaxed">
                Designed a responsive UI for easy management of authorization data, enabling non-technical 
                users to configure access controls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Tech Stack</h2>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center border border-blue-200">
              <div className="text-4xl mb-3">🐍</div>
              <h4 className="font-bold text-gray-900 mb-2">Python</h4>
              <p className="text-sm text-gray-600">FastAPI for APIs</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center border border-orange-200">
              <div className="text-4xl mb-3">☁️</div>
              <h4 className="font-bold text-gray-900 mb-2">AWS Lambda</h4>
              <p className="text-sm text-gray-600">Serverless Functions</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 text-center border border-blue-200">
              <div className="text-4xl mb-3">🗄️</div>
              <h4 className="font-bold text-gray-900 mb-2">PostgreSQL</h4>
              <p className="text-sm text-gray-600">Database</p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 text-center border border-red-200">
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="font-bold text-gray-900 mb-2">Redis</h4>
              <p className="text-sm text-gray-600">Caching</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center border border-purple-200">
              <div className="text-4xl mb-3">📡</div>
              <h4 className="font-bold text-gray-900 mb-2">Kafka</h4>
              <p className="text-sm text-gray-600">CDC Pipeline</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-6 text-center border border-cyan-200">
              <div className="text-4xl mb-3">⚛️</div>
              <h4 className="font-bold text-gray-900 mb-2">React</h4>
              <p className="text-sm text-gray-600">Frontend UI</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6 text-center border border-teal-200">
              <div className="text-4xl mb-3">🎨</div>
              <h4 className="font-bold text-gray-900 mb-2">Tailwind</h4>
              <p className="text-sm text-gray-600">Styling</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center border border-green-200">
              <div className="text-4xl mb-3">🔐</div>
              <h4 className="font-bold text-gray-900 mb-2">OpenFGA</h4>
              <p className="text-sm text-gray-600">Authorization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Results</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center border border-gray-200">
              <div className="text-5xl text-blue-600 mb-4">⚡</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">~40%</h3>
              <p className="text-gray-700 font-medium">Reduced Authorization Latency</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center border border-gray-200">
              <div className="text-5xl text-green-600 mb-4">🤖</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">80%</h3>
              <p className="text-gray-700 font-medium">Reduced Manual Overhead</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center border border-gray-200">
              <div className="text-5xl text-purple-600 mb-4">✓</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">100%</h3>
              <p className="text-gray-700 font-medium">Audit Compliance (SOC 2-ready)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Size Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Project Team</h2>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-12 border border-indigo-200">
            <div className="text-5xl mb-6">👥</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">2 Developers + 1 DevOps Engineer</h3>
            <p className="text-gray-700">
              Cross-functional team with expertise in backend development, cloud infrastructure, and authorization systems
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Need Similar Authorization Setup?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Let's discuss how I can help you implement Fine-Grained Authorization for your application
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:ravisvats@gmail.com"
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-xl"
            >
              Get In Touch
            </a>
            <Link 
              to="/projects"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View More Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-12 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link to="/projects/user-authorization-system" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
            ← Previous Project
          </Link>
          <Link to="/projects/authpilot" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
            Next Project →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FGAUserAuthorization;

