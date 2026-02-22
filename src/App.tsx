import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import PracticeAreas from "@/pages/PracticeAreas";
import Schedule from "@/pages/Schedule";
import Dashboard from "@/pages/Dashboard";
import About from "@/pages/About";
import Resources from "@/pages/Resources";
import Contact from "@/pages/Contact";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");
  const isHome = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen antialiased text-[#091f1a] bg-[#ffffff]">
      {!isDashboard && <Navbar />}
      <main className={isDashboard || isHome ? "flex-grow" : "flex-grow pt-24 md:pt-28"}>{children}</main>
      {!isDashboard && <Footer />}
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/practice-areas" element={<PracticeAreas />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}
