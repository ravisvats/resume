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
        <div className="relative px-8 py-14">
          <div className="text-center mb-8">
            <p className="inline-block uppercase tracking-wider text-sm md:text-base font-extrabold text-indigo-800 bg-indigo-100 border border-indigo-200 rounded-full px-4 py-1 shadow-sm">
              My Services
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mt-2">
              AuthApp™ — Continuous Fine-Grained Authorization as a Service
            </h2>
            <p className="text-base md:text-lg text-gray-700 mt-3">
              Secure, Scalable, Real-Time Access Control for Modern Applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-stretch">
            {/* Left Column: Features */}
            <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-indigo-100 shadow-sm h-full flex flex-col">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Features</h3>
              <ul className="space-y-4 text-sm">
                <Bullet icon={FiShield} accent="indigo">Custom Fine-Grained Authorization — ReBAC</Bullet>
                <Bullet icon={FiRefreshCw} accent="purple">Seamless Migration — move from legacy roles to modern FGA</Bullet>
                <Bullet icon={FiZap} accent="cyan">Real-Time — built to handle millions of requests</Bullet>
                <Bullet icon={FiCheckCircle} accent="emerald">Compliance Ready — audit logs, SOC 2 support</Bullet>
              </ul>
            </div>

            {/* Right Column: Advantages / Support */}
            <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-purple-100 shadow-sm h-full flex flex-col">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Advantages & Support</h3>
              <ul className="space-y-4 text-sm">
                <Bullet icon={FiHeadphones} accent="rose">24×7 Support</Bullet>
                <Bullet icon={FiUsers} accent="amber">Fortune 500 + YC Company Experience</Bullet>
                <Bullet icon={FiLayers} accent="sky">In-house + Extended Development</Bullet>
                <Bullet icon={FiSettings} accent="teal">Flexible Delivery Models</Bullet>
              </ul>
            </div>
          </div>

          <div className="mt-10 text-center flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/918875603044"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-gray-900 border border-gray-300 font-semibold shadow hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Book a Consultation
            </a>
            <a
              href="/authapp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-gray-900 border border-gray-300 font-semibold shadow hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthAppHero;