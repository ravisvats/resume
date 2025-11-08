import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheckCircle, FiArrowRight, FiShield, FiZap, FiTrendingUp, FiUsers, FiClock, FiAward, FiGlobe, FiBarChart } from 'react-icons/fi';

const ServicePackages = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">
            AuthStream — Service Plans
          </h1>
          <p className="text-xl md:text-2xl text-indigo-100 max-w-4xl mx-auto text-center leading-relaxed">
            Flexible authorization services for every stage — from design to day-to-day operations.
            <br />
            <span className="font-semibold text-white">Pick a plan, then choose optional add-ons or a dedicated offshore pod to match scale and compliance needs.</span>
          </p>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <p className="text-lg md:text-xl text-gray-700 text-center max-w-4xl mx-auto">
            <span className="font-semibold text-indigo-600">Foundation</span> → <span className="font-semibold text-blue-600">Scale</span> → <span className="font-semibold text-purple-600">Enterprise</span> → <span className="font-semibold text-gray-800">Offshore Partnership</span> — choose fast assessment, a project migration, ongoing managed ops, or a dedicated offshore team.
          </p>
        </div>
      </section>

      {/* Service Plans */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center">
            Plans at a Glance
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Foundation Plan */}
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 border-2 border-emerald-300 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-4 h-4 bg-emerald-500 rounded-full"></div>
                <h3 className="text-2xl font-bold text-gray-900">Foundation</h3>
              </div>
              <p className="text-sm font-semibold text-emerald-700 mb-4">Get Started</p>
              
              <div className="mb-6">
                <p className="text-sm text-gray-700 mb-4">
                  <span className="font-semibold">Who:</span> Startups and teams building their first production-grade access layer.
                </p>
                
                <h4 className="font-bold text-gray-900 mb-3 text-sm">Includes (fixed scope):</h4>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <FiCheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>2-week Discovery & Authorization Blueprint</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <FiCheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Policy-as-Code baseline (RBAC or ABAC)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <FiCheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>REST/gRPC SDK integrations for 1 service</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <FiCheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Basic audit logging + acceptance tests</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 mb-4 border border-emerald-200">
                <div className="flex items-center gap-2 mb-2">
                  <FiClock className="h-5 w-5 text-emerald-600" />
                  <span className="font-semibold text-gray-900 text-sm">Delivery:</span>
                </div>
                <p className="text-sm text-gray-700">2–4 weeks + 1 month onboarding support</p>
              </div>

              <div className="bg-white rounded-lg p-4 mb-4 border border-emerald-200">
                <div className="flex items-center gap-2 mb-2">
                  <FiTrendingUp className="h-5 w-5 text-emerald-600" />
                  <span className="font-semibold text-gray-900 text-sm">Price:</span>
                </div>
                <p className="text-lg font-bold text-emerald-700">$9,000 – $15,000</p>
                <p className="text-xs text-gray-600">(fixed)</p>
              </div>

              <div className="bg-emerald-100 rounded-lg p-3 border border-emerald-200">
                <p className="text-xs font-semibold text-emerald-900">Why pick:</p>
                <p className="text-xs text-emerald-800">Fast, low-risk path to a secure baseline authorization system.</p>
              </div>
            </div>

            {/* Scale Plan */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border-2 border-blue-300 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <h3 className="text-2xl font-bold text-gray-900">Scale</h3>
              </div>
              <p className="text-sm font-semibold text-blue-700 mb-4">Migrate & Modernize</p>
              
              <div className="mb-6">
                <p className="text-sm text-gray-700 mb-4">
                  <span className="font-semibold">Who:</span> Product teams replacing legacy RBAC/ACLs or adopting fine-grained models.
                </p>
                
                <h4 className="font-bold text-gray-900 mb-3 text-sm">Includes (project):</h4>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <FiCheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Full model implementation (RBAC, ABAC, ReBAC, OPAL, or OAuth)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <FiCheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Automated role→tuple mapping + dual-run validation</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <FiCheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>CDC connectors + SDKs for 2–4 services</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <FiCheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Performance tuning + 30–60 days hypercare</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 mb-4 border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <FiClock className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold text-gray-900 text-sm">Delivery:</span>
                </div>
                <p className="text-sm text-gray-700">6–12+ weeks (scope-dependent)</p>
              </div>

              <div className="bg-white rounded-lg p-4 mb-4 border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <FiTrendingUp className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold text-gray-900 text-sm">Price:</span>
                </div>
                <p className="text-lg font-bold text-blue-700">$28,000 – $120,000</p>
                <p className="text-xs text-gray-600">(project, small → mid → complex)</p>
              </div>

              <div className="bg-blue-100 rounded-lg p-3 border border-blue-200">
                <p className="text-xs font-semibold text-blue-900">Why pick:</p>
                <p className="text-xs text-blue-800">Verified, zero-downtime modernization with audit-ready validation.</p>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-300 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                <h3 className="text-2xl font-bold text-gray-900">Enterprise</h3>
              </div>
              <p className="text-sm font-semibold text-purple-700 mb-4">Operate & Govern</p>
              
              <div className="mb-6">
                <p className="text-sm text-gray-700 mb-4">
                  <span className="font-semibold">Who:</span> Regulated orgs and large platforms needing SLA-backed ops and compliance evidence.
                </p>
                
                <h4 className="font-bold text-gray-900 mb-3 text-sm">Includes (retainer):</h4>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <FiCheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>24×5 or 24×7 operations and on-call support</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <FiCheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Policy versioning + immutable audit logs</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <FiCheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Compliance reports (SOC2/HIPAA-ready)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <FiCheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Performance & security tuning + quarterly reviews</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 mb-4 border border-purple-200">
                <div className="flex items-center gap-2 mb-2">
                  <FiClock className="h-5 w-5 text-purple-600" />
                  <span className="font-semibold text-gray-900 text-sm">Delivery:</span>
                </div>
                <p className="text-sm text-gray-700">Ongoing; onboarding sprint + continuous ops</p>
              </div>

              <div className="bg-white rounded-lg p-4 mb-4 border border-purple-200">
                <div className="flex items-center gap-2 mb-2">
                  <FiTrendingUp className="h-5 w-5 text-purple-600" />
                  <span className="font-semibold text-gray-900 text-sm">Price:</span>
                </div>
                <p className="text-lg font-bold text-purple-700">$9,000 – $45,000 / month</p>
                <p className="text-xs text-gray-600">(tiered Bronze→Silver→Gold)</p>
              </div>

              <div className="bg-purple-100 rounded-lg p-3 border border-purple-200">
                <p className="text-xs font-semibold text-purple-900">Why pick:</p>
                <p className="text-xs text-purple-800">Full operational ownership and audit-level evidence for regulators and auditors.</p>
              </div>
            </div>

            {/* Offshore Partnership Plan */}
            <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-6 border-2 border-gray-400 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
                <h3 className="text-2xl font-bold text-gray-900">Offshore Partnership</h3>
              </div>
              <p className="text-sm font-semibold text-gray-700 mb-4">Dedicated Pod</p>
              
              <div className="mb-6">
                <p className="text-sm text-gray-700 mb-4">
                  <span className="font-semibold">Who:</span> Teams that want a long-term embedded engineering pod for ongoing product work.
                </p>
                
                <h4 className="font-bold text-gray-900 mb-3 text-sm">Includes:</h4>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <FiCheckCircle className="h-4 w-4 text-gray-700 mt-0.5 flex-shrink-0" />
                    <span>Dedicated team (Architect + Engineers + SRE + DM)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <FiCheckCircle className="h-4 w-4 text-gray-700 mt-0.5 flex-shrink-0" />
                    <span>Roadmap alignment + multi-product support</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <FiCheckCircle className="h-4 w-4 text-gray-700 mt-0.5 flex-shrink-0" />
                    <span>Hands-on implementation & ops</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <FiCheckCircle className="h-4 w-4 text-gray-700 mt-0.5 flex-shrink-0" />
                    <span>Follow-the-sun coverage</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 mb-4 border border-gray-300">
                <div className="flex items-center gap-2 mb-2">
                  <FiClock className="h-5 w-5 text-gray-700" />
                  <span className="font-semibold text-gray-900 text-sm">Delivery:</span>
                </div>
                <p className="text-sm text-gray-700">Ongoing; continuous delivery</p>
              </div>

              <div className="bg-white rounded-lg p-4 mb-4 border border-gray-300">
                <div className="flex items-center gap-2 mb-2">
                  <FiTrendingUp className="h-5 w-5 text-gray-700" />
                  <span className="font-semibold text-gray-900 text-sm">Price:</span>
                </div>
                <p className="text-lg font-bold text-gray-800">$12,000 – $40,000 / month</p>
                <p className="text-xs text-gray-600">(based on team size & seniority)</p>
              </div>

              <div className="bg-gray-100 rounded-lg p-3 border border-gray-300">
                <p className="text-xs font-semibold text-gray-900">Why pick:</p>
                <p className="text-xs text-gray-800">Lower TCO vs hiring onshore; continuous delivery, predictable velocity, follow-the-sun coverage.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Buying Guidance */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center">
            Simple Buying Guidance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200">
              <FiTrendingUp className="h-8 w-8 text-emerald-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-3">Small Proof → Scale</h3>
              <p className="text-gray-700 text-sm">Start with <span className="font-semibold">Foundation</span> + add <span className="font-semibold">Scale</span> migration for critical services.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
              <FiShield className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-3">Compliance-First</h3>
              <p className="text-gray-700 text-sm">Choose <span className="font-semibold">Enterprise</span> or <span className="font-semibold">Offshore Partnership</span> if SOC2/HIPAA/regulatory posture matters.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
              <FiBarChart className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-3">Cost Control</h3>
              <p className="text-gray-700 text-sm">Offer fixed-fee migrations for well-scoped workloads; use T&M with not-to-exceed for unknowns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SLA & Acceptance */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center">
            SLA & Acceptance
          </h2>
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <FiZap className="h-8 w-8 text-indigo-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-3">Performance Targets</h3>
                <p className="text-gray-700 text-sm">P99 latency target published per plan and availability SLAs on Enterprise/Gold.</p>
              </div>
              <div>
                <FiCheckCircle className="h-8 w-8 text-emerald-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-3">Migration Acceptance</h3>
                <p className="text-gray-700 text-sm">Based on decision-parity metric (e.g., ≥99.9% parity during dual-run) and test-suite pass rate.</p>
              </div>
              <div>
                <FiAward className="h-8 w-8 text-purple-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-3">Clear SOW</h3>
                <p className="text-gray-700 text-sm">Acceptance criteria, and security & data handling clauses for every engagement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Not Sure Which Plan Fits?
          </h2>
          <p className="text-xl md:text-2xl text-indigo-100 mb-8 leading-relaxed">
            Book a 30-minute discovery call — we'll recommend a tailored plan and a clear quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/vatsjay759/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg !bg-white text-indigo-600 font-semibold shadow-lg hover:bg-indigo-50 transition-colors text-lg"
            >
              Book a Free Assessment
              <FiArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="https://calendly.com/vatsjay759/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-indigo-700 !text-white border-2 border-white font-semibold shadow-lg hover:bg-indigo-800 transition-colors text-lg"
            >
              Request a Quote
              <FiArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePackages;

