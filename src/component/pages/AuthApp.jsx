import React from 'react';
import { FiShield, FiUsers, FiShuffle, FiDatabase, FiZap, FiLayers, FiFileText, FiCloud, FiServer, FiGitBranch, FiCheckCircle } from 'react-icons/fi';

const Section = ({ title, children, subtitle }) => (
  <section className="max-w-6xl mx-auto px-4 md:px-6 py-10">
    {title && (
      <header className="mb-4">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">{title}</h2>
        {subtitle && <p className="mt-2 text-gray-700 text-base md:text-lg">{subtitle}</p>}
      </header>
    )}
    {children}
  </section>
);

const Bullet = ({ icon: Icon, children }) => (
  <li className="flex items-start gap-3">
    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 border border-indigo-200">
      <Icon className="h-3.5 w-3.5" />
    </span>
    <span className="text-gray-800">{children}</span>
  </li>
);

const AuthAppPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero */}
      <section className="px-4 md:px-6 pt-14 pb-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Secure, Scalable, Real-Time Access Control for Modern Applications
          </h1>
          <p className="mt-4 text-gray-700 text-base md:text-lg">
            AuthApp™ brings continuous, Zanzibar-style Fine-Grained Authorization to your stack.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="https://wa.me/918875603044"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-gray-900 border border-gray-300 font-semibold shadow hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <Section title="What We Do">
        <div className="max-w-4xl mx-auto text-gray-800 leading-relaxed space-y-4">
          <p>
            AuthStream delivers <strong>custom Zanzibar-style Fine-Grained Authorization (FGA)</strong> models tailored to your application — plus real-time sync, low-latency checks, and compliance-ready governance.
          </p>
          <p>
            We <strong>design, migrate, and run</strong> your authorization layer so your team ships faster, scales safely, and passes audits without stress.
          </p>
        </div>
      </Section>

      {/* Key Capabilities */}
      <Section title="Key Capabilities">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ul className="space-y-4 text-sm">
            <Bullet icon={FiShield}><strong>Custom FGA Models</strong> — RBAC, ReBAC, ABAC, or hybrid, designed to your resource relationships.</Bullet>
            <Bullet icon={FiShuffle}><strong>RBAC → FGA Migration</strong> — automated mapping & conversion of legacy roles into entity-based tuples.</Bullet>
            <Bullet icon={FiDatabase}><strong>Continuous Data Sync (CDC)</strong> — stream changes from your DBs, event buses, or APIs directly into FGA.</Bullet>
          </ul>
          <ul className="space-y-4 text-sm">
            <Bullet icon={FiZap}><strong>Real-Time APIs</strong> — sub-10ms access checks via REST/gRPC or AWS Lambda functions.</Bullet>
            <Bullet icon={FiLayers}><strong>Dual-Run Migration</strong> — run legacy & new auth in parallel before cutover.</Bullet>
            <Bullet icon={FiFileText}><strong>Governance & Compliance</strong> — policy versioning, audit logs, SOC 2/HIPAA-ready exports.</Bullet>
          </ul>
        </div>
      </Section>

      {/* How It Works */}
      <Section title="How It Works">
        <ol className="list-decimal list-inside space-y-2 text-gray-800 max-w-3xl mx-auto">
          <li><strong>Discovery & Design</strong> — Map your resources, relationships, and access rules.</li>
          <li><strong>Model Build</strong> — Implement your custom FGA schema in OpenFGA-based engine.</li>
          <li><strong>Data Migration</strong> — Convert legacy permissions into tuples; validate with test suite.</li>
          <li><strong>Continuous Sync</strong> — CDC pipelines keep tuples up-to-date in real time.</li>
          <li><strong>API Integration</strong> — Replace or augment existing authorization calls.</li>
          <li><strong>Monitor & Govern</strong> — Dashboards, alerts, and compliance reports.</li>
        </ol>
      </Section>

      {/* Architecture */}
      <Section title="Architecture Overview">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 overflow-x-auto">
          <pre className="text-xs md:text-sm text-gray-800 leading-relaxed">
{`[Client Data Sources]  ──►  [CDC Layer: Debezium/Kafka/AWS DMS]
                                  │
                                  ▼
                          [AuthStream Tuple Store]
                                  │
       ┌───────────────  [OpenFGA Engine]  ───────────────┐
       │                                                  │
  [REST/gRPC API Layer]                          [Admin Console & Governance UI]
       │                                                  │
  <--- Check/List Calls ----------------------- Policy Mgmt / Audit Exports`}
          </pre>
        </div>
      </Section>

      {/* Deployment Options */}
      <Section title="Deployment Options">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="flex items-center gap-2 font-semibold text-gray-900 mb-2"><FiCloud /> SaaS (Multi-Tenant)</div>
            <p className="text-gray-700">Fully managed, SLA-backed, no infra to maintain.</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="flex items-center gap-2 font-semibold text-gray-900 mb-2"><FiServer /> Private Cloud</div>
            <p className="text-gray-700">Dedicated deployment in your AWS/GCP/Azure.</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="flex items-center gap-2 font-semibold text-gray-900 mb-2"><FiGitBranch /> Hybrid</div>
            <p className="text-gray-700">Managed control plane + self-hosted data plane.</p>
          </div>
        </div>
      </Section>

      {/* Pricing */}
      <Section title="Pricing">
        <div className="max-w-3xl mx-auto text-gray-800 space-y-4">
          <div>
            <h4 className="font-bold text-gray-900">Setup & Integration Fee</h4>
            <p>$15k–$50k (one-time, based on complexity)</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Monthly Subscription</h4>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Base</strong>: $1,000–$5,000/month for 1M checks</li>
              <li><strong>Overage</strong>: per 100k checks</li>
              <li><strong>Premium Add-ons</strong>: SLA, private cloud, extended audit retention, VPC peering</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Who Uses */}
      <Section title="Who Uses AuthStream">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm max-w-4xl mx-auto">
          <ul className="space-y-2">
            <Bullet icon={FiUsers}><strong>FinTech</strong> — Role & relationship controls for payments, lending, and compliance.</Bullet>
            <Bullet icon={FiCheckCircle}><strong>HealthTech</strong> — HIPAA-ready patient data access controls.</Bullet>
          </ul>
          <ul className="space-y-2">
            <Bullet icon={FiLayers}><strong>Marketplaces</strong> — Seller/buyer, multi-org, multi-role models.</Bullet>
            <Bullet icon={FiZap}><strong>AI Platforms</strong> — Guardrails for RAG/LLM document retrieval.</Bullet>
          </ul>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section title="Why Choose Us">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto text-sm">
          <li className="bg-white rounded-xl border border-gray-200 p-4"><strong>End-to-End Delivery</strong> — From design to live system.</li>
          <li className="bg-white rounded-xl border border-gray-200 p-4"><strong>Zero Downtime Migration</strong> — Dual-run cutover process.</li>
          <li className="bg-white rounded-xl border border-gray-200 p-4"><strong>Compliance First</strong> — SOC 2/HIPAA-ready from day one.</li>
          <li className="bg-white rounded-xl border border-gray-200 p-4"><strong>AI-Ready</strong> — Same engine protects AI data workflows.</li>
        </ul>
      </Section>

      {/* Contact */}
      <Section>
        <div className="text-center">
          <p className="text-gray-800">📩 <strong>Contact</strong>: <a className="text-indigo-700 hover:underline" href="mailto:ravisvats@gmail.com">ravisvats@gmail.com</a></p>
        </div>
      </Section>
    </main>
  );
};

export default AuthAppPage;