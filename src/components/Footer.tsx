
import { Link } from "react-router-dom";
import { Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-10 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-primary-light/20 blur-3xl pointer-events-none"></div>
        <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-primary-light/20 blur-3xl pointer-events-none"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/5">
            <h3 className="text-xl font-semibold mb-2">Kontakt</h3>
            {/* Hand-drawn line effect */}
            <div className="flex justify-start mb-4">
              <svg width="80" height="6" viewBox="0 0 80 6" className="text-white">
                <path
                  d="M2,3 Q6,1 10,3 T20,2 Q25,4 30,3 T40,2 Q45,4 50,3 T60,2 Q65,1 70,3 T78,3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-70"
                  style={{
                    filter: 'url(#roughPaper)',
                  }}
                />
                <defs>
                  <filter id="roughPaper">
                    <feTurbulence baseFrequency="0.04" numOctaves="3" result="noise" seed="1" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.6" />
                  </filter>
                </defs>
              </svg>
            </div>
            <address className="not-italic">
              <p className="text-white font-medium">Tamara Hillmann</p>
              <p className="mt-2">Email: <a href="mailto:tankzeile@gmx.de" className="underline hover:text-gray-100">tankzeile@gmx.de</a></p>
              <p>Tel.: <a href="tel:+4915206339474" className="underline hover:text-gray-100">+49 152 06339474</a></p>
              <div className="mt-4 flex space-x-4">
                <a href="https://www.instagram.com/tankzeile?igsh=cjFxdDNrbXNvYnFk" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="https://www.linkedin.com/in/tamara-hillmann" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </address>
          </div>

          {/* Quick Links */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/5">
            <h3 className="text-xl font-semibold mb-4">Schnelllinks</h3>
            <ul className="space-y-2">
              <li><Link to="/impressum" className="hover:underline transition-all">Impressum</Link></li>
              <li><Link to="/datenschutz" className="hover:underline transition-all">Datenschutz</Link></li>
              <li><Link to="/kontakt" className="hover:underline transition-all">Kontakt</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/20 text-center relative z-10">
          <p>&copy; {new Date().getFullYear()} Tankzeile – Ernährung & Lebensenergie. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
