import React from 'react';
import { Link } from 'react-router-dom';

const Resume = () => {
  const skills = {
    "Programming Languages": ["Python", "PHP"],
    "Frameworks/Libraries": ["FastAPI", "Django", "Flask", "Pandas"],
    "Databases": ["MySQL", "PostgreSQL", "MongoDB", "Redis (cache)"],
    "AWS Services": ["AWS Batch", "Lambda", "S3", "EC2", "CloudWatch", "Kafka"],
    "GCP": ["Webhook", "Scheduler"],
    "Others": ["Docker", "Git", "Airflow", "Sentry", "Grafana", "OKTA", "FGA"],
    "Testing": ["Unit test (Pytest)", "API testing"],
    "Frontend": ["HTML", "CSS", "Bootstrap"]
  };

  const experiences = [
    {
      company: "Zenarate",
      position: "SDE III / Technical Lead",
      duration: "2/2023 - Present",
      achievements: [
        "Led the architecture design for User Authorization, implementing robust and scalable access control mechanisms, including Fine-Grained Authorization (FGA) for enforcing granular permissions.",
        "Designed and implemented a Microservices Architecture, successfully migrating a PHP monolith to a modular and scalable system, improving performance and maintainability.",
        "Implemented Change Data Capture (CDC) in SQL, leveraging event-driven patterns to synchronize data across microservices, enabling real-time updates and analytics.",
        "Integrated SCIM (System for Cross-domain Identity Management) for seamless user CRUD operations, ensuring enhanced security, data consistency, and interoperability with identity providers like Okta.",
        "Designed and deployed an event-driven architecture using Kafka, integrating it with AWS Lambda to enable real-time data processing, asynchronous communication, and scalable event handling."
      ]
    },
    {
      company: "GoMechanic",
      position: "SDE II",
      duration: "5/2022 - 1/2023",
      achievements: [
        "Writing highly optimised APIs for mobile application keeping in mind the response time and load scalability, updated existing APIs with reduced response time.",
        "Segregated the existed project from Monolithic to a microservice architecture, with deployment on separate GCP instance using Nginx, Gunicorn, supervisor etc.",
        "Wrote an application on GCP webhook to handle high load.",
        "Created versioning of APIs in accordance with the version of android application."
      ]
    },
    {
      company: "Delhivery",
      position: "SDE I",
      duration: "03/2017 - 4/2022",
      achievements: [
        "Developed APIs for functionalities of the app, with testing on both staging and prod environments.",
        "Creating Database Schema with PostgreSQL both for APIs and scripts for CRON jobs running regularly on different servers.",
        "Deployment on AWS EC2 Instances using CI/CD pipeline like Jenkins and also with Github actions.",
        "Used S3, Athena, Lambda and other AWS services.",
        "Complete backend support using services like newrelic, grafana, coralogix.",
        "Using github, bitbucket, AzureDevops for project management."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">My Resume</h1>
              <p className="text-gray-600 mt-2 text-lg">Complete professional profile and experience</p>
            </div>
            <Link 
              to="/" 
              className="px-6 py-3 bg-blue-600 !text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-12 border border-blue-100">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="/src/assets/ravi_passport.jpeg" 
                  alt="Ravi Shankar Vats" 
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Ravi Shankar Vats</h2>
                  <p className="text-blue-600 font-medium text-lg">Software Solution Architect & Technical Lead</p>
                </div>
              </div>
              
              <div className="space-y-3 text-gray-700">
                <div className="flex items-center gap-3">
                  <span className="text-blue-600 text-lg">📍</span>
                  <span>Gurugram, HR (122101), India</span>
                </div>
                <div className="flex items-center gap-3">
                  {/* <span className="text-blue-600 text-lg">📞</span>
                  <a href="tel:+910000000000" className="hover:text-blue-600 transition-colors">
                    +91-0000000000
                  </a> */}
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-600 text-lg">✉️</span>
                  <a href="mailto:ravisvats@gmail.com" className="hover:text-blue-600 transition-colors">
                    ravisvats@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-600 text-lg">💼</span>
                  <a 
                    href="https://linkedin.com/in/ravisvats" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-center items-center md:items-end gap-4">
              <div className="text-center md:text-right">
                <div className="text-3xl font-bold text-blue-600">8+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <button class="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-medium flex items-center gap-3 shadow-lg border border-blue-600">
  <span>📄</span>
  Download PDF Resume
</button>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <span className="text-blue-600">🎯</span>
            Professional Summary
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            Innovative Software Solution Architect and Technical Lead with in-depth understanding of 
            software development and system design illustrated over 8+ years of experience in similar 
            roles at fast paced startups such as Delhivery, GoMechanic, Zenarate. Expertise in building 
            scalable microservices, implementing fine-grained authorization systems, and leading 
            technical teams in high-growth environments.
          </p>
        </div>

        {/* Skills */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <span className="text-blue-600">🛠️</span>
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items], index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-4 text-lg">{category}:</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-blue-100 text-blue-800 px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Work Experience */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <span className="text-blue-600">💼</span>
            Work Experience
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-blue-200"></div>
                )}
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                  
                  <div className="flex-1 bg-gray-50 rounded-lg p-6">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{exp.company}</h4>
                        <p className="text-blue-600 font-medium text-lg">{exp.position}</p>
                      </div>
                      <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                        {exp.duration}
                      </span>
                    </div>
                    
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3 text-gray-700">
                          <span className="text-blue-500 mt-2 text-lg">•</span>
                          <span className="flex-1 leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Achievements */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <span className="text-blue-600">🎓</span>
              Education
            </h3>
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 text-lg mb-2">B.Tech: Electronics and Communication</h4>
              <p className="text-gray-600 mb-4">2015 • 60%</p>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>12th Grade:</span>
                  <span className="font-medium">60%</span>
                </div>
                <div className="flex justify-between">
                  <span>10th Grade:</span>
                  <span className="font-medium">87%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <span className="text-blue-600">🏆</span>
              Achievements
            </h3>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center gap-4">
                <span className="text-4xl">🎯</span>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">CAT 2015</h4>
                  <p className="text-gray-700">95.4 Percentile Achievement</p>
                  <p className="text-green-600 text-sm font-medium">Top 5% Nationwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 mt-12 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Interested in Working Together?</h3>
          <p className="text-blue-100 mb-6 text-lg">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="mailto:ravisvats@gmail.com" 
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              📧 Get In Touch
            </a>
            <a 
              href="https://linkedin.com/in/ravisvats" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
            >
              💼 LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume; 