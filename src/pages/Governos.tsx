import PortfolioPageTemplate from "@/components/PortfolioPageTemplate";

// Import images
import governos01 from "@/assets/governos/governos-01.png";
import governos02 from "@/assets/governos/governos-02.png";
import governos03 from "@/assets/governos/governos-03.png";
import governos04 from "@/assets/governos/governos-04.png";
import governos05 from "@/assets/governos/governos-05.png";

const portfolioImages = [
  { image: governos01 },
  { image: governos02 },
  { image: governos03 },
  { image: governos04 },
  { image: governos05 },
];

const GovernosPage = () => {
  return (
    <PortfolioPageTemplate
      segmentName="Governos/Prefeituras"
      segmentTitle="GOVERNOS/PREFEITURAS"
      segmentSubtitle="Portfólio Governos/Prefeituras"
      introText="Projetos desenvolvidos para órgãos governamentais, secretarias e entidades públicas, com foco em padronização e identidade institucional."
      seoDescription="Uniformes personalizados para governos e órgãos públicos. Camisas institucionais, coletes de fiscalização e uniformes para servidores. Qualidade premium, conformidade com normas e atendimento nacional."
      portfolioImages={portfolioImages}
      heroImage={governos01}
      trustSectionTitle="Governos/Prefeituras que atendemos"
      trustPartners={[
        { name: "Governo do Estado do Rio de Janeiro" },
      ]}
    />
  );
};

export default GovernosPage;
