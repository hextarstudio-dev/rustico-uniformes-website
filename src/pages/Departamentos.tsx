import PortfolioPageTemplate from "@/components/PortfolioPageTemplate";

import departamentos01 from "@/assets/departamentos/departamentos-01.png";
import departamentos02 from "@/assets/departamentos/departamentos-02.png";
import departamentos03 from "@/assets/departamentos/departamentos-03.png";
import departamentos04 from "@/assets/departamentos/departamentos-04.png";
import departamentos05 from "@/assets/departamentos/departamentos-05.png";
import departamentos06 from "@/assets/departamentos/departamentos-06.png";
import departamentos07 from "@/assets/departamentos/departamentos-07.png";

const portfolioImages = [
  { image: departamentos01 },
  { image: departamentos02 },
  { image: departamentos03 },
  { image: departamentos04 },
  { image: departamentos05 },
  { image: departamentos06 },
  { image: departamentos07 },
];

const trustPartners = [
  { name: "Polícia Civil" },
];

const DepartamentosPage = () => {
  return (
    <PortfolioPageTemplate
      segmentName="Departamentos"
      segmentTitle="DEPARTAMENTOS"
      segmentSubtitle="Portfólio Departamentos"
      introText="Projetos desenvolvidos para departamentos e setores específicos, com foco em organização e identidade de equipe."
      seoDescription="Uniformes personalizados para departamentos e setores. Camisas para equipes, coletes de identificação e uniformes setoriais. Qualidade premium e atendimento nacional."
      portfolioImages={portfolioImages}
      heroImage={departamentos01}
      trustSectionTitle="Departamentos que atendemos"
      trustPartners={trustPartners}
    />
  );
};

export default DepartamentosPage;
