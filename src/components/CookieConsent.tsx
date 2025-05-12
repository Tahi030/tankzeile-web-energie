
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

const CookieConsent = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Check if user has already made a cookie choice
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setOpen(true);
    }
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

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Cookie-Einstellungen</DialogTitle>
          <DialogDescription>
            Wir verwenden Cookies, um die Funktionalität unserer Website zu verbessern und Ihr Erlebnis zu personalisieren.
          </DialogDescription>
        </DialogHeader>
        <div className="text-sm mt-4 mb-4">
          <p className="mb-2">
            Diese Website verwendet notwendige Cookies, um die ordnungsgemäße Funktionsweise zu gewährleisten, und möchte optionale Cookies verwenden, um Ihnen ein optimales Erlebnis zu bieten.
          </p>
          <p>
            Weitere Informationen finden Sie in unserer <a href="/datenschutz" className="text-primary underline hover:text-primary-dark">Datenschutzerklärung</a>.
          </p>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={handleDecline}>
            Nur notwendige Cookies
          </Button>
          <Button onClick={handleAccept}>
            Alle Cookies akzeptieren
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CookieConsent;
