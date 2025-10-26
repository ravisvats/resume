import React from 'react';
import { Link } from 'react-router-dom';

const ABAC = () => {
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
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            ABAC made simple
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-medium">
            Powerful Attribute-Based Access Control with low code and no code interfaces. Simple.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="mailto:ravisvats@gmail.com"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Start Now
            </a>
            <Link
              to="/blogs/fine-grained-authorization"
              className="inline-block px-8 py-4 bg-gray-100 text-gray-700 rounded-lg text-lg font-semibold hover:bg-gray-200 transition-colors border border-gray-200"
            >
              Read The Blog
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex justify-center gap-4 text-sm">
          <a href="/docs/abac" className="text-blue-600 hover:text-blue-800">Check Out ABAC Docs →</a>
          <a href="/docs/release-notes" className="text-gray-600 hover:text-gray-800">Read the release notes</a>
        </div>
      </section>

      {/* Scale Seamlessly Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Scale Seamlessly
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Move from RBAC to ABAC with little effort as your permissions needs grow 
              and become more complex and contextual
            </p>
            <a
              href="mailto:ravisvats@gmail.com"
              className="inline-block mt-8 px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start now
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Gain Flexibility */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4 text-center">🔀</div>
              <h3 className="font-bold text-gray-900 mb-4 text-xl">Gain Flexibility</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Go beyond RBAC with very little effort through auto-generated ABAC code 
                you can manage directly from your Git repo.
              </p>
              <a
                href="mailto:ravisvats@gmail.com"
                className="inline-block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Start now →
              </a>
            </div>

            {/* Save Time */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 border border-green-200 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4 text-center">⏱️</div>
              <h3 className="font-bold text-gray-900 mb-4 text-xl">Save Significant Time</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Save time, effort and complexity versus building and maintaining yourself 
                while empowering other stakeholders with no code interfaces.
              </p>
              <a
                href="mailto:ravisvats@gmail.com"
                className="inline-block w-full text-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                Start now →
              </a>
            </div>

            {/* Contextual Control */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 border border-purple-200 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4 text-center">🎯</div>
              <h3 className="font-bold text-gray-900 mb-4 text-xl">Contextual Control</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Make access decisions based on user attributes, resource properties, 
                and environmental context - all configurable without code changes.
              </p>
              <a
                href="mailto:ravisvats@gmail.com"
                className="inline-block w-full text-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
              >
                Start now →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABAC Explained Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What is ABAC?
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Attribute-Based Access Control (ABAC) allows you to define access policies 
                based on attributes of users, resources, actions, and environmental context.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Unlike RBAC which assigns fixed roles, ABAC evaluates multiple attributes 
                to make dynamic access decisions, giving you fine-grained control over permissions.
              </p>
              <Link 
                to="/blogs/rbac-vs-fga" 
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Example ABAC Policy</h3>
              <div className="bg-gray-900 rounded-lg p-4">
                <pre className="text-green-400 text-sm">
{`# Allow if user is from IP 192.168.1.* 
# AND user.department == "Sales"
# AND resource.type == "Invoice"
# AND time.hour >= 9 AND time.hour <= 17

allow {
  user.department == "Sales"
  user.ip_matches "192.168.1.*"
  resource.type == "Invoice" 
  time.hour >= 9 && time.hour <= 17
}

# Grant write access if user owns resource
allow {
  user.id == resource.owner
  action == "write"
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose ABAC?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful advantages over traditional access control methods
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold text-gray-900 mb-2">Fine-Grained Control</h3>
              <p className="text-sm text-gray-700">
                Define access based on any combination of attributes, giving you precise control over who can do what.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
              <div className="text-3xl mb-3">🔄</div>
              <h3 className="font-bold text-gray-900 mb-2">Dynamic Policies</h3>
              <p className="text-sm text-gray-700">
                Access decisions adapt automatically as attributes change, without updating roles or permissions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
              <div className="text-3xl mb-3">🌍</div>
              <h3 className="font-bold text-gray-900 mb-2">Context-Aware</h3>
              <p className="text-sm text-gray-700">
                Consider environmental factors like time, location, and device type in access decisions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-gray-900 mb-2">Flexible Rules</h3>
              <p className="text-sm text-gray-700">
                Create complex conditional logic without writing custom authorization code for each scenario.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border border-red-200">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-bold text-gray-900 mb-2">Scalable</h3>
              <p className="text-sm text-gray-700">
                Handle millions of users and resources with attribute-based policies that scale effortlessly.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6 border border-indigo-200">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-bold text-gray-900 mb-2">Secure</h3>
              <p className="text-sm text-gray-700">
                Centralize security logic and maintain compliance with audit trails for all access decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to implement ABAC?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Start with simple policies and grow to complex attribute-based authorization 
            without rewriting your application
          </p>
          
          <div className="space-y-4">
            <a
              href="mailto:ravisvats@gmail.com"
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-xl"
            >
              Get Started Now
            </a>
            <p className="text-blue-100 text-sm">
              Test in minutes, go to prod in days
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ABAC;

