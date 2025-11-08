import React from 'react';
import { FiArrowRight, FiCheckCircle, FiShield, FiZap, FiTrendingUp, FiClock, FiTarget, FiCode, FiBarChart, FiGlobe, FiAward } from 'react-icons/fi';

const HowMigrationWorks = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">
            🔁 How Migration Works
          </h1>
          <p className="text-xl md:text-2xl text-indigo-100 max-w-4xl mx-auto text-center leading-relaxed">
            Seamless transition from legacy access control to modern, scalable authorization.
          </p>
          <p className="text-lg text-indigo-200 max-w-3xl mx-auto text-center mt-4">
            Most teams start with static roles or ACLs. Over time, they need something dynamic — contextual, auditable, and cloud-ready.
            <br />
            <span className="font-semibold text-white">AuthStream's migration process helps you modernize without breaking production — through a proven, low-risk, zero-downtime framework.</span>
          </p>
        </div>
      </section>

      {/* Migration Journey Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center">
            🚀 The Migration Journey — Step by Step
          </h2>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 border border-blue-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Discovery & Assessment
                  </h3>
                  <p className="text-lg text-gray-700 font-semibold mb-4">
                    Goal: Understand your current authorization landscape.
                  </p>
                  <p className="text-gray-700 mb-4">
                    We begin by mapping your current model — roles, groups, permissions, data flows, and enforcement points.
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Deliverables:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">System audit (code, APIs, databases)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Risk & dependency map</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Recommended target model (RBAC → ReBAC / ABAC / OPAL / OAuth)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Migration blueprint with timeline and resource plan</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border border-blue-200 flex items-center gap-4">
                <FiClock className="h-6 w-6 text-blue-600" />
                <div>
                  <span className="font-semibold text-gray-900">Duration: </span>
                  <span className="text-gray-700">1–2 weeks</span>
                </div>
                <div className="ml-auto">
                  <span className="font-semibold text-gray-900">Outcome: </span>
                  <span className="text-gray-700">You know exactly what to migrate, why, and how.</span>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12 border border-purple-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Model Design & Blueprinting
                  </h3>
                  <p className="text-lg text-gray-700 font-semibold mb-4">
                    Goal: Define the target authorization architecture.
                  </p>
                  <p className="text-gray-700 mb-4">
                    We co-design a future-proof model aligned with your data graph, org hierarchy, and compliance needs.
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Deliverables:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="h-6 w-6 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Authorization graph schema (e.g., OpenFGA tuples, OPA policies)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="h-6 w-6 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Policy-as-Code setup templates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="h-6 w-6 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Versioned configuration with change control</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="h-6 w-6 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Integration spec for services & SDKs</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border border-purple-200 flex items-center gap-4">
                <FiClock className="h-6 w-6 text-purple-600" />
                <div>
                  <span className="font-semibold text-gray-900">Duration: </span>
                  <span className="text-gray-700">1–3 weeks</span>
                </div>
                <div className="ml-auto">
                  <span className="font-semibold text-gray-900">Outcome: </span>
                  <span className="text-gray-700">A ready-to-implement model with validation rules and enforcement design.</span>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 md:p-12 border border-emerald-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Dual-Run Implementation
                  </h3>
                  <p className="text-lg text-gray-700 font-semibold mb-4">
                    Goal: Run old and new systems in parallel — safely.
                  </p>
                  <p className="text-gray-700 mb-4">
                    We deploy the new system behind feature flags and mirror all authorization decisions for comparison.
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Deliverables:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="h-6 w-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Dual-run environment (RBAC/ACL vs ReBAC decision parity tests)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="h-6 w-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Automated validation scripts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="h-6 w-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Performance baseline + rollback strategy</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border border-emerald-200 flex items-center gap-4">
                <FiClock className="h-6 w-6 text-emerald-600" />
                <div>
                  <span className="font-semibold text-gray-900">Duration: </span>
                  <span className="text-gray-700">2–4 weeks</span>
                </div>
                <div className="ml-auto">
                  <span className="font-semibold text-gray-900">Outcome: </span>
                  <span className="text-gray-700">Verified parity, no downtime, no regression in access behavior.</span>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12 border border-amber-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Cutover & Validation
                  </h3>
                  <p className="text-lg text-gray-700 font-semibold mb-4">
                    Goal: Switch live traffic with confidence.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Once parity reaches 99.9%+, we flip enforcement to the new model — with rollback safety built-in.
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Deliverables:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="h-6 w-6 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Production cutover with observability hooks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="h-6 w-6 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Post-migration test suite</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="h-6 w-6 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Regression & rollback plan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="h-6 w-6 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Audit report for compliance trail</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border border-amber-200 flex items-center gap-4">
                <FiClock className="h-6 w-6 text-amber-600" />
                <div>
                  <span className="font-semibold text-gray-900">Duration: </span>
                  <span className="text-gray-700">1–2 weeks</span>
                </div>
                <div className="ml-auto">
                  <span className="font-semibold text-gray-900">Outcome: </span>
                  <span className="text-gray-700">Live on the new model — stable, compliant, and measurable.</span>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-cyan-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-white">5</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Continuous Monitoring & Optimization
                  </h3>
                  <p className="text-lg text-gray-700 font-semibold mb-4">
                    Goal: Keep authorization performant, compliant, and evolving.
                  </p>
                  <p className="text-gray-700 mb-4">
                    We monitor decision latency, policy drift, and access anomalies with ongoing insights.
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Deliverables:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="h-6 w-6 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Policy analytics & version tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="h-6 w-6 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Compliance exports (SOC2/HIPAA-ready)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="h-6 w-6 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Quarterly performance and security reviews</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border border-cyan-200 flex items-center gap-4">
                <FiClock className="h-6 w-6 text-cyan-600" />
                <div>
                  <span className="font-semibold text-gray-900">Duration: </span>
                  <span className="text-gray-700">Ongoing (retainer optional)</span>
                </div>
                <div className="ml-auto">
                  <span className="font-semibold text-gray-900">Outcome: </span>
                  <span className="text-gray-700">Authorization that scales with your org and product roadmap.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Blueprint Table */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center">
            ⚡ Migration Blueprint Example
          </h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Phase</th>
                    <th className="px-6 py-4 text-left font-bold">Duration</th>
                    <th className="px-6 py-4 text-left font-bold">Key Deliverables</th>
                    <th className="px-6 py-4 text-left font-bold">Ownership</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">Discovery</td>
                    <td className="px-6 py-4 text-gray-700">1–2 weeks</td>
                    <td className="px-6 py-4 text-gray-700">Audit + Blueprint</td>
                    <td className="px-6 py-4 text-gray-700">AuthStream + Client</td>
                  </tr>
                  <tr className="hover:bg-purple-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">Design</td>
                    <td className="px-6 py-4 text-gray-700">1–3 weeks</td>
                    <td className="px-6 py-4 text-gray-700">Model & Policy Setup</td>
                    <td className="px-6 py-4 text-gray-700">AuthStream</td>
                  </tr>
                  <tr className="hover:bg-emerald-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">Dual-Run</td>
                    <td className="px-6 py-4 text-gray-700">2–4 weeks</td>
                    <td className="px-6 py-4 text-gray-700">Validation + CDC</td>
                    <td className="px-6 py-4 text-gray-700">AuthStream</td>
                  </tr>
                  <tr className="hover:bg-amber-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">Cutover</td>
                    <td className="px-6 py-4 text-gray-700">1–2 weeks</td>
                    <td className="px-6 py-4 text-gray-700">Go-Live + QA</td>
                    <td className="px-6 py-4 text-gray-700">AuthStream + Client</td>
                  </tr>
                  <tr className="hover:bg-cyan-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">Monitoring</td>
                    <td className="px-6 py-4 text-gray-700">Ongoing</td>
                    <td className="px-6 py-4 text-gray-700">Reports + Optimization</td>
                    <td className="px-6 py-4 text-gray-700">AuthStream</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center">
            🧩 Supported Platforms & Models
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8 max-w-3xl mx-auto">
            We migrate any authorization model, including:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200">
              <h3 className="font-bold text-gray-900 mb-4">Migration Paths:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <FiArrowRight className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">RBAC → ReBAC (OpenFGA, AuthZed, Zanzibar-style)</span>
                </li>
                <li className="flex items-start gap-2">
                  <FiArrowRight className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">RBAC → ABAC (OPA/Rego policies)</span>
                </li>
                <li className="flex items-start gap-2">
                  <FiArrowRight className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Static ACL → Policy-as-Code (OPAL / Oso / AWS IAM)</span>
                </li>
                <li className="flex items-start gap-2">
                  <FiArrowRight className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Legacy Monolith → Microservice-native Authorization</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
              <h3 className="font-bold text-gray-900 mb-4">Supported Integrations:</h3>
              <div className="flex flex-wrap gap-3">
                {['OpenFGA', 'OPA', 'OPAL', 'Oso', 'AWS IAM', 'Auth0', 'Okta', 'Keycloak'].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-emerald-200 text-sm font-semibold text-emerald-700">
                    <FiCheckCircle className="h-4 w-4" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zero-Downtime Assurance */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center">
            🔒 Zero-Downtime Assurance
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            We follow a 3-layer safety approach:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 border border-indigo-200 shadow-md">
              <FiShield className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-3">Dual-Run Testing</h3>
              <p className="text-gray-700 text-sm">Every authorization decision is mirrored before switching live.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-indigo-200 shadow-md">
              <FiZap className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-3">Rollbacks on Demand</h3>
              <p className="text-gray-700 text-sm">One-click reversion to legacy mode.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-indigo-200 shadow-md">
              <FiBarChart className="h-8 w-8 text-pink-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-3">Continuous Observability</h3>
              <p className="text-gray-700 text-sm">Real-time dashboards for decision parity and latency.</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 border-indigo-300 text-center">
            <p className="text-lg font-semibold text-gray-900">
              💡 Result: You migrate faster, safer, and with full confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Real-World Outcomes */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center">
            💬 Real-World Outcomes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200 text-center">
              <FiTrendingUp className="h-10 w-10 text-emerald-600 mx-auto mb-4" />
              <p className="text-3xl font-bold text-emerald-700 mb-2">95%</p>
              <p className="text-sm text-gray-700">reduction in authorization maintenance overhead</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200 text-center">
              <FiAward className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <p className="text-3xl font-bold text-blue-700 mb-2">99.9%</p>
              <p className="text-sm text-gray-700">decision parity verified during cutover</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200 text-center">
              <FiShield className="h-10 w-10 text-purple-600 mx-auto mb-4" />
              <p className="text-3xl font-bold text-purple-700 mb-2">Zero</p>
              <p className="text-sm text-gray-700">incidents during live switch for enterprise clients</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200 text-center">
              <FiZap className="h-10 w-10 text-amber-600 mx-auto mb-4" />
              <p className="text-3xl font-bold text-amber-700 mb-2">2×</p>
              <p className="text-sm text-gray-700">faster onboarding of new microservices after migration</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            📞 Ready to Modernize?
          </h2>
          <p className="text-xl md:text-2xl text-indigo-100 mb-8 leading-relaxed">
            Whether you're moving from static RBAC or legacy ACLs, we'll design the shortest, safest path to scalable authorization.
          </p>
          <div className="bg-white/10 rounded-xl p-6 mb-8 backdrop-blur-sm">
            <p className="text-lg font-semibold mb-4">👉 Book a Migration Assessment</p>
            <p className="text-indigo-100">Get a free 30-minute discovery session with our architects.</p>
          </div>
          <a
            href="https://calendly.com/vatsjay759/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-indigo-600 font-semibold shadow-lg hover:bg-indigo-50 transition-colors text-lg"
          >
            Book a Migration Assessment
            <FiArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default HowMigrationWorks;

