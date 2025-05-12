
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

type PageLayoutProps = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
  // Scroll to top on page change and apply background color
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add('bg-muted');
    
    return () => {
      document.body.classList.remove('bg-muted');
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
