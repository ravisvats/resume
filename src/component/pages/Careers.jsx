import React from 'react';
import { Link } from 'react-router-dom';

const Careers = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Mid-Level Python Developer",
      location: "Remote",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹8-15 LPA",
      status: "active",
      description: "We're looking for an experienced Python developer to join our team and help build scalable backend systems.",
      requirements: [
        "2-4 years of experience in Python development",
        "Strong knowledge of FastAPI, Django, or Flask",
        "Experience with RESTful API design and development",
        "Understanding of database systems (PostgreSQL, MySQL, MongoDB)",
        "Familiarity with cloud platforms (AWS, Azure, or GCP)",
        "Knowledge of authentication/authorization systems",
        "Experience with Git and version control",
        "Good problem-solving skills and attention to detail"
      ],
      responsibilities: [
        "Design and develop robust backend APIs using Python",
        "Implement fine-grained authorization systems",
        "Optimize database queries and application performance",
        "Collaborate with frontend developers and product managers",
        "Write clean, maintainable, and well-documented code",
        "Participate in code reviews and technical discussions",
        "Stay updated with latest Python technologies and best practices"
      ],
      benefits: [
        "Competitive salary and performance bonuses",
        "Remote work flexibility",
        "Health insurance",
        "Professional development opportunities",
        "Collaborative and inclusive work environment"
      ]
    },
    {
      id: 2,
      title: "Fresher Python Developer (Backend)",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "0-1 year",
      salary: "₹3-5 LPA",
      status: "active",
      description: "Great opportunity for recent graduates to start their career in Python backend development with hands-on experience on real-world projects.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "Strong programming fundamentals in Python",
        "Basic understanding of web development concepts",
        "Knowledge of RESTful APIs",
        "Willingness to learn new technologies",
        "Good communication skills",
        "Passion for coding and problem-solving",
        "Internships or personal projects are a plus"
      ],
      responsibilities: [
        "Learn and contribute to backend development projects",
        "Assist in building APIs and server-side logic",
        "Work with senior developers to understand best practices",
        "Participate in agile development processes",
        "Write and maintain code documentation",
        "Test and debug applications",
        "Contribute to code reviews with guidance"
      ],
      benefits: [
        "Mentorship from experienced developers",
        "Hands-on experience on real projects",
        "Learning and growth opportunities",
        "Friendly and supportive team environment",
        "Career progression path"
      ]
    },
    {
      id: 3,
      title: "Fresher Python Developer (Data & Automation)",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "0-1 year",
      salary: "₹3-5 LPA",
      status: "active",
      description: "Join our team to work on Python-based data processing, automation, and integration projects. Perfect for freshers passionate about Python programming.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "Strong interest in Python programming",
        "Basic knowledge of data structures and algorithms",
        "Understanding of file handling and data processing",
        "Familiarity with libraries like Pandas, NumPy is a plus",
        "Eager to learn and grow",
        "Good analytical thinking",
        "Previous Python projects or coursework preferred"
      ],
      responsibilities: [
        "Develop Python scripts for automation and data processing",
        "Work on data integration and ETL tasks",
        "Assist in building internal tools and utilities",
        "Help with testing and debugging code",
        "Collaborate with the development team on various projects",
        "Learn and implement best coding practices",
        "Maintain and improve existing Python codebase"
      ],
      benefits: [
        "Comprehensive training and mentorship",
        "Exposure to diverse Python projects",
        "Skill development in data processing and automation",
        "Flexible work arrangements",
        "Great starting point for a Python career"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      {/* <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Careers</h1>
              <p className="text-gray-600 mt-2 text-lg">Join Our Team and Build the Future</p>
            </div>
            <Link 
              to="/" 
              className="px-6 py-3 bg-blue-600 !text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-12 text-white">
          <h2 className="text-3xl font-bold mb-4">🚀 Why Join Us?</h2>
          <p className="text-blue-100 text-lg leading-relaxed">
            We're building cutting-edge authorization and access control systems. Join a team that values innovation, 
            learning, and collaboration. We offer exciting opportunities to work on challenging problems and grow your career.
          </p>
        </div>

        {/* Open Positions */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">📋 Open Positions</h2>
          
          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-4">
                        <span className="flex items-center gap-1">
                          📍 {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          💼 {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          👤 {job.experience}
                        </span>
                        <span className="flex items-center gap-1">
                          💰 {job.salary}
                        </span>
                      </div>
                    </div>
                    <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      {job.status === 'active' ? '🟢 Active' : 'Closed'}
                    </span>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">{job.description}</p>

                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    {/* Requirements */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        ✅ Requirements
                      </h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-blue-600 mt-1">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Responsibilities */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        📝 Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {job.responsibilities.map((resp, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-purple-600 mt-1">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        🎁 Benefits
                      </h4>
                      <ul className="space-y-2">
                        {job.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-green-600 mt-1">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Apply Button */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <a
                      href={`mailto:ravisvats@gmail.com?subject=Application for ${job.title}`}
                      className="inline-block px-8 py-3 bg-blue-600 !text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      Apply Now →
                    </a>
                    <p className="text-sm text-gray-500 mt-2">
                      Send your resume to ravisvats@gmail.com with the position title in the subject line
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📋 Application Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📧</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">1. Apply</h4>
              <p className="text-sm text-gray-600">Send your resume and portfolio</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">👀</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">2. Review</h4>
              <p className="text-sm text-gray-600">We'll review your application</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">💬</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">3. Interview</h4>
              <p className="text-sm text-gray-600">Technical and cultural fit interview</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🎉</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">4. Welcome</h4>
              <p className="text-sm text-gray-600">Join our amazing team!</p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">💬 Have Questions?</h2>
          <p className="text-gray-700 mb-4">
            Feel free to reach out if you have any questions about the positions or our company.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="mailto:ravisvats@gmail.com" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-lg hover:bg-gray-50 transition-colors border border-gray-200 text-gray-700 font-medium"
            >
              📧 Email Us
            </a>
            <a 
              href="https://linkedin.com" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors !text-white font-medium"
            >
              💼 LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;

