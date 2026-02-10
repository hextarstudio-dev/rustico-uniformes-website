import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import BrandLogos from "@/components/BrandLogos";
import SegmentGallery from "@/components/SegmentGallery";
import AnimatedCounter from "@/components/AnimatedCounter";
import { ArrowRight, Users, Award } from "lucide-react";

// Import images
import logoRustico from "@/assets/logo-rustico-nova.png";

const stats = [
  { value: 10000, suffix: "+", label: "Clientes atendidos", icon: Users },
  { value: 10, suffix: "+ anos", label: "De experiência", icon: Award },
];

const HomePage = () => {
  return (
    <Layout>
      {/* Hero Section - More Impact */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-20 pb-8">
        {/* Background gradient animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full animate-pulse-slow" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Logo Side */}
            <ScrollReveal animation="fade-right" className="flex justify-center lg:justify-start items-center order-2 lg:order-1">
              <div className="relative">
                {/* Glow behind logo */}
                <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full scale-75" />
                <img
                  src={logoRustico}
                  alt="Rústico Uniformes"
                  className="w-80 sm:w-96 md:w-[28rem] lg:w-[32rem] h-auto relative z-10"
                  loading="eager"
                  fetchPriority="high"
                  decoding="sync"
                />
              </div>
            </ScrollReveal>

            {/* Text Side */}
            <ScrollReveal animation="fade-left" delay={0.2} className="text-center lg:text-left order-1 lg:order-2">
              <p className="text-primary font-semibold uppercase tracking-[0.2em] text-xs md:text-sm mb-4">
                Uniformes personalizados premium
              </p>

              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6">
                Uniformes que representam a{" "}
                <span className="text-shimmer">essência</span>{" "}
                da sua empresa.
              </h1>

              <p className="text-muted-foreground font-institutional text-base md:text-lg mb-8 max-w-xl mx-auto lg:mx-0">
                Qualidade premium, personalização completa e entrega em todo Brasil. 
                Seu uniforme, nossa expertise.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
                <a
                  href="https://wa.me/5524993265065?text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20um%20or%C3%A7amento!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hero group text-sm px-5 py-2.5 inline-flex flex-row items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  <span>Solicite seu orçamento</span>
                </a>
                <Link 
                  to="/igrejas" 
                  className="btn-outline flex items-center justify-center gap-2"
                >
                  Ver Portfólio
                </Link>
              </div>

              <p className="text-muted-foreground font-institutional text-sm">
                Pedido mínimo: <span className="text-foreground font-semibold">15 peças</span>
              </p>
            </ScrollReveal>
          </div>

          {/* Stats Row - Centered */}
          <ScrollReveal animation="fade-up" delay={0.4} className="mt-12 lg:mt-24">
            <div className="flex justify-center gap-4 sm:gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 sm:p-6 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm min-w-[140px] sm:min-w-[180px]">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground mb-1">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm font-institutional leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Institutional Block - Full Screen */}
      <section className="py-16 sm:py-24 lg:py-32 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal animation="fade-up">
              <p className="text-2xl md:text-3xl lg:text-4xl text-foreground font-institutional leading-relaxed mb-8">
                A <span className="text-primary font-semibold">Rústico Uniformes</span> nasce da evolução do Time Rústico, marca consolidada no vestuário fitness há mais de 10 anos.
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground font-institutional leading-relaxed">
                Ao longo dessa trajetória, milhares de clientes foram atendidos em todo o Brasil, Estados Unidos, México, Argentina e Espanha.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Brands Section - Static Grid */}
      <section id="credibilidade" className="py-16 lg:py-24 relative">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary/10 blur-[120px] rounded-full" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollReveal className="text-center mb-12">
            <p className="text-primary font-medium uppercase tracking-widest text-sm mb-4">
              Credibilidade
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Marcas que <span className="text-gradient">confiam</span> em nós
            </h2>
            <p className="text-muted-foreground font-institutional max-w-xl mx-auto">
              Grandes empresas e instituições escolheram a Rústico para vestir suas equipes.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.2}>
            <BrandLogos />
          </ScrollReveal>
        </div>
      </section>

      {/* Segments Gallery Carousel */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <p className="text-primary font-medium uppercase tracking-widest text-sm mb-4">
              Portfólio
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Nossos <span className="text-gradient">Segmentos</span>
            </h2>
            <p className="text-muted-foreground font-institutional max-w-xl mx-auto">
              Atendemos diversos segmentos com soluções personalizadas para cada necessidade.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.2}>
            <SegmentGallery />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </Layout>
  );
};

export default HomePage;
