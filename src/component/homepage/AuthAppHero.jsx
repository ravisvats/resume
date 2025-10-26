import React, { useState } from 'react';
import { FiShield, FiZap, FiRefreshCw, FiCheckCircle, FiHeadphones, FiUsers, FiLayers, FiSettings } from 'react-icons/fi';

const Bullet = ({ icon: Icon, children, accent = 'indigo' }) => (
  <li className="flex items-start gap-3">
    <span className={`mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-${accent}-100 text-${accent}-700 border border-${accent}-200`}>
      <Icon className="h-3.5 w-3.5" />
    </span>
    <span className="text-gray-800">{children}</span>
  </li>
);

const AuthAppHero = () => {
  // No popup on homepage – direct WhatsApp CTA
  return (
    <section className="w-full">
      <div className="relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />
        <div className="relative px-6 md:px-12 py-12 md:py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              AuthApp™ — Continuous Fine-Grained Authorization as a Service
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mt-4">
              Secure, Scalable, Real-Time Access Control for Modern Applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Left Column: Features */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <FiShield className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Features</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Custom Fine-Grained Authorization — ReBAC</p>
                    <p className="text-sm text-gray-600 mt-1">Built on Google Zanzibar architecture</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Seamless Migration</p>
                    <p className="text-sm text-gray-600 mt-1">Move from legacy roles to modern FGA</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Real-Time Processing</p>
                    <p className="text-sm text-gray-600 mt-1">Built to handle millions of requests</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Compliance Ready</p>
                    <p className="text-sm text-gray-600 mt-1">Audit logs, SOC 2 support</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Column: Advantages / Support */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <FiUsers className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Advantages & Support</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="h-5 w-5 text-rose-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">24×7 Support</p>
                    <p className="text-sm text-gray-600 mt-1">Always available when you need us</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Enterprise Experience</p>
                    <p className="text-sm text-gray-600 mt-1">Fortune 500 + YC Company Experience</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="h-5 w-5 text-sky-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Flexible Team Structure</p>
                    <p className="text-sm text-gray-600 mt-1">In-house + Extended Development</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Adaptable Delivery</p>
                    <p className="text-sm text-gray-600 mt-1">Flexible Delivery Models</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/vatsjay759/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-indigo-600 text-white font-semibold shadow-lg hover:bg-indigo-700 transition-colors"
              >
                Book a Consultation
              </a>
              <a
                href="https://wa.me/918875603044"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-white text-gray-900 border-2 border-gray-300 font-semibold shadow hover:bg-gray-50 transition-colors"
              >
                Connect on WhatsApp
              </a>
              <a
                href="/authapp"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-purple-600 text-white font-semibold shadow-lg hover:bg-purple-700 transition-colors"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthAppHero;
