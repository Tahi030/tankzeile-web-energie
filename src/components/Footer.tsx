
import { Link, useLocation } from "react-router-dom";
import { Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const location = useLocation();
  const isKontaktPage = location.pathname === '/kontakt';

  return (
    <footer className="bg-[hsl(28_50%_85%)] text-[hsl(28_35%_28%)]">
      <div className="container-custom py-10 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[hsl(30_55%_90%)]/40 blur-3xl pointer-events-none"></div>
        <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-[hsl(30_55%_90%)]/40 blur-3xl pointer-events-none"></div>
        
        <div className={`grid gap-8 relative z-10 ${isKontaktPage ? 'grid-cols-1 max-w-md mx-auto' : 'grid-cols-1 md:grid-cols-2'}`}>
          {/* Contact Information - hidden on Kontakt page */}
          {!isKontaktPage && (
            <div className="bg-[hsl(30_50%_90%)]/50 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-[hsl(28_40%_80%)]/30">
              <h3 className="text-xl font-semibold mb-2">Kontakt</h3>
              {/* Hand-drawn line effect */}
              <div className="flex justify-start mb-4">
                <svg width="80" height="6" viewBox="0 0 80 6" className="text-[hsl(28_35%_40%)]">
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
                <p className="font-medium">Tamara Hillmann</p>
                <p className="mt-2">Email: <a href="mailto:kontakt@captain-apfel.de" className="underline hover:text-[hsl(28_40%_40%)] transition-all duration-200 active:scale-95 inline-block">kontakt@captain-apfel.de</a></p>
                <p>Tel.: <a href="tel:+4915206339474" className="underline hover:text-[hsl(28_40%_40%)] transition-all duration-200 active:scale-95 inline-block">+49 152 06339474</a></p>
                <div className="mt-4 flex space-x-4">
                  <a href="https://www.instagram.com/tankzeile?igsh=cjFxdDNrbXNvYnFk" target="_blank" rel="noopener noreferrer" className="hover:text-[hsl(28_40%_40%)] hover:scale-110 transition-all duration-200 active:scale-95">
                    <Instagram size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/tamara-hillmann" target="_blank" rel="noopener noreferrer" className="hover:text-[hsl(28_40%_40%)] hover:scale-110 transition-all duration-200 active:scale-95">
                    <Linkedin size={24} />
                  </a>
                </div>
              </address>
            </div>
          )}

          {/* Quick Links */}
          <div className="bg-[hsl(30_50%_90%)]/50 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-[hsl(28_40%_80%)]/30">
            <h3 className="text-xl font-semibold mb-2">Schnelllinks</h3>
            {/* Hand-drawn line effect */}
            <div className="flex justify-start mb-4">
              <svg width="80" height="6" viewBox="0 0 80 6" className="text-[hsl(28_35%_40%)]">
                <path
                  d="M2,3 Q6,1 10,3 T20,2 Q25,4 30,3 T40,2 Q45,4 50,3 T60,2 Q65,1 70,3 T78,3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-70"
                  style={{
                    filter: 'url(#roughPaperSchnell)',
                  }}
                />
                <defs>
                  <filter id="roughPaperSchnell">
                    <feTurbulence baseFrequency="0.04" numOctaves="3" result="noise" seed="2" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.6" />
                  </filter>
                </defs>
              </svg>
            </div>
            <ul className="space-y-2">
              <li><Link to="/impressum" className="hover:underline hover:text-[hsl(28_40%_40%)] transition-all duration-200 active:scale-95 inline-block">Impressum</Link></li>
              <li><Link to="/datenschutz" className="hover:underline hover:text-[hsl(28_40%_40%)] transition-all duration-200 active:scale-95 inline-block">Datenschutz</Link></li>
              <li><Link to="/kontakt" className="hover:underline hover:text-[hsl(28_40%_40%)] transition-all duration-200 active:scale-95 inline-block">Kontakt</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[hsl(28_40%_75%)]/40 text-center relative z-10">
          <p className="text-xs text-[hsl(28_25%_45%)] mb-2">
            Diese Website verwendet ausschließlich technisch notwendige Cookies, um grundlegende Funktionen bereitzustellen.
            Es findet kein Tracking oder Marketing-Tracking statt.
            Weitere Informationen stehen in der <Link to="/datenschutz" className="underline hover:text-[hsl(28_40%_40%)]">Datenschutzerklärung</Link>.
          </p>
          <p className="text-sm">&copy; 2025 Captain Apfel. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
