import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brandLogo } from "@/assets/brand";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Início", path: "/" },
    { name: "Áreas de Atuação", path: "/practice-areas" },
    { name: "Sobre", path: "/about" },
    { name: "Conteúdos", path: "/resources" },
    { name: "Contato", path: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#ffffff]/95 backdrop-blur-md border-b border-[#091f1a]/20 py-3 shadow-sm"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src={brandLogo} alt="Logo ESM Advocacia Especializada" className="h-10 w-10 rounded-md object-cover border border-[#ffffff]/30" />
            <span className={cn("text-xl font-bold tracking-tight font-brand", scrolled ? "text-[#091f1a]" : "text-[#ffffff]")}>
              ESM Advocacia Especializada
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[#f5af00]",
                  location.pathname === link.path
                    ? "text-[#f5af00]"
                    : scrolled
                      ? "text-[#091f1a]/75"
                      : "text-[#ffffff]"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/dashboard">
              <Button variant="ghost" size="sm" className={cn(scrolled ? "text-[#091f1a]" : "text-[#ffffff] hover:text-[#f5af00]")}>
                Portal do Cliente
              </Button>
            </Link>
            <Link to="/schedule">
              <Button className="bg-[#f5af00] hover:bg-[#d99a00] text-[#091f1a]">
                Agendar Consulta
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn("md:hidden p-2", scrolled ? "text-[#091f1a]" : "text-[#ffffff]")}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#ffffff] border-b border-[#091f1a]/20 shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-base font-medium py-2 border-b border-[#091f1a]/10 last:border-0",
                location.pathname === link.path
                  ? "text-[#f5af00]"
                  : "text-[#091f1a]/75"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-2">
            <Link to="/dashboard" className="w-full">
              <Button variant="outline" className="w-full justify-center">
                Portal do Cliente
              </Button>
            </Link>
            <Link to="/schedule" className="w-full">
              <Button className="w-full justify-center bg-[#f5af00] text-[#091f1a] hover:bg-[#d99a00]">
                Agendar Consulta
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
