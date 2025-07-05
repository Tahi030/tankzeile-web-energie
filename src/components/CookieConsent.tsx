
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

const CookieConsent = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    
    // Only show if user hasn't made a choice yet
    if (!cookieConsent) {
      // Small delay to ensure page is loaded
      const timer = setTimeout(() => {
        setOpen(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setOpen(false);
    toast.success("Cookie-Einstellungen gespeichert", {
      description: "Sie haben alle Cookies akzeptiert.",
    });
    
    // Enable analytics and other tracking here if needed
    // Example: window.gtag && window.gtag('consent', 'update', { analytics_storage: 'granted' });
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setOpen(false);
    toast.success("Cookie-Einstellungen gespeichert", {
      description: "Sie haben nur notwendige Cookies akzeptiert.",
    });
    
    // Disable analytics and other tracking
    // Example: window.gtag && window.gtag('consent', 'update', { analytics_storage: 'denied' });
  };

  const handleSettings = () => {
    // For now, just show the decline option
    // In the future, this could open a detailed cookie settings modal
    handleDecline();
  };

  if (!open) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50 p-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-1">Cookie-Einstellungen</h3>
            <p className="text-sm text-gray-600 mb-2">
              Wir verwenden notwendige Cookies für die Funktionalität unserer Website. Optional können Sie uns erlauben, zusätzliche Cookies zu verwenden, um Ihr Erlebnis zu verbessern.
            </p>
            <p className="text-xs text-gray-500">
              Weitere Informationen finden Sie in unserer <a href="/datenschutz" className="text-primary underline hover:text-primary-dark">Datenschutzerklärung</a>.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" onClick={handleDecline} className="whitespace-nowrap">
              Nur notwendige
            </Button>
            <Button variant="ghost" onClick={handleSettings} className="whitespace-nowrap text-sm">
              Einstellungen
            </Button>
            <Button onClick={handleAccept} className="whitespace-nowrap">
              Alle akzeptieren
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
