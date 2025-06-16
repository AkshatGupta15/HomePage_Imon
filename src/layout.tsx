import { type ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CustomNavbar } from "./components/custom/navbar";
import LoadingOverlay from "./components/custom/LoadingOverlay";
import Footer from "./components/custom/footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 700); // simulate slow network
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      {loading && <LoadingOverlay />}
      <CustomNavbar />
      <main
        className={`flex-grow transition-opacity duration-300 ${
          loading ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {children}
      </main>
      {/* <footer className="bg-[#f5f5f5] text-center py-4 text-sm text-gray-600">
        Copyright &copy; {new Date().getFullYear()} Indian Institute of Technology Kanpur.
        All rights reserved.
      </footer> */}
      <Footer/>
    </div>
  );
}
