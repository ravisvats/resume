import { useState } from "react";
import passport from "../../assets/ravi_passport.jpeg";
import { FaTwitter, FaLinkedin, FaEnvelope, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Intro = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="w-full bg-white text-gray-900 px-4 md:px-6 py-3 shadow-sm rounded">
      <div className="flex items-center justify-between gap-4">
        {/* Left: Logo */}
        <a href="/" className="flex items-center gap-2 sm:gap-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
            <img
              src={passport}
              alt="Ravi Shankar Vats"
              className="w-full h-full object-cover rounded-full border-2 border-white"
            />
          </div>
          <span className="hidden sm:inline text-sm sm:text-base font-semibold">Ravi Shankar Vats</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-sm font-semibold relative">
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

        {/* Right: Social Icons (Desktop) */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          <a
            href="https://x.com/ravisvats"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-500 hover:text-cyan-700 text-xl lg:text-2xl transition"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/ravivats/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 hover:text-blue-900 text-xl lg:text-2xl transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:ravisvats@gmail.com"
            className="text-red-500 hover:text-red-700 text-xl lg:text-2xl transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://wa.me/918875603044"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-800 text-xl lg:text-2xl transition"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-gray-700 hover:text-gray-900 p-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 pt-4 border-t border-gray-200">
          <nav className="flex flex-col gap-4">
            {/* Mobile Navigation Links */}
            <div>
              <button
                onClick={() => toggleDropdown('models')}
                className="w-full flex items-center justify-between text-gray-700 hover:text-gray-900 font-semibold py-2"
              >
                Models
                <svg className={`w-4 h-4 transition-transform ${openDropdown === 'models' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'models' && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link to="/abac" className="block py-2 text-sm text-gray-600 hover:text-blue-600" onClick={toggleMobileMenu}>
                    ABAC
                  </Link>
                  <Link to="/rbac" className="block py-2 text-sm text-gray-600 hover:text-blue-600" onClick={toggleMobileMenu}>
                    RBAC
                  </Link>
                  <Link to="/rebac" className="block py-2 text-sm text-gray-600 hover:text-blue-600" onClick={toggleMobileMenu}>
                    ReBAC
                  </Link>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => toggleDropdown('company')}
                className="w-full flex items-center justify-between text-gray-700 hover:text-gray-900 font-semibold py-2"
              >
                Company
                <svg className={`w-4 h-4 transition-transform ${openDropdown === 'company' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'company' && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link to="/careers" className="block py-2 text-sm text-gray-600 hover:text-blue-600" onClick={toggleMobileMenu}>
                    Careers
                  </Link>
                  <a href="/authapp" className="block py-2 text-sm text-gray-600 hover:text-blue-600" onClick={toggleMobileMenu}>
                    About
                  </a>
                  <Link to="/service-packages" className="block py-2 text-sm text-gray-600 hover:text-blue-600" onClick={toggleMobileMenu}>
                    Service Plans
                  </Link>
                  <Link to="/how-migration-works" className="block py-2 text-sm text-gray-600 hover:text-blue-600" onClick={toggleMobileMenu}>
                    Migration Process
                  </Link>
                </div>
              )}
            </div>

            <a href="/projects" className="text-gray-700 hover:text-gray-900 font-semibold py-2" onClick={toggleMobileMenu}>
              Projects
            </a>
            <a href="/blogs" className="text-gray-700 hover:text-gray-900 font-semibold py-2" onClick={toggleMobileMenu}>
              Blogs
            </a>

            {/* Mobile Social Icons */}
            <div className="flex items-center gap-4 pt-2 border-t border-gray-200">
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
          </nav>
        </div>
      )}
    </header>
  );
};

export default Intro;