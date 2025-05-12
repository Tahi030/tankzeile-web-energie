
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavItem = ({ to, label, dropdown = false, children }: { to: string, label: string, dropdown?: boolean, children?: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = location.pathname === to;

  if (dropdown) {
    return (
      <div className="relative group">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`px-4 py-3 rounded-md text-lg font-medium hover:bg-primary/10 transition-colors ${isActive ? 'text-primary-dark font-semibold' : ''}`}
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
      className={`px-4 py-3 rounded-md text-lg font-medium hover:bg-primary/10 transition-colors ${isActive ? 'text-primary-dark font-semibold' : ''}`}
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
    >
      {label}
    </Link>
  );
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-primary sticky top-0 z-50 shadow-md">
      <div className="container-custom">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/b676a4c4-3880-4820-b675-e4a9643b9ab2.png"
              alt="Tankzeile Icon"
              className="h-12 mr-2"
            />
            <img 
              src="/lovable-uploads/487c452c-3836-4742-9b3f-e4f747cc32e6.png"
              alt="Tankzeile Logo"
              className="h-10"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavItem to="/" label="Home" />
            
            <div className="relative group">
              <div className="px-4 py-3 rounded-md text-lg font-medium hover:bg-primary/10 transition-colors cursor-pointer">
                Tankwelten <span className="ml-1 text-xs">▼</span>
              </div>
              <div className="absolute left-0 hidden group-hover:block mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  <DropdownItem to="/tankwelten/alltag-leichter-leben" label="Alltag leichter leben" />
                  <DropdownItem to="/tankwelten/verstehen-veraendern" label="Verstehen & Verändern" />
                  <DropdownItem to="/tankwelten/erleben-verbinden" label="Erleben & Verbinden" />
                </div>
              </div>
            </div>
            
            <NavItem to="/fuer-einrichtungen" label="Für Einrichtungen" />
            <NavItem to="/fuer-unternehmen" label="Für Unternehmen" />
            <NavItem to="/kontakt" label="Kontakt" />
            <Link 
              to="/kontakt"
              className="bg-secondary hover:bg-secondary-dark text-white px-5 py-3 rounded-md transition-colors ml-4 text-lg font-medium"
            >
              Jetzt anfragen
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-primary-dark"
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
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-light" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            
            <div className="border-t border-gray-200 pt-2">
              <div className="px-3 py-2 font-medium">Tankwelten</div>
              <Link to="/tankwelten/alltag-leichter-leben" className="block pl-6 py-2 text-sm" onClick={() => setMobileMenuOpen(false)}>
                Alltag leichter leben
              </Link>
              <Link to="/tankwelten/verstehen-veraendern" className="block pl-6 py-2 text-sm" onClick={() => setMobileMenuOpen(false)}>
                Verstehen & Verändern
              </Link>
              <Link to="/tankwelten/erleben-verbinden" className="block pl-6 py-2 text-sm" onClick={() => setMobileMenuOpen(false)}>
                Erleben & Verbinden
              </Link>
            </div>
            
            <Link to="/fuer-einrichtungen" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-light" onClick={() => setMobileMenuOpen(false)}>
              Für Einrichtungen
            </Link>
            <Link to="/fuer-unternehmen" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-light" onClick={() => setMobileMenuOpen(false)}>
              Für Unternehmen
            </Link>
            <Link to="/kontakt" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-light" onClick={() => setMobileMenuOpen(false)}>
              Kontakt
            </Link>
            <Link to="/kontakt" className="block mx-3 mt-3 px-3 py-2 bg-secondary text-white rounded-md text-base font-medium" onClick={() => setMobileMenuOpen(false)}>
              Jetzt anfragen
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
