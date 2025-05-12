
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

type PageLayoutProps = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
  const location = useLocation();
  
  // Scroll to top on page change and apply background color
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add('bg-muted');
    
    return () => {
      document.body.classList.remove('bg-muted');
    };
  }, [location.pathname]); // Add location.pathname as dependency to trigger on route change

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
