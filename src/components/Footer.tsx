
import { Link, useLocation } from "react-router-dom";
import { Instagram } from "lucide-react";

const Footer = () => {
  const location = useLocation();
  const isKontaktPage = location.pathname === '/kontakt';

  return (
    <footer className="bg-[hsl(28_55%_88%)] text-[hsl(220_15%_30%)]">
      <div className="container-custom py-10 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[hsl(30_55%_92%)]/40 blur-3xl pointer-events-none"></div>
        <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-[hsl(30_55%_92%)]/40 blur-3xl pointer-events-none"></div>
        
        <div className={`grid gap-8 relative z-10 ${isKontaktPage ? 'grid-cols-1 max-w-md mx-auto' : 'grid-cols-1 md:grid-cols-2'}`}>
          {/* Contact Information - hidden on Kontakt page */}
          {!isKontaktPage && (
            <div className="bg-[hsl(32_50%_92%)]/60 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-[hsl(28_45%_85%)]/40">
              <h3 className="text-xl font-semibold mb-2">Kontakt</h3>
              {/* Hand-drawn line effect */}
              <div className="flex justify-start mb-4">
                <svg width="80" height="6" viewBox="0 0 80 6" className="text-[hsl(12_55%_50%)]">
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
                <p className="mt-2">Email: <a href="mailto:kontakt@captain-apfel.de" className="underline hover:text-[hsl(18_65%_55%)] transition-all duration-200 active:scale-95 inline-block">kontakt@captain-apfel.de</a></p>
                <p>Tel.: <a href="tel:+4915206339474" className="underline hover:text-[hsl(18_65%_55%)] transition-all duration-200 active:scale-95 inline-block">+49 152 06339474</a></p>
                <div className="mt-4 flex gap-3">
                  <a href="https://www.instagram.com/captain.apfel/" target="_blank" rel="noopener noreferrer" className="hover:text-[hsl(18_65%_55%)] hover:scale-110 transition-all duration-200 active:scale-95 inline-block">
                    <Instagram size={24} />
                  </a>
                  <a href="https://www.pinterest.com/captainapfel030/" target="_blank" rel="noopener noreferrer" className="hover:text-[hsl(18_65%_55%)] hover:scale-110 transition-all duration-200 active:scale-95 inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
                  </a>
                </div>
              </address>
            </div>
          )}

          {/* Quick Links */}
          <div className="bg-[hsl(32_50%_92%)]/60 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-[hsl(28_45%_85%)]/40">
            <h3 className="text-xl font-semibold mb-2">Schnelllinks</h3>
            {/* Hand-drawn line effect */}
            <div className="flex justify-start mb-4">
              <svg width="80" height="6" viewBox="0 0 80 6" className="text-[hsl(12_55%_50%)]">
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
              <li><Link to="/impressum" className="hover:underline hover:text-[hsl(18_65%_55%)] transition-all duration-200 active:scale-95 inline-block">Impressum</Link></li>
              <li><Link to="/datenschutz" className="hover:underline hover:text-[hsl(18_65%_55%)] transition-all duration-200 active:scale-95 inline-block">Datenschutz</Link></li>
              <li><Link to="/kontakt" className="hover:underline hover:text-[hsl(18_65%_55%)] transition-all duration-200 active:scale-95 inline-block">Kontakt</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[hsl(28_45%_80%)]/50 text-center relative z-10">
          <p className="text-xs text-[hsl(220_12%_45%)] mb-2">
            Diese Website verwendet ausschließlich technisch notwendige Cookies, um grundlegende Funktionen bereitzustellen.
            Es findet kein Tracking oder Marketing-Tracking statt.
            Weitere Informationen stehen in der <Link to="/datenschutz" className="underline hover:text-[hsl(18_65%_55%)]">Datenschutzerklärung</Link>.
          </p>
          <p className="text-sm">&copy; 2025 Captain Apfel. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
