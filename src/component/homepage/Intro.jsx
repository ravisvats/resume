import passport from "../../assets/ravi_passport.jpeg";
import { FaTwitter, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

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
        <nav className="flex items-center gap-6 text-sm font-semibold">
          <a href="/projects" className="text-gray-700 hover:text-gray-900">My Projects</a>
          <a href="/blogs" className="text-gray-700 hover:text-gray-900">My Blogs</a>
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
          <a
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200 hover:bg-blue-200 hover:shadow-sm text-xs font-semibold transition"
            aria-label="View Full Resume"
            title="View Full Resume"
          >
            <span className="leading-none">↗</span>
            <span>View My Resume</span>
          </a>
          <a
            href="/pdfs/resume_ravi_python.pdf"
            download
            className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 text-green-800 border border-green-200 hover:bg-green-200 hover:shadow-sm text-xs font-semibold transition"
            aria-label="Download Resume (PDF)"
            title="Download Resume (PDF)"
          >
            <span className="leading-none">⬇︎</span>
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Intro;