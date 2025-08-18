
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

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

  // Dynamic header color based on current page
  const getHeaderColor = () => {
    if (location.pathname === '/tankwelten/captain-apfel-workshop') {
      return 'bg-gradient-to-r from-rose-100 via-sky-100 to-purple-100';
    }
    return 'bg-primary';
  };

  // Dynamic text colors for Captain Apfelzahn page
  const getTextColor = () => {
    if (location.pathname === '/tankwelten/captain-apfel-workshop') {
      return 'text-rose-700';
    }
    return 'text-white';
  };

  const getHoverColor = () => {
    if (location.pathname === '/tankwelten/captain-apfel-workshop') {
      return 'hover:bg-rose-200/30';
    }
    return 'hover:bg-primary/10';
  };

  return (
    <header className={`${getHeaderColor()} sticky top-0 z-50 shadow-md`}>
      <div className="container-custom">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img 
                src="/lovable-uploads/a7e3dd75-9e76-4f71-9584-34e99d3353a8.png" 
                alt="Tankzeile Logo" 
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation - centered */}
          <nav className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center justify-center space-x-1 lg:space-x-2">
              <NavItem to="/" label="Startseite" textColor={getTextColor()} hoverColor={getHoverColor()} />
              
              <div className="relative group">
                <div className={`px-2 lg:px-3 py-2 rounded-md text-base lg:text-lg font-medium ${getHoverColor()} transition-colors cursor-pointer whitespace-nowrap ${location.pathname.includes('/tankwelten/') ? `${getTextColor()} font-semibold` : getTextColor()}`}>
                  Tankwelten <span className="ml-1 text-xs">▼</span>
                </div>
                <div className="absolute left-0 invisible group-hover:visible opacity-0 group-hover:opacity-100 mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-primary/20 z-50 transition-all duration-150">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <DropdownItem to="/tankwelten/captain-apfel-workshop" label="Captain Apfelzahn Workshop" />
                    <DropdownItem to="/tankwelten/alltag-leichter-leben" label="Alltag leichter leben" />
                  </div>
                </div>
              </div>
              
              <NavItem to="/fuer-einrichtungen" label="Meine Mission" textColor={getTextColor()} hoverColor={getHoverColor()} />
              <NavItem to="/meine-angebote" label="Meine Angebote" textColor={getTextColor()} hoverColor={getHoverColor()} />
              <NavItem to="/regionally-rooted" label="Regional verwurzelt" textColor={getTextColor()} hoverColor={getHoverColor()} />
            </div>
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              to="/kontakt"
              className={location.pathname === '/tankwelten/captain-apfel-workshop' 
                ? `bg-gradient-to-r from-rose-200 to-sky-200 hover:from-rose-300 hover:to-sky-300 text-rose-700 px-4 lg:px-5 py-2 rounded-md transition-colors text-base lg:text-lg font-medium whitespace-nowrap border border-rose-300/50`
                : `bg-secondary hover:bg-secondary-dark text-white px-4 lg:px-5 py-2 rounded-md transition-colors text-base lg:text-lg font-medium whitespace-nowrap`
              }
              onClick={() => window.scrollTo(0, 0)}
            >
              Jetzt anfragen
            </Link>
          </div>

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
              <div className={`px-3 py-2 font-medium ${location.pathname.includes('/tankwelten/') ? 'text-primary-dark font-bold' : ''}`}>Tankwelten</div>
              <Link to="/tankwelten/captain-apfel-workshop" className="block pl-6 py-2 text-sm" onClick={() => {setMobileMenuOpen(false); window.scrollTo(0, 0);}}>
                Captain Apfelzahn Workshop
              </Link>
              <Link to="/tankwelten/alltag-leichter-leben" className="block pl-6 py-2 text-sm" onClick={() => {setMobileMenuOpen(false); window.scrollTo(0, 0);}}>
                Alltag leichter leben
              </Link>
            </div>
            
            <Link to="/fuer-einrichtungen" className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-light ${location.pathname === '/fuer-einrichtungen' ? 'text-primary-dark font-bold' : ''}`} onClick={() => {setMobileMenuOpen(false); window.scrollTo(0, 0);}}>
              Meine Mission
            </Link>
            <Link to="/meine-angebote" className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-light ${location.pathname === '/meine-angebote' ? 'text-primary-dark font-bold' : ''}`} onClick={() => {setMobileMenuOpen(false); window.scrollTo(0, 0);}}>
              Meine Angebote
            </Link>
            <Link to="/regionally-rooted" className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-light ${location.pathname === '/regionally-rooted' ? 'text-primary-dark font-bold' : ''}`} onClick={() => {setMobileMenuOpen(false); window.scrollTo(0, 0);}}>
              Regional verwurzelt
            </Link>
            <Link to="/kontakt" className="block mx-3 mt-3 px-3 py-3 bg-secondary text-white rounded-md text-base font-medium" onClick={() => {setMobileMenuOpen(false); window.scrollTo(0, 0);}}>
              Jetzt anfragen
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
