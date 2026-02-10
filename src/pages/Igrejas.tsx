import PortfolioPageTemplate from "@/components/PortfolioPageTemplate";

// Import new images with SEO-optimized alt texts
import blusaUniformeIgreja from "@/assets/igrejas/blusa-uniforme-igreja.jpg";
import modelosUniformesIgrejas from "@/assets/igrejas/modelos-uniformes-igrejas.jpg";
import uniformeDaIgreja from "@/assets/igrejas/uniforme-da-igreja.jpg";
import uniformeIgrejaEvangelica from "@/assets/igrejas/uniforme-igreja-evangelica.jpg";
import uniformeIgrejaJovens from "@/assets/igrejas/uniforme-igreja-jovens.jpg";
import uniformeParaIgrejas from "@/assets/igrejas/uniforme-para-igrejas.jpg";
import uniformePastora from "@/assets/igrejas/uniforme-pastora.jpg";
import uniformeVidaVitoriosa from "@/assets/igrejas/uniforme-vida-vitoriosa.jpg";
import uniformesPersonalizados from "@/assets/igrejas/uniformes-personalizados.jpg";
import uniformesIgrejaMinisterio from "@/assets/igrejas/uniformes-igreja-ministerio.jpg";

// New images
import blusaParaUniformeDeIgreja from "@/assets/igrejas/blusa-para-uniforme-de-igreja.jpg";
import camisaParaBatismo from "@/assets/igrejas/camisa-para-batismo.png";
import camisaParaMinisterioInfantil from "@/assets/igrejas/camisa-para-ministerio-infantil.png";
import inialphaUniformes from "@/assets/igrejas/inialpha-uniformes.jpg";
import roupaParaMinisterioDeMulheres from "@/assets/igrejas/roupa-para-ministerio-de-mulheres.png";
import uniformeFemininoParaIgreja from "@/assets/igrejas/uniforme-feminino-para-igreja.png";
import uniformeJovensIgreja from "@/assets/igrejas/uniforme-jovens-igreja.png";
import uniformeMasculinoParaIgreja from "@/assets/igrejas/uniforme-masculino-para-igreja.png";
import uniformeParaGrupoDeJovensEvangelicosMasculino from "@/assets/igrejas/uniforme-para-grupo-de-jovens-evangelicos-masculino.png";
import uniformeParaGrupoDeJovensEvangelicos from "@/assets/igrejas/uniforme-para-grupo-de-jovens-evangelicos.png";
import uniformeParaGrupoDeLouvorEvangelico from "@/assets/igrejas/uniforme-para-grupo-de-louvor-evangelico.png";
import uniformeParaIgrejaNovo from "@/assets/igrejas/uniforme-para-igreja-novo.png";
import uniformeParaIntercessao from "@/assets/igrejas/uniforme-para-intercessao.png";

const portfolioImages = [
  { 
    image: blusaUniformeIgreja,
    alt: "Blusa para uniforme de igreja personalizada em Petrópolis, Rio de Janeiro, Brasil"
  },
  { 
    image: modelosUniformesIgrejas,
    alt: "Modelos de uniformes personalizados para igrejas evangélicas - Petrópolis, RJ"
  },
  { 
    image: uniformeDaIgreja,
    alt: "Uniforme institucional para igreja com design exclusivo - Petrópolis, Rio de Janeiro"
  },
  { 
    image: uniformeIgrejaEvangelica,
    alt: "Uniforme para igreja evangélica com personalização premium - Petrópolis, Brasil"
  },
  { 
    image: uniformeIgrejaJovens,
    alt: "Uniformes personalizados para ministério jovem de igreja - Petrópolis, RJ, Brasil"
  },
  { 
    image: uniformeParaIgrejas,
    alt: "Camisetas e uniformes para igrejas cristãs em Petrópolis, Rio de Janeiro"
  },
  { 
    image: uniformePastora,
    alt: "Uniforme elegante para pastora e liderança feminina da igreja - Petrópolis, RJ"
  },
  { 
    image: uniformeVidaVitoriosa,
    alt: "Uniforme personalizado Igreja Vida Vitoriosa - fabricado em Petrópolis, Brasil"
  },
  { 
    image: uniformesPersonalizados,
    alt: "Uniformes personalizados para igrejas com qualidade premium - Petrópolis, Rio de Janeiro"
  },
  { 
    image: uniformesIgrejaMinisterio,
    alt: "Uniformes para ministérios e departamentos de igreja - Petrópolis, RJ, Brasil"
  },
  // New images
  { 
    image: blusaParaUniformeDeIgreja,
    alt: "Blusa para uniforme de igreja evangélica personalizada - Petrópolis, RJ"
  },
  { 
    image: camisaParaBatismo,
    alt: "Camisa para batismo personalizada para igrejas cristãs - Petrópolis, Rio de Janeiro"
  },
  { 
    image: camisaParaMinisterioInfantil,
    alt: "Camisa para ministério infantil de igreja - uniformes kids - Petrópolis, RJ"
  },
  { 
    image: inialphaUniformes,
    alt: "Uniformes Inialpha personalizados para igrejas - Petrópolis, Brasil"
  },
  { 
    image: roupaParaMinisterioDeMulheres,
    alt: "Roupa para ministério de mulheres - uniformes femininos para igreja - Petrópolis, RJ"
  },
  { 
    image: uniformeFemininoParaIgreja,
    alt: "Uniforme feminino para igreja evangélica personalizado - Petrópolis, Rio de Janeiro"
  },
  { 
    image: uniformeJovensIgreja,
    alt: "Uniforme para jovens de igreja cristã - ministério jovem - Petrópolis, RJ"
  },
  { 
    image: uniformeMasculinoParaIgreja,
    alt: "Uniforme masculino para igreja evangélica - camisas para homens - Petrópolis, Brasil"
  },
  { 
    image: uniformeParaGrupoDeJovensEvangelicosMasculino,
    alt: "Uniforme para grupo de jovens evangélicos masculino - Petrópolis, Rio de Janeiro"
  },
  { 
    image: uniformeParaGrupoDeJovensEvangelicos,
    alt: "Uniforme para grupo de jovens evangélicos - ministério jovem - Petrópolis, RJ"
  },
  { 
    image: uniformeParaGrupoDeLouvorEvangelico,
    alt: "Uniforme para grupo de louvor evangélico - ministério de música - Petrópolis, Brasil"
  },
  { 
    image: uniformeParaIgrejaNovo,
    alt: "Uniforme para igreja personalizado com qualidade premium - Petrópolis, Rio de Janeiro"
  },
  { 
    image: uniformeParaIntercessao,
    alt: "Uniforme para intercessão - ministério de oração - Petrópolis, RJ, Brasil"
  },
];

const IgrejasPage = () => {
  return (
    <PortfolioPageTemplate
      segmentName="Igrejas"
      segmentTitle="IGREJAS"
      segmentSubtitle="Portfólio Igrejas"
      introText="Projetos desenvolvidos para igrejas em diferentes regiões do Brasil, respeitando identidade, missão e linguagem visual de cada ministério."
      seoDescription="Uniformes personalizados para igrejas, ministérios e instituições cristãs. Camisas institucionais, comemorativas, coletes de organização, casacos de moletom, corta-vento, camisas polo e sociais. Atendimento nacional com qualidade premium."
      portfolioImages={portfolioImages}
      heroImage={uniformeIgrejaEvangelica}
      trustSectionTitle="Igrejas que atendemos"
    />
  );
};

export default IgrejasPage;
