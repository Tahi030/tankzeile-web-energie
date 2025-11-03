
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLayout from "./components/PageLayout";

// Pages
import Index from "./pages/Index";
import CaptainApfelHome from "./pages/CaptainApfelHome";
import AlltagLeichterLeben from "./pages/AlltagLeichterLeben";
import VerstehenVeraendern from "./pages/VerstehenVeraendern";
import ErlebenVerbinden from "./pages/ErlebenVerbinden";
import CaptainApfelWorkshop from "./pages/CaptainApfelWorkshop";
import WorkshopGesundeMission from "./pages/WorkshopGesundeMission";
import WorkshopLieblingsdose from "./pages/WorkshopLieblingsdose";
import Schatzruhe from "./pages/Schatzruhe";
import FuerEinrichtungen from "./pages/FuerEinrichtungen";
import FuerUnternehmen from "./pages/FuerUnternehmen";
import Kontakt from "./pages/Kontakt";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import RegionallyRooted from "./pages/RegionallyRooted";
import EssenIstFertig from "./pages/EssenIstFertig";
import HinterCaptainApfel from "./pages/HinterCaptainApfel";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Captain Apfel Workshop - standalone without PageLayout */}
          <Route path="/tankwelten/captain-apfel-workshop" element={<CaptainApfelWorkshop />} />
          
          {/* All other pages use PageLayout */}
          <Route path="/*" element={
            <PageLayout>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/captain-apfel" element={<CaptainApfelHome />} />
                <Route path="/regionally-rooted" element={<RegionallyRooted />} />
                <Route path="/essen-ist-fertig" element={<EssenIstFertig />} />
                <Route path="/hinter-captain-apfel" element={<HinterCaptainApfel />} />
                <Route path="/meine-angebote/workshop-gesunde-mission" element={<WorkshopGesundeMission />} />
                <Route path="/meine-angebote/workshop-lieblingsdose" element={<WorkshopLieblingsdose />} />
                <Route path="/meine-angebote/alltag-leichter-leben" element={<AlltagLeichterLeben />} />
                <Route path="/tankwelten/alltag-leichter-leben" element={<AlltagLeichterLeben />} />
                <Route path="/tankwelten/verstehen-veraendern" element={<VerstehenVeraendern />} />
                <Route path="/tankwelten/erleben-verbinden" element={<ErlebenVerbinden />} />
                <Route path="/tankwelten/schatzruhe" element={<Schatzruhe />} />
                <Route path="/fuer-einrichtungen" element={<FuerEinrichtungen />} />
                <Route path="/fuer-unternehmen" element={<FuerUnternehmen />} />
                <Route path="/kontakt" element={<Kontakt />} />
                <Route path="/impressum" element={<Impressum />} />
                <Route path="/datenschutz" element={<Datenschutz />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </PageLayout>
          } />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
