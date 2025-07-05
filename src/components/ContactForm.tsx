
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, AlertCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const ContactForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    datenschutz: false
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sanitizeInput = (input: string) => {
    return input.trim().replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : sanitizeInput(value)
    }));
    setError(null);
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('Name ist erforderlich');
      return false;
    }
    if (!formData.email.trim()) {
      setError('E-Mail ist erforderlich');
      return false;
    }
    if (!validateEmail(formData.email)) {
      setError('Bitte geben Sie eine gültige E-Mail-Adresse ein');
      return false;
    }
    if (!formData.message.trim()) {
      setError('Nachricht ist erforderlich');
      return false;
    }
    if (!formData.datenschutz) {
      setError('Bitte stimmen Sie der Datenschutzerklärung zu');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Call our secure edge function
      const { data, error: functionError } = await supabase.functions.invoke('send-contact-form', {
        body: {
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Kontaktanfrage',
          message: formData.message
        }
      });

      if (functionError) {
        throw functionError;
      }

      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        datenschutz: false
      });
      
      // Scroll to top to show success message
      window.scrollTo(0, 0);
    } catch (err: any) {
      console.error('Error submitting form:', err);
      setError('Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.');
    } finally {
      setIsLoading(false);
    }
  };

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

      {error && (
        <Alert className="mb-8 bg-red-50 border-red-200">
          <AlertCircle className="h-5 w-5 text-red-500" />
          <AlertDescription className="ml-2 text-red-700">
            {error}
          </AlertDescription>
        </Alert>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name *
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              maxLength={100}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              E-Mail *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="E-Mail"
              maxLength={255}
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
            value={formData.subject}
            onChange={handleInputChange}
            placeholder="Betreff"
            maxLength={200}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium">
            Nachricht *
          </label>
          <Textarea
            id="message"
            name="message"
            rows={6}
            required
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Nachricht"
            className="min-h-[150px]"
            maxLength={2000}
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-start">
            <input 
              type="checkbox" 
              id="datenschutz" 
              name="datenschutz" 
              required 
              checked={formData.datenschutz}
              onChange={handleInputChange}
              className="mt-1 mr-3 h-4 w-4"
            />
            <label htmlFor="datenschutz" className="text-sm">
              Ich stimme der Verarbeitung meiner Daten gemäß der <Link to="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</Link> zu. *
            </label>
          </div>
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            disabled={isLoading}
            className="bg-primary text-white hover:bg-primary/90 disabled:opacity-50"
          >
            {isLoading ? 'Wird gesendet...' : 'Nachricht senden'}
          </Button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
