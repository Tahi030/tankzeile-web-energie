
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Set page metadata for SEO
    document.title = "Seite nicht gefunden | Tankzeile";
    
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-24">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <p className="text-2xl text-gray-600 mb-6">Diese Seite existiert nicht</p>
        <p className="text-gray-500 mb-8">
          Die gesuchte Seite wurde nicht gefunden. Sie wurde möglicherweise entfernt oder die URL wurde geändert.
        </p>
        <Link 
          to="/" 
          className="btn-primary"
        >
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
