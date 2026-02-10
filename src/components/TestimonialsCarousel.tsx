import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import ScrollReveal from "@/components/ScrollReveal";

// Import testimonial images
import cliente01 from "@/assets/testimonials/cliente-01.jpg";
import cliente02 from "@/assets/testimonials/cliente-02.jpg";
import cliente03 from "@/assets/testimonials/cliente-03.jpg";
import cliente04 from "@/assets/testimonials/cliente-04.jpg";
import cliente05 from "@/assets/testimonials/cliente-05.jpg";
import cliente06 from "@/assets/testimonials/cliente-06.jpg";
import cliente07 from "@/assets/testimonials/cliente-07.jpg";
import cliente08 from "@/assets/testimonials/cliente-08.jpg";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
  keywords: string[];
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Carlos Mendes",
    role: "Gerente de RH",
    company: "Indústria Metalúrgica",
    image: cliente01,
    text: "A Rústico entregou uniformes de altíssima qualidade para nossa equipe industrial. O acabamento é impecável e a durabilidade surpreendeu a todos. Já estamos no terceiro pedido!",
    keywords: ["Qualidade", "Durabilidade", "Acabamento"],
  },
  {
    id: 2,
    name: "Dona Marlene",
    role: "Líder de Intercessão",
    company: "Igreja Metodista",
    image: cliente02,
    text: "Fizemos uniformes para o ministério de intercessão e ficou lindo demais! A equipe toda se sentiu valorizada. O atendimento foi muito carinhoso e atencioso do início ao fim.",
    keywords: ["Carinho", "Atenção", "Valorização"],
  },
  {
    id: 3,
    name: "Seu Jorge",
    role: "Diretor",
    company: "Colégio Estadual",
    image: cliente03,
    text: "Fornecemos uniformes para mais de 800 alunos e a Rústico deu conta do recado. Entrega no prazo, preço justo e qualidade que aguenta o dia a dia escolar. Recomendo de olhos fechados!",
    keywords: ["Grande Volume", "Prazo", "Resistência"],
  },
  {
    id: 4,
    name: "Thiago Santos",
    role: "Personal Trainer",
    company: "CT Performance",
    image: cliente04,
    text: "Os uniformes fitness que a Rústico fez pro meu CT são sensacionais. Tecido leve, não esquenta e aguenta treino pesado. Meus alunos vivem perguntando onde comprar igual!",
    keywords: ["Conforto", "Resistência", "Estilo"],
  },
  {
    id: 5,
    name: "Camila Rodrigues",
    role: "Instrutora",
    company: "Studio Pilates",
    image: cliente05,
    text: "Procurava uniformes que fossem bonitos e confortáveis ao mesmo tempo. A Rústico acertou em cheio! O tecido é macio, tem boa elasticidade e a modelagem valoriza muito.",
    keywords: ["Modelagem", "Conforto", "Beleza"],
  },
  {
    id: 6,
    name: "Cláudia Ferreira",
    role: "Coordenadora",
    company: "Ministério Infantil",
    image: cliente06,
    text: "Encomendamos camisetas para o ministério kids e superou todas as expectativas. As crianças adoraram as cores vibrantes e o tecido é super confortável pra elas brincarem!",
    keywords: ["Cores", "Conforto", "Alegria"],
  },
  {
    id: 7,
    name: "Seu Antônio",
    role: "Supervisor",
    company: "Construtora União",
    image: cliente07,
    text: "Trabalho no sol o dia todo e o uniforme da Rústico é muito bom. Não desbota, não rasga fácil e é fresquinho. A equipe toda elogiou. Isso que é qualidade de verdade!",
    keywords: ["Durabilidade", "Frescor", "Qualidade"],
  },
  {
    id: 8,
    name: "Wesley Lima",
    role: "Líder de Jovens",
    company: "Igreja Batista Atitude",
    image: cliente08,
    text: "Fizemos uniformes pro acampamento de jovens e foi um sucesso total! O pessoal da Rústico ajudou com a arte e entregou tudo certinho no prazo. Já estamos planejando o próximo!",
    keywords: ["Criatividade", "Prazo", "Parceria"],
  },
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const handleInteraction = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <p className="text-primary font-medium uppercase tracking-widest text-sm mb-4">
            Depoimentos
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            O QUE NOSSOS <span className="text-gradient">CLIENTES</span> DIZEM
          </h2>
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-card/50 border border-border rounded-lg p-8 md:p-10 text-center relative">
                    {/* Quote Icon */}
                    <Quote className="w-10 h-10 text-primary/20 absolute top-6 left-6" />
                    
                    {/* Photo */}
                    <div className="w-24 h-24 md:w-28 md:h-28 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg">
                      <img
                        src={testimonial.image}
                        alt={`Foto de ${testimonial.name}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                        width={112}
                        height={112}
                      />
                    </div>

                    {/* Keywords */}
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      {testimonial.keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-foreground/90 font-institutional text-base md:text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
                      "{testimonial.text}"
                    </p>

                    {/* Author */}
                    <div>
                      <h4 className="font-display text-lg text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {testimonial.role} • {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => {
              handleInteraction();
              prevSlide();
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-lg"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => {
              handleInteraction();
              nextSlide();
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-lg"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  handleInteraction();
                  setCurrentIndex(index);
                }}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300",
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
