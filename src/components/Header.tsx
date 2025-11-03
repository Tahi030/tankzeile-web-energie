
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoText from "@/assets/logo-text.svg";

const NavItem = ({ to, label, dropdown = false, children, textColor, hoverColor }: { 
  to: string, 
  label: string, 
  dropdown?: boolean, 
  children?: React.ReactNode,
  textColor?: string,
  hoverColor?: string 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = location.pathname === to;

  if (dropdown) {
    return (
      <div className="relative group">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`px-2 lg:px-3 py-2 rounded-md text-base lg:text-lg font-medium ${hoverColor || 'hover:bg-primary/10'} transition-colors whitespace-nowrap ${isActive ? `${textColor || 'text-white'} font-semibold` : textColor || 'text-white'}`}
        >
          {label}
          <span className="ml-1">▼</span>
        </button>
        {isOpen && (
          <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
            <div className="py-1" role="menu" aria-orientation="vertical">
              {children}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <Link 
      to={to} 
      className={`px-2 lg:px-3 py-2 rounded-md text-base lg:text-lg font-medium ${hoverColor || 'hover:bg-primary/10'} transition-colors whitespace-nowrap ${isActive ? `${textColor || 'text-white'} font-semibold` : textColor || 'text-white'}`}
      onClick={() => window.scrollTo(0, 0)}
    >
      {label}
    </Link>
  );
};

const DropdownItem = ({ to, label }: { to: string, label: string }) => {
  return (
    <Link 
      to={to} 
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary-dark"
      onClick={() => window.scrollTo(0, 0)}
    >
      {label}
    </Link>
  );
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Warm, natural header design matching the brand
  const getHeaderColor = () => {
    return 'bg-gradient-to-r from-secondary via-primary to-secondary backdrop-blur-sm border-b-4 border-secondary-dark';
  };

  // Consistent styling with white text on colored header
  const getTextColor = () => {
    return 'text-white';
  };

  const getHoverColor = () => {
    return 'hover:bg-white/20';
  };

  return (
    <header className={`${getHeaderColor()} sticky top-0 z-50 shadow-md`}>
      <div className="container-custom">
        <div className="flex justify-between items-center py-2">
          {/* Logo on the left */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center" onClick={() => window.scrollTo(0, 0)}>
              <img 
                src={logoText} 
                alt="Captain Apfel Logo" 
                className="h-20 md:h-24 lg:h-28 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation - centered */}
          <nav className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center justify-center space-x-1 lg:space-x-2">
              <NavItem to="/" label="Startseite" textColor={getTextColor()} hoverColor={getHoverColor()} />
              
              <div className="relative group">
                <div className={`px-2 lg:px-3 py-2 rounded-md text-base lg:text-lg font-medium ${getHoverColor()} transition-colors cursor-pointer whitespace-nowrap ${location.pathname.includes('/workshop') ? `${getTextColor()} font-semibold` : getTextColor()}`}>
                  Workshop <span className="ml-1 text-xs">▼</span>
                </div>
                <div className="absolute left-0 invisible group-hover:visible opacity-0 group-hover:opacity-100 mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-primary/20 z-50 transition-all duration-150">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <DropdownItem to="/meine-angebote/workshop-gesunde-mission" label="Reise zur Powerzentrale" />
                  </div>
                </div>
              </div>
              
              <NavItem to="/essen-ist-fertig" label="Essen ist fertig!" textColor={getTextColor()} hoverColor={getHoverColor()} />
              <NavItem to="/hinter-captain-apfel" label="Über Captain Apfel" textColor={getTextColor()} hoverColor={getHoverColor()} />
              
              <div className="relative group">
                <div className={`px-2 lg:px-3 py-2 rounded-md text-base lg:text-lg font-medium ${getHoverColor()} transition-colors cursor-pointer whitespace-nowrap ${(location.pathname === '/regionally-rooted' || location.pathname === '/meine-angebote/alltag-leichter-leben') ? `${getTextColor()} font-semibold` : getTextColor()}`}>
                  Mehr <span className="ml-1 text-xs">▼</span>
                </div>
                <div className="absolute left-0 invisible group-hover:visible opacity-0 group-hover:opacity-100 mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-primary/20 z-50 transition-all duration-150">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <DropdownItem to="/regionally-rooted" label="Regional verwurzelt" />
                    <DropdownItem to="/meine-angebote/alltag-leichter-leben" label="Leichter leben Blog" />
                  </div>
                </div>
              </div>
            </div>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className={location.pathname === '/tankwelten/captain-apfel-workshop'
                ? `inline-flex items-center justify-center p-2 rounded-md text-rose-700 hover:text-rose-800 hover:bg-rose-200/30`
                : `inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-primary-dark`
              }
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Menü öffnen</span>
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Contact Button - Desktop */}
          <div className="hidden md:block">
            <Link 
              to="/kontakt"
              className="bg-white hover:bg-yellow-50 text-primary px-6 py-3 rounded-full transition-all duration-200 text-base font-medium whitespace-nowrap shadow-lg hover:shadow-xl"
              onClick={() => window.scrollTo(0, 0)}
            >
              Kontakt
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-light ${location.pathname === '/' ? 'text-primary-dark font-bold' : ''}`} onClick={() => {setMobileMenuOpen(false); window.scrollTo(0, 0);}}>
              Startseite
            </Link>
            
            <div className="border-t border-gray-200 pt-2">
              <div className={`px-3 py-2 font-medium ${location.pathname.includes('/workshop') ? 'text-primary-dark font-bold' : ''}`}>Workshop</div>
              <Link to="/meine-angebote/workshop-gesunde-mission" className="block pl-6 py-2 text-sm" onClick={() => {setMobileMenuOpen(false); window.scrollTo(0, 0);}}>
                Reise zur Powerzentrale
              </Link>
            </div>
            
            <Link to="/essen-ist-fertig" className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-light ${location.pathname === '/essen-ist-fertig' ? 'text-primary-dark font-bold' : ''}`} onClick={() => {setMobileMenuOpen(false); window.scrollTo(0, 0);}}>
              Essen ist fertig!
            </Link>
            
            <Link to="/hinter-captain-apfel" className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-light ${location.pathname === '/hinter-captain-apfel' ? 'text-primary-dark font-bold' : ''}`} onClick={() => {setMobileMenuOpen(false); window.scrollTo(0, 0);}}>
              Über Captain Apfel
            </Link>
            
            <div className="border-t border-gray-200 pt-2">
              <div className={`px-3 py-2 font-medium ${(location.pathname === '/regionally-rooted' || location.pathname === '/meine-angebote/alltag-leichter-leben') ? 'text-primary-dark font-bold' : ''}`}>Mehr</div>
              <Link to="/regionally-rooted" className="block pl-6 py-2 text-sm" onClick={() => {setMobileMenuOpen(false); window.scrollTo(0, 0);}}>
                Regional verwurzelt
              </Link>
              <Link to="/meine-angebote/alltag-leichter-leben" className="block pl-6 py-2 text-sm" onClick={() => {setMobileMenuOpen(false); window.scrollTo(0, 0);}}>
                Leichter leben Blog
              </Link>
            </div>
            
            <Link to="/kontakt" className="block mx-3 mt-3 px-3 py-3 bg-white text-primary rounded-md text-base font-medium hover:bg-yellow-50" onClick={() => {setMobileMenuOpen(false); window.scrollTo(0, 0);}}>
              Kontakt
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
