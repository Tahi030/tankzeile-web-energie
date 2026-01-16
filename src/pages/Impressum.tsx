
import { useEffect } from "react";

const Impressum = () => {
  useEffect(() => {
    // Set page metadata for SEO
    document.title = "Impressum | Captain Apfel";
  }, []);

  return (
    <div className="min-h-screen py-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Impressum</h1>
          
            <div className="prose max-w-none">
              <h2>Angaben gemäß § 5 TMG</h2>
              <p>
                Tamara Hillmann<br />
                Friedrichshagener Straße 5 G<br />
                12555 Berlin
              </p>
              
              <h2>Kontakt</h2>
              <p>
                Telefon: +49 152 06339474<br />
                E-Mail: kontakt@captain-apfel.de
              </p>
              
              <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p>
                Tamara Hillmann<br />
                Friedrichshagener Straße 5 G<br />
                12555 Berlin
              </p>
              
              <h2>EU-Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>
              </p>
              <p>
                Die E-Mail-Adresse finden Sie oben im Impressum.
              </p>
              
              <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
              <p>
                Es besteht keine Bereitschaft oder Verpflichtung, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
              
              <h2>Haftung für Inhalte</h2>
              <p>
                Als Diensteanbieterin besteht gemäß § 7 Abs. 1 TMG die Verantwortlichkeit für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen. Nach §§ 8 bis 10 TMG besteht jedoch keine Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen werden diese Inhalte umgehend entfernt.
              </p>
              
              <h2>Haftung für Links</h2>
              <p>
                Das Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte kein Einfluss besteht. Deshalb kann für diese fremden Inhalte auch keine Gewähr übernommen werden. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Zum Zeitpunkt der Verlinkung wurden die Seiten auf mögliche Rechtsverstöße überprüft; rechtswidrige Inhalte waren dabei nicht erkennbar.
              </p>
              <p>
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden derartige Links umgehend entfernt.
              </p>
              
              <h2>Urheberrecht und Markenschutz</h2>
              <p>
                Die durch die Seitenbetreiberin erstellten Inhalte, Texte, Abbildungen und Konzepte auf dieser Website unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung der Erstellerin.
              </p>
              <p>
                <strong>Besonderer Hinweis zum Markenschutz:</strong><br />
                Die entwickelten Figuren, Namen, Illustrationen und didaktischen Konzepte – insbesondere die Figur und Bezeichnung „Captain Apfel" sowie die zugehörige Crew – sind geistiges Eigentum von Tamara Hillmann und urheberrechtlich geschützt. Die Bezeichnung „Captain Apfel" wird im geschäftlichen Verkehr als Kennzeichen genutzt und genießt entsprechenden Markenschutz.
              </p>
              <p>
                Jede unbefugte Nutzung, Nachahmung oder Weitergabe – auch in Teilen – wird zivil- und strafrechtlich verfolgt.
              </p>
              <p>
                Soweit die Inhalte auf dieser Seite nicht von der Betreiberin erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, wird um einen entsprechenden Hinweis gebeten. Bei Bekanntwerden von Rechtsverletzungen werden derartige Inhalte umgehend entfernt.
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
