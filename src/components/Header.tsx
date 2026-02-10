import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight, Instagram, Facebook } from "lucide-react";
import { cn } from "@/lib/utils";
import logoRustico from "@/assets/logo-rustico-completa.png";

const portfolioLinks = [
  { name: "Igrejas", href: "/igrejas" },
  { name: "Fitness", href: "/fitness" },
  { name: "Empresas", href: "/empresas" },
  { name: "Indústria", href: "/industria" },
  { name: "Escolas", href: "/escolas" },
  { name: "Governos", href: "/governos" },
  { name: "Departamentos", href: "/departamentos" },
  { name: "Camisas Dry Fit", href: "/dri-fit" },
  { name: "Institucionais", href: "/institucionais" },
];

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isMobilePortfolioOpen, setIsMobilePortfolioOpen] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsPortfolioOpen(false);
    setIsMobilePortfolioOpen(false);
  }, [location]);

  const scrollToCredibilidade = () => {
    const element = document.getElementById("credibilidade");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-out",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
      role="banner"
    >
      {/* Main Navigation Bar */}
      <div className="bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 py-2 border-b border-border/30">
        <div className="container mx-auto px-3 sm:px-4 lg:px-8">
          <nav className="flex items-center justify-between w-full">
            {/* Logo R verde + texto RUSTICO + Social Icons */}
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <img
                  src={logoRustico}
                  alt="Rústico Uniformes"
                  className="h-8 sm:h-10 md:h-11 w-auto object-contain"
                />
                <span 
                  className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-[0.15em] uppercase leading-none"
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                >
                  RÚSTICO<span className="text-primary">.</span>
                </span>
              </Link>

              {/* Social Icons - Desktop */}
              <div className="hidden sm:flex items-center gap-1 ml-2">
                <a
                  href="https://www.instagram.com/timerusticouniformes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-foreground/70 hover:text-primary hover:bg-primary/10 rounded-lg transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/share/17wNMYzzgb/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-foreground/70 hover:text-primary hover:bg-primary/10 rounded-lg transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <button
                  onClick={scrollToCredibilidade}
                  className="p-2 text-foreground/70 hover:text-primary hover:bg-primary/10 rounded-lg transition-all"
                  aria-label="WhatsApp"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <Link
                to="/"
                className={cn(
                  "relative font-medium text-sm uppercase tracking-wide transition-colors py-2",
                  location.pathname === "/" 
                    ? "text-primary" 
                    : "text-foreground hover:text-primary",
                  "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left",
                  location.pathname === "/" && "after:scale-x-100"
                )}
              >
                Home
              </Link>

              {/* Portfolio Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsPortfolioOpen(true)}
                onMouseLeave={() => setIsPortfolioOpen(false)}
              >
                <button
                  className={cn(
                    "relative flex items-center gap-1 font-medium text-sm uppercase tracking-wide transition-colors py-2",
                    portfolioLinks.some((link) => location.pathname === link.href)
                      ? "text-primary"
                      : "text-foreground hover:text-primary",
                    "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left",
                    portfolioLinks.some((link) => location.pathname === link.href) && "after:scale-x-100"
                  )}
                >
                  Portfólios
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform",
                      isPortfolioOpen && "rotate-180"
                    )}
                  />
                </button>

                <div
                  className={cn(
                    "absolute top-full left-0 pt-2 transition-all duration-300",
                    isPortfolioOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  )}
                >
                  <div className="bg-card/95 backdrop-blur-md border border-border/50 rounded-lg shadow-xl py-2 min-w-[200px]">
                    {portfolioLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className={cn(
                          "block px-4 py-2.5 text-sm transition-all",
                          location.pathname === link.href
                            ? "text-primary bg-primary/10 border-l-2 border-primary"
                            : "text-foreground hover:text-primary hover:bg-primary/5 hover:pl-5"
                        )}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                to="/informacoes-tecnicas"
                className={cn(
                  "relative font-medium text-sm uppercase tracking-wide transition-colors py-2",
                  location.pathname === "/informacoes-tecnicas" 
                    ? "text-primary" 
                    : "text-foreground hover:text-primary",
                  "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left",
                  location.pathname === "/informacoes-tecnicas" && "after:scale-x-100"
                )}
              >
                Informações Técnicas
              </Link>

              <Link
                to="/sobre"
                className={cn(
                  "relative font-medium text-sm uppercase tracking-wide transition-colors py-2",
                  location.pathname === "/sobre" 
                    ? "text-primary" 
                    : "text-foreground hover:text-primary",
                  "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left",
                  location.pathname === "/sobre" && "after:scale-x-100"
                )}
              >
                Sobre Nós
              </Link>

            </div>

            {/* Mobile: Menu Toggle Only */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>

          {/* Mobile Menu - Simplified */}
          <div
            className={cn(
              "lg:hidden overflow-hidden transition-all duration-500",
              isMobileMenuOpen ? "max-h-[400px] opacity-100 mt-4" : "max-h-0 opacity-0"
            )}
          >
            <div className="bg-card/95 backdrop-blur-md border border-border/50 rounded-lg p-4 space-y-1">
              <Link
                to="/"
                className={cn(
                  "block font-medium uppercase tracking-wide transition-all text-sm py-2.5 px-3 rounded-md",
                  location.pathname === "/" 
                    ? "text-primary bg-primary/10" 
                    : "text-foreground hover:bg-primary/5"
                )}
              >
                Home
              </Link>

              {/* Portfolio Section in Mobile - Collapsible */}
              <div className="py-1">
                <button
                  onClick={() => setIsMobilePortfolioOpen(!isMobilePortfolioOpen)}
                  className={cn(
                    "w-full flex items-center justify-between font-medium uppercase tracking-wide transition-all text-sm py-2.5 px-3 rounded-md",
                    portfolioLinks.some((link) => location.pathname === link.href)
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:bg-primary/5"
                  )}
                >
                  <span>Portfólios</span>
                  <ChevronRight className={cn(
                    "w-4 h-4 transition-transform",
                    isMobilePortfolioOpen && "rotate-90"
                  )} />
                </button>
                
                <div className={cn(
                  "overflow-hidden transition-all duration-300",
                  isMobilePortfolioOpen ? "max-h-[500px] opacity-100 mt-1" : "max-h-0 opacity-0"
                )}>
                  <div className="pl-4 border-l-2 border-border/50 ml-3 space-y-1">
                    {portfolioLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className={cn(
                          "block text-sm transition-all py-2 px-3 rounded-md",
                          location.pathname === link.href
                            ? "text-primary bg-primary/10"
                            : "text-foreground hover:bg-primary/5"
                        )}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                to="/informacoes-tecnicas"
                className={cn(
                  "block font-medium uppercase tracking-wide transition-all text-sm py-2.5 px-3 rounded-md",
                  location.pathname === "/informacoes-tecnicas" 
                    ? "text-primary bg-primary/10" 
                    : "text-foreground hover:bg-primary/5"
                )}
              >
                Informações Técnicas
              </Link>

              <Link
                to="/sobre"
                className={cn(
                  "block font-medium uppercase tracking-wide transition-all text-sm py-2.5 px-3 rounded-md",
                  location.pathname === "/sobre" 
                    ? "text-primary bg-primary/10" 
                    : "text-foreground hover:bg-primary/5"
                )}
              >
                Sobre Nós
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
