import { Link, useLocation } from "react-router-dom";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface PortfolioImage {
  image: string;
  alt?: string;
  title?: string;
  description?: string;
}

interface TrustPartner {
  name: string;
  extra?: string;
}

interface PortfolioPageTemplateProps {
  segmentName: string;
  segmentTitle: string;
  segmentSubtitle: string;
  introText: string;
  seoDescription: string;
  portfolioImages: PortfolioImage[];
  heroImage?: string;
  trustSectionTitle?: string;
  trustPartners?: TrustPartner[];
}

const segmentLinks = [{
  name: "Igrejas",
  href: "/igrejas"
}, {
  name: "Fitness",
  href: "/fitness"
}, {
  name: "Empresas",
  href: "/empresas"
}, {
  name: "Indústria",
  href: "/industria"
}, {
  name: "Escolas",
  href: "/escolas"
}, {
  name: "Governos",
  href: "/governos"
}, {
  name: "Departamentos",
  href: "/departamentos"
}, {
  name: "Camisas Dri-FIT",
  href: "/dri-fit"
}];

const PortfolioPageTemplate = ({
  segmentName,
  segmentTitle,
  segmentSubtitle,
  introText,
  seoDescription,
  portfolioImages,
  heroImage,
  trustSectionTitle = "Igrejas que atendemos",
  trustPartners = [
    { name: "Igreja Batista Atitude", extra: "+ de 30 unidades" },
    { name: "Igreja Batista da Lagoinha" },
    { name: "Igreja Semeando Avivamento" },
    { name: "Diocese Católica de Petrópolis" },
    { name: "Igreja Metodista" },
    { name: "Igreja Deus é Amor" },
    { name: "Ministério Aba" },
  ]
}: PortfolioPageTemplateProps) => {
  const location = useLocation();
  return <Layout>
      {/* Segment Navigation */}
      <section className="pt-20 pb-4 bg-background border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {segmentLinks.map(link => <Link key={link.href} to={link.href} className={cn("px-4 py-2 rounded-sm text-sm font-medium transition-all duration-300", location.pathname === link.href ? "bg-primary text-primary-foreground" : "bg-muted/30 text-foreground hover:bg-primary/20 hover:text-primary border border-border")}>
                {link.name}
              </Link>)}
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        {heroImage ? (
          <>
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{ backgroundImage: `url(${heroImage})` }}
              role="img"
              aria-label={`Imagem de fundo - Uniformes para ${segmentName}`}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        )}

        {/* Content */}
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-16 pb-20">
          <div className="max-w-4xl">
            <ScrollReveal animation="fade-up">
              <p className="text-primary font-medium uppercase tracking-widest text-sm mb-4">
                {segmentSubtitle}
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.1}>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground leading-none mb-6">
                UNIFORMES<br />
                PARA <span className="text-gradient">{segmentTitle}</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8 font-institutional">
                {introText}
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.3}>
              <div className="flex justify-start">
                <a 
                  href="https://wa.me/5524993265065?text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20um%20or%C3%A7amento!"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-hero"
                >
                  Solicitar Orçamento
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-card/50">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal className="text-center mb-8">
            <h2 className="font-display text-2xl md:text-3xl text-foreground">
            {trustSectionTitle.split(" ").map((word, i) => 
              i === 0 ? <span key={i} className="text-gradient">{word} </span> : word + " "
            )}
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto">
              {trustPartners.map((partner) => (
                <div
                  key={partner.name}
                  className="px-5 py-3 md:px-6 md:py-4 rounded-lg bg-card border border-border/80 text-sm md:text-base font-institutional text-foreground hover:border-primary hover:bg-primary/5 hover:shadow-glow transition-all duration-300"
                >
                  {partner.name}
                  {partner.extra && (
                    <span className="text-primary text-xs md:text-sm ml-2 font-medium">({partner.extra})</span>
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section id="portfolio" className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <p className="text-primary font-medium uppercase tracking-widest text-sm mb-4">
              Galeria
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground">
              PROJETOS <span className="text-gradient">REALIZADOS</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto font-institutional">
              {seoDescription}
            </p>
          </ScrollReveal>

          {/* Gallery Grid - Photos Only (no text overlay) */}
          {portfolioImages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioImages.map((item, index) => (
                <ScrollReveal key={index} animation="scale" delay={Math.min(index * 0.03, 0.3)}>
                  <div className="group cursor-pointer overflow-hidden rounded-sm">
                    <div className="aspect-[3/4] overflow-hidden bg-muted/20">
                      <img
                        src={item.image}
                        alt={item.alt || item.title || `Uniforme ${segmentName} - Projeto ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                        width={400}
                        height={533}
                      />
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            // Placeholder Gallery
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <ScrollReveal key={index} animation="scale" delay={index * 0.05}>
                  <div className="aspect-[3/4] rounded-sm overflow-hidden bg-muted/30 border border-border flex items-center justify-center">
                    <div className="text-center p-6">
                      <Skeleton className="w-full h-full absolute inset-0" />
                      <p className="text-muted-foreground text-sm font-institutional relative z-10">
                        Imagens em breve
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer is included in Layout */}
    </Layout>;
};

export default PortfolioPageTemplate;
