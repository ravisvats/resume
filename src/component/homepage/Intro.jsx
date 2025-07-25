import passport from "../../assets/ravi_passport.jpeg";
import { FaTwitter, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Intro = () => {
  return (
    <section className="flex flex-col md:flex-row items-start bg-white text-gray-900 w-full px-10 py-20">
      {/* Left Section: Text */}
      <div className="flex-2 text-left w-full">
        {/* Social Icons Top Left */}
        <div className="absolute top-4 left-4 flex gap-6 z-50">
          <a
            href="https://x.com/ravisvats"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-500 hover:text-cyan-700 text-4xl transition"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/ravivats/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 hover:text-blue-900 text-4xl transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:ravisvats@gmail.com"
            className="text-red-500 hover:text-red-700 text-4xl transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://wa.me/918875603044"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-800 text-4xl transition"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
        <h1 className="text-3xl font-bold leading-tight">
          Hi <span role="img" aria-label="wave">👋</span>,<br />
          My name is <span className="text-blue-500">Ravi Shankar Vats</span><br />
          <span className="text-gray-800">I build things for the web</span>
        </h1>
        <div className="mt-6 flex gap-4">
          {/* Updated Blog Button - Opens in new tab */}
          <a
            href="/blogs"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white text-gray-900 rounded hover:bg-gray-100 transition border border-gray-300"
          >
            My Blogs
          </a>
          {/* Updated Projects Button - Opens in new tab */}
          <a
            href="/projects"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-200 text-gray-900 rounded hover:bg-gray-300 transition"
          >
            My Projects
          </a>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="flex-1 flex justify-start mt-10 md:mt-0">
        <div className="w-44 h-44 rounded-full p-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
          <img
            src={passport}
            alt="Ravi Shankar Vats"
            className="w-full h-full object-cover rounded-full border-4 border-white"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;