import PortfolioPageTemplate from "@/components/PortfolioPageTemplate";

// Import images
import escolas01 from "@/assets/escolas/escolas-01.png";
import escolas02 from "@/assets/escolas/escolas-02.png";
import escolas03 from "@/assets/escolas/escolas-03.png";
import escolas04 from "@/assets/escolas/escolas-04.png";
import escolas05 from "@/assets/escolas/escolas-05.png";
import escolas06 from "@/assets/escolas/escolas-06.png";

const portfolioImages = [
  { image: escolas01 },
  { image: escolas02 },
  { image: escolas03 },
  { image: escolas04 },
  { image: escolas05 },
  { image: escolas06 },
];

const EscolasPage = () => {
  return (
    <PortfolioPageTemplate
      segmentName="Escolas"
      segmentTitle="ESCOLAS"
      segmentSubtitle="Portfólio Escolas"
      introText="Projetos desenvolvidos para escolas e instituições de ensino, com foco em conforto, durabilidade e identidade institucional."
      seoDescription="Uniformes personalizados para escolas e instituições de ensino. Camisas, calça de helanca, casaco de helanca, calça de moletom, blusa de moletom e camisas comemorativas. Qualidade premium e atendimento nacional."
      portfolioImages={portfolioImages}
      heroImage={escolas01}
      trustSectionTitle="Escolas que atendemos"
      trustPartners={[
        { name: "Colégio Bom Jesus" },
        { name: "Colégio Dinâmico" },
      ]}
    />
  );
};

export default EscolasPage;
