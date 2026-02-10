import PortfolioPageTemplate from "@/components/PortfolioPageTemplate";

// Import images
import fitness01 from "@/assets/fitness/fitness-01.jpg";
import fitness02 from "@/assets/fitness/fitness-02.jpg";
import fitness03 from "@/assets/fitness/fitness-03.jpg";
import fitness04 from "@/assets/fitness/fitness-04.jpg";
import fitness05 from "@/assets/fitness/fitness-05.png";
import fitness06 from "@/assets/fitness/fitness-06.png";
import fitness07 from "@/assets/fitness/fitness-07.jpg";
import fitness08 from "@/assets/fitness/fitness-08.jpg";
import fitness09 from "@/assets/fitness/fitness-09.png";
import fitness10 from "@/assets/fitness/fitness-10.png";
import fitness11 from "@/assets/fitness/fitness-11.png";
import fitness12 from "@/assets/fitness/fitness-12.png";
import fitness13 from "@/assets/fitness/fitness-13.png";
import fitness14 from "@/assets/fitness/fitness-14.png";
import fitness15 from "@/assets/fitness/fitness-15.png";
import fitness16 from "@/assets/fitness/fitness-16.png";
import fitness17 from "@/assets/fitness/fitness-17.png";
import fitness18 from "@/assets/fitness/fitness-18.png";
import fitness19 from "@/assets/fitness/fitness-19.png";
import fitness20 from "@/assets/fitness/fitness-20.png";
import fitness21 from "@/assets/fitness/fitness-21.png";
import fitness22 from "@/assets/fitness/fitness-22.png";
import fitness23 from "@/assets/fitness/fitness-23.png";
import casacoMoletom from "@/assets/fitness/casaco-de-moletom.png";
import fitnessUniforme from "@/assets/fitness/fitness-uniforme.png";
import fittingUniformes from "@/assets/fitness/fitting-uniformes.png";
import regataMasculina from "@/assets/fitness/regata-masculina.png";
import roupaDeAcademia from "@/assets/fitness/roupa-de-academia.png";
import roupaFitness from "@/assets/fitness/roupa-fitness.png";
import uniformeCrossfit from "@/assets/fitness/uniforme-crossfit.png";
import uniformeFitness from "@/assets/fitness/uniforme-fitness.png";
import uniformesFitnessPersonalizados from "@/assets/fitness/uniformes-fitness-personalizados.png";

const portfolioImages = [
  { image: fitness01 },
  { image: fitness02 },
  { image: fitness03 },
  { image: fitness04 },
  { image: fitness05 },
  { image: fitness06 },
  { image: fitness07 },
  { image: fitness08 },
  { image: fitness09 },
  { image: fitness10 },
  { image: fitness11 },
  { image: fitness12 },
  { image: fitness13 },
  { image: fitness14 },
  { image: fitness15 },
  { image: fitness16 },
  { image: fitness17 },
  { image: fitness18 },
  { image: fitness19 },
  { image: fitness20 },
  { image: fitness21 },
  { image: fitness22 },
  { image: fitness23 },
  { image: casacoMoletom },
  { image: fitnessUniforme },
  { image: fittingUniformes },
  { image: regataMasculina },
  { image: roupaDeAcademia },
  { image: roupaFitness },
  { image: uniformeCrossfit },
  { image: uniformeFitness },
  { image: uniformesFitnessPersonalizados },
];

const FitnessPage = () => {
  return (
    <PortfolioPageTemplate
      segmentName="Fitness"
      segmentTitle="FITNESS"
      segmentSubtitle="Portfólio Fitness"
      introText="Projetos desenvolvidos para academias, estúdios e atletas em todo o Brasil, com foco em conforto, performance e identidade visual marcante."
      seoDescription="Uniformes personalizados para academias, estúdios de treino e atletas. Top, short, bermuda, leggings, macacão, camisa, babylook, moletom, casaco, camisetas e camisas com proteção UV. Qualidade premium e atendimento nacional."
      portfolioImages={portfolioImages}
      heroImage={fitness01}
      trustSectionTitle="Empresas que atendemos"
      trustPartners={[
        { name: "Korper" },
        { name: "Studio C2 Training" },
        { name: "Team New Miller" },
        { name: "Vibe" },
        { name: "Locatelli" },
      ]}
    />
  );
};

export default FitnessPage;
