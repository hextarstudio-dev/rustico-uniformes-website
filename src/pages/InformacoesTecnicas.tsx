import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Tecido {
  name: string;
  structure: string;
  indicado: string[];
  beneficios: string[];
}

const tecidos: Tecido[] = [
  {
    name: "Tecido Plano",
    structure: "Estrutura firme sem elasticidade natural, oferecendo maior resistência e acabamento alinhado.",
    indicado: ["Camisas sociais", "Uniformes profissionais", "Jalecos"],
    beneficios: ["Durável", "Estruturado", "Visual elegante"],
  },
  {
    name: "Algodão 30.1",
    structure: "Malha leve, respirável e confortável para uso diário.",
    indicado: ["Camisetas promocionais", "Uniformes casuais"],
    beneficios: ["Macio", "Boa ventilação", "Ótimo custo-benefício"],
  },
  {
    name: "Algodão Peruano",
    structure: "Fibra longa e premium, extremamente macia e resistente, com aparência sofisticada.",
    indicado: ["Camisetas premium", "Moda casual de alto padrão"],
    beneficios: ["Toque sedoso", "Alta durabilidade", "Menos bolinhas"],
  },
  {
    name: "Malhão (Gramatura Alta)",
    structure: "Malha encorpada com maior estrutura e resistência.",
    indicado: ["Uniformes profissionais", "Camisetas estruturadas"],
    beneficios: ["Mais robusto", "Menos transparência", "Maior vida útil"],
  },
  {
    name: "Poliamida + Elastano",
    structure: "Tecido tecnológico com elasticidade, leveza e secagem rápida.",
    indicado: ["Roupas fitness", "Uniformes esportivos"],
    beneficios: ["Stretch confortável", "Secagem rápida", "Alta performance"],
  },
  {
    name: "Coton",
    structure: "Algodão com elastano, oferecendo conforto com ajuste ao corpo.",
    indicado: ["Moda casual", "Infantil", "Peças ajustadas"],
    beneficios: ["Macio", "Flexível", "Confortável"],
  },
  {
    name: "Brim e Sarja",
    structure: "Tecidos planos resistentes e encorpados para uso intenso.",
    indicado: ["Calças profissionais", "Aventais", "Uniformes industriais"],
    beneficios: ["Alta resistência", "Longa durabilidade", "Estrutura firme"],
  },
  {
    name: "Microfibra",
    structure: "Fibra sintética leve, respirável e de rápida secagem.",
    indicado: ["Camisetas esportivas", "Eventos", "Peças leves"],
    beneficios: ["Leveza", "Fácil manutenção", "Secagem rápida"],
  },
  {
    name: "Moletom",
    structure: "Malha espessa com interior flanelado para isolamento térmico.",
    indicado: ["Agasalhos", "Blusas de frio"],
    beneficios: ["Conforto térmico", "Maciez", "Visual casual"],
  },
  {
    name: "Helanca",
    structure: "Malha sintética leve, resistente e tradicional em uniformes esportivos.",
    indicado: ["Conjuntos esportivos", "Uniformes escolares"],
    beneficios: ["Resistente", "Boa mobilidade", "Secagem rápida"],
  },
  {
    name: "Malha Piquet",
    structure: "Textura em relevo que oferece ventilação e aparência mais profissional.",
    indicado: ["Camisas polo", "Uniformes corporativos"],
    beneficios: ["Respirável", "Elegante", "Durável"],
  },
  {
    name: "Viscolycra",
    structure: "Mistura de viscose com elastano, extremamente macia, leve e com excelente caimento.",
    indicado: ["Moda casual", "Peças confortáveis", "Uso prolongado"],
    beneficios: ["Toque suave", "Elasticidade", "Frescor térmico"],
  },
];

const TecidoCard = ({ tecido }: { tecido: Tecido }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-card/50 border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left group"
      >
        <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors">
          {tecido.name}
        </h3>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-muted-foreground transition-transform duration-300",
            isOpen && "rotate-180 text-primary"
          )}
        />
      </button>

      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-6 pb-6 space-y-4">
          <p className="text-muted-foreground font-institutional text-sm">
            {tecido.structure}
          </p>

          <div>
            <p className="text-primary text-xs uppercase tracking-wider mb-2 font-medium">
              Indicado para:
            </p>
            <div className="flex flex-wrap gap-2">
              {tecido.indicado.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-foreground text-xs uppercase tracking-wider mb-2 font-medium">
              Benefícios:
            </p>
            <div className="flex flex-wrap gap-2">
              {tecido.beneficios.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 bg-muted text-foreground text-xs rounded-full border border-border"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InformacoesTecnicas = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <p className="text-primary font-medium uppercase tracking-widest text-sm mb-4">
              Qualidade
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              CATÁLOGO TÉCNICO DE <span className="text-gradient">TECIDOS E MALHAS</span>
            </h1>
            <p className="text-muted-foreground text-lg font-institutional">
              Conheça as diferentes opções de tecidos e malhas que utilizamos para criar uniformes de alta qualidade, cada um com características específicas para diferentes necessidades.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Tecidos Catalog */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              TIPOS DE <span className="text-gradient">TECIDOS</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-institutional">
              Clique em cada tecido para ver mais detalhes sobre suas características, indicações de uso e benefícios.
            </p>
          </ScrollReveal>

          {/* Two Column Grid */}
          <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {tecidos.map((tecido, index) => (
              <ScrollReveal key={tecido.name} animation="fade-up" delay={index * 0.05}>
                <TecidoCard tecido={tecido} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Processos Section */}
      <section className="py-16 lg:py-24 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              PROCESSOS DE <span className="text-gradient">PERSONALIZAÇÃO</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-institutional">
              Diferentes técnicas para dar vida à identidade visual da sua marca.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <ScrollReveal animation="fade-up">
              <div className="p-8 rounded-lg bg-card border border-border hover:border-primary/50 transition-all group h-full text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-display text-primary">S</span>
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">Serigrafia</h3>
                <p className="text-muted-foreground font-institutional text-sm">
                  Ideal para grandes quantidades e cores sólidas. Excelente durabilidade e custo-benefício para tiragens maiores.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.1}>
              <div className="p-8 rounded-lg bg-card border border-border hover:border-primary/50 transition-all group h-full text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-display text-primary">D</span>
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">DTF</h3>
                <p className="text-muted-foreground font-institutional text-sm">
                  Perfeito para artes complexas, degradês e detalhes fotográficos. Alta definição e cores vibrantes.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.2}>
              <div className="p-8 rounded-lg bg-card border border-border hover:border-primary/50 transition-all group h-full text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-display text-primary">B</span>
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">Bordado</h3>
                <p className="text-muted-foreground font-institutional text-sm">
                  Acabamento premium com elegância e durabilidade excepcional. Ideal para logos e detalhes sofisticados.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </Layout>
  );
};

export default InformacoesTecnicas;
