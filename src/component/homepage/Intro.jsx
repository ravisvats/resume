import passport from "../../assets/ravi_passport.jpeg";
import { FaTwitter, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <header className="w-full bg-white text-gray-900 px-4 md:px-6 py-3 shadow-sm rounded">
      <div className="flex items-center justify-between gap-4">
        {/* Left: Logo */}
        <a href="/" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
            <img
              src={passport}
              alt="Ravi Shankar Vats"
              className="w-full h-full object-cover rounded-full border-2 border-white"
            />
          </div>
          <span className="hidden sm:inline text-base font-semibold">Ravi Shankar Vats</span>
        </a>

        {/* Center: Nav */}
        <nav className="flex items-center gap-6 text-sm font-semibold relative">
          {/* Authorization Models Dropdown */}
          <div className="relative group">
            <a href="#" className="text-gray-700 hover:text-gray-900 flex items-center gap-1">
              Models
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-2">
                <Link to="/abac" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  ABAC
                </Link>
                <Link to="/rbac" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  RBAC
                </Link>
                <Link to="/rebac" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  ReBAC
                </Link>
              </div>
            </div>
          </div>

          {/* Company Dropdown */}
          <div className="relative group">
            <a href="#" className="text-gray-700 hover:text-gray-900 flex items-center gap-1">
              Company
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-2">
                <Link to="/careers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Careers
                </Link>
                <a href="/authapp" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  About
                </a>
                <Link to="/service-packages" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Service Plans
                </Link>
                <Link to="/how-migration-works" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Migration Process
                </Link>
              </div>
            </div>
          </div>

          <a href="/projects" className="text-gray-700 hover:text-gray-900">Projects</a>
          <a href="/blogs" className="text-gray-700 hover:text-gray-900">Blogs</a>
        </nav>

        {/* Right: Social + Resume */}
        <div className="flex items-center gap-3">
          <a
            href="https://x.com/ravisvats"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-500 hover:text-cyan-700 text-2xl transition"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/ravivats/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 hover:text-blue-900 text-2xl transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:ravisvats@gmail.com"
            className="text-red-500 hover:text-red-700 text-2xl transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://wa.me/918875603044"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-800 text-2xl transition"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Intro;