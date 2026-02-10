import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const ADDRESS = "Rua Luvercy Fiorini n 35, Samambaia, Petrópolis, RJ";
const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;
const APPLE_MAPS_URL = `https://maps.apple.com/?q=${encodeURIComponent(ADDRESS)}`;

const Footer = () => {
  const [showMapOptions, setShowMapOptions] = useState(false);
  const mapMenuRef = useRef<HTMLLIElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mapMenuRef.current && !mapMenuRef.current.contains(event.target as Node)) {
        setShowMapOptions(false);
      }
    };

    if (showMapOptions) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showMapOptions]);

  return (
    <footer className="bg-background border-t border-border relative overflow-hidden" role="contentinfo">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 blur-[100px] rounded-full" />

      <div className="container mx-auto px-4 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Brand Column */}
          <div className="space-y-6 text-left">
            <Link to="/" className="font-display text-3xl tracking-wider text-foreground inline-block">
              RÚSTICO<span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              Uniformes personalizados com excelência técnica, criatividade artesanal e respeito à identidade de cada cliente.
            </p>
            <div className="flex gap-4 justify-start">
              <a
                href="https://www.instagram.com/timerusticouniformes?igsh=d2JrdG1uOWtwMjZ6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/100083183927848/posts/pfbid0uMKKkkjnaPyjF29duBkWZ82HgsfpLkV2xhWm16HzAs9UPCfL6XCfaCuFwk6MCGwal/?d=w&mibextid=qC1gEa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contato Column */}
          <div className="space-y-6 text-left">
            <h4 className="font-display text-xl tracking-wide text-foreground">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 justify-start">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <p className="text-muted-foreground text-sm">WhatsApp</p>
                  <a href="https://wa.me/5524993265065" className="text-foreground text-sm hover:text-primary transition-colors">
                    (24) 99326-5065
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 justify-start">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <p className="text-muted-foreground text-sm">E-mail</p>
                  <a href="mailto:comercial@rusticouniformes.com" className="text-foreground text-sm hover:text-primary transition-colors">
                    comercial@rusticouniformes.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 justify-start relative" ref={mapMenuRef}>
                <button
                  onClick={() => setShowMapOptions(!showMapOptions)}
                  className="flex items-start gap-3 text-left group"
                >
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-muted-foreground text-sm">Localização</p>
                    <p className="text-foreground text-sm group-hover:text-primary transition-colors">
                      Rua Luvercy Fiorini n 35<br />
                      Samambaia, Petrópolis - RJ
                    </p>
                  </div>
                </button>

                {/* Map Options Dropdown */}
                {showMapOptions && (
                  <div className="absolute left-0 top-full mt-2 bg-card border border-border rounded-lg shadow-lg z-50 overflow-hidden min-w-[180px]">
                    <a
                      href={APPLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors"
                      onClick={() => setShowMapOptions(false)}
                    >
                      <MapPin className="w-4 h-4 text-primary" />
                      Abrir com Mapas
                    </a>
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors border-t border-border"
                      onClick={() => setShowMapOptions(false)}
                    >
                      <MapPin className="w-4 h-4 text-primary" />
                      Abrir com Google Maps
                    </a>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-10 pt-6 flex items-center justify-start">
          <p className="text-muted-foreground text-sm">
            © 2026 Rústico Uniformes. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
