import React from 'react';
import { Link } from 'react-router-dom';

const Project3 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <Link to="/projects" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2 text-sm sm:text-base">
              ← Back to Projects
            </Link>
            <Link to="/" className="px-3 sm:px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm sm:text-base">
              Home
            </Link>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Project Header */}
        <header className="mb-8 sm:mb-12">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
            <span className="bg-blue-100 text-blue-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">Identity Management</span>
            <span className="bg-green-100 text-green-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">Enterprise</span>
            <span className="bg-purple-100 text-purple-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">Platform</span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
            AuthPilot – Identity & Access Management
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
            A comprehensive Identity and Access Management (IAM) platform that provides Single Sign-On (SSO), 
            SCIM provisioning, and Fine-Grained Authorization via REST APIs and event-driven architecture.
          </p>
          
          <img 
            src="/images/authpilot2.png" 
            alt="AuthPilot Platform Dashboard" 
            className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-xl shadow-lg"
          />
        </header>

        {/* Project Details */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6">Platform Overview</h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">
            AuthPilot is an enterprise-grade Identity and Access Management platform designed for modern organizations. 
            It combines the power of Single Sign-On, automated user provisioning, and fine-grained authorization 
            in a developer-friendly package that scales from startups to Fortune 500 companies.
          </p>
          
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6">Core Platform Features</h2>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-3">🔑 Single Sign-On (SSO)</h4>
              <p className="text-blue-800 text-sm">
                SAML 2.0 and OIDC support with 100+ pre-built connectors for popular SaaS applications.
              </p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-semibold text-green-900 mb-3">👥 SCIM Provisioning</h4>
              <p className="text-green-800 text-sm">
                Automated user lifecycle management with real-time synchronization across systems.
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <h4 className="font-semibold text-purple-900 mb-3">🛡️ Fine-Grained Authorization</h4>
              <p className="text-purple-800 text-sm">
                Relationship-based access control with contextual permissions and policy engines.
              </p>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-6">
              <h4 className="font-semibold text-orange-900 mb-3">🚀 Developer APIs</h4>
              <p className="text-orange-800 text-sm">
                RESTful APIs, GraphQL endpoints, and SDKs for seamless integration.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Technical Architecture</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Microservices Architecture</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            AuthPilot is built on a cloud-native microservices architecture that ensures high availability, 
            scalability, and maintainability. Each service is independently deployable and scalable.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">Core Services:</h4>
            <ul className="text-gray-700 space-y-2">
              <li><strong>Identity Service:</strong> User management, authentication, and profile data</li>
              <li><strong>SSO Service:</strong> SAML/OIDC protocol handling and application integration</li>
              <li><strong>Authorization Service:</strong> Permission checks and policy evaluation</li>
              <li><strong>Provisioning Service:</strong> SCIM-based user lifecycle automation</li>
              <li><strong>Audit Service:</strong> Comprehensive logging and compliance reporting</li>
              <li><strong>Notification Service:</strong> Event-driven alerts and communications</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Event-Driven Architecture</h3>
          
          <div className="bg-gray-900 text-green-400 rounded-lg p-6 mb-6 text-sm">
            <pre>{`// Event Flow Example
{
  "event_type": "user.created",
  "timestamp": "2024-01-15T10:30:00Z",
  "tenant_id": "tenant_123",
  "data": {
    "user_id": "user_456",
    "email": "john.doe@company.com",
    "attributes": {
      "department": "Engineering",
      "role": "Senior Developer"
    }
  },
  "triggers": [
    "scim.provision_downstream",
    "sso.create_accounts", 
    "authz.assign_default_roles",
    "notification.send_welcome"
  ]
}`}</pre>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Identity Management Features</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Comprehensive User Lifecycle</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            From onboarding to offboarding, AuthPilot manages the complete user journey with automated workflows, 
            approval processes, and integration with HR systems.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Onboarding</h4>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>Self-service registration</li>
                <li>Manager approval workflows</li>
                <li>Automated app provisioning</li>
                <li>Welcome email campaigns</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Lifecycle Management</h4>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>Role change automation</li>
                <li>Department transfers</li>
                <li>Access reviews</li>
                <li>Compliance reporting</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Offboarding</h4>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>Immediate access revocation</li>
                <li>Asset return tracking</li>
                <li>Data retention policies</li>
                <li>Exit interview automation</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Single Sign-On Implementation</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Protocol Support</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            AuthPilot supports industry-standard protocols with enterprise-grade security features 
            and extensive customization options.
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">SAML 2.0</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• SP and IdP initiated flows</li>
                  <li>• Encrypted assertions</li>
                  <li>• Custom attribute mapping</li>
                  <li>• Just-in-time provisioning</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">OIDC/OAuth2</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Authorization code flow</li>
                  <li>• PKCE support</li>
                  <li>• Custom scopes</li>
                  <li>• Refresh token rotation</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Application Integrations</h3>
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 mb-8">
            <h4 className="font-semibold text-gray-900 mb-3">100+ Pre-built Connectors</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700">
              <div>
                <strong>Productivity</strong>
                <ul className="mt-1 space-y-1">
                  <li>• Microsoft 365</li>
                  <li>• Google Workspace</li>
                  <li>• Slack</li>
                  <li>• Zoom</li>
                </ul>
              </div>
              <div>
                <strong>Development</strong>
                <ul className="mt-1 space-y-1">
                  <li>• GitHub</li>
                  <li>• GitLab</li>
                  <li>• Jira</li>
                  <li>• Confluence</li>
                </ul>
              </div>
              <div>
                <strong>Cloud Platforms</strong>
                <ul className="mt-1 space-y-1">
                  <li>• AWS</li>
                  <li>• Azure</li>
                  <li>• GCP</li>
                  <li>• Kubernetes</li>
                </ul>
              </div>
              <div>
                <strong>Business Apps</strong>
                <ul className="mt-1 space-y-1">
                  <li>• Salesforce</li>
                  <li>• ServiceNow</li>
                  <li>• Workday</li>
                  <li>• Tableau</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">SCIM Provisioning</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Automated User Management</h3>
          <div className="bg-gray-900 text-green-400 rounded-lg p-6 mb-6 text-sm">
            <pre>{`// SCIM User Provisioning Example
POST /scim/v2/Users
{
  "schemas": ["urn:ietf:params:scim:schemas:core:2.0:User"],
  "userName": "john.doe@company.com",
  "name": {
    "givenName": "John",
    "familyName": "Doe"
  },
  "emails": [
    {
      "value": "john.doe@company.com",
      "primary": true
    }
  ],
  "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": {
    "department": "Engineering",
    "manager": {
      "value": "manager123"
    }
  }
}`}</pre>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Provisioning Capabilities</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li><strong>Real-time Sync:</strong> Instant propagation of user changes across systems</li>
            <li><strong>Bulk Operations:</strong> Efficient handling of large user datasets</li>
            <li><strong>Conflict Resolution:</strong> Intelligent handling of data conflicts</li>
            <li><strong>Rollback Support:</strong> Automated rollback for failed operations</li>
            <li><strong>Custom Attributes:</strong> Support for organization-specific user fields</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6">Technology Stack</h2>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Backend Services</h4>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>Node.js (Express)</li>
                <li>Go (Microservices)</li>
                <li>PostgreSQL</li>
                <li>Redis</li>
                <li>Apache Kafka</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Frontend</h4>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>React.js</li>
                <li>TypeScript</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>Zustand</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Infrastructure</h4>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>Kubernetes</li>
                <li>Docker</li>
                <li>Terraform</li>
                <li>AWS/Azure</li>
                <li>Istio Service Mesh</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Enterprise Features</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-3">🏢 Multi-Tenancy</h4>
              <ul className="text-blue-800 text-sm space-y-2">
                <li>Isolated tenant environments</li>
                <li>Custom branding per tenant</li>
                <li>Tenant-specific policies</li>
                <li>Cross-tenant federation</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-semibold text-green-900 mb-3">📊 Analytics & Reporting</h4>
              <ul className="text-green-800 text-sm space-y-2">
                <li>Real-time dashboards</li>
                <li>Compliance reports</li>
                <li>Usage analytics</li>
                <li>Custom report builder</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <h4 className="font-semibold text-purple-900 mb-3">🔒 Security & Compliance</h4>
              <ul className="text-purple-800 text-sm space-y-2">
                <li>SOC2 Type II certified</li>
                <li>GDPR compliant</li>
                <li>Zero-trust architecture</li>
                <li>End-to-end encryption</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-6">
              <h4 className="font-semibold text-orange-900 mb-3">🌍 Global Scale</h4>
              <ul className="text-orange-800 text-sm space-y-2">
                <li>Multi-region deployment</li>
                <li>99.99% uptime SLA</li>
                <li>Auto-scaling</li>
                <li>Disaster recovery</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Developer Experience</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">SDK and Integration Tools</h3>
          <div className="bg-gray-900 text-green-400 rounded-lg p-6 mb-6 text-sm">
            <pre>{`// AuthPilot Node.js SDK Example
import { AuthPilot } from '@authpilot/node-sdk';

const authPilot = new AuthPilot({
  domain: 'your-tenant.authpilot.com',
  clientId: 'your-client-id',
  clientSecret: 'your-client-secret'
});

// Check user permissions
const hasAccess = await authPilot.authorize({
  user: 'user:alice',
  permission: 'read',
  resource: 'document:123'
});

// Provision new user
await authPilot.users.create({
  email: 'newuser@company.com',
  firstName: 'New',
  lastName: 'User',
  department: 'Engineering'
});`}</pre>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">API-First Design</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li><strong>RESTful APIs:</strong> Complete CRUD operations with OpenAPI specifications</li>
            <li><strong>GraphQL:</strong> Flexible data fetching for complex frontend requirements</li>
            <li><strong>Webhooks:</strong> Real-time event notifications for external systems</li>
            <li><strong>Rate Limiting:</strong> Built-in protection with customizable limits</li>
            <li><strong>Documentation:</strong> Interactive API docs with code examples</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Success Metrics</h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">📈 Platform Metrics</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• 10M+ users managed</li>
                  <li>• 500+ enterprise customers</li>
                  <li>• 99.99% uptime achieved</li>
                  <li>• Sub-100ms API response time</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">🎯 Business Impact</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• 80% reduction in onboarding time</li>
                  <li>• 95% decrease in help desk tickets</li>
                  <li>• $2M+ saved in security incidents</li>
                  <li>• 100% compliance audit success</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 mt-8">
            <p className="text-gray-700 italic">
              "AuthPilot represents the evolution of identity management from a necessary security layer to a 
              strategic business enabler. By combining enterprise-grade security with developer-friendly APIs, 
              we're empowering organizations to scale securely and efficiently."
            </p>
          </div>
        </div>

        {/* Project Links */}
        <div className="mt-8 sm:mt-12 flex flex-wrap gap-3 sm:gap-4">
          <a 
            href="#" 
            className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2 text-sm sm:text-base"
          >
            🚀 Platform Demo
          </a>
          <a 
            href="#" 
            className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-medium flex items-center gap-2 text-sm sm:text-base"
          >
            📱 GitHub Organization
          </a>
          <a 
            href="#" 
            className="px-4 sm:px-6 py-2 sm:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center gap-2 text-sm sm:text-base"
          >
            📄 Developer Portal
          </a>
          <a 
            href="#" 
            className="px-4 sm:px-6 py-2 sm:py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium flex items-center gap-2 text-sm sm:text-base"
          >
            🔗 API Documentation
          </a>
        </div>

        {/* Author Section */}
        <div className="border-t border-gray-200 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex items-center gap-3 sm:gap-4">
            <img 
              src="/src/assets/ravi_passport.jpeg" 
              alt="Ravi Vats" 
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Ravi Vats</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Platform architect and security engineer specializing in enterprise identity solutions.</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
          <Link to="/projects/project2" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2 text-sm sm:text-base">
            ← Previous Project
          </Link>
          <Link to="/projects" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2 text-sm sm:text-base">
            All Projects →
          </Link>
        </div>
      </article>
    </div>
  );
};

export default Project3; 