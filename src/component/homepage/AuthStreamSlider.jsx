import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight, FiShield, FiZap, FiRefreshCw, FiCheckCircle, FiUsers, FiLayers, FiSettings, FiGlobe, FiArrowRight } from 'react-icons/fi';

const AuthStreamSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const totalSlides = 6;

  // Auto-advance slides every 4 seconds, but only if user hasn't interacted in the app lets test this
  useEffect(() => {
    if (hasUserInteracted) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalSlides, hasUserInteracted]);

  const goToSlide = (index) => {
    setHasUserInteracted(true);
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setHasUserInteracted(true);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setHasUserInteracted(true);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Slide 1: The Promise (Hero Banner)
  const Slide1 = () => (
    <div className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 md:px-8 py-8 sm:py-12 md:py-16">
      <div className="max-w-6xl mx-auto text-center w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-4 sm:mb-6">
          One Partner for All Your Authorization Needs
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
          We design, migrate, and operate secure, compliant, and scalable authorization systems — so your teams can ship faster, stay compliant, and scale safely.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
          <a
            href="https://calendly.com/vatsjay759/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-indigo-600 text-white font-semibold shadow-lg hover:bg-indigo-700 transition-colors text-base sm:text-lg whitespace-nowrap"
          >
            Book a Free Assessment
          </a>
          <a
            href="/services"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-white text-black border-2 border-indigo-600 font-semibold shadow hover:bg-indigo-50 transition-colors text-base sm:text-lg whitespace-nowrap"
          >
            View Our Services
          </a>
        </div>
        {/* Abstract access control diagram visualization */}
        <div className="mt-8 sm:mt-12 flex justify-center items-center px-4">
          <div className="relative w-full max-w-2xl h-48 sm:h-64">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-4 sm:gap-8 w-full">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-indigo-100 rounded-full flex items-center justify-center mb-2 sm:mb-3">
                    <FiUsers className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-indigo-600" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-700">User</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-purple-100 rounded-full flex items-center justify-center mb-2 sm:mb-3">
                    <FiLayers className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-purple-600" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-700">Resource</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-cyan-100 rounded-full flex items-center justify-center mb-2 sm:mb-3">
                    <FiShield className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-cyan-600" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-700">Policy</span>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-indigo-300 to-purple-300 transform -translate-y-1/2 hidden sm:block"></div>
            <div className="absolute top-1/2 left-1/2 w-1/2 h-0.5 bg-gradient-to-r from-purple-300 to-cyan-300 transform -translate-y-1/2 hidden sm:block"></div>
          </div>
        </div>
      </div>
    </div>
  );

  // Slide 2: End-to-End Authorization Services
  const Slide2 = () => (
    <div className="min-h-screen flex flex-col justify-start bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4 md:px-8 py-8 sm:py-12 md:py-16 pb-24 sm:pb-28 md:pb-32">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-3 sm:mb-4 px-2">
            Advisory. Implementation. Managed Operations.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            AuthStream is your one-stop offshore partner for complete authorization management — from model design and migration to continuous compliance.
            <br className="hidden sm:block" />
            <span className="font-semibold block sm:inline mt-2 sm:mt-0">We handle the complexity of roles, permissions, and policies so your developers can focus on building product features.</span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <FiLayers className="h-8 w-8 text-indigo-600" />
              <h3 className="text-xl font-bold text-gray-900">Model Design</h3>
            </div>
            <p className="text-gray-600">RBAC, ABAC, ReBAC, or Hybrid</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <FiSettings className="h-8 w-8 text-purple-600" />
              <h3 className="text-xl font-bold text-gray-900">Policy-as-Code</h3>
            </div>
            <p className="text-gray-600">Setup with versioning & CI/CD</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <FiRefreshCw className="h-8 w-8 text-cyan-600" />
              <h3 className="text-xl font-bold text-gray-900">Migration</h3>
            </div>
            <p className="text-gray-600">From legacy ACL or IAM setups</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <FiZap className="h-8 w-8 text-emerald-600" />
              <h3 className="text-xl font-bold text-gray-900">API & SDK Integration</h3>
            </div>
            <p className="text-gray-600">Into your existing stack</p>
          </div>
        </div>
        <div className="text-center mt-4 sm:mt-6">
          <a
            href="/service-packages"
            className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg bg-indigo-600 text-white font-semibold shadow-lg hover:bg-indigo-700 transition-colors text-base sm:text-lg whitespace-nowrap"
          >
            Explore Service Packages
            <FiArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-white" />
          </a>
        </div>
      </div>
    </div>
  );

  // Slide 3: Secure Migrations & Modernization
  const Slide3 = () => (
    <div className="min-h-screen flex flex-col justify-start bg-gradient-to-br from-emerald-50 via-white to-teal-50 px-4 md:px-8 py-8 sm:py-12 md:py-16 pb-24 sm:pb-28 md:pb-32">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-3 sm:mb-4 px-2">
            Modernize Authorization Without Disruption
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            We help teams safely evolve from static RBAC to fine-grained or attribute-based authorization — with zero downtime.
            <br className="hidden sm:block" />
            <span className="font-semibold block sm:inline mt-2 sm:mt-0">Run both systems in parallel, validate decisions, and cut over with confidence.</span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <FiRefreshCw className="h-8 w-8 text-emerald-600" />
              <h3 className="text-xl font-bold text-gray-900">Automated Role-to-Tuple Mapping</h3>
            </div>
            <p className="text-gray-600">Seamless conversion from legacy role structures to modern tuple-based models</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <FiCheckCircle className="h-8 w-8 text-teal-600" />
              <h3 className="text-xl font-bold text-gray-900">Dual-Run Validation Framework</h3>
            </div>
            <p className="text-gray-600">Compare decisions side-by-side to ensure accuracy before cutover</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <FiZap className="h-8 w-8 text-cyan-600" />
              <h3 className="text-xl font-bold text-gray-900">CDC Pipelines for Real-Time Sync</h3>
            </div>
            <p className="text-gray-600">Change Data Capture ensures real-time synchronization during migration</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <FiGlobe className="h-8 w-8 text-indigo-600" />
              <h3 className="text-xl font-bold text-gray-900">On-Prem / Cloud / Hybrid Deployments</h3>
            </div>
            <p className="text-gray-600">Flexible deployment options to match your infrastructure needs</p>
          </div>
        </div>
        <div className="text-center mt-4 sm:mt-6">
          <a
            href="/how-migration-works"
            className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg bg-emerald-600 text-white font-semibold shadow-lg hover:bg-emerald-700 transition-colors text-base sm:text-lg whitespace-nowrap"
          >
            See How Migration Works
            <FiArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-white" />
          </a>
        </div>
      </div>
    </div>
  );

  // Slide 4: Continuous Governance & Compliance
  const Slide4 = () => (
    <div className="min-h-screen flex flex-col justify-start bg-gradient-to-br from-amber-50 via-white to-orange-50 px-4 md:px-8 py-8 sm:py-12 md:py-16 pb-24 sm:pb-28 md:pb-32">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-3 sm:mb-4 px-2">
            Audit-Ready, Always
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            From SOC 2 to HIPAA, AuthStream's managed service ensures every policy change is traceable and every access decision auditable.
            <br className="hidden sm:block" />
            <span className="font-semibold block sm:inline mt-2 sm:mt-0">Our compliance engine tracks, versions, and exports reports to help you stay ahead of audits.</span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <FiSettings className="h-8 w-8 text-amber-600" />
              <h3 className="text-xl font-bold text-gray-900">Policy Versioning & Immutable Logs</h3>
            </div>
            <p className="text-gray-600">Complete audit trail with version control for all policy changes</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <FiUsers className="h-8 w-8 text-orange-600" />
              <h3 className="text-xl font-bold text-gray-900">Access Review Dashboards</h3>
            </div>
            <p className="text-gray-600">Visual interfaces for reviewing and managing access permissions</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <FiCheckCircle className="h-8 w-8 text-red-600" />
              <h3 className="text-xl font-bold text-gray-900">Automated Compliance Reports</h3>
            </div>
            <p className="text-gray-600">Generate reports for SOC 2, HIPAA, and other compliance frameworks</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <FiShield className="h-8 w-8 text-rose-600" />
              <h3 className="text-xl font-bold text-gray-900">Security Patching & SLA-backed Operations</h3>
            </div>
            <p className="text-gray-600">Continuous security updates with guaranteed service level agreements</p>
          </div>
        </div>
        <div className="text-center mt-4 sm:mt-6">
          <a
            href="https://calendly.com/vatsjay759/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg bg-amber-600 text-white font-semibold shadow-lg hover:bg-amber-700 transition-colors text-base sm:text-lg whitespace-nowrap"
          >
            Request Compliance Demo
            <FiArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-white" />
          </a>
        </div>
      </div>
    </div>
  );

  // Slide 5: Offshore Expertise, On-Demand
  const Slide5 = () => (
    <div className="min-h-screen flex flex-col justify-start bg-gradient-to-br from-purple-50 via-white to-pink-50 px-4 md:px-8 py-8 sm:py-12 md:py-16 pb-24 sm:pb-28 md:pb-32">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-3 sm:mb-4 px-2">
            Global Engineering | Local Impact
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            AuthStream's dedicated offshore teams bring deep security and backend expertise to deliver enterprise-grade authorization as a managed service — faster and more cost-effective than building in-house.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <FiUsers className="h-8 w-8 text-purple-600" />
              <h3 className="text-xl font-bold text-gray-900">Dedicated Offshore Authorization Specialists</h3>
            </div>
            <p className="text-gray-600">Expert teams focused exclusively on authorization systems</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <FiLayers className="h-8 w-8 text-pink-600" />
              <h3 className="text-xl font-bold text-gray-900">Scalable Pods for Enterprise Clients</h3>
            </div>
            <p className="text-gray-600">Flexible team structures that grow with your needs</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <FiZap className="h-8 w-8 text-indigo-600" />
              <h3 className="text-xl font-bold text-gray-900">24/7 Monitoring & Operations</h3>
            </div>
            <p className="text-gray-600">Round-the-clock support and system monitoring</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <FiSettings className="h-8 w-8 text-rose-600" />
              <h3 className="text-xl font-bold text-gray-900">Fixed-Cost or Retainer Models</h3>
            </div>
            <p className="text-gray-600">Flexible pricing options to fit your budget and needs</p>
          </div>
        </div>
        <div className="text-center mt-4 sm:mt-6">
          <a
            href="https://calendly.com/vatsjay759/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg bg-purple-600 text-white font-semibold shadow-lg hover:bg-purple-700 transition-colors text-base sm:text-lg whitespace-nowrap"
          >
            Talk to an Expert
            <FiArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-white" />
          </a>
        </div>
      </div>
    </div>
  );

  // Slide 6: Call to Action
  const Slide6 = () => (
    <div className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 px-4 md:px-8 py-8 sm:py-12 md:py-16">
      <div className="max-w-4xl mx-auto text-center w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-4 sm:mb-6 px-2">
          Let's Redefine Authorization Together
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
          Whether you're a SaaS startup or a global enterprise, we'll design a secure, scalable, and compliant authorization layer tailored to you.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <a
            href="https://calendly.com/vatsjay759/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg bg-indigo-600 text-white font-semibold shadow-lg hover:bg-indigo-700 transition-colors text-base sm:text-lg whitespace-nowrap"
          >
            Start Free Assessment
          </a>
          <a
            href="https://wa.me/918875603044"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg bg-white text-black border-2 border-indigo-600 font-semibold shadow hover:bg-indigo-50 transition-colors text-base sm:text-lg whitespace-nowrap"
          >
            Schedule Consultation
          </a>
        </div>
      </div>
    </div>
  );

  const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6];

  return (
    <div className="relative w-full overflow-x-hidden">
      {/* Slide Container */}
      <div className="relative min-h-screen overflow-y-auto">
        {slides.map((SlideComponent, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 overflow-y-auto ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <SlideComponent />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 sm:p-3 shadow-lg transition-all"
        aria-label="Previous slide"
      >
        <FiChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 text-gray-700" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 sm:p-3 shadow-lg transition-all"
        aria-label="Next slide"
      >
        <FiChevronRight className="h-4 w-4 sm:h-6 sm:w-6 text-gray-700" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 sm:h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-indigo-600 w-6 sm:w-8'
                : 'bg-gray-300 hover:bg-gray-400 w-2 sm:w-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AuthStreamSlider;

