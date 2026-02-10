import cocaCola from "@/assets/marcas/coca-cola.png";
import bomJesus from "@/assets/marcas/bom-jesus-new.png";
import bohemia from "@/assets/marcas/bohemia.png";
import alfaLaval from "@/assets/marcas/alfa-laval-new.png";
import igrejaBatistaAtitude from "@/assets/marcas/igreja-batista-atitude.png";
import mustad from "@/assets/marcas/mustad.png";
import scud from "@/assets/marcas/scud.png";

const brands = [
  { name: "Coca-Cola", logo: cocaCola },
  { name: "Bom Jesus", logo: bomJesus },
  { name: "Bohemia", logo: bohemia },
  { name: "Alfa Laval", logo: alfaLaval },
  { name: "Igreja Batista Atitude", logo: igrejaBatistaAtitude },
  { name: "Mustad", logo: mustad },
  { name: "Scud", logo: scud },
];

const BrandLogos = () => {
  return (
    <div 
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto px-4"
      role="list"
      aria-label="Marcas parceiras"
    >
      {brands.map((brand) => (
        <div
          key={brand.name}
          className="flex items-center justify-center h-24 sm:h-28 md:h-32 lg:h-36 group 
            px-5 py-5 sm:px-8 sm:py-6 rounded-xl bg-[#0a0a0a] border border-white/10
            hover:border-primary/40 hover:bg-[#111] hover:shadow-glow transition-all duration-500"
          role="listitem"
        >
          <img
            src={brand.logo}
            alt={`Logo ${brand.name}`}
            className="max-w-full max-h-full object-contain brightness-100 contrast-125
              group-hover:scale-110 group-hover:brightness-110
              transition-all duration-500 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
            loading="lazy"
            decoding="async"
            width={150}
            height={80}
          />
        </div>
      ))}
    </div>
  );
};

export default BrandLogos;
