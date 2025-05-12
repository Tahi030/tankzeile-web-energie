
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link, useLocation } from "react-router-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle } from "lucide-react";

const ContactForm = () => {
  const location = useLocation();
  const [isSuccess, setIsSuccess] = useState(false);
  
  useEffect(() => {
    // Check if the URL contains the success parameter
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get('erfolg') === '1') {
      setIsSuccess(true);
      // Scroll to the top of the page
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      {isSuccess && (
        <Alert className="mb-8 bg-green-50 border-green-200">
          <CheckCircle className="h-5 w-5 text-green-500" />
          <AlertDescription className="ml-2 text-green-700 text-lg">
            Danke, deine Nachricht wurde erfolgreich versendet! Wir melden uns bald bei dir.
          </AlertDescription>
        </Alert>
      )}
      
      <form action="https://formsubmit.co/tankzeile@gmx.de" method="POST" className="space-y-6">
        <input type="hidden" name="_next" value="https://tankzeile.de/kontakt?erfolg=1" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_autoresponse" value="Danke für deine Nachricht. Wir melden uns bald." />
        <input type="hidden" name="_template" value="table" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              E-Mail
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="E-Mail"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium">
            Betreff
          </label>
          <Input
            id="subject"
            name="subject"
            type="text"
            placeholder="Betreff"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium">
            Nachricht
          </label>
          <Textarea
            id="message"
            name="message"
            rows={6}
            required
            placeholder="Nachricht"
            className="min-h-[150px]"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-start">
            <input 
              type="checkbox" 
              id="datenschutz" 
              name="datenschutz" 
              required 
              className="mt-1 mr-3 h-4 w-4"
            />
            <label htmlFor="datenschutz" className="text-sm">
              Ich stimme der Verarbeitung meiner Daten gemäß der <Link to="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</Link> zu.
            </label>
          </div>
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            className="bg-primary text-white hover:bg-primary/90"
          >
            Nachricht senden
          </Button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
