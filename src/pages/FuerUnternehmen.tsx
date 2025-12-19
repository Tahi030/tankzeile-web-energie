
import { useEffect } from "react";
import { Link } from "react-router-dom";
import CustomerFeedback from "@/components/CustomerFeedback";

const FuerUnternehmen = () => {
  useEffect(() => {
    // Set page metadata for SEO
    document.title = "Für Unternehmen | Captain Apfel";
  }, []);

  return (
    <div className="min-h-screen bg-muted">
      {/* Hero Section - harmonisch */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground font-luckiest">Für Unternehmen</h1>
            <p className="text-lg text-muted-foreground">
              Captain Apfel ist mehr als ein Projekt. Es ist ein Beitrag für die Zukunft.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-12 md:pb-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2>Warum Captain Apfel unterstützen?</h2>
              <p>
                Unternehmen, die Captain Apfel unterstützen oder Workshops buchen:
              </p>
              <ul>
                <li>investieren in die Gesundheit von Familien</li>
                <li>zeigen gesellschaftliches Engagement</li>
                <li>fördern echte Prävention – spielerisch, alltagstauglich, nachhaltig</li>
              </ul>
              
              <div className="my-8 bg-primary-light p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-4">Nutzen für Ihr Unternehmen:</h3>
                <ul>
                  <li>Sichtbare Beteiligung an einem sozialen, gesundheitsfördernden Projekt</li>
                  <li>Stärkung Ihrer Position als familienfreundlicher Arbeitgeber</li>
                  <li>Möglichkeit zur Kooperation (z. B. Workshop-Patenschaften für Kitas)</li>
                  <li>Authentische Inhalte für Ihre Kommunikation (z. B. Presse, Website, CSR-Berichte)</li>
                </ul>
              </div>
              
              <h3>Was Sie mitgestalten:</h3>
              <ul>
                <li>Gesunde Ernährung für Kinder</li>
                <li>Achtsamkeit & emotionale Verbindung im Familienalltag</li>
                <li>Wissen, das wirklich im Alltag ankommt</li>
              </ul>
              
              <h3>So können Sie unterstützen:</h3>
              <ul>
                <li>Einen Workshop für eine Kita ermöglichen</li>
                <li>Downloads mitfinanzieren</li>
                <li>Gemeinsame Projekte entwickeln (z. B. „Tankbox für Mitarbeitende")</li>
              </ul>
              
              <div className="my-8 p-6 border-l-4 border-primary bg-gray-50">
                <p className="italic text-gray-700">
                  „Wir machen Wirkung gemeinsam sichtbar. Für heute. Für morgen."
                </p>
              </div>
              
              <h3>Für Ihre Mitarbeitenden</h3>
              <p>
                Als Unternehmen können Sie auch direkt Ihre Mitarbeitenden unterstützen:
              </p>
              <ul>
                <li>Workshops zur gesunden Ernährung im Berufsalltag</li>
                <li>Vorträge zum Thema "Energie und Ernährung"</li>
                <li>Spezielle Angebote für berufstätige Eltern</li>
              </ul>
              
              <p>
                Captain Apfel bietet maßgeschneiderte Lösungen für Unternehmen jeden Umfangs. Gemeinsam entwickeln wir ein Konzept, das zu Ihren Werten und Zielen passt.
              </p>
            </div>

            <CustomerFeedback />

            <div className="mt-12 text-center">
              <Link to="/kontakt" className="btn-primary">
                Lassen Sie uns ins Gespräch kommen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FuerUnternehmen;
