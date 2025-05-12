
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Kontakt</h3>
            <address className="not-italic">
              <p>Tamara Hillmann</p>
              <p>Friedrichshagener Straße 5 G</p>
              <p>12555 Berlin</p>
              <p className="mt-2">Email: <a href="mailto:tankzeile@gmx.de" className="underline hover:text-gray-100">tankzeile@gmx.de</a></p>
              <p>Tel.: <a href="tel:+4915206339474" className="underline hover:text-gray-100">+49 152 06339474</a></p>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Schnelllinks</h3>
            <ul className="space-y-2">
              <li><Link to="/impressum" className="hover:underline">Impressum</Link></li>
              <li><Link to="/datenschutz" className="hover:underline">Datenschutz</Link></li>
              <li><Link to="/kontakt" className="hover:underline">Kontakt</Link></li>
            </ul>
          </div>

          {/* Brand Statement */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Die Tankzeile verbindet</h3>
            <p className="mb-2">Eltern mit Kindern.</p>
            <p className="mb-2">Menschen mit Menschen.</p>
            <p className="mb-2">Dich mit dir.</p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/20 text-center">
          <p>&copy; {new Date().getFullYear()} Tankzeile – Ernährung & Lebensenergie. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
