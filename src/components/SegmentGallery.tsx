import { Link } from "react-router-dom";
import { ChevronRight, ChevronLeft, Star } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

// Import segment cover images - updated covers
import igrejasImg from "@/assets/segmentos/igrejas-cover.png";
import escolasImg from "@/assets/segmentos/escolas-cover.png";
import empresasImg from "@/assets/segmentos/empresas-cover.png";
import industriaImg from "@/assets/segmentos/industria-cover.png";
import fitnessImg from "@/assets/segmentos/fitness-cover-new.png";
import governosImg from "@/assets/segmentos/governos-cover-new.png";
import eventosImg from "@/assets/segmentos/eventos-cover.png";
import institucionaisImg from "@/assets/segmentos/institucionais-cover.png";

interface Segment {
  name: string;
  href: string;
  image: string;
  description: string;
  featured?: boolean;
}

const segments: Segment[] = [
  { 
    name: "Igrejas", 
    href: "/igrejas", 
    image: igrejasImg,
    description: "Camisas institucionais, comemorativas, coletes, moletom, corta-vento, polo, sociais",
    featured: true,
  },
  { 
    name: "Empresas", 
    href: "/empresas", 
    image: institucionaisImg,
    description: "Camisas de malha, sociais, polo, calça de brim, jalecos, aventais",
    featured: true,
  },
  { 
    name: "Escolas", 
    href: "/escolas", 
    image: escolasImg,
    description: "Camisas, helanca, moletom, camisas comemorativas"
  },
  { 
    name: "Indústria", 
    href: "/industria", 
    image: industriaImg,
    description: "Botas de borracha, calça de brim, blusa com refletivo, proteção UV"
  },
  { 
    name: "Fitness", 
    href: "/fitness", 
    image: fitnessImg,
    description: "Top, short, bermuda, leggings, macacão, moletom, proteção UV"
  },
  { 
    name: "Governos", 
    href: "/governos", 
    image: governosImg,
    description: "Camisas, coletes de fiscalização, camisas institucionais"
  },
  { 
    name: "Camisas Dry Fit", 
    href: "/dri-fit", 
    image: eventosImg,
    description: "Camisas com tecnologia Dry Fit para máximo conforto e performance"
  },
  { 
    name: "Institucionais", 
    href: "/institucionais", 
    image: empresasImg,
    description: "Camisas institucionais para organizações e entidades"
  },
];

const SegmentCard = ({ segment }: { segment: Segment }) => (
  <Link
    to={segment.href}
    className="group relative block overflow-hidden rounded-lg bg-card border border-border 
      hover:border-primary/50 transition-all duration-500 hover:shadow-glow h-full"
  >
    {/* Featured Badge */}
    {segment.featured && (
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-primary rounded-full">
        <Star className="w-3 h-3 fill-primary-foreground text-primary-foreground" />
        <span className="text-[10px] sm:text-xs font-semibold text-primary-foreground uppercase tracking-wide">
          Destaque
        </span>
      </div>
    )}

    {/* Image */}
    <div className="aspect-[3/4] overflow-hidden bg-muted/20 flex items-center justify-center">
      <img
        src={segment.image}
        alt={`Uniformes para ${segment.name}`}
        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
        loading="lazy"
        decoding="async"
      />
    </div>
    
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
    
    {/* Content */}
    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
      <div className="flex items-end justify-between">
        <div>
          <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors duration-300">
            {segment.name}
          </h3>
          <p className="text-muted-foreground font-institutional text-xs sm:text-sm line-clamp-2 group-hover:text-foreground/80 transition-colors">
            {segment.description}
          </p>
        </div>
        
        {/* Arrow */}
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center 
          opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 
          transition-all duration-300 shrink-0 ml-3">
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
        </div>
      </div>
    </div>
    
    {/* Hover glow effect */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/10 to-transparent" />
    </div>
  </Link>
);

const SegmentGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Number of visible items based on screen size
  const getVisibleCount = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = segments.length - visibleCount;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-play every 3 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-10
          w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-card/90 border border-border backdrop-blur-sm
          flex items-center justify-center hover:bg-primary hover:border-primary 
          hover:text-primary-foreground transition-all duration-300 group shadow-lg"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 z-10
          w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-card/90 border border-border backdrop-blur-sm
          flex items-center justify-center hover:bg-primary hover:border-primary 
          hover:text-primary-foreground transition-all duration-300 group shadow-lg"
        aria-label="Próximo"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Carousel Container */}
      <div className="overflow-hidden mx-6 sm:mx-8">
        <div 
          className="flex gap-4 sm:gap-6 transition-transform duration-500 ease-out"
          style={{ 
            transform: visibleCount === 1 
              ? `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 16}px))`
              : `translateX(-${currentIndex * (100 / visibleCount)}%)`
          }}
        >
          {segments.map((segment) => (
            <div 
              key={segment.name} 
              className="shrink-0"
              style={{ 
                width: visibleCount === 1 
                  ? '100%' 
                  : `calc(${100 / visibleCount}% - ${(visibleCount - 1) * 16 / visibleCount}px)` 
              }}
            >
              <SegmentCard segment={segment} />
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-primary w-6' 
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SegmentGallery;
