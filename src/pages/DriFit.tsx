import PortfolioPageTemplate from "@/components/PortfolioPageTemplate";

import driFit01 from "@/assets/dri-fit/dri-fit-01.jpg";
import driFit02 from "@/assets/dri-fit/dri-fit-02.png";
import driFit03 from "@/assets/dri-fit/dri-fit-03.png";
import driFit04 from "@/assets/dri-fit/dri-fit-04.png";
import driFit05 from "@/assets/dri-fit/dri-fit-05.png";
import driFit06 from "@/assets/dri-fit/dri-fit-06.png";

const portfolioImages = [
  { image: driFit01 },
  { image: driFit02 },
  { image: driFit03 },
  { image: driFit04 },
  { image: driFit05 },
  { image: driFit06 },
];

const trustPartners = [
  { name: "Heron Head Coach" },
  { name: "Mulheres em Movimento" },
  { name: "Wolffit" },
  { name: "Corrida do Trono de Fátima" },
];

const DriFitPage = () => {
  return (
    <PortfolioPageTemplate
      segmentName="Camisas Dry Fit"
      segmentTitle="CAMISAS DRY FIT"
      segmentSubtitle="Portfólio Dry Fit"
      introText="Camisas com tecnologia Dry Fit para máximo conforto e performance. Ideal para atividades esportivas, corridas e treinos intensos."
      seoDescription="Camisas Dry Fit personalizadas com tecnologia de secagem rápida. Ideal para esportes, academias e atividades ao ar livre. Qualidade premium e atendimento nacional."
      portfolioImages={portfolioImages}
      heroImage={driFit01}
      trustSectionTitle="Organizações que atendemos"
      trustPartners={trustPartners}
    />
  );
};

export default DriFitPage;
