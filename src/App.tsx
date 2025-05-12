
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLayout from "./components/PageLayout";

// Pages
import Index from "./pages/Index";
import AlltagLeichterLeben from "./pages/AlltagLeichterLeben";
import VerstehenVeraendern from "./pages/VerstehenVeraendern";
import ErlebenVerbinden from "./pages/ErlebenVerbinden";
import FuerEinrichtungen from "./pages/FuerEinrichtungen";
import Kontakt from "./pages/Kontakt";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <PageLayout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/tankwelten/alltag-leichter-leben" element={<AlltagLeichterLeben />} />
            <Route path="/tankwelten/verstehen-veraendern" element={<VerstehenVeraendern />} />
            <Route path="/tankwelten/erleben-verbinden" element={<ErlebenVerbinden />} />
            <Route path="/fuer-einrichtungen-unternehmen" element={<FuerEinrichtungen />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
