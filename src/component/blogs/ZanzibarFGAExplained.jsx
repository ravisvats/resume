import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ZanzibarFGAExplained = () => {
  // Basic SEO without extra libraries
  useEffect(() => {
    const title = 'Is RBAC Holding You Back? Zanzibar Fine-Grained Authorization Explained';
    const description = "Learn why RBAC fails at scale and how Google’s Zanzibar Fine-Grained Authorization (FGA) solves role explosion with scalable, relationship-based access control.";
    document.title = title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link to="/blogs" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">← Back to Blogs</Link>
            <Link to="/" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">Home</Link>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Blog Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">Authorization</span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Scaling</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Is RBAC Holding You Back? Zanzibar Fine-Grained Authorization Explained
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Learn why RBAC fails at scale and how Google’s Zanzibar Fine-Grained Authorization (FGA) solves role explosion with scalable, relationship-based access control.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
            <span>Sun 31 Sept, 2025</span>
            <span>•</span>
            <span>10 min read</span>
            <span>•</span>
            <span>By Ravi Vats</span>
          </div>
          <img src="/images/Zanzibar_fga.jpeg" alt="RBAC vs Zanzibar FGA" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
        </header>

        {/* Body */}
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            Authorization always comes down to one simple question: <strong>“Who is allowed to do what, on which resource?”</strong>
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            For decades, the standard answer has been <strong>RBAC — Role-Based Access Control</strong>. It’s simple, intuitive, and widely adopted. But as modern systems scaled to millions of users and resources, RBAC started showing cracks.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Google faced this exact problem in Gmail, Google Drive, and YouTube. Their solution was <strong>Zanzibar</strong>, a global-scale <strong>Fine-Grained Authorization (FGA)</strong> system.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">This blog explores</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>What RBAC is and how it works</li>
            <li>Why RBAC breaks at scale</li>
            <li>How Zanzibar-style FGA solves authorization challenges</li>
            <li>Why FGA is the future of access control</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">What is RBAC? (Role-Based Access Control)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">RBAC is built on three basic blocks:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Users</strong> → assigned to <strong>Roles</strong></li>
            <li><strong>Roles</strong> → grant <strong>Permissions</strong></li>
          </ul>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 my-4">
            <p className="text-gray-800"><strong>Example:</strong> Ravi → Student → View Courses</p>
            <p className="text-gray-600 text-sm mt-2">Students can read content, instructors can upload materials, admins can manage everything.</p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">The strength of RBAC lies in its simplicity. But this simplicity becomes its biggest weakness at scale.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Scalability Problem with RBAC</h2>
          <p className="text-gray-700 leading-relaxed mb-6">Imagine building an online learning platform like Udemy or Coursera with:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>1 million+ courses</li>
            <li>Each course having its own students and instructors</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">How do you model this in RBAC?</p>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 my-4 text-red-800">
            <p className="font-semibold mb-2">One option: create course-specific roles</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Student_of_Course_1234</li>
              <li>Student_of_Course_5678</li>
              <li>Instructor_of_Course_1234</li>
              <li>Instructor_of_Course_5678</li>
            </ul>
            <p className="mt-3">With 1 million courses, you now have millions of roles. This is the <strong>Role Explosion</strong> problem.</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Why Quick Fixes Don’t Work</h2>
          <p className="text-gray-700 leading-relaxed mb-4">Many engineers patch RBAC with a side table:</p>
          <div className="overflow-x-auto">
            <table className="min-w-[320px] text-left text-sm bg-white rounded-lg border border-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-2">User</th>
                  <th className="px-4 py-2">Role</th>
                  <th className="px-4 py-2">Course</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2">Ravi</td>
                  <td className="px-4 py-2">Student</td>
                  <td className="px-4 py-2">1234</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2">Anita</td>
                  <td className="px-4 py-2">Student</td>
                  <td className="px-4 py-2">5678</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4 mb-6">At small scale, it’s fine. At enterprise scale, joins pile up, performance tanks, and the system becomes fragile.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Zanzibar Shift: From Roles to Relationships</h2>
          <p className="text-gray-700 leading-relaxed mb-6">Google needed something that could model fine-grained relationships, handle billions of checks daily, and stay globally consistent under 10ms. Their answer: <strong>Zanzibar</strong> — a relationship-based authorization system.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Instead of creating roles, Zanzibar stores relationship tuples:</p>
          <div className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm">
            <pre>{`course:1234#student@ravi
course:1234#instructor@dr_smith
course:5678#instructor@anita`}</pre>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
            <li>Ravi is a student in Course 1234</li>
            <li>Dr. Smith is an instructor in Course 1234</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Why Fine-Grained Authorization (FGA) Scales Better</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">RBAC</h4>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>Bloated roles</li>
                <li>Custom queries</li>
                <li>Fragile joins</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-semibold text-green-900 mb-3">FGA (Zanzibar-style)</h4>
              <ul className="text-green-800 space-y-1 text-sm">
                <li>Lean relationships</li>
                <li>Fast lookups</li>
                <li>Clear graph semantics</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mt-8">
            <p className="text-gray-700"><strong>Takeaway:</strong> RBAC is fine for small systems; it breaks in large-scale SaaS, multi-tenant, and regulated apps. Zanzibar-style FGA is clean, scalable, and future-ready.</p>
          </div>

          <p className="text-gray-700 leading-relaxed mt-6">If you’re building modern SaaS platforms, fintech, marketplaces, or enterprise apps, it’s time to rethink RBAC.</p>
          <p className="text-gray-800 font-semibold mt-4">🚀 Zanzibar Fine-Grained Authorization (FGA) is the future of access control.</p>
        </div>

        {/* Author */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex items-center gap-4">
            <img src="/src/assets/ravi_passport.jpeg" alt="Ravi Vats" className="w-16 h-16 rounded-full object-cover" />
            <div>
              <h4 className="font-semibold text-gray-900">Ravi Vats</h4>
              <p className="text-gray-600 text-sm">Technical Lead & Solution Architect. I build authorization systems and scalable backends.</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ZanzibarFGAExplained;