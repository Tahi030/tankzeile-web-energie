
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
          className={`px-2 lg:px-3 py-2 rounded-md text-base lg:text-lg font-medium ${hoverColor || 'hover:bg-primary/10'} transition-all duration-200 whitespace-nowrap active:scale-95 ${isActive ? `${textColor || 'text-white'} font-semibold bg-muted/50` : textColor || 'text-white'}`}
        >
          {label}
          <span className="ml-1 transition-transform duration-200 inline-block">{isOpen ? '▲' : '▼'}</span>
        </button>
        {isOpen && (
          <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-primary/20 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
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
      className={`px-2 lg:px-3 py-2 rounded-md text-base lg:text-lg font-medium ${hoverColor || 'hover:bg-primary/10'} transition-all duration-200 whitespace-nowrap active:scale-95 ${isActive ? `${textColor || 'text-white'} font-semibold bg-muted/50` : textColor || 'text-white'}`}
      onClick={() => window.scrollTo(0, 0)}
    >
      {label}
    </Link>
  );
};

const DropdownItem = ({ to, label }: { to: string, label: string }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`block px-4 py-2 text-sm transition-all duration-200 active:scale-95 ${isActive ? 'bg-muted text-primary font-semibold' : 'text-gray-700 hover:bg-muted/60 hover:text-primary'}`}
      onClick={() => window.scrollTo(0, 0)}
    >
      {label}
    </Link>
  );
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Simple, solid color header - no gradient
  const getHeaderColor = () => {
    return 'bg-white border-b-2 border-border';
  };

  // Dark text on white background
  const getTextColor = () => {
    return 'text-foreground';
  };

  const getHoverColor = () => {
    return 'hover:bg-muted';
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
                <div className={`px-2 lg:px-3 py-2 rounded-md text-base lg:text-lg font-medium ${getHoverColor()} transition-all duration-200 cursor-pointer whitespace-nowrap active:scale-95 ${location.pathname.includes('/workshop') ? `${getTextColor()} font-semibold bg-muted/50` : getTextColor()}`}>
                  Workshop <span className="ml-1 text-xs transition-transform duration-200 inline-block group-hover:rotate-180">▼</span>
                </div>
                <div className="absolute left-0 invisible group-hover:visible opacity-0 group-hover:opacity-100 mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-primary/20 z-50 transition-all duration-200">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <DropdownItem to="/meine-angebote/workshop-gesunde-mission" label="Reise zur Powerzentrale" />
                  </div>
                </div>
              </div>
              
              <NavItem to="/essen-ist-fertig" label="Essen ist fertig!" textColor={getTextColor()} hoverColor={getHoverColor()} />
              <NavItem to="/meine-angebote/alltag-leichter-leben" label="Powercrew" textColor={getTextColor()} hoverColor={getHoverColor()} />
              <NavItem to="/hinter-captain-apfel" label="Über Captain Apfel" textColor={getTextColor()} hoverColor={getHoverColor()} />
              
              <div className="relative group">
                <div className={`px-2 lg:px-3 py-2 rounded-md text-base lg:text-lg font-medium ${getHoverColor()} transition-all duration-200 cursor-pointer whitespace-nowrap active:scale-95 ${(location.pathname === '/regionally-rooted') ? `${getTextColor()} font-semibold bg-muted/50` : getTextColor()}`}>
                  Mehr <span className="ml-1 text-xs transition-transform duration-200 inline-block group-hover:rotate-180">▼</span>
                </div>
                <div className="absolute left-0 invisible group-hover:visible opacity-0 group-hover:opacity-100 mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-primary/20 z-50 transition-all duration-200">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <DropdownItem to="/regionally-rooted" label="Regional verwurzelt" />
                  </div>
                </div>
              </div>
            </div>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-primary/10"
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
              className="bg-[hsl(25_30%_88%)] hover:bg-[hsl(25_35%_82%)] text-[hsl(25_30%_25%)] px-6 py-3 rounded-full transition-all duration-300 text-base font-medium whitespace-nowrap shadow-md hover:shadow-lg active:scale-95"
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
            <Link to="/" className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 active:scale-95 ${location.pathname === '/' ? 'text-primary font-bold bg-muted' : 'hover:bg-muted/60'}`} onClick={() => {setMobileMenuOpen(false); window.scrollTo(0, 0);}}>
              Startseite
            </Link>
            
            <div className="border-t border-border pt-2">
              <div className={`px-3 py-2 font-medium ${location.pathname.includes('/workshop') ? 'text-primary font-bold' : ''}`}>Workshop</div>
              <Link to="/meine-angebote/workshop-gesunde-mission" className={`block pl-6 py-2 text-sm transition-all duration-200 active:scale-95 ${location.pathname === '/meine-angebote/workshop-gesunde-mission' ? 'text-primary font-semibold bg-muted/60' : 'hover:bg-muted/40'}`} onClick={() => {setMobileMenuOpen(false); window.scrollTo(0, 0);}}>
                Reise zur Powerzentrale
              </Link>
            </div>
            
            <Link to="/essen-ist-fertig" className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 active:scale-95 ${location.pathname === '/essen-ist-fertig' ? 'text-primary font-bold bg-muted' : 'hover:bg-muted/60'}`} onClick={() => {setMobileMenuOpen(false); window.scrollTo(0, 0);}}>
              Essen ist fertig!
            </Link>
            
            <Link to="/meine-angebote/alltag-leichter-leben" className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 active:scale-95 ${location.pathname === '/meine-angebote/alltag-leichter-leben' ? 'text-primary font-bold bg-muted' : 'hover:bg-muted/60'}`} onClick={() => {setMobileMenuOpen(false); window.scrollTo(0, 0);}}>
              Powercrew
            </Link>
            
            <Link to="/hinter-captain-apfel" className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 active:scale-95 ${location.pathname === '/hinter-captain-apfel' ? 'text-primary font-bold bg-muted' : 'hover:bg-muted/60'}`} onClick={() => {setMobileMenuOpen(false); window.scrollTo(0, 0);}}>
              Über Captain Apfel
            </Link>
            
            <div className="border-t border-border pt-2">
              <div className={`px-3 py-2 font-medium ${(location.pathname === '/regionally-rooted') ? 'text-primary font-bold' : ''}`}>Mehr</div>
              <Link to="/regionally-rooted" className={`block pl-6 py-2 text-sm transition-all duration-200 active:scale-95 ${location.pathname === '/regionally-rooted' ? 'text-primary font-semibold bg-muted/60' : 'hover:bg-muted/40'}`} onClick={() => {setMobileMenuOpen(false); window.scrollTo(0, 0);}}>
                Regional verwurzelt
              </Link>
            </div>
            
            <Link to="/kontakt" className="block mx-3 mt-3 px-3 py-3 bg-[hsl(25_30%_88%)] text-[hsl(25_30%_25%)] rounded-md text-base font-medium transition-all duration-300 hover:bg-[hsl(25_35%_82%)] hover:shadow-md active:scale-95" onClick={() => {setMobileMenuOpen(false); window.scrollTo(0, 0);}}>
              Kontakt
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
