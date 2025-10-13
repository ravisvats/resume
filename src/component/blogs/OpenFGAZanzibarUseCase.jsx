import React from 'react';
import { Link } from 'react-router-dom';

const OpenFGAZanzibarUseCase = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link to="/blogs" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
              ← Back to Blogs
            </Link>
            <Link to="/" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              Home
            </Link>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Blog Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
              OpenFGA
            </span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
              Zanzibar
            </span>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
              ReBAC
            </span>
            <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
              SaaS
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            OpenFGA & Zanzibar Use Case | How SASSY Moved from RBAC to ReBAC?
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Learn how SaaS company SASSY solved access control challenges by adopting Relationship-Based Authorization (ReBAC) using OpenFGA. Discover how ReBAC, inspired by Google's Zanzibar, helps SaaS startups in India and worldwide scale secure access effortlessly.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
            <span>January 15, 2024</span>
            <span>•</span>
            <span>12 min read</span>
            <span>•</span>
            <span>By Ravi Vats</span>
          </div>
          
          <img 
            src="/images/sassy_rbac_rebac.png" 
            alt="OpenFGA and Zanzibar Authorization" 
            className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
          />
        </header>

        {/* Blog Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            Every startup begins with simplicity. That's the story of SASSY, a young SaaS company founded by four partners — R, O, C, and K — who set out to build their first cloud product, NWO (Next World Order). The early days were fast-paced, creative, and free of bureaucracy. They made quick decisions, shipped features rapidly, and, most importantly, didn't have to think too hard about permissions.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            R was in charge of building the product. She had read and write access to the product code, application logic, and customer data. To stay informed, she also had read access to the testing, marketing, and finance data.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            O was the tester, with read and write access to test code and datasets, and read-only access to the rest.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            C handled marketing, managing the campaigns, creative assets, and documents — again, read and write access to her own domain, and read-only access everywhere else.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            K managed the finances — invoices, payrolls, forecasts — with write access in finance and read-only everywhere else.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            It was all neat and logical — the classic case of Role-Based Access Control (RBAC) working at its best. Everyone had a role, and the system knew what each role could do. R was a developer, O was a tester, C was in marketing, and K was in finance. The roles defined the rules, and everything was in order.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">When Growth Turns Simplicity into Chaos</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            But startups have one thing in common — they grow.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            When NWO went live, the first customers rolled in, bringing along new challenges. Suddenly, customer data was no longer just another dataset. It was sacred — private, regulated, and protected. The founders quickly realized that the same people who built the product couldn't have perpetual access to live customer data. So, all four partners — R, O, C, and K — lost permanent access to the app's production environment.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            However, there were exceptions. R still needed conditional access — she had to debug production issues occasionally. That meant she should get temporary access only when required, not all the time.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            And that's where the once-simple role system began to strain. The clean boundaries of "Developer," "Tester," "Marketer," and "Finance" were no longer enough. The roles couldn't express conditional, contextual, or relationship-driven access.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            As the company scaled, new people joined. Teams formed around products. A new product, OWO, was planned, and the responsibility for NWO was passed on to B, a newly hired product owner. Now, R had read-only access to NWO for oversight, while B had read and write access to both NWO and OWO.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Soon, each new product, team, and feature required the creation of new roles:
          </p>

          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-6">
            <li>NWO Developer</li>
            <li>OWO Developer</li>
            <li>NWO Tester</li>
            <li>OWO Tester</li>
            <li>MarketingManagerNWO, MarketingManagerOWO, and so on...</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-6">
            Before long, SASSY had more roles than employees. The developers were buried in permission tables and matrix spreadsheets, trying to figure out who could access what. Each new feature required multiple role updates, and granting access became a headache.
          </p>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
            <p className="text-red-800 font-semibold">
              RBAC was cracking under the weight of growth. The system that once made things easy was now making innovation harder. The team realized they needed something more dynamic, flexible, and context-aware.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Discovering Fine-Grained Authorization</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            While exploring better ways to manage access, R stumbled upon a research paper from Google — the now-famous Zanzibar paper. It described how Google manages access control across its massive ecosystem: Google Drive, YouTube, Calendar, and Photos.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Instead of assigning fixed roles, Google's Zanzibar system focused on relationships.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            For example:
          </p>

          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-6">
            <li>Alice is an editor on Document X.</li>
            <li>Bob is a member of Team Y, which owns Folder Z.</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-6">
            With this structure, permissions are not derived from a static role but from how entities are related to each other. That's fine-grained, relationship-based authorization — also called ReBAC.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            This model could express complex scenarios easily. For instance:
          </p>

          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-6">
            <li>"R can access NWO's production data if she is assigned to the on-call engineers group for that week."</li>
            <li>"B has full access to any project that he owns, and members of his team inherit those permissions automatically."</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-6">
            That flexibility is what made Zanzibar the backbone of access control for billions of Google users.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            R realized this was the model SASSY needed — not rigid, role-bound permissions, but relationship-driven access that evolved naturally as the organization grew.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">From Google's Paper to OpenFGA</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Of course, building a Zanzibar-like system from scratch wasn't feasible. But then came OpenFGA, an open-source implementation inspired by Zanzibar, created by the team at Auth0 (now part of Okta).
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            OpenFGA brought the same power of fine-grained, relationship-based access into the hands of everyday developers. It allowed teams to define authorization models that mirror real-world relationships between users, objects, and actions — using simple, declarative configuration instead of endless role tables.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            For SASSY, it meant they could define relationships such as:
          </p>

          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-6">
            <li>B owns NWO and OWO.</li>
            <li>R is a reviewer on NWO, with read-only access.</li>
            <li>Testers have write access only to tests for products they are assigned to.</li>
            <li>Finance members can read invoices for projects they manage.</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-6">
            When new products or departments were added, SASSY didn't have to invent new roles or edit thousands of permissions. They simply added new relationships — and the system adjusted seamlessly.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Access logic was centralized, auditable, and composable — the same principles that power global-scale systems like Google Drive and GitHub.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Handling New Relationships Gracefully</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            The magic of Relationship-Based Authorization (ReBAC) is that it evolves with the organization.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            When SASSY added more layers — like customer success teams, vendor integrations, and partner dashboards — they didn't rewrite roles. They just described new relationships:
          </p>

          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-6">
            <li>CustomerSuccessManager → supports → CustomerAccount</li>
            <li>Vendor → linked_to → Invoice</li>
            <li>Partner → collaborates_on → MarketingCampaign</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-6">
            Instead of creating "CustomerSuccessAdminRole" or "VendorFinanceRole," these relationships naturally defined who could do what. The system could even answer complex queries like:
          </p>

          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-6">
            <li>"Can user X approve this invoice?"</li>
            <li>"Is user Y part of any group that owns this document?"</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-6">
            This level of flexibility was impossible with traditional RBAC.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">A Future Built on Relationships</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            For SASSY, this transition was more than a technical upgrade — it was a philosophical one. The company realized that access control should mirror real-world relationships, not static hierarchies.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Roles were like snapshots — fixed and outdated the moment the organization evolved. Relationships, on the other hand, were living links that adapted as teams, products, and permissions changed.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            By embracing OpenFGA and Relationship-Based Authorization, SASSY made its system future-ready. New products, teams, or customers could be onboarded without chaos. Security audits became clearer, and authorization logic became part of the product's architecture — not a patchwork of exceptions.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            In a world where collaboration, partnerships, and multi-tenant architectures are the norm, static RBAC systems can't keep up. Relationship-Based Authorization (ReBAC) offers a path that's both scalable and realistic, aligning with how people and systems truly interact.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            SASSY's story mirrors the journey of many growing SaaS companies. They started with the simplicity of roles, hit the wall of complexity, and finally discovered the flexibility of relationships.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            From Google's Zanzibar to OpenFGA, the industry is moving toward models that make authorization dynamic, fine-grained, and contextual.
          </p>

          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-8 mt-8">
            <p className="text-gray-800 text-lg font-semibold text-center">
              The takeaway is clear: The future of access control isn't about what role you have — it's about the relationships you build.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Related Articles</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Link to="/blogs/rbac-vs-fga" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">What is the difference between RBAC and FGA?</h4>
              <p className="text-gray-600 text-sm">Understanding the key differences between Role-Based Access Control and Fine-Grained Authorization.</p>
            </Link>
            
            <Link to="/blogs/zanzibar-fga-explained" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">What is Zanzibar Fine-Grained Authorization?</h4>
              <p className="text-gray-600 text-sm">Deep dive into Google's Zanzibar system and how it revolutionized authorization.</p>
            </Link>
            
            <Link to="/blogs/fine-grained-authorization" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">What is Fine-Grained Authorization (FGA)?</h4>
              <p className="text-gray-600 text-sm">Complete guide to understanding Fine-Grained Authorization concepts and implementation.</p>
            </Link>
          </div>
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
              <p className="text-gray-600 text-sm">Full-stack developer with expertise in authorization systems, OpenFGA, and scalable backend architecture.</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link to="/blogs/zanzibar-fga-explained" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
            ← Previous Article
          </Link>
          <Link to="/blogs/fine-grained-authorization" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
            Next Article →
          </Link>
        </div>
      </article>
    </div>
  );
};

export default OpenFGAZanzibarUseCase;
