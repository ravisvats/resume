import React from 'react';
import { Link } from 'react-router-dom';
import { FiShield, FiZap, FiRefreshCw, FiCheckCircle, FiUsers, FiLayers, FiSettings, FiGlobe, FiArrowRight, FiCode, FiLock, FiTrendingUp, FiAward, FiClock, FiBarChart } from 'react-icons/fi';

const OurServices = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">
            End-to-End Authorization Services — Designed, Delivered, and Managed for You.
          </h1>
          <p className="text-xl md:text-2xl text-indigo-100 max-w-4xl mx-auto text-center leading-relaxed">
            Whether you're building a SaaS platform, migrating to microservices, or preparing for your next compliance audit — AuthStream helps you design, implement, and operate a secure, scalable, and audit-ready authorization layer.
            <br className="hidden md:block" />
            <span className="font-semibold text-white"> We combine deep domain expertise with offshore delivery excellence to give you predictable outcomes and measurable ROI.</span>
          </p>
        </div>
      </section>

      {/* Core Service Pillars */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              🧩 Our Core Service Pillars
            </h2>
          </div>

          <div className="space-y-16">
            {/* Pillar 1: Advisory & Architecture Design */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 border border-blue-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FiLayers className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    1. Advisory & Architecture Design
                  </h3>
                  <p className="text-lg text-gray-700 font-semibold">
                    Get your authorization foundation right before you build.
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">What We Do:</h4>
                <p className="text-gray-700 leading-relaxed">
                  Our architects partner with your engineering and security teams to assess your current access control mechanisms, identify compliance gaps, and design a model that fits your data and scaling needs — not force one on you.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Deliverables:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Current-state audit of authorization, IAM, and policy controls</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Risk and compliance gap analysis (SOC 2, HIPAA, GDPR readiness)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Model recommendation: RBAC | ABAC | ReBAC | Hybrid</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Resource graph and access pattern mapping</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">High-level migration roadmap and TCO report</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 border border-blue-200">
                <p className="font-semibold text-gray-900 mb-2">Outcome:</p>
                <p className="text-gray-700">A clear, validated blueprint that aligns security, compliance, and engineering — with zero vendor lock-in.</p>
                <p className="font-semibold text-gray-900 mt-4 mb-2">Ideal For:</p>
                <p className="text-gray-700">Startups designing new systems or enterprises looking to refactor monolith authorization layers.</p>
              </div>
            </div>

            {/* Pillar 2: Implementation & Migration */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 md:p-12 border border-emerald-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FiRefreshCw className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    2. Implementation & Migration
                  </h3>
                  <p className="text-lg text-gray-700 font-semibold">
                    From RBAC to ReBAC, ABAC, OPAL, or OAuth — choose the model that fits your architecture.
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">What We Do:</h4>
                <p className="text-gray-700 leading-relaxed">
                  We implement the authorization model that best aligns with your product's data, scale, and compliance goals — whether you're evolving an existing system or starting fresh. Our experts handle end-to-end design, migration, and rollout using open standards and proven frameworks.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Authorization Models We Support:</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-5 border border-emerald-200 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h5 className="font-bold text-gray-900 mb-2">
                          <Link to="/rbac" className="text-emerald-700 hover:text-emerald-800 hover:underline">
                            RBAC (Role-Based Access Control)
                          </Link>
                        </h5>
                        <p className="text-gray-700 text-sm">Simple, role-driven permissions for fast setup and ease of management.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-5 border border-emerald-200 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h5 className="font-bold text-gray-900 mb-2">
                          <Link to="/abac" className="text-emerald-700 hover:text-emerald-800 hover:underline">
                            ABAC (Attribute-Based Access Control)
                          </Link>
                        </h5>
                        <p className="text-gray-700 text-sm">Fine-grained policies based on user, resource, and environmental attributes for high flexibility.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-5 border border-emerald-200 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h5 className="font-bold text-gray-900 mb-2">
                          <Link to="/rebac" className="text-emerald-700 hover:text-emerald-800 hover:underline">
                            ReBAC (Relationship-Based Access Control)
                          </Link>
                        </h5>
                        <p className="text-gray-700 text-sm">Contextual access using resource relationships, ideal for modern, multi-tenant, or social graph systems.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-5 border border-emerald-200 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h5 className="font-bold text-gray-900 mb-2">
                          OPAL (Open Policy Administration Layer)
                        </h5>
                        <p className="text-gray-700 text-sm">Policy distribution and real-time decision updates for large-scale, distributed environments.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-5 border border-emerald-200 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h5 className="font-bold text-gray-900 mb-2">
                          OAuth / OIDC (Delegated Authorization)
                        </h5>
                        <p className="text-gray-700 text-sm">Secure third-party access management and API authorization built on open web standards.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Capabilities:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="h-6 w-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Policy-as-Code setup with version control and CI/CD integration</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="h-6 w-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Role/permission refactoring and fine-grained mapping</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="h-6 w-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Automated migration from legacy ACL or monolithic RBAC</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="h-6 w-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Dual-run validation (legacy + new system) before cutover</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="h-6 w-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">CDC/event-based pipelines for real-time sync</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="h-6 w-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Low-latency enforcement via REST/gRPC APIs or sidecar pattern</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="h-6 w-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Integration with OpenFGA, OPA, AWS IAM, or custom policy engines</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-emerald-200">
                <p className="font-semibold text-gray-900 mb-2">Deliverables:</p>
                <p className="text-gray-700 mb-4">Migration playbooks, policy templates, CI/CD-ready configs, SDK integrations, and production-grade authorization endpoints.</p>
                <p className="font-semibold text-gray-900 mb-2">Outcome:</p>
                <p className="text-gray-700">A flexible, model-agnostic authorization system built for your needs — supporting compliance, scalability, and real-time enforcement with zero downtime during transition.</p>
              </div>
            </div>

            {/* Pillar 3: Managed Authorization Operations */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12 border border-amber-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FiSettings className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    3. Managed Authorization Operations
                  </h3>
                  <p className="text-lg text-gray-700 font-semibold">
                    We run your authorization, you focus on your product.
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">What We Do:</h4>
                <p className="text-gray-700 leading-relaxed">
                  Our managed service provides ongoing operational support, monitoring, compliance reporting, and incident management for your authorization layer.
                  You choose the level of ownership — from co-managed to fully outsourced.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Capabilities:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="h-6 w-6 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">24×7 monitoring and SLA-backed operations</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="h-6 w-6 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Policy versioning, rollback, and approval workflows</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="h-6 w-6 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Immutable audit logging and exportable evidence packs</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="h-6 w-6 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Automated access reviews and certification workflows</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="h-6 w-6 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Monthly compliance health reports (SOC 2/HIPAA)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="h-6 w-6 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Performance optimization and policy tuning</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-amber-200 mb-4">
                <p className="font-semibold text-gray-900 mb-2">Outcome:</p>
                <p className="text-gray-700">Guaranteed uptime, audit-ready reporting, and a continuously optimized access control environment.</p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-amber-200">
                <p className="font-semibold text-gray-900 mb-3">Available Engagement Models:</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <FiUsers className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Co-Managed:</p>
                      <p className="text-gray-700">Your team owns logic; AuthStream maintains operations.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiSettings className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Fully-Managed:</p>
                      <p className="text-gray-700">We operate end-to-end authorization under SLA.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center">
            🛠️ Add-On Services
          </h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Category</th>
                    <th className="px-6 py-4 text-left font-bold">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-indigo-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">Integration Engineering</td>
                    <td className="px-6 py-4 text-gray-700">Custom SDKs, middleware, and policy sidecars for your stack (Python, Node, Go, Java).</td>
                  </tr>
                  <tr className="hover:bg-indigo-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">DevSecOps Enablement</td>
                    <td className="px-6 py-4 text-gray-700">Embed authorization checks into CI/CD pipelines and automate policy testing.</td>
                  </tr>
                  <tr className="hover:bg-indigo-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">Compliance Automation</td>
                    <td className="px-6 py-4 text-gray-700">Periodic access review workflows, SoD (Segregation of Duties) reports, and auditor dashboards.</td>
                  </tr>
                  <tr className="hover:bg-indigo-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">Performance Tuning</td>
                    <td className="px-6 py-4 text-gray-700">Caching strategies, PDP/PEP optimization, latency tracing, and load testing.</td>
                  </tr>
                  <tr className="hover:bg-indigo-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">On-Prem / VPC Deployment</td>
                    <td className="px-6 py-4 text-gray-700">Dedicated environments for regulated sectors (finance, healthcare, government).</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Offshore Delivery Model */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              🌍 Offshore Delivery Model
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-skill. High-trust. Cost-efficient.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12 border border-purple-100">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We operate dedicated offshore authorization pods — small, expert teams that act as an extension of your engineering org.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-6">Each pod includes:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 border border-purple-200">
                <div className="flex items-center gap-3 mb-3">
                  <FiUsers className="h-6 w-6 text-purple-600" />
                  <h4 className="font-bold text-gray-900">Solution Architect</h4>
                </div>
                <p className="text-gray-700 text-sm">Design + Compliance</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-purple-200">
                <div className="flex items-center gap-3 mb-3">
                  <FiCode className="h-6 w-6 text-purple-600" />
                  <h4 className="font-bold text-gray-900">Backend / Policy Engineer</h4>
                </div>
                <p className="text-gray-700 text-sm">Implementation</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-purple-200">
                <div className="flex items-center gap-3 mb-3">
                  <FiZap className="h-6 w-6 text-purple-600" />
                  <h4 className="font-bold text-gray-900">DevOps / SRE Specialist</h4>
                </div>
                <p className="text-gray-700 text-sm">Operations</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-purple-200">
                <div className="flex items-center gap-3 mb-3">
                  <FiBarChart className="h-6 w-6 text-purple-600" />
                  <h4 className="font-bold text-gray-900">Delivery Manager</h4>
                </div>
                <p className="text-gray-700 text-sm">Governance & SLA adherence</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Benefits:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <FiCheckCircle className="h-6 w-6 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Lower TCO than hiring in-house security engineers</span>
              </div>
              <div className="flex items-start gap-3">
                <FiCheckCircle className="h-6 w-6 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">24×7 availability with follow-the-sun model</span>
              </div>
              <div className="flex items-start gap-3">
                <FiCheckCircle className="h-6 w-6 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Consistent knowledge retention and faster delivery cycles</span>
              </div>
              <div className="flex items-start gap-3">
                <FiCheckCircle className="h-6 w-6 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">ISO 27001-ready processes for data protection</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Options */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center">
            📈 Engagement Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-8 border-2 border-indigo-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <FiClock className="h-8 w-8 text-indigo-600" />
                <h3 className="text-xl font-bold text-gray-900">Assessment Sprint</h3>
              </div>
              <div className="space-y-2 mb-6">
                <p className="text-sm font-semibold text-indigo-600">Duration: 2–4 weeks</p>
                <p className="text-sm font-semibold text-indigo-600">Focus: Audit + Blueprint</p>
              </div>
              <p className="text-gray-700">Ideal For: Early-stage or discovery phase</p>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-emerald-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <FiZap className="h-8 w-8 text-emerald-600" />
                <h3 className="text-xl font-bold text-gray-900">Implementation Project</h3>
              </div>
              <div className="space-y-2 mb-6">
                <p className="text-sm font-semibold text-emerald-600">Duration: 4–12 weeks</p>
                <p className="text-sm font-semibold text-emerald-600">Focus: Model + Migration</p>
              </div>
              <p className="text-gray-700">Ideal For: Teams modernizing existing auth</p>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-amber-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <FiTrendingUp className="h-8 w-8 text-amber-600" />
                <h3 className="text-xl font-bold text-gray-900">Managed Service Retainer</h3>
              </div>
              <div className="space-y-2 mb-6">
                <p className="text-sm font-semibold text-amber-600">Duration: Ongoing</p>
                <p className="text-sm font-semibold text-amber-600">Focus: Ops + Compliance</p>
              </div>
              <p className="text-gray-700">Ideal For: Enterprises seeking stability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Customers Choose AuthStream */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center">
            🔒 Why Customers Choose AuthStream
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-100">
              <FiShield className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Model-Neutral Expertise</h3>
              <p className="text-gray-700 text-sm">RBAC, ABAC, ReBAC, or hybrid — we implement what fits your product, not ours.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
              <FiAward className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Audit-Grade Engineering</h3>
              <p className="text-gray-700 text-sm">Every change versioned, reviewed, and logged.</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100">
              <FiTrendingUp className="h-8 w-8 text-emerald-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Scalable Delivery</h3>
              <p className="text-gray-700 text-sm">Offshore pods ramp up or down with your release cycles.</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-100">
              <FiGlobe className="h-8 w-8 text-cyan-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Open Standards</h3>
              <p className="text-gray-700 text-sm">We use open-source foundations; no vendor lock-in.</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-100">
              <FiBarChart className="h-8 w-8 text-amber-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Measurable ROI</h3>
              <p className="text-gray-700 text-sm">Faster delivery, fewer privilege tickets, stronger compliance posture.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            🚀 Ready to Simplify Your Authorization?
          </h2>
          <p className="text-xl md:text-2xl text-indigo-100 mb-8 leading-relaxed">
            Offload complexity. Stay compliant.
            <br />
            Let our experts design, migrate, and manage your authorization — end to end.
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
              Talk to Our Solution Architect
              <FiArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurServices;

