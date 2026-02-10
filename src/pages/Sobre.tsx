import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import FounderCard from "@/components/FounderCard";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { Users, Award, Globe, Heart, Target, Sparkles } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

// Import images
import desde2015 from "@/assets/desde-2015.png";
import rafaelPortrait from "@/assets/rafael-portrait.jpg";
import michelePortrait from "@/assets/michele-portrait.jpg";

// Founder bios
const rafaelBio = `A Rústico Uniformes nasce da experiência prática e da tradição no mercado de vestuário. À frente da marca está Rafael Carvalho, profissional com mais de 10 anos de atuação direta na confecção e produção de roupas, em uma história familiar que soma mais de 50 anos no setor têxtil.

Desde cedo, Rafael vivenciou todas as etapas da produção de uniformes, dominando processos como corte, costura, estamparia e acabamento. Essa vivência técnica garante à Rústico um controle total de qualidade, desde o desenvolvimento até a entrega final.

Antes da Rústico, Rafael fundou e liderou marcas autorais de vestuário, com atuação em todo o Rio de Janeiro, consolidando experiência em gestão, produção e comercialização de roupas. Em 2016, essa trajetória evoluiu para a criação da Rústico Uniformes, uma marca que une confecção própria, personalização real e compromisso com excelência.

Hoje, a Rústico atende empresas que buscam uniformes personalizados premium, com identidade, durabilidade e acabamento profissional, mantendo a essência artesanal aliada a processos modernos e escala produtiva.`;

const micheleBio = `A trajetória de Michele Siqueira na Rústico está diretamente ligada à construção da marca e à sua evolução ao longo dos anos. Com mais de 10 anos de atuação ao lado de Rafael Carvalho, Michele participou ativamente do desenvolvimento de diferentes frentes do negócio, desde a criação de marcas próprias até a consolidação da empresa no mercado de uniformes e vestuário personalizado.

O início foi com a produção de roupas infantis, atuando em feiras e no modelo private label, desenvolvendo peças personalizadas com a marca de clientes. Esse contato direto com o público e com as demandas do mercado foi essencial para entender comportamento de consumo, posicionamento de marca e relacionamento com clientes.

Durante a pandemia, uma experiência pessoal levou a um novo direcionamento do negócio: a criação de roupas fitness pensadas para conforto, funcionalidade e autoestima. O que começou como uma necessidade individual rapidamente ganhou escala, impulsionando a marca em feiras esportivas e aproximando a Rústico do universo do esporte e da performance, ampliando sua autoridade no setor de vestuário.

Formada em Psicologia, Michele aplica sua visão estratégica e humana na gestão administrativa e comercial da Rústico. Hoje, é responsável pelo atendimento personalizado, organização dos processos internos e relacionamento com clientes, garantindo eficiência, clareza e excelência em cada projeto entregue.`;

const diferenciais = [
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description: "Tratamos cada cliente de forma única, entendendo suas necessidades específicas.",
  },
  {
    icon: Target,
    title: "Compromisso com a Entrega",
    description: "Cumprimos prazos e garantimos a qualidade em cada pedido.",
  },
  {
    icon: Sparkles,
    title: "Personalização Real",
    description: "Cada projeto é desenvolvido com atenção aos detalhes da sua marca.",
  },
];

const stats = [
  { value: 10000, suffix: "+", label: "Clientes atendidos", icon: Users },
  { value: 10, suffix: "+ anos", label: "De experiência", icon: Award },
  { value: 5, suffix: " países", label: "Atendidos", icon: Globe },
];

const SobrePage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <p className="text-primary font-medium uppercase tracking-widest text-sm mb-4">
              Sobre Nós
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              CONHEÇA A <span className="text-gradient">RÚSTICO</span>
            </h1>
            <p className="text-muted-foreground text-lg font-institutional">
              Uma história de dedicação, qualidade e compromisso com a excelência em uniformes personalizados.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 sm:p-6 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <div className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground mb-1">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm font-institutional">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 lg:py-24 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:gap-8 lg:gap-16 items-center">
            <ScrollReveal animation="fade-right">
              <div className="relative rounded-lg overflow-hidden aspect-[3/4] group">
                <img
                  src={desde2015}
                  alt="Desde 2015 - Rústico Uniformes"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={0.2}>
              <div>
                <p className="text-primary font-medium uppercase tracking-widest text-sm mb-4">
                  Nossa História
                </p>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                  MAIS DE <span className="text-gradient">10 ANOS</span> DE EXPERIÊNCIA
                </h2>
                <div className="space-y-4 text-muted-foreground font-institutional">
                  <p>
                    A Rústico Uniformes nasce da evolução do Time Rústico, marca consolidada no vestuário fitness há mais de 10 anos.
                  </p>
                  <p>
                    Ao longo dessa trajetória, foram milhares de clientes atendidos em todo o Brasil, com atuação nos principais estados do país e presença em eventos nacionais e internacionais.
                  </p>
                  <p>
                    A marca também expandiu suas entregas para o mercado internacional, atendendo projetos no Brasil, Estados Unidos, México, Argentina e Espanha.
                  </p>
                  <p>
                    Nossa expertise em vestuário esportivo nos permitiu desenvolver uniformes de alta qualidade para os mais diversos segmentos: igrejas, empresas, indústrias, escolas, governos e eventos.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <p className="text-primary font-medium uppercase tracking-widest text-sm mb-4">
              Por que escolher a Rústico
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              NOSSO <span className="text-gradient">DIFERENCIAL</span>
            </h2>
            <p className="text-muted-foreground font-institutional max-w-2xl mx-auto">
              Combinamos experiência, tecnologia e atendimento humanizado para entregar uniformes que realmente representam a identidade da sua marca.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {diferenciais.map((item, index) => (
              <ScrollReveal key={item.title} animation="fade-up" delay={index * 0.1}>
                <div className="p-8 rounded-lg bg-muted/30 border border-border hover:border-primary/50 transition-all group h-full">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground font-institutional">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <p className="text-primary font-medium uppercase tracking-widest text-sm mb-4">
              Nossa Equipe
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              QUEM FAZ A <span className="text-gradient">RÚSTICO</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollReveal animation="fade-up">
              <FounderCard
                image={rafaelPortrait}
                name="Rafael Carvalho"
                role="Fundador & CEO"
                fullBio={rafaelBio}
              />
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.1}>
              <FounderCard
                image={michelePortrait}
                name="Michele Siqueira"
                role="Diretora Comercial"
                fullBio={micheleBio}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsCarousel />

      {/* CTA */}
      <CTASection />
    </Layout>
  );
};

export default SobrePage;
