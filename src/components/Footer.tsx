
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
            <h3 className="text-xl font-semibold mb-4">Kontakt</h3>
            <address className="not-italic">
              <p>Tamara Hillmann</p>
              <p>Friedrichshagener Straße 5 G</p>
              <p>12555 Berlin</p>
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
