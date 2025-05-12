
import { useEffect } from "react";
import ContactForm from "@/components/ContactForm";

const Kontakt = () => {
  useEffect(() => {
    // Set page metadata for SEO
    document.title = "Kontakt | Tankzeile";
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">Kontakt</h1>
            <p className="text-lg text-white mb-4">
              Ich freue mich, von dir zu hören! Hast du Fragen, Anregungen oder möchtest du mehr über meine Angebote erfahren?
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">Kontaktinformationen</h2>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <h3 className="font-medium mb-1">Adresse:</h3>
                    <address className="not-italic">
                      Tamara Hillmann<br />
                      Friedrichshagener Straße 5 G<br />
                      12555 Berlin
                    </address>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-1">E-Mail:</h3>
                    <p><a href="mailto:tankzeile@gmx.de" className="text-primary-dark hover:underline">tankzeile@gmx.de</a></p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-1">Telefon:</h3>
                    <p><a href="tel:+4915206339474" className="text-primary-dark hover:underline">+49 152 06339474</a></p>
                  </div>
                </div>
                
                <h2 className="text-2xl font-semibold mb-6">Folge mir</h2>
                <div className="flex space-x-4">
                  {/* Social media icons would go here - using placeholder links */}
                  <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">Schreib mir eine Nachricht</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kontakt;
