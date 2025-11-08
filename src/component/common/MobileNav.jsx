import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const MobileNav = ({ isOpen, onClose }) => {
  const [modelsOpen, setModelsOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div className="absolute top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-xl p-6 flex flex-col">
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold">Menu</div>
          <button onClick={onClose} aria-label="Close menu" className="p-2 !bg-transparent">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="mt-6 flex-1 overflow-auto">
          <ul className="flex flex-col gap-4 text-gray-800">
            <li>
              <Link to="/" onClick={onClose} className="block font-medium">Home</Link>
            </li>

            <li>
              <div
                role="button"
                tabIndex={0}
                onClick={() => setModelsOpen((s) => !s)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setModelsOpen(s => !s); } }}
                aria-expanded={modelsOpen}
                className="w-full flex items-center justify-between text-left font-medium"
              >
                <span className="text-gray-800">Models</span>
                <svg className={`w-5 h-5 text-gray-500 transform transition-transform ${modelsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              <ul className={`pl-4 mt-1 space-y-1 overflow-hidden transition-[max-height] duration-200 ${modelsOpen ? 'max-h-40' : 'max-h-0'}`}>
                <li><Link to="/abac" onClick={onClose} className="block py-1">ABAC</Link></li>
                <li><Link to="/rbac" onClick={onClose} className="block py-1">RBAC</Link></li>
                <li><Link to="/rebac" onClick={onClose} className="block py-1">ReBAC</Link></li>
              </ul>
            </li>

            <li>
              <div
                role="button"
                tabIndex={0}
                onClick={() => setCompanyOpen((s) => !s)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setCompanyOpen(s => !s); } }}
                aria-expanded={companyOpen}
                className="w-full flex items-center justify-between text-left font-medium"
              >
                <span className="text-gray-800">Company</span>
                <svg className={`w-5 h-5 text-gray-500 transform transition-transform ${companyOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              <ul className={`pl-4 mt-1 space-y-1 overflow-hidden transition-[max-height] duration-200 ${companyOpen ? 'max-h-56' : 'max-h-0'}`}>
                <li><Link to="/careers" onClick={onClose} className="block py-1">Careers</Link></li>
                <li><Link to="/authapp" onClick={onClose} className="block py-1">About</Link></li>
                <li><Link to="/service-packages" onClick={onClose} className="block py-1">Service Plans</Link></li>
                <li><Link to="/how-migration-works" onClick={onClose} className="block py-1">Migration Process</Link></li>
              </ul>
            </li>

            <li>
              <Link to="/projects" onClick={onClose} className="block font-medium">Projects</Link>
            </li>

            <li>
              <Link to="/blogs" onClick={onClose} className="block font-medium">Blogs</Link>
            </li>
          </ul>
        </nav>

        <div className="mt-4 border-t pt-4 flex items-center gap-4">
          <a href="https://x.com/ravisvats" target="_blank" rel="noreferrer" className="text-cyan-500"><FaTwitter /></a>
          <a href="https://www.linkedin.com/in/ravivats/" target="_blank" rel="noreferrer" className="text-blue-800"><FaLinkedin /></a>
          <a href="mailto:ravisvats@gmail.com" className="text-red-500"><FaEnvelope /></a>
          <a href="https://wa.me/918875603044" target="_blank" rel="noreferrer" className="text-green-600"><FaWhatsapp /></a>
        </div>

      </div>
    </div>
  );
};

export default MobileNav;
