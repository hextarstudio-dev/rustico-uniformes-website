import PortfolioPageTemplate from "@/components/PortfolioPageTemplate";

// Import images
import industria01 from "@/assets/industria/industria-01.jpg";
import industria02 from "@/assets/industria/industria-02.png";
import industria03 from "@/assets/industria/industria-03.png";
import industria04 from "@/assets/industria/industria-04.png";
import industria05 from "@/assets/industria/industria-05.png";
import industria06 from "@/assets/industria/industria-06.jpg";

const portfolioImages = [
  { image: industria01 },
  { image: industria02 },
  { image: industria03 },
  { image: industria04 },
  { image: industria05 },
  { image: industria06 },
];

const IndustriaPage = () => {
  return (
    <PortfolioPageTemplate
      segmentName="Indústria"
      segmentTitle="INDÚSTRIA"
      segmentSubtitle="Portfólio Indústria"
      introText="Projetos desenvolvidos para indústrias e fábricas, com foco em segurança, durabilidade e conformidade com normas técnicas."
      seoDescription="Uniformes personalizados para indústrias. Botas de borracha, calça de brim, bermuda de brim, blusa de brim, camisa com refletivo e camisa com proteção UV. Segurança e durabilidade com atendimento nacional."
      portfolioImages={portfolioImages}
      heroImage={industria01}
      trustSectionTitle="Indústrias que atendemos"
      trustPartners={[
        { name: "Solar Engenharia Serra" },
        { name: "Solução (Locação e Transporte)" },
        { name: "Zeus" },
        { name: "Dentsplay" },
        { name: "Telas São Jorge" },
        { name: "Bohemia" },
        { name: "Lansane" },
        { name: "Alfa Laval" },
      ]}
    />
  );
};

export default IndustriaPage;
