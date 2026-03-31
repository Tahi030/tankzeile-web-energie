import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLayout from "./components/PageLayout";

// Eagerly loaded (landing page)
import Index from "./pages/Index";

// Lazy loaded pages
const CaptainApfelHome = lazy(() => import("./pages/CaptainApfelHome"));
const AlltagLeichterLeben = lazy(() => import("./pages/AlltagLeichterLeben"));
const VerstehenVeraendern = lazy(() => import("./pages/VerstehenVeraendern"));
const ErlebenVerbinden = lazy(() => import("./pages/ErlebenVerbinden"));
const CaptainApfelWorkshop = lazy(() => import("./pages/CaptainApfelWorkshop"));
const WorkshopGesundeMission = lazy(() => import("./pages/WorkshopGesundeMission"));
const WorkshopLieblingsdose = lazy(() => import("./pages/WorkshopLieblingsdose"));
const Schatzruhe = lazy(() => import("./pages/Schatzruhe"));
const FuerEinrichtungen = lazy(() => import("./pages/FuerEinrichtungen"));
const FuerUnternehmen = lazy(() => import("./pages/FuerUnternehmen"));
const Kontakt = lazy(() => import("./pages/Kontakt"));
const Impressum = lazy(() => import("./pages/Impressum"));
const Datenschutz = lazy(() => import("./pages/Datenschutz"));
const RegionallyRooted = lazy(() => import("./pages/RegionallyRooted"));
const EssenIstFertig = lazy(() => import("./pages/EssenIstFertig"));
const HinterCaptainApfel = lazy(() => import("./pages/HinterCaptainApfel"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Captain Apfel Workshop - standalone without PageLayout */}
          <Route path="/tankwelten/captain-apfel-workshop" element={<Suspense fallback={null}><CaptainApfelWorkshop /></Suspense>} />
          
          {/* All other pages use PageLayout */}
          <Route path="/*" element={
            <PageLayout>
              <Suspense fallback={null}>
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
              </Suspense>
            </PageLayout>
          } />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
