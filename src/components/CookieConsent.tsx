
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

const CookieConsent = () => {
  const [open, setOpen] = useState(false);

  // Force the banner to be visible on component mount
  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    
    // Always show the banner (for testing)
    // Remove this override later if needed
    setOpen(true);
    
    // Original logic (uncomment when needed)
    // if (!cookieConsent) {
    //   setOpen(true);
    // }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setOpen(false);
    toast.success("Cookie-Einstellungen gespeichert", {
      description: "Sie haben alle Cookies akzeptiert.",
    });
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setOpen(false);
    toast.success("Cookie-Einstellungen gespeichert", {
      description: "Sie haben nur notwendige Cookies akzeptiert.",
    });
    
    // When declined, we would normally disable analytics and other tracking here
  };

  if (!open) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50 p-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-1">Cookie-Einstellungen</h3>
            <p className="text-sm text-gray-600 mb-2">
              Wir verwenden Cookies, um die Funktionalität unserer Website zu verbessern und Ihr Erlebnis zu personalisieren.
            </p>
            <p className="text-xs text-gray-500">
              Weitere Informationen finden Sie in unserer <a href="/datenschutz" className="text-primary underline hover:text-primary-dark">Datenschutzerklärung</a>.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" onClick={handleDecline} className="whitespace-nowrap">
              Nur notwendige Cookies
            </Button>
            <Button onClick={handleAccept} className="whitespace-nowrap">
              Alle Cookies akzeptieren
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
